/* IBM Z Datathon 2026 · LinuxONE Setup Guide
   Shooting Stars Foundation × IBM — created by Simanga Mchunu, Mentor */

const CFG = {
  eventCode: "SSF2026",
  descriptionSample:
    "Participant in the IBM Z Datathon 2026 by Shooting Stars Foundation. Learning Linux and data skills on IBM LinuxONE.",
  loginUrl: "https://linuxone.cloud.marist.edu/#/login",
  instanceUrl: "https://linuxone.cloud.marist.edu/#/instance",
  puttyPdf:
    "https://github.com/linuxone-community-cloud/technical-resources/blob/master/faststart/PUTTY_Set_up.pdf",
  // Personal Microsoft-hosted consumer domains that must NOT be used.
  blockedDomains: ["outlook.com", "hotmail.com", "live.com", "msn.com", "passport.com", "outlook.co.za", "hotmail.co.za", "live.co.za"],
  repo: "https://github.com/jacobemery/linux1-lab/blob/general/instructions/",
  // Countdown (UTC / "standard time"): starts 17 Oct 00:00, ends 19 Oct 00:00 (covers all of 17th and 18th)
  countdownStart: Date.UTC(2026, 9, 17, 0, 0, 0),
  countdownEnd: Date.UTC(2026, 9, 19, 0, 0, 0),
  submitUrl: "https://hack2skill.com/event/datathon-2026",
  videoHelpUrl: "https://youtu.be/3_L3T__zEco",
  discordInvite: "https://discord.gg/vVUwEJh3fH",
  mentorChannels: [
    ["Mentor help channel 1", "https://discord.com/channels/1517057210029441044/1559111191899668540"],
    ["Mentor help channel 2", "https://discord.com/channels/1517057210029441044/1517857148778844310"],
  ],
  titleExample: "[Team Name_IBM Z Datathon 2026 Project]",
};

const GUIDE = {
  facts: [["DATES", "17–18 October 2026"], ["MODE", "In-person at 8 hubs + Global Virtual"], ["TEAM SIZE", "4–6 members"], ["PRIZE BUCKET", "$50k+"]],
  hubs: [
    ["Saveetha Engineering College", "Chennai, India"], ["Global Academy of Technology", "Bangalore, India"],
    ["Manchester University", "UK"], ["New York University", "USA"],
    ["University of Texas at Dallas", "USA"], ["Federation University", "Ballarat, Australia"],
    ["Cyberjaya University", "Malaysia"], ["NTU", "Singapore"],
  ],
  submitChecklist: [
    ["Video of 3 minutes maximum", "Cover: the <b>problem statement</b>, the <b>data</b> that supports the problem, your <b>solution</b>, and — most important — <b>how it leverages IBM Z</b>."],
    ["Show your IBM Z usage in the video", "Share your <b>tech stack</b>, and show your <b>LinuxONE instance</b> and your <b>model</b>."],
    ["Code link or upload", "A GitHub/GitLab repo link, a zip upload — whatever works. Make sure the repo is accessible."],
    ["Project title contains your Team Name", `Example: <code>${CFG.titleExample}</code>`],
    ["Optional: flowchart of your design", "Helps judges follow your architecture quickly."],
    ["Optional: prototype (if available)", "A working demo or clickable prototype."],
  ],
  judgingA: [
    ["1", "Value to the Community & Datathon Theme Alignment", "Who benefits, and how does the solution fit the theme?"],
    ["2", "Novelty & Idea Originality", "What makes this different from existing solutions?"],
    ["3", "Technical Design & Use of Mainframe / LinuxONE Community Cloud platform and AI/ML open-source packages/code", "Is the platform used meaningfully, not just as hosting? Is the architecture sound?"],
  ],
  judgingB: [
    ["1", "AI Innovation & Originality", "Is the AI/ML component a genuine innovation or a generic add-on?"],
    ["2", "Transformational Impact & Technical Excellence", "How big is the potential impact, and how robust is the implementation?"],
  ],
};

const STEP_NAMES = ["Register", "Provision", "Connect", "Done", "Guidebook", "FAQs"];
const LS = "ibmz-datathon-2026";
let state = load() || { step: 0, os: null, checks: {} };
function load() { try { return JSON.parse(localStorage.getItem(LS)); } catch { return null; } }
function save() { try { localStorage.setItem(LS, JSON.stringify(state)); } catch {} }

/* ---------- step definitions ---------- */
const STEPS = {
  register: [
    ["Open the IBM LinuxONE Community Cloud", `Go to <a href="${CFG.loginUrl}" target="_blank" rel="noopener">linuxone.cloud.marist.edu</a> using <b>Firefox</b> or <b>Google Chrome</b>.`],
    ["Click Register", "Click the <code>Register</code> button on the login page."],
    ["Fill in the form", "Use the <b>email</b>, <b>event code</b> and <b>description</b> from the boxes above. Fill in the remaining fields."],
    ["Request your trial", "Click the <code>Request your trial</code> button."],
    ["Check your inbox", "Look for an email from <code>noreply@linuxone.cloud.marist.edu</code> titled <i>“IBM LinuxONE Community Cloud Registration - Action required to complete”</i>. Check spam/junk if you can’t see it."],
    ["Activate your account", "Click <code>Activate your account or entitlement</code>. The link is valid for <b>48 hours</b>."],
    ["Sign in", "Click the <code>Sign in</code> button on the page it takes you to."],
  ],
  provision: [
    ["Sign in", `Sign in at <a href="${CFG.loginUrl}" target="_blank" rel="noopener">the LinuxONE Community Cloud</a> using Firefox or Chrome.`],
    ["Open Manage Instances", "Under <b>Service Catalog</b>, click <code>Manage Instances</code>."],
    ["Click Create", "Click <code>Create</code> on the next page."],
    ["Choose your server options", "<b>Instance name:</b> anything you like, e.g. <code>test1234</code><br><b>Select an Image:</b> <code>RHEL8.7</code> (Red Hat Enterprise Linux 8.7)<br><b>Select a Flavor:</b> <code>LinuxONE</code> (the only option)"],
    ["Start creating an SSH key pair", "Under <b>Select a SSH key pair</b>, click <code>Create</code>."],
    ["Name your key pair", "Type any name, then click <code>Create a new key pair</code>. <b>Your browser downloads a key file (.pem) — keep it safe, you need it in Step 3.</b>"],
    ["Select your key", "Click the button of your newly created key pair to select it."],
    ["Create the server", "Click the <code>Create</code> button at the bottom right of the page."],
    ["Wait until ACTIVE", "This can take a few minutes. Status shows <code>UNKNOWN</code> first (don’t worry), then <code>spawning</code>, then <code>ACTIVE</code>. ACTIVE means it’s ready. <b>See “When it’s ACTIVE” below.</b>"],
  ],
  windows: [
    ["Copy your server IP address", `On <a href="${CFG.instanceUrl}" target="_blank" rel="noopener">Virtual Servers</a>, copy the value in the <b>IP Address</b> column of your ACTIVE server. The user name is <code>linux1</code>.`],
    ["Follow the PuTTY guide", `Open the official <a href="${CFG.puttyPdf}" target="_blank" rel="noopener">PuTTY fast start guide (PDF)</a> and follow it, using your IP address and the key file you downloaded.`],
    ["Log in and look for the welcome banner", "You’re done when you see the <b>IBM LinuxONE</b> banner and a prompt like <code>[linux1@test1234 ~]$</code>."],
  ],
  mac: [
    ["Copy your server IP address", `On <a href="${CFG.instanceUrl}" target="_blank" rel="noopener">Virtual Servers</a>, copy the value in the <b>IP Address</b> column of your ACTIVE server. The user name is <code>linux1</code>.`],
    ["Open Terminal", "In Finder go to <b>Applications → Utilities → Terminal</b>."],
    ["Lock down your key file", "Run this, swapping in the path to your downloaded key file:", "chmod 400 ~/Downloads/test1234.pem"],
    ["Connect with SSH", "Run this with your own IP address and key path:", "ssh linux1@<ip-address> -i ~/Downloads/test1234.pem"],
    ["Accept the host fingerprint", "When asked <i>“Are you sure you want to continue connecting?”</i> type <code>yes</code> and press Enter."],
    ["Look for the welcome banner", "You’re done when you see the <b>IBM LinuxONE</b> banner and a prompt like <code>[linux1@test1234 ~]$</code>."],
  ],
};

const BANNER = ` ___ ____  __  __      _     _                   ___  _   _ _____
|_ _| __ )|  \\/  |    | |   (_)_ __  _   ___  __/ _ \\| \\ | | ____|
 | ||  _ \\| |\\/| |    | |   | | '_ \\| | | \\ \\/ / | | |  \\| |  _|
 | || |_) | |  | |    | |___| | | | | |_| |>  <| |_| | |\\  | |___
|___|____/|_|  |_|    |_____|_|_| |_|\\__,_/_/\\_\\\\___/|_| \\_|_____|

Welcome to the IBM LinuxONE Community Cloud!
[linux1@test1234 ~]$`;

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

function copy(text, btn) {
  const done = () => { const o = btn.textContent; btn.textContent = "Copied ✓"; setTimeout(() => (btn.textContent = o), 1400); };
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, done);
  else { const t = document.createElement("textarea"); t.value = text; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); done(); }
}

function checklist(key, items) {
  return `<ul class="list">${items.map((it, i) => {
    const id = `${key}-${i}`, c = state.checks[id];
    return `<li class="${c ? "checked" : ""}">
      <input type="checkbox" id="${id}" data-id="${id}" ${c ? "checked" : ""} aria-label="Mark step ${i + 1} done" />
      <label for="${id}" style="flex:1;cursor:pointer">
        <div class="t">${i + 1}. ${it[0]}</div>
        <div class="d">${it[1]}</div>
        ${it[2] ? `<div class="codewrap"><pre>${esc(it[2])}</pre><button class="btn sm ghost" data-copy="${esc(it[2])}">Copy</button></div>` : ""}
      </label></li>`;
  }).join("")}</ul>`;
}

function stepDone(i) {
  const keys = i === 0 ? STEPS.register.length : i === 1 ? STEPS.provision.length : null;
  const prefix = i === 0 ? "reg" : i === 1 ? "prov" : null;
  if (i >= 3) return false;
  if (i === 2) {
    if (!state.os) return false;
    const n = STEPS[state.os].length;
    return Array.from({ length: n }, (_, k) => state.checks[`${state.os}-${k}`]).every(Boolean);
  }
  return Array.from({ length: keys }, (_, k) => state.checks[`${prefix}-${k}`]).every(Boolean);
}

function updateProgress() {
  const total = STEPS.register.length + STEPS.provision.length + (state.os ? STEPS[state.os].length : STEPS.mac.length);
  const done = Object.keys(state.checks).filter((k) => state.checks[k] &&
    (k.startsWith("reg-") || k.startsWith("prov-") || (state.os ? k.startsWith(state.os + "-") : false))).length;
  const pct = Math.round((done / total) * 100);
  $("#progressBar").style.width = pct + "%";
  $("#progressText").textContent = pct + "% done";
  $$(".step-btn").forEach((b, i) => {
    b.classList.toggle("active", i === state.step);
    b.classList.toggle("done", stepDone(i));
  });
}

/* ---------- views ---------- */
function viewRegister() {
  return `
  <div class="card">
    <span class="pill">STEP 1 OF 3</span>
    <h1>Register for your free account</h1>
    <p class="lead">You’ll create a free IBM LinuxONE Community Cloud account. Use the details below when the form asks for them.</p>

    <div class="callout bad">🚫 <b>IBM notice:</b> there is currently an issue with <b>Hotmail and Outlook</b> email addresses — return messages (your activation email) will not work. Please register with a <b>different, non-Microsoft email domain</b>. This does <b>not</b> mean a Microsoft 365 address either. If you already registered with a Microsoft email, <b>register again</b> with a non-Microsoft one.</div>

    <div class="grid2">
      <div class="field"><label>EVENT CODE</label>
        <div class="copyrow"><span class="val">${CFG.eventCode}</span><button class="btn sm" data-copy="${CFG.eventCode}">Copy</button></div></div>
      <div class="field"><label>DESCRIPTION (SAMPLE — YOU CAN EDIT IT LATER)</label>
        <div class="copyrow"><span class="val" style="font-size:13px">${CFG.descriptionSample}</span><button class="btn sm" data-copy="${esc(CFG.descriptionSample)}">Copy</button></div></div>
    </div>

    <div class="field" style="margin-top:14px">
      <label>WHICH EMAIL SHOULD I USE? — QUICK CHECK</label>
      <input type="email" id="emailTest" placeholder="Type your email to check it (not stored or sent anywhere)" autocomplete="off" />
      <div class="emailcheck" id="emailMsg">Use a <b>non-Microsoft</b> email, e.g. Gmail, Yahoo, iCloud or Proton. <b>Not</b> Outlook, Hotmail, Live, or any <b>Microsoft 365</b> address (this includes many school and work emails).</div>
    </div>
    <div class="callout warn">⚠️ The confirmation email can land in <b>spam / junk</b>. The activation link expires after <b>48 hours</b>.</div>
  </div>

  <div class="card">
    <h2>Follow these steps</h2>
    ${checklist("reg", STEPS.register)}
    <div class="callout info">Already registered with a <b>non-Microsoft</b> email and activated it? <a href="#" data-goto="1">Skip to Step 2 →</a>. Registered with Hotmail/Outlook? Register again with a different email first.</div>
    <div class="nav"><span></span><button class="btn" data-goto="1">Next: Provision →</button></div>
  </div>`;
}

function viewProvision() {
  return `
  <div class="card">
    <span class="pill">STEP 2 OF 3</span>
    <h1>Provision your virtual server</h1>
    <p class="lead">This creates your own Linux server on IBM LinuxONE. Pick these options exactly:</p>
    <div class="status">
      <span class="badge go">Image: RHEL8.7</span><span class="badge go">Flavor: LinuxONE</span><span class="badge">Name: anything, e.g. test1234</span>
    </div>
    <div class="callout warn">🔑 Your <b>.pem key file</b> downloads when you create the key pair. <b>Don’t lose it</b> — you need it to connect in Step 3.</div>
  </div>
  <div class="card">
    <h2>Follow these steps</h2>
    ${checklist("prov", STEPS.provision)}
  </div>
  <div class="card">
    <span class="pill">WHEN IT’S ACTIVE ✅</span>
    <h2>Your server is ready — grab these 3 things</h2>
    <p class="lead">Open the <a href="${CFG.instanceUrl}" target="_blank" rel="noopener">Virtual Servers page</a>. You should see <b>1 Total · 1 Active</b> and a green <b>ACTIVE</b> dot next to your server. In that row note:</p>
    <div class="grid2">
      <div class="field"><label>IP ADDRESS</label><div class="val mono">e.g. 148.100.77.251</div><div class="lead" style="margin:8px 0 0;font-size:13px">Copy it from the <b>IP Address</b> column. Every server has its own.</div></div>
      <div class="field"><label>LINUX USER</label><div class="copyrow"><span class="val">linux1</span><button class="btn sm" data-copy="linux1">Copy</button></div><div class="lead" style="margin:8px 0 0;font-size:13px">Shown in the <b>Linux User</b> column. You’ll log in as this.</div></div>
    </div>
    <div class="field" style="margin-top:14px"><label>KEY PAIR</label>
      <div class="lead" style="margin:0;font-size:14px">The <b>Key Pair</b> column shows the name you chose. The matching <b>.pem file</b> was downloaded by your browser when you created it (check your <b>Downloads</b> folder). You’ll need it to connect.</div></div>
    <div class="callout info">💡 Quota is <b>1 instance per person</b>. Don’t click <b>Delete</b> on your server — you’d lose it and your files. <b>Stop</b> only if you’re finished for now.</div>
    <div class="nav"><button class="btn ghost" data-goto="0">← Back</button><button class="btn" data-goto="2">Next: Connect →</button></div>
  </div>`;
}

function viewConnect() {
  const os = state.os;
  return `
  <div class="card">
    <span class="pill">STEP 3 OF 3</span>
    <h1>Connect to your server</h1>
    <p class="lead">You’ll connect over SSH. Which computer are you using?</p>
    <div class="os-toggle">
      <div class="os ${os === "windows" ? "sel" : ""}" data-os="windows" role="button" tabindex="0">🪟 Windows<br><small>PuTTY</small></div>
      <div class="os ${os === "mac" ? "sel" : ""}" data-os="mac" role="button" tabindex="0"> Mac<br><small>Terminal</small></div>
    </div>
  </div>
  ${os ? `<div class="card">
    <h2>${os === "windows" ? "Windows steps" : "Mac steps"}</h2>
    ${checklist(os, STEPS[os])}
    <h2 style="margin-top:18px">What success looks like</h2>
    <pre>${esc(BANNER)}</pre>
    <div class="nav"><button class="btn ghost" data-goto="1">← Back</button><button class="btn" data-goto="3">I’m connected ✓</button></div>
  </div>` : ""}
  <div class="card">
    <h2>Troubleshooting</h2>
    <details><summary>I can’t find the activation email</summary><p>Check spam/junk and wait a few minutes. The sender is noreply@linuxone.cloud.marist.edu. If it never arrives, check which email you used: Hotmail, Outlook, Live and Microsoft 365 addresses currently don’t receive IBM’s emails. Register again with a non-Microsoft email such as Gmail.</p></details>
    <details><summary>Status says UNKNOWN</summary><p>This is normal at first. It changes to spawning, then ACTIVE after a few minutes.</p></details>
    <details><summary>Mac: “UNPROTECTED PRIVATE KEY FILE” or permission denied</summary><p>Run <code>chmod 400 &lt;path-to-key-file&gt;</code> on your .pem file first, then retry the ssh command.</p></details>
    <details><summary>Where do I find my IP address?</summary><p>On your <a href="${CFG.instanceUrl}" target="_blank" rel="noopener">instance page</a> in the LinuxONE Community Cloud.</p></details>
    <details><summary>Still stuck?</summary><p>Tap “Need help?” and ask the assistant, or ask your mentor, Simanga Mchunu.</p></details>
  </div>`;
}

function viewDone() {
  return `
  <div class="card" style="text-align:center">
    <div style="font-size:54px">🌟</div>
    <h1>You’re connected to IBM LinuxONE!</h1>
    <p class="lead">Your server is running on IBM Z hardware. You’re ready for the IBM Z Datathon 2026.</p>
    <div class="callout ok">Next up: the lab’s <a href="${CFG.repo}4_navigate.md" target="_blank" rel="noopener">Step 4 – Navigating Linux</a>, and your datathon briefing from the mentors.</div>
    <div class="callout info">📖 Read the <a href="#" data-goto="4">Participant Guidebook</a> for the challenge themes, what to submit and how you’ll be judged.</div>
    <div class="nav" style="justify-content:center"><button class="btn ghost" data-goto="2">← Back</button><button class="btn" data-goto="4">Open the Guidebook →</button><button class="btn ghost" id="reset">Start over</button></div>
  </div>`;
}

function critTable(rows) {
  return `<div class="tablewrap"><table class="crit"><thead><tr><th>#</th><th>CRITERION</th><th>QUESTIONS TO NUDGE TEAMS</th></tr></thead><tbody>${rows.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table></div>`;
}

function viewGuide() {
  const G = GUIDE;
  return `
  <div class="card">
    <span class="pill">PARTICIPANT GUIDEBOOK</span>
    <h1>IBM Z Datathon Challenge</h1>
    <p class="lead">Everything you need for the weekend: the challenge, what to submit, how you’ll be judged, and where to get help.</p>
    <div class="facts">${G.facts.map((f) => `<div class="tile"><label>${f[0]}</label><b>${f[1]}</b></div>`).join("")}</div>
  </div>

  <div class="card">
    <h2>📍 In-person hubs</h2>
    <p class="lead" style="margin-bottom:0">Eight campuses host in-person teams. You can also join from anywhere in the world via Global Virtual.</p>
    <div class="hubs">${G.hubs.map((h) => `<div class="hub"><b>${h[0]}</b><small>${h[1]}</small></div>`).join("")}<div class="hub virtual"><b>🌍 Global Virtual</b><small>Join from anywhere</small></div></div>
  </div>

  <div class="card">
    <h2>🎯 The challenge</h2>
    <p class="lead">There is <b>no single problem statement</b>. As a team, choose a problem under one of the themes below.</p>
    <div class="themes">
      <div class="theme"><div class="n">⚡</div><b>Real-time AI for critical decisions</b><p>Theme 1</p></div>
      <div class="theme"><div class="n">🔐</div><b>AI secured: Innovation without exposure</b><p>Theme 2</p></div>
      <div class="theme wild"><div class="n">🌠</div><b>Wildcard</b><p>Found an important or overlooked problem outside the two themes? Use AI in a new, unexpected or technically ambitious way and make a wildcard entry.</p></div>
    </div>
    <div class="callout info">🧩 You must <b>leverage the IBM Z (LinuxONE) platform</b> to solve problems you see around you and in your lives. How will you use data and ML to create a better world?</div>
  </div>

  <div class="card">
    <h2>📤 How to submit</h2>
    <div class="btnrow">
      <a class="btn" href="${CFG.submitUrl}" target="_blank" rel="noopener">Open the submission page ↗</a>
      <a class="btn ghost" href="${CFG.videoHelpUrl}" target="_blank" rel="noopener">▶ Don’t know how? Watch the video</a>
    </div>
    <div class="field" style="margin:12px 0">
      <label>PROJECT TITLE MUST CONTAIN YOUR TEAM NAME</label>
      <div class="copyrow"><span class="val">${CFG.titleExample}</span><button class="btn sm" data-copy="${esc(CFG.titleExample)}">Copy</button></div>
    </div>
    <div class="two">
      <div class="callout ok" style="margin:0"><b>Required</b><ul class="plain"><li>Video demo, max 3 minutes (compulsory)</li><li>Your code (GitHub/GitLab link or zip)</li></ul></div>
      <div class="callout info" style="margin:0"><b>Optional</b><ul class="plain"><li>Flowchart of your design</li><li>Prototype (if available)</li></ul></div>
    </div>
    <div class="callout warn">⏱ The <b>video is compulsory</b> and must be <b>3 minutes or less</b>. Don’t forget to add your GitHub/GitLab repo link to your submission.</div>
  </div>

  <div class="card">
    <h2>✅ Before you submit — checklist</h2>
    ${checklist("sub", G.submitChecklist)}
  </div>

  <div class="card">
    <h2>🏆 Judging criteria</h2>
    <p class="lead">Keep these in view while you build. The right-hand column shows the questions judges (and mentors) will use to steer teams.</p>
    <h2 style="font-size:15px">Datathon Judging Criteria</h2>
    ${critTable(G.judgingA)}
    <h2 style="font-size:15px">AI Innovation Excellence Awards — Judge Scoring Rubric (All Regions)</h2>
    ${critTable(G.judgingB)}
  </div>

  <div class="card">
    <h2>🙋 Need help?</h2>
    <p class="lead">Stuck on setup or your project? Ask the <b>Setup Guide Assistant</b> (the 💬 button, bottom right), or reach a mentor on Discord.</p>
    <div class="btnrow">
      <a class="btn" href="${CFG.discordInvite}" target="_blank" rel="noopener">Join the Discord ↗</a>
      ${CFG.mentorChannels.map((c) => `<a class="btn ghost" href="${c[1]}" target="_blank" rel="noopener">${c[0]} ↗</a>`).join("")}
    </div>
    <div class="callout info">Mention <b>@simanga_</b> (your mentor) or any other mentor in the channels above. Include what you tried and any error message you see. Quick answers are in the <a href="#" data-goto="5">FAQs</a>.</div>
  </div>`;
}

/* ---------- FAQs ---------- */
const Y25 = `<span class="badge">From the 2025 Datathon</span>`;
const FAQ_CATS = [["all", "All"], ["setup", "Setup & connecting"], ["event", "Event & submission"], ["after", "Certificates & prizes"], ["help", "Getting help"]];
const FAQ = [
  /* setup */
  { c: "setup", q: "Which email should I register with?", a: `Use a <b>non-Microsoft</b> email such as Gmail, Yahoo, iCloud or Proton. IBM currently has an issue with <b>Hotmail and Outlook</b> addresses (the activation email won’t arrive), and Microsoft 365 school/work addresses should be avoided too. Already registered with a Microsoft email? Register again with a non-Microsoft one.` },
  { c: "setup", q: "What are the event code and the description?", a: `Event code: <code>${CFG.eventCode}</code>. The description is only a sample and can be edited later, e.g. “${CFG.descriptionSample}”.` },
  { c: "setup", q: "I didn’t get the activation email.", a: `Check spam/junk and wait a few minutes. It comes from <code>noreply@linuxone.cloud.marist.edu</code> and is titled “IBM LinuxONE Community Cloud Registration - Action required to complete”. The activation link is valid for <b>48 hours</b>. If it never arrives, check that you didn’t use Hotmail, Outlook, Live or Microsoft 365, then register again with another email.` },
  { c: "setup", q: "Which image and flavor do I pick when creating my server?", a: `Image <code>RHEL8.7</code>, flavor <code>LinuxONE</code> (the only option). The instance name can be anything, e.g. <code>test1234</code>.` },
  { c: "setup", q: "My server status says UNKNOWN.", a: `That’s normal. It goes UNKNOWN → spawning → <b>ACTIVE</b> and can take a few minutes. ACTIVE means your server is ready.` },
  { c: "setup", q: "Where do I find my IP address, user name and key file?", a: `On <a href="${CFG.instanceUrl}" target="_blank" rel="noopener">Virtual Servers</a>: your IP is in the <b>IP Address</b> column of your ACTIVE server and the user is <code>linux1</code>. The <code>.pem</code> key file was downloaded by your browser when you created the key pair — check your Downloads folder and keep it safe.` },
  { c: "setup", q: "How do I connect from Windows or Mac?", a: `<b>Windows:</b> follow the <a href="${CFG.puttyPdf}" target="_blank" rel="noopener">PuTTY fast start guide</a>. <b>Mac:</b> in Terminal run <code>chmod 400 &lt;path-to-key-file&gt;</code> then <code>ssh linux1@&lt;ip-address&gt; -i &lt;path-to-key-file&gt;</code> and type <code>yes</code> at the fingerprint question. Full steps are in the Connect tab.` },
  { c: "setup", q: "Mac says “UNPROTECTED PRIVATE KEY FILE” or “permission denied”.", a: `Run <code>chmod 400 &lt;path-to-key-file&gt;</code> on your <code>.pem</code> file first, then retry the <code>ssh</code> command.` },
  { c: "setup", q: "How do I know I’m connected?", a: `You’ll see the <b>IBM LinuxONE</b> welcome banner and a prompt like <code>[linux1@test1234 ~]$</code>.` },
  /* event */
  { c: "event", q: "Do I have to attend in person?", a: `Not necessarily. The Datathon runs in person at 8 hubs <b>and</b> as Global Virtual, so you can take part from anywhere. See the Guidebook for the list of hubs.` },
  { c: "event", q: "How big can my team be?", a: `Teams have <b>4–6 members</b>.` },
  { c: "event", q: "Do I have to pick a theme?", a: `Choose a problem under one theme: <b>Real-time AI for critical decisions</b> or <b>AI secured: Innovation without exposure</b>. If you find an important or overlooked problem outside both, make a <b>wildcard</b> entry and use AI in a new, unexpected or technically ambitious way.` },
  { c: "event", q: "Do I have to use IBM Z (LinuxONE)?", a: `Yes — your solution must leverage the IBM Z (LinuxONE) platform. Judges ask whether it’s used <b>meaningfully, not just as hosting</b>, so show your LinuxONE instance and your model in the video.` },
  { c: "event", q: "What do I submit, and where?", a: `Submit on <a href="${CFG.submitUrl}" target="_blank" rel="noopener">Hack2Skill</a>. <b>Required:</b> a video of max 3 minutes and your code (GitHub/GitLab link or zip). <b>Optional:</b> a flowchart of your design and a prototype. Not sure how? <a href="${CFG.videoHelpUrl}" target="_blank" rel="noopener">Watch the how-to video</a>.` },
  { c: "event", q: "What should my 3-minute video cover?", a: `The <b>problem statement</b>, the <b>data</b> that supports the problem, your <b>solution</b>, and — most important — <b>how it leverages IBM Z</b> (share your tech stack, show your LinuxONE instance and model). The video is compulsory and must be 3 minutes or less.` },
  { c: "event", q: "How should I name my project?", a: `The project title must contain your Team Name, e.g. <code>${esc(CFG.titleExample)}</code>.` },
  { c: "event", q: "What time zone is the countdown in?", a: `UTC (standard time). It counts down to the start on 17 October 2026, 00:00 UTC, then to the end on 19 October 2026, 00:00 UTC. Convert to your local time to plan your weekend.` },
  { c: "event", q: "How will projects be judged?", a: `On value to the community and theme fit, novelty and originality, and technical design including meaningful use of the LinuxONE Community Cloud and AI/ML open-source packages. The AI Innovation Excellence Awards add AI innovation &amp; originality and transformational impact &amp; technical excellence. Details are in the Guidebook.` },
  /* after the event: based on 2025 */
  { c: "after", q: "When will I get my certificate?", a: `${Y25}Last year certificates were issued <b>after</b> the event in rolling batches, because there were over 14,000 participants. Everyone who took part at any stage got one — idea submission, project submission, the questathon and raffles. For 2026, watch the Discord announcement channel; the 2026 timeline isn’t confirmed yet.` },
  { c: "after", q: "I got my certificate, but my teammate didn’t (or the reverse).", a: `${Y25}Certificates were issued per person, using the details from individual and team registrations. If one is missing, use the issue form the organizers share, and give the <b>full names</b> of the people affected. Mentors can pass your message on but can’t issue certificates.` },
  { c: "after", q: "My certificate has the wrong name.", a: `${Y25}Names were pulled from registration details, so double-check the spelling of your name when you register. Last year a short-lived issue form was opened for misspellings and wrong or missing certificates — submit it as soon as it’s shared, because it closed within days.` },
  { c: "after", q: "I missed the certificate issue-form deadline.", a: `${Y25}Once the form closed, mentors couldn’t reopen it. They could still forward your full name to the organizing team, but there’s no guarantee. Don’t wait: act as soon as a form is announced.` },
  { c: "after", q: "When and how are prizes and raffle winners announced?", a: `${Y25}Raffle winners were contacted after the event and had to submit a payment-details form by a deadline; people who missed the deadline had to ask the organizers whether a late form could still be processed. Mentors aren’t the prize admins, so ask the organizers in the Discord help channels. Check your registration email (and spam) and complete any form before its deadline. 2026 details haven’t been confirmed.` },
  { c: "after", q: "Can I get photos from the in-person event?", a: `I don’t have an official answer for this. Ask your hub organizers or the organizing team in the Discord.` },
  /* help */
  { c: "help", q: "Where can I get help during the Datathon?", a: `Ask the <b>Setup Guide Assistant</b> (💬 bottom right), or <a href="${CFG.discordInvite}" target="_blank" rel="noopener">join the Discord</a> and post in the mentor channels, or mention <b>@simanga_</b>. Say what you tried and include any error message.` },
  { c: "help", q: "Can mentors fix certificate, prize or raffle problems?", a: `Mentors can pass your message to the organizers, but they aren’t the admins for certificates, raffles or prizes. Share your full name and team name, and avoid posting personal details such as ID numbers publicly.` },
  { c: "help", q: "Someone in the Discord is advertising a service or link — is it official?", a: `Treat it as unofficial unless it comes from the organizers in an announcement channel. Don’t pay anyone, and don’t share passwords, ID numbers or key files. Tell a mentor or moderator.` },
];

let faqCat = "all";
function viewFaq() {
  const attr = (s) => s.replace(/"/g, "&quot;");
  const plain = (f) => (f.q + " " + f.a).replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").toLowerCase();
  return `
  <div class="card">
    <span class="pill">FAQS</span>
    <h1>Frequently asked questions</h1>
    <p class="lead">Quick answers on setup, the event, submitting, and what happens afterwards. Can’t find yours? Ask the 💬 assistant or a mentor.</p>
    <input class="input" id="faqSearch" type="search" placeholder="Search, e.g. email, certificate, video, key…" autocomplete="off" aria-label="Search FAQs" />
    <div class="cats">${FAQ_CATS.map((c) => `<button type="button" class="chip ${faqCat === c[0] ? "on" : ""}" data-cat="${c[0]}">${c[1]}</button>`).join("")}</div>
    <div class="faqcount" id="faqCount"></div>
  </div>
  <div class="card" id="faqList">
    ${FAQ.map((f) => `<details class="faq" data-c="${f.c}" data-t="${attr(plain(f))}"><summary>${f.q}</summary><p>${f.a}</p></details>`).join("")}
    <div class="callout info" id="faqEmpty" hidden>No match. Try another word, ask the 💬 assistant, or reach a mentor on <a href="${CFG.discordInvite}" target="_blank" rel="noopener">Discord</a>.</div>
  </div>`;
}

function filterFaq() {
  const q = ($("#faqSearch").value || "").trim().toLowerCase();
  let n = 0;
  $$("details.faq").forEach((d) => {
    const ok = (faqCat === "all" || d.dataset.c === faqCat) && (!q || q.split(/\s+/).every((w) => d.dataset.t.includes(w)));
    d.hidden = !ok; if (ok) n++;
  });
  $("#faqEmpty").hidden = n > 0;
  $("#faqCount").textContent = n + (n === 1 ? " question" : " questions");
}

const VIEWS = [viewRegister, viewProvision, viewConnect, viewDone, viewGuide, viewFaq];

function render() {
  $("#stage").innerHTML = VIEWS[state.step]();
  bind(); updateProgress(); save();
}

function bind() {
  $$("[data-goto]").forEach((el) => el.onclick = (e) => { e.preventDefault(); state.step = +el.dataset.goto; render(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  $$("[data-copy]").forEach((el) => el.onclick = (e) => { e.preventDefault(); e.stopPropagation(); copy(el.dataset.copy, el); });
  $$(".list input[type=checkbox]").forEach((cb) => cb.onchange = () => {
    state.checks[cb.dataset.id] = cb.checked;
    cb.closest("li").classList.toggle("checked", cb.checked);
    updateProgress(); save();
  });
  $$(".os").forEach((el) => {
    const pick = () => { state.os = el.dataset.os; render(); };
    el.onclick = pick; el.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } };
  });
  const em = $("#emailTest");
  if (em) em.oninput = () => {
    const v = em.value.trim().toLowerCase(), msg = $("#emailMsg");
    if (!v) { msg.innerHTML = "Use a <b>non-Microsoft</b> email, e.g. Gmail, Yahoo, iCloud or Proton. <b>Not</b> Outlook, Hotmail, Live, or any <b>Microsoft 365</b> address (this includes many school and work emails)."; return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) { msg.innerHTML = "⏳ Keep typing a full email address…"; return; }
    const dom = v.split("@")[1];
    if (CFG.blockedDomains.includes(dom)) msg.innerHTML = `<span style="color:var(--bad)">✋ <b>${esc(dom)}</b> is a Microsoft email and IBM’s confirmation emails won’t reach it. Please use a non-Microsoft email such as Gmail, Yahoo or iCloud instead.</span>`;
    else msg.innerHTML = `<span style="color:var(--ok)">✅ Not a known Microsoft domain. One more check: if this is a school or work address, make sure it is <b>not hosted on Microsoft 365</b> (ask your school IT if unsure) — otherwise use a personal non-Microsoft email. You must be able to open this inbox.</span>`;
  };
  const fs = $("#faqSearch");
  if (fs) {
    fs.oninput = filterFaq;
    $$("[data-cat]").forEach((b) => b.onclick = () => { faqCat = b.dataset.cat; $$("[data-cat]").forEach((x) => x.classList.toggle("on", x === b)); filterFaq(); });
    filterFaq();
  }
  const r = $("#reset"); if (r) r.onclick = () => { state = { step: 0, os: null, checks: {} }; render(); };
}

$$(".step-btn").forEach((b) => b.onclick = () => { state.step = +b.dataset.step; render(); });

/* ---------- assistant ---------- */
const KB = [
  { k: ["certificate", "certificates", "raffle", "raffles", "prizes", "winner", "winners", "photos", "pictures", "wrong name", "misspell", "misspelled", "issue form"], a: "Based on the 2025 Datathon (2026 isn’t confirmed yet): certificates were issued after the event in rolling batches to everyone who took part at any stage, using the details from registration, so spell your name correctly when you register. A short-lived issue form handled wrong or missing certificates — use it as soon as it’s shared. Raffle winners were contacted after the event and had to submit a payment-details form by a deadline. Mentors can pass your message on but aren’t the admins, so ask the organizers in the Discord. See the FAQs tab for more." },
  { k: ["email", "outlook", "hotmail", "microsoft", "school", "which mail"], a: "Use a non-Microsoft email such as Gmail, Yahoo or iCloud. IBM currently has an issue with Hotmail and Outlook addresses (the activation email won’t arrive), and Microsoft 365 addresses (including many school/work emails) should be avoided too. If you already registered with a Microsoft email, register again with a non-Microsoft one." },
  { k: ["event", "code", "ssf"], a: `The event code is ${CFG.eventCode}. Enter it exactly like that in the registration form.` },
  { k: ["description", "describe"], a: `The description is just a sample and you can edit it later. For example: "${CFG.descriptionSample}"` },
  { k: ["activation", "activate", "spam", "junk", "didn't get", "no email", "not receive", "expire", "48"], a: "The email comes from noreply@linuxone.cloud.marist.edu titled “IBM LinuxONE Community Cloud Registration - Action required to complete”. Check spam/junk. The ‘Activate your account or entitlement’ link is valid for 48 hours." },
  { k: ["register", "sign up", "signup", "account"], a: `Go to ${CFG.loginUrl} in Firefox or Chrome, click Register, fill in the form (event code ${CFG.eventCode}), click “Request your trial”, then activate via the email.` },
  { k: ["unknown", "spawning", "active", "wait", "slow", "provision", "create"], a: "After you click Create, the status shows UNKNOWN, then spawning, then ACTIVE — it can take a few minutes. ACTIVE means your server is ready." },
  { k: ["image", "rhel", "flavor", "flavour", "name", "instance"], a: "Instance name: anything (e.g. test1234). Image: RHEL8.7. Flavor: LinuxONE (the only option)." },
  { k: ["key", "pem", "ssh key", "keypair", "key pair"], a: "In Step 2, under ‘Select a SSH key pair’ click Create, name it, click ‘Create a new key pair’, then select it. A .pem file downloads — keep it, you need it to connect." },
  { k: ["ip", "address"], a: `Open ${CFG.instanceUrl} (Virtual Servers). Your IP address is in the IP Address column of your ACTIVE server, and the user name is linux1. Your .pem key file is in your Downloads folder.` },
  { k: ["windows", "putty"], a: `On Windows you connect with PuTTY. Follow the official guide: ${CFG.puttyPdf} You’re done when you see the IBM LinuxONE welcome banner.` },
  { k: ["mac", "terminal", "chmod", "permission", "unprotected"], a: "On Mac, open Terminal, run: chmod 400 <path-to-key-file>, then: ssh linux1@<ip-address> -i <path-to-key-file>. Type yes when asked about the fingerprint." },
  { k: ["connect", "login", "log in", "ssh"], a: "Pick your computer in Step 3 (Windows = PuTTY, Mac = Terminal). You’re connected when you see the IBM LinuxONE banner and a prompt like [linux1@test1234 ~]$." },
  { k: ["browser", "chrome", "firefox", "safari", "edge"], a: "Use Firefox or Google Chrome for the LinuxONE Community Cloud website." },
  { k: ["who", "mentor", "created", "simanga", "help", "discord", "stuck", "support"], a: `This guide was created by Simanga Mchunu, Mentor, for the Shooting Stars Foundation × IBM — IBM Z Datathon 2026. For help, join the Discord (${CFG.discordInvite}) and post in the mentor channels, or mention @simanga_.` },
  { k: ["submit", "submission", "hack2skill", "video", "3 min", "three min", "minutes", "github", "gitlab", "repo", "title", "team name", "flowchart", "prototype"], a: `Submit at ${CFG.submitUrl}. Required: a video of max 3 minutes (problem, supporting data, your solution, and how it leverages IBM Z — show your tech stack, LinuxONE instance and model) plus your code (GitHub/GitLab link or zip). Optional: flowchart and prototype. Your project title must contain your Team Name, e.g. ${CFG.titleExample}. How-to video: ${CFG.videoHelpUrl}` },
  { k: ["judge", "judging", "criteria", "criterion", "score", "scoring", "rubric", "win", "award"], a: "Datathon criteria: (1) Value to the Community & Theme Alignment, (2) Novelty & Idea Originality, (3) Technical Design & meaningful use of the LinuxONE Community Cloud and AI/ML open-source packages. AI Innovation Excellence Awards: (1) AI Innovation & Originality, (2) Transformational Impact & Technical Excellence. Judges ask whether IBM Z is used meaningfully, not just as hosting." },
  { k: ["theme", "themes", "problem statement", "wildcard", "topic", "real-time", "secured"], a: "There is no single problem statement. Pick a theme: Real-time AI for critical decisions, or AI secured: Innovation without exposure. Or make a Wildcard entry for an important or overlooked problem outside the themes — use AI in a new, unexpected or technically ambitious way. You must leverage IBM Z (LinuxONE)." },
  { k: ["dates", "deadline", "countdown", "hubs", "campus", "campuses", "in-person", "virtual", "team size", "members", "prize", "how many people"], a: "The Datathon runs 17–18 October 2026 — in-person at 8 hubs (Saveetha Engineering College Chennai, Global Academy of Technology Bangalore, Manchester University, NYU, UT Dallas, Federation University Ballarat, Cyberjaya University, NTU Singapore) and Global Virtual. Teams of 4–6. Prize bucket $50k+. The countdown (top right) runs in UTC from 17 to 19 October." },
];
const CHIPS = ["Which email should I use?", "What is the event code?", "I didn’t get the activation email", "What do I pick for the image?", "How do I connect on Mac?", "How do I connect on Windows?", "How do I submit?", "How will I be judged?", "When do certificates arrive?"];

function localAnswer(q) {
  const t = q.toLowerCase();
  let best = null, score = 0;
  const hit = (w) => (w.length <= 3 ? new RegExp("\\b" + w + "\\b").test(t) : t.includes(w));
  for (const e of KB) { const s = e.k.filter(hit).length; if (s > score) { score = s; best = e; } }
  return best ? best.a : "I can help with registering (email, event code, description), provisioning your server, and connecting on Windows or Mac. Try one of the quick questions, or ask your mentor.";
}

const history = [];
function addMsg(text, who) {
  const d = document.createElement("div"); d.className = "msg " + who; d.textContent = text;
  $("#chatLog").appendChild(d); $("#chatLog").scrollTop = 1e9; return d;
}
async function ask(q) {
  addMsg(q, "me"); history.push({ role: "user", content: q });
  const thinking = addMsg("…", "bot");
  let reply;
  try {
    const r = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history.slice(-10), step: STEP_NAMES[state.step], os: state.os }) });
    if (!r.ok) throw new Error("no api");
    reply = (await r.json()).reply;
  } catch { reply = localAnswer(q); }
  thinking.textContent = reply; history.push({ role: "assistant", content: reply });
}
$("#chatFab").onclick = () => { $("#chat").classList.remove("hidden"); $("#chatFab").style.display = "none"; $("#chatInput").focus();
  if (!$("#chatLog").children.length) addMsg("Hi! 👋 I’m the setup guide for the IBM Z Datathon 2026. Ask me anything about registering, provisioning or connecting.", "bot"); };
$("#chatClose").onclick = () => { $("#chat").classList.add("hidden"); $("#chatFab").style.display = ""; };
$("#chatForm").onsubmit = (e) => { e.preventDefault(); const v = $("#chatInput").value.trim(); if (!v) return; $("#chatInput").value = ""; ask(v); };
$("#chips").innerHTML = CHIPS.map((c) => `<button type="button" class="chip">${c}</button>`).join("");
$$(".chip").forEach((c) => c.onclick = () => ask(c.textContent));

/* ---------- countdown (UTC) ---------- */
function tick() {
  const now = Date.now();
  let label, ms;
  if (now < CFG.countdownStart) { label = "STARTS IN"; ms = CFG.countdownStart - now; }
  else if (now < CFG.countdownEnd) { label = "ENDS IN"; ms = CFG.countdownEnd - now; }
  else { label = "DATATHON ENDED"; ms = 0; }
  const s = Math.floor(ms / 1000), p = (n) => String(n).padStart(2, "0");
  $("#cdLabel").textContent = label;
  $("#cdD").textContent = p(Math.floor(s / 86400));
  $("#cdH").textContent = p(Math.floor((s % 86400) / 3600));
  $("#cdM").textContent = p(Math.floor((s % 3600) / 60));
  $("#cdS").textContent = p(s % 60);
}
tick(); setInterval(tick, 1000);

render();
