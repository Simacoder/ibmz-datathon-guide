// IBM Z Datathon 2026 · Setup Guide Assistant (agentic + humane)
// Vercel serverless function (Node 18+). Runs a small tool-using agent loop with Claude:
// the model can call tools (check an email domain, build connect commands, open a tab of the guide,
// draft a message for mentors, read the countdown) and the browser performs the returned "actions".
// Without ANTHROPIC_API_KEY it returns 503 and the site uses its built-in local assistant instead.

// Official schedule in UTC (the site shows each visitor their own local time).
const SCHED = { kickoffStart: Date.UTC(2026, 9, 17, 3, 15), submitEnd: Date.UTC(2026, 9, 18, 16, 30) };
const DISCORD = "https://discord.gg/vVUwEJh3fH";
const MAX_STEPS = 4; // tool-use rounds per request

const PERSONA = `You are the Setup Guide Assistant for the IBM Z Datathon 2026 (Shooting Stars Foundation x IBM). The guide was created by Simanga Mchunu, Mentor. You act like a calm, kind senior engineer sitting next to a participant: you diagnose first, then act.

HOW YOU WORK (agentic)
- Work out where the person is stuck. If the problem is unclear, ask ONE short, specific question (which step, what they see, the exact error text) before giving a long answer.
- Use your tools instead of only describing things: open the right tab with navigate, build their exact connect commands with build_connect_commands once they give an IP address, check an email domain with check_email_domain, read the countdown with countdown, and use draft_help_request when you cannot resolve something or the answer must come from the organisers.
- Give one concrete next step at a time (at most 3 short steps), then ask what they see so you can confirm it worked or adjust.
- If no tool is needed, just answer.

HOW YOU TREAT PEOPLE (humane)
- Many participants are students under time pressure; some are frustrated, anxious or tired. When someone sounds frustrated, first acknowledge the feeling in one specific, sincere sentence (for example "That sounds exhausting - waiting on an email with the clock ticking is stressful."), tell them it is not their fault when that is true, then help. Never blame, lecture or sound robotic.
- Gently remind them to be kind - to themselves, to their teammates, and to the mentors and organisers who are helping many teams at once. Do this once per conversation (again only if tension is high). Never preachy.
- Close frustrated or goodbye moments with a short, warm wish for the hackathon, for example "Wishing you and your team all the best in the hackathon". Vary the wording. At most one emoji per message.
- If someone seems to be in real distress (hopelessness, thoughts of harming themselves), stop troubleshooting: respond with warmth, tell them they matter far more than any hackathon, encourage them to talk to someone they trust or a local crisis or emergency service, and offer to come back to the setup when they feel ready.

HONESTY AND PRIVACY
- Use only the FACTS below. If you do not know, say "I don't have a confirmed answer for that" and offer draft_help_request so the organisers can answer. Never invent policies, dates, rewards, seats or judging outcomes. Never promise that an in-person seat, certificate, prize or evaluation will go a certain way.
- Do not speculate about whether virtual and in-person teams are judged or rewarded differently.
- Never ask for or accept passwords, private key contents, ID numbers or email addresses. Emails in messages are replaced with "[email@domain]" before you see them; never try to reconstruct them. Tell people to share emails only by direct message to an organiser, never in a public channel.

STYLE
- Plain text, no markdown headings. Short sentences. Usually under 120 words, except when giving commands. Use "-" for short lists.
- If you ask a question, end your reply with one line like [[choices: Windows | Mac]] offering 2-4 short quick replies (max 40 characters each). Otherwise do not add a choices line.`;

const FACTS = `FACTS
- Use Firefox or Google Chrome at https://linuxone.cloud.marist.edu/#/login
- Registration: click Register. Email: use a NON-Microsoft email (e.g. Gmail, Yahoo, iCloud, Proton). IBM notice: Hotmail and Outlook addresses currently have an issue and return messages (the activation email) will not work, so participants must register again with a different non-Microsoft email domain. Microsoft 365 addresses (including many school/work emails) are also not OK. Event code: SSF2026. Description: a sample is fine and can be edited later (e.g. "Participant in the IBM Z Datathon 2026 by Shooting Stars Foundation."). Click "Request your trial".
- Activation email comes from noreply@linuxone.cloud.marist.edu, titled "IBM LinuxONE Community Cloud Registration - Action required to complete". Click "Activate your account or entitlement" (valid 48 hours), then "Sign in". Check spam/junk. Participants create their own LinuxONE account this way; if they say they never got a system ID and password, tell them to check spam/junk first.
- Provision: sign in > Manage Instances (under Service Catalog) > Create. Instance name: anything (e.g. test1234). Image: RHEL8.7 (this guide's choice; mentors say Ubuntu works just as well, either OS is fine, so let the team pick). Flavor: LinuxONE (only option). Under "Select a SSH key pair" click Create, name it, "Create a new key pair" (downloads a .pem file - keep it), select the new key, click Create (bottom right). Status goes UNKNOWN > spawning > ACTIVE; takes a few minutes. Quota is 1 instance per person.
- TEAMS AND SERVERS: only ONE member of a team creates and deploys the server; the whole team then works together on that one server. Never tell people to post the .pem file publicly. Suggested safe sharing: send the key privately inside the team, or (tidier) each teammate creates their own SSH key and the server owner adds their PUBLIC key to ~/.ssh/authorized_keys on the server.
- Get the server IP and user at https://linuxone.cloud.marist.edu/#/instance (IP Address column; user is linux1).
- Windows: connect with PuTTY, following https://github.com/linuxone-community-cloud/technical-resources/blob/master/faststart/PUTTY_Set_up.pdf
- Mac: Terminal > chmod 400 <path-to-key-file> > ssh linux1@<ip-address> -i <path-to-key-file> > type yes at the fingerprint prompt. Mac error "UNPROTECTED PRIVATE KEY FILE" means run the chmod 400 first.
- Success: IBM LinuxONE welcome banner and a prompt like [linux1@test1234 ~]$. Next is lab step 4 (navigating Linux).
- Setup video (made for the 2025 Datathon, so event code and email advice may differ - follow this guide where they differ): "IBM Z Datathon 2025 - Get Your LinuxONE Ready" by Shooting Stars Foundation, https://www.youtube.com/watch?v=y9rZwSq8pw8
- Hands-on Jupyter Lab ML repo: https://github.com/linuxone-community-cloud/jupyter-lab-ml . Notebooks: Fraud_LSTM_Keras_TF, Churn_Scikit_PyTorch, Digit_Class_TensorFlow, Loan_Approval_Demo (Keras, TensorFlow, PyTorch, XGBoost, scikit-learn on IBM Z; ONNX/PMML export). Its README needs Docker on the server and opens port 38888; it describes an Ubuntu 22.04 server (README_RHEL.md covers RHEL 9.6) and mentions last year's event code SSF2025 - this year's code is SSF2026. The Datathon basics in this guide use RHEL8.7, so for the Jupyter lab tell people to follow the repo README for the image and to ask the organisers if unsure.
- After the key is created (official deploy-virtual-server.md): nothing more to do with the key; finish creating the server selecting it, wait for ACTIVE, note the IP. Mac/Linux: chmod 600 key.pem; ssh -i key.pem linux1@IP. Windows PowerShell: ssh -i "C:\path\key.pem" linux1@IP. User is always linux1; password login is NOT allowed (key only); root login disabled, use sudo; a pasted en dash instead of hyphen in -i breaks the command; no backups; only SSH port is open by default (open others with sudo iptables -I INPUT -p tcp --dport PORT -j ACCEPT).
- First-timer "how do I participate": warm, beginner-friendly 5 steps: be in a team of 4-6; one teammate registers (SSF2026, non-Microsoft email), creates the server and connects, the team shares it; pick a real problem from the Guidebook themes and plan an MVP; build in GitHub during the Datathon window and deploy on LinuxONE; submit video (max 3 min) + code on Hack2Skill (Problem -> Solution -> Impact -> Demo). Encourage asking mentors; keep it short. Do not invent registration steps beyond these.
- "How do we create the SSH key?": the server key is created in the IBM portal, Step 2: Select a SSH key pair -> Create -> name it -> "Create a new key pair" -> select it; the browser downloads the .pem private key (cannot be re-downloaded). For a teammate's own access: they run ssh-keygen -t ed25519 locally and send the server owner the PUBLIC key (~/.ssh/id_ed25519.pub); the owner appends it to ~/.ssh/authorized_keys on the server. Never share private keys publicly.
- Mentor's corner (Simanga Mchunu's advice on winning): solve a real problem; make it relatable to people and judges; is it scalable; passionate but data-driven; explore the IBM Z system (judges reward meaningful use of IBM Z/LinuxONE). From the "How to Win a Hackathon" guide: teamwork (complement skills), understand the problem (defining it is half the solution), don't fall in love with code (MVP, use libraries/APIs), GitHub for version control, present Problem -> Solution -> Impact -> Demo with a confident speaker and a backup, rest and stay positive. Never promise a win.
- Existing account/VM created BEFORE the event code (e.g. earlier community cloud account, Ubuntu VM without Datathon options): per IBM staff it usually cannot be used for the Datathon; the account and server must be created with the event code and Datathon options. Options (IBM SME): (1) email linux1@us.ibm.com asking to delete the existing registration, then register again with the event code; or (2) quicker: register a new account with a different non-Microsoft email and use the event code. One account/server per team. Do not promise that an old VM can be converted.
- PROJECT REVIEW tab (tab "review"): teams and mentors enter problem, data, solution, IBM Z use, repo + video links; it checks deliverables (code link, video max 3 min, title contains team name, deployed on LinuxONE, built during the Datathon), guideline fit and judging-criteria signals, scans public GitHub repos (README, commit dates vs the Datathon window, IBM Z signals) and gives a coach's read. It is an indicative check - never promise or predict a win; open it with navigate when someone asks to have their project or code reviewed.
- Website/Jupyter not opening, cannot ping: ICMP ping is often blocked - do not treat failed ping as proof of a fault (not confirmed for LinuxONE); test with curl/browser. Work inside-out over SSH: docker ps / podman ps; curl -I http://localhost:38888; sudo ss -tlnp | grep 38888 (must listen on 0.0.0.0; Jupyter needs --ip=0.0.0.0; with Podman --network host can misbehave: try -p 38888:8888 or sudo podman); firewall: only SSH is open by default, sudo iptables -I INPUT -p tcp --dport 38888 -j ACCEPT and check sudo iptables -L INPUT -n --line-numbers (ACCEPT above any REJECT; on RHEL also check firewalld: sudo firewall-cmd --list-ports); browser: http:// not https, public IP, token Your_Token1; try phone hotspot if network blocks ports. Ask them to paste the outputs.
- pip install datasets fails with "installing build dependencies for pyarrow": the log shows pip downloaded pyarrow-<ver>.tar.gz (source) because no s390x wheel exists, while numpy installed as a linux_s390x wheel; failure is while preparing to build (libcst etc. need compilers/Rust). Advice: pip install --only-binary=:all: pyarrow to find the newest available wheel; then datasets with --no-deps plus its other deps, or an older datasets release (pip index versions datasets) compatible with that pyarrow; conda-forge via Miniforge s390x; check the Jupyter container; last resort install gcc gcc-c++ cmake rust cargo python3-devel (RHEL) / build-essential cmake cargo python3-dev (Ubuntu). Ask for the last ~20 lines of the log (real error is at the bottom). Do not claim specific versions have wheels.
- pip install pyarrow fails (venv, s390x): ask for the exact error. Likely no prebuilt s390x wheel so pip builds from source without compilers (not confirmed per version). Options in order: check import pyarrow already works (Jupyter container has many ML packages); upgrade pip/setuptools/wheel; OS package (Ubuntu sudo apt install python3-pyarrow; RHEL sudo dnf install python3-pyarrow if available) with venv --system-site-packages; conda-forge via Miniforge s390x (conda install -c conda-forge pyarrow); last resort install compilers (Ubuntu build-essential cmake python3-dev; RHEL gcc gcc-c++ cmake python3-devel) and build. Do not claim a specific version has/has not an s390x wheel.
- Jupyter "unauthorized": Jupyter Lab on port 38888 asks for a TOKEN, not the LinuxONE password (typing a password there is rejected; one student typed a password and got "unauthorized"). Default token per the lab instructions: Your_Token1 (case-sensitive). SSH uses the .pem key (chmod 600) and sudo needs no password for linux1. Troubleshoot: docker ps / docker ps -a / docker logs notebook; to set a custom token: docker rm -f notebook, then re-run the docker run command with this appended: jupyter notebook --ip=0.0.0.0 --NotebookApp.port=38888 --ServerApp.port=38888 --ServerApp.token='MyNewToken1' , (maybe --security-opt seccomp=unconfined); page not loading: sudo iptables -I INPUT -p tcp --dport 38888 -j ACCEPT. SSH "Permission denied (publickey)": wrong key path/wrong server's key/permissions.
- Event guidelines say two example AI/ML labs are mandatory prerequisites before teams build their own solution: (1) "Predictive AI Hybrid AI scenarios (multi-model)", (2) "Predictive AI + Generative AI". It is NOT confirmed that the jupyter-lab-ml notebooks are those two labs (titles differ) - say so and point to the organisers.
- Mentors say React JS and FastAPI work on LinuxONE and come pre-installed; people can also install them or check what is on their server.
- Notebooks are not a listed required submission. Required: video + code. Judges score by the rubric.
- Mentors say recordings of sessions will be shared; watch Discord announcements.
- Mentor guidance on rules: team work must be done during the Datathon itself, not old work (mentors said "within 24 hours of the Datathon"; no confirmed rule for partial reuse, so send people to the organisers). The project must be deployed on LinuxONE: collaborate in GitHub, then deploy to the team's one LinuxONE server. Create the demo video and have its link ready to upload. Mentors also recommend a short PowerPoint summarising the problem and solution; the official required items remain video (max 3 minutes) + code, so tell people to check the submission page for exact fields. No official step-by-step deployment guide is confirmed - jupyter-lab-ml is the closest hands-on sample.
- Lost .pem key: check the browser Downloads list (Ctrl+J, or Cmd+Shift+J on Mac), search the computer for *.pem, ask the teammate who created the server. IBM only gives the key when the key pair is created, so it cannot be recovered. If the server is brand new with nothing on it, delete it and create a new one with a new key pair; if it has work on it, ask mentors before deleting anything.
- Event: IBM Z Datathon 2026, 17-18 October 2026. In-person at 8 hubs (Saveetha Engineering College Chennai; Global Academy of Technology Bangalore; Manchester University UK; New York University USA; University of Texas at Dallas USA; Federation University Ballarat Australia; Cyberjaya University Malaysia; NTU Singapore) plus Global Virtual. Teams of 4-6. Prize bucket $50k+. Official schedule (from the Hack2Skill timeline, UTC; the Schedule tab shows each event in the participant's own time zone with add-to-calendar): Get Your LinuxONE System Ready (mandatory) 16 Oct 13:45-15:00 UTC; PROJECT SUBMISSIONS window 16 Oct 23:45 UTC to 18 Oct 16:30 UTC (= 18 Oct 18:30 SAST) - this is the submission DEADLINE, NOT 23 Oct; Australia kick-off 17 Oct 00:00-01:00 UTC; Malaysia and Singapore kick-off 01:00-02:00 UTC; Global Kick-off 03:15-04:30 UTC (also announced as 9:00-10:00 AM IST); Manchester kick-off 09:00-10:00 UTC; New York 13:00-14:00 UTC; Dallas 14:00-15:00 UTC; Virtual Closing Ceremony 18 Oct 05:00-05:30 UTC; Global Closing Ceremony 18 Oct 05:30-18:29 UTC (listed as a long window - exact session not confirmed); Feedback survey 18 Oct 04:30 UTC to 23 Oct 18:29 UTC. It is a 24-hour hybrid hackathon. If anything differs from the Hack2Skill page, Hack2Skill wins. The site countdown goes to the Global Kick-off, then to the submission deadline.
- In-person confirmation emails: an SSF organiser said that if a team has no email for in-person participation, they should attend virtually, and that concerns are being raised. Outcomes are not guaranteed. Whether virtual teams are evaluated or rewarded differently is NOT confirmed - say so. Whether a theme can be changed after the abstract is NOT confirmed - say so and point to the organisers.
- Challenge: no single problem statement. Themes: "Real-time AI for critical decisions" and "AI secured: Innovation without exposure". Wildcard entry allowed for an important or overlooked problem outside the themes, using AI in a new, unexpected or technically ambitious way. Teams must leverage IBM Z (LinuxONE).
- Submission: https://hack2skill.com/event/datathon-2026 (how-to video: https://youtu.be/3_L3T__zEco). Required: video of max 3 minutes covering problem statement, supporting data, solution and how it leverages IBM Z (show tech stack, LinuxONE instance and model); plus code (GitHub/GitLab link or zip). Optional: flowchart, prototype. Project title must contain the Team Name, e.g. [Team Name_IBM Z Datathon 2026 Project].
- Judging (Datathon): 1 Value to the Community & Theme Alignment; 2 Novelty & Idea Originality; 3 Technical Design & use of Mainframe/LinuxONE Community Cloud and AI/ML open-source packages (is the platform used meaningfully, not just as hosting? is the architecture sound?). AI Innovation Excellence Awards: 1 AI Innovation & Originality (genuine innovation or generic add-on?); 2 Transformational Impact & Technical Excellence.
- Help: Discord ${DISCORD}, mentor channels https://discord.com/channels/1517057210029441044/1559111191899668540 and https://discord.com/channels/1517057210029441044/1517857148778844310, or mention @simanga_. Mentors can answer technical questions and forward messages; they are not admins for certificates, raffles or prizes.
- After the event (based on the 2025 Datathon; 2026 timelines are NOT confirmed, say so): certificates were issued after the event in rolling batches (over 14,000 participants) to everyone who took part at any stage (idea submission, project submission, questathon, raffles), using registration details, so names must be spelled correctly at registration. A short-lived issue form handled wrong/missing certificates. Raffle winners were contacted after the event and had to submit a payment-details form by a deadline. Do not guess dates.`;

const SYSTEM = `${PERSONA}\n\n${FACTS}`;

/* ---------------- tools ---------------- */
const TABS = { register: 0, provision: 1, connect: 2, done: 3, guidebook: 4, faqs: 5, schedule: 6, review: 7 };
const TAB_LABEL = {
  register: "Open Step 1: Register", provision: "Open Step 2: Provision", connect: "Open Step 3: Connect",
  done: "Open the finish page", guidebook: "Open the Guidebook", faqs: "Open the FAQs", schedule: "Open the Schedule", review: "Open the Project Review",
};

const TOOLS = [
  {
    name: "check_email_domain",
    description: "Check whether an email DOMAIN (e.g. gmail.com) can receive IBM LinuxONE activation emails. Never pass a full email address.",
    input_schema: { type: "object", properties: { domain: { type: "string", description: "Domain only, e.g. gmail.com" } }, required: ["domain"] },
  },
  {
    name: "build_connect_commands",
    description: "Build the exact commands/settings a participant needs to connect to their LinuxONE server. Call once the participant has given their server IP address. key_path is optional.",
    input_schema: {
      type: "object",
      properties: {
        os: { type: "string", enum: ["windows", "mac"] },
        ip: { type: "string", description: "Server IPv4 address from the Virtual Servers page" },
        key_path: { type: "string", description: "Path to the .pem key file, if the participant gave it" },
      },
      required: ["os", "ip"],
    },
  },
  {
    name: "navigate",
    description: "Show the participant a button that opens a tab of this guide.",
    input_schema: { type: "object", properties: { tab: { type: "string", enum: Object.keys(TABS) } }, required: ["tab"] },
  },
  {
    name: "draft_help_request",
    description: "Prepare a ready-to-post message the participant can send to mentors/organisers on Discord, with the key details filled in (no personal data).",
    input_schema: {
      type: "object",
      properties: {
        step: { type: "string", description: "Which step they are on, e.g. 'Register'" },
        problem: { type: "string", description: "One-sentence description of what is going wrong" },
        tried: { type: "string", description: "What they already tried" },
      },
      required: ["problem"],
    },
  },
  {
    name: "countdown",
    description: "Get the Datathon countdown phase (before kick-off, hacking and submissions open, ended) with seconds to the next milestone (UTC).",
    input_schema: { type: "object", properties: {} },
  },
];

const stripEmails = (s) => String(s || "").replace(/[\w.+-]+@([\w-]+(?:\.[\w-]+)+)/g, "[email@$1]");
const cap = (s, n) => stripEmails(s).replace(/[\r\n]+/g, " ").trim().slice(0, n);

function validIp(ip) {
  const m = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(String(ip || "").trim());
  return !!m && m.slice(1).every((o) => Number(o) <= 255);
}
// Only allow characters that are safe inside double quotes in a shell command.
const safeKeyPath = (p) => /^[\w ~./\\:@+-]{1,200}$/.test(p || "") && !/\.\.\//.test(p);

function runTool(name, input = {}) {
  const actions = [];
  let result;
  if (name === "check_email_domain") {
    const d = String(input.domain || "").toLowerCase().trim().replace(/^@/, "");
    if (!/^[a-z0-9.-]+\.[a-z]{2,}$/.test(d)) result = { ok: false, reason: "That does not look like a domain." };
    else if (/^(outlook|hotmail|live|msn|passport)\./.test(d)) result = { ok: false, microsoft: true, reason: "Microsoft consumer email: IBM currently cannot deliver activation emails to it. Register again with a non-Microsoft email." };
    else result = { ok: true, caution: "School or work addresses may be hosted on Microsoft 365, which also does not work. Gmail, Yahoo, iCloud and Proton are safe choices." };
  } else if (name === "build_connect_commands") {
    const os = input.os === "windows" ? "windows" : "mac";
    const ip = String(input.ip || "").trim();
    if (!validIp(ip)) result = { ok: false, reason: "That is not a valid IPv4 address. Ask the participant to copy it from the IP Address column of the Virtual Servers page." };
    else if (os === "windows") {
      result = {
        ok: true, os,
        steps: [
          `PuTTY > Session > Host Name: ${ip}, Port 22, Connection type SSH`,
          "Connection > Data > Auto-login username: linux1",
          "Connection > SSH > Auth > Credentials > Private key file: your key (PuTTY needs a .ppk file; PuTTYgen can convert a .pem)",
          "Click Open, accept the host key prompt, and look for the IBM LinuxONE banner",
        ],
        guide: "https://github.com/linuxone-community-cloud/technical-resources/blob/master/faststart/PUTTY_Set_up.pdf",
      };
      actions.push({ type: "link", label: "Open the PuTTY guide", url: result.guide });
    } else {
      const raw = String(input.key_path || "").trim();
      const useKey = raw && safeKeyPath(raw);
      const k = useKey ? `"${raw}"` : "<path-to-key-file>";
      const cmds = [`chmod 400 ${k}`, `ssh linux1@${ip} -i ${k}`];
      result = { ok: true, os, commands: cmds, note: useKey ? undefined : "Replace <path-to-key-file> with the real path to the .pem file (for example ~/Downloads/test1234.pem). Type yes at the fingerprint question." };
      actions.push({ type: "copy", label: "Copy chmod command", text: cmds[0] }, { type: "copy", label: "Copy ssh command", text: cmds[1] });
    }
  } else if (name === "navigate") {
    const tab = input.tab;
    if (tab in TABS) { result = { ok: true, opened: TAB_LABEL[tab] }; actions.push({ type: "goto", step: TABS[tab], label: TAB_LABEL[tab] }); }
    else result = { ok: false, reason: "Unknown tab" };
  } else if (name === "draft_help_request") {
    const text = [
      "Hi mentors, I need a hand with the IBM Z Datathon.",
      "Team name: <your team name>",
      "Hub or virtual: <your hub / Global Virtual>",
      `Where I am stuck: ${cap(input.step, 40) || "<step>"}`,
      `What is going wrong: ${cap(input.problem, 300)}`,
      `What I have tried: ${cap(input.tried, 300) || "<what you tried>"}`,
      "(I will DM my email if you need it.) Thank you!",
    ].join("\n");
    result = { ok: true, message_ready: true };
    actions.push({ type: "copy", label: "Copy message for mentors", text }, { type: "link", label: "Open the Discord", url: DISCORD });
  } else if (name === "countdown") {
    const now = Date.now();
    let phase, target;
    if (now < SCHED.kickoffStart) { phase = "before_kickoff"; target = SCHED.kickoffStart; }
    else if (now < SCHED.submitEnd) { phase = "hacking_and_submissions_open"; target = SCHED.submitEnd; }
    else { phase = "ended"; target = now; }
    result = { phase, seconds_to_next_milestone: Math.max(0, Math.round((target - now) / 1000)), milestone_utc: new Date(target).toISOString() };
  } else {
    result = { ok: false, reason: "Unknown tool" };
  }
  return { result, actions };
}

/* ---------------- plumbing ---------------- */
const hits = new Map(); // best-effort per-instance rate limit
function limited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < 60000);
  arr.push(now);
  hits.set(ip, arr);
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.length || now - v[v.length - 1] > 60000) hits.delete(k);
  return arr.length > 20;
}

function cleanMessages(messages) {
  const out = [];
  for (const m of Array.isArray(messages) ? messages.slice(-12) : []) {
    if (!m || (m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string") continue;
    const content = stripEmails(m.content).slice(0, 1500);
    if (!content.trim()) continue;
    if (out.length && out[out.length - 1].role === m.role) out[out.length - 1].content += "\n" + content;
    else out.push({ role: m.role, content });
  }
  while (out.length && out[0].role !== "user") out.shift();
  return out;
}

function splitChoices(text) {
  const m = /\[\[\s*choices\s*:\s*([^\]]+)\]\]\s*$/i.exec(text);
  if (!m) return { reply: text.trim(), choices: null };
  const choices = m[1].split("|").map((s) => s.trim().slice(0, 40)).filter(Boolean).slice(0, 4);
  return { reply: text.slice(0, m.index).trim(), choices: choices.length ? choices : null };
}

async function callClaude(key, body) {
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error("upstream " + r.status);
  return r.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(503).json({ error: "assistant not configured" });
  const ip = String(req.headers?.["x-forwarded-for"] || req.socket?.remoteAddress || "?").split(",")[0].trim();
  if (limited(ip)) return res.status(429).json({ error: "slow down" });

  try {
    const { messages, step, os } = req.body || {};
    const msgs = cleanMessages(messages);
    if (!msgs.length) return res.status(400).json({ error: "bad request" });

    const system = `${SYSTEM}\n\nThe participant is currently viewing: ${cap(step, 30) || "unknown"}; computer: ${cap(os, 10) || "not chosen"}.`;
    const model = process.env.ANTHROPIC_MODEL || "claude-haiku-5-5";
    const actions = [];
    let text = "";

    for (let i = 0; i <= MAX_STEPS; i++) {
      const data = await callClaude(key, { model, max_tokens: 700, system, tools: TOOLS, messages: msgs });
      const blocks = Array.isArray(data.content) ? data.content : [];
      text = blocks.filter((b) => b.type === "text").map((b) => b.text).join("").trim();
      const uses = blocks.filter((b) => b.type === "tool_use");
      if (data.stop_reason !== "tool_use" || !uses.length || i === MAX_STEPS) break;
      msgs.push({ role: "assistant", content: blocks });
      const results = uses.map((u) => {
        const out = runTool(u.name, u.input);
        actions.push(...out.actions);
        return { type: "tool_result", tool_use_id: u.id, content: JSON.stringify(out.result) };
      });
      msgs.push({ role: "user", content: results });
    }

    const { reply, choices } = splitChoices(text);
    const seen = new Set();
    const uniq = actions.filter((a) => { const k = a.type + a.label; if (seen.has(k)) return false; seen.add(k); return true; }).slice(0, 5);
    return res.status(200).json({
      reply: reply || "I want to get this right for you. Could you tell me which step you are on and what you see? A mentor on Discord can also help.",
      actions: uniq,
      choices,
    });
  } catch {
    return res.status(502).json({ error: "assistant unavailable" });
  }
}
