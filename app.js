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
  jupyterRepo: "https://github.com/linuxone-community-cloud/jupyter-lab-ml",
  setupVideo: "https://www.youtube.com/watch?v=y9rZwSq8pw8",
  // Official schedule from the Hack2Skill timeline (shown there in SAST = UTC+2), stored in UTC. The site shows each visitor their own local time.
  schedule: [
    { id: "ldprep", title: "IBM Z Datathon — Get Your LinuxONE System Ready (mandatory)", start: Date.UTC(2026, 9, 16, 13, 45), end: Date.UTC(2026, 9, 16, 15, 0), note: "Mandatory session for participants to get their LinuxONE server ready. Recording: ask on Discord.", hub: true },
    { id: "submit", title: "IBM Z Datathon — Project Submissions (open until the deadline)", start: Date.UTC(2026, 9, 16, 23, 45), end: Date.UTC(2026, 9, 18, 16, 30), note: "Submissions window on Hack2Skill (hack2skill.com/event/datathon-2026). It closes 18 Oct 16:30 UTC (18:30 SAST) — don’t leave it to the last minutes.", key: true },
    { id: "au", title: "IBM Z Datathon 2026 Australia Kick-off", start: Date.UTC(2026, 9, 17, 0, 0), end: Date.UTC(2026, 9, 17, 1, 0), note: "Ballarat and Berwick campuses (Federation University).", hub: true },
    { id: "my", title: "IBM Z Datathon 2026 Malaysia and Singapore Kick-off", start: Date.UTC(2026, 9, 17, 1, 0), end: Date.UTC(2026, 9, 17, 2, 0), note: "Cyberjaya University (Malaysia) and NTU (Singapore).", hub: true },
    { id: "kickoff", title: "IBM Z Datathon 2026 Global Kick-off", start: Date.UTC(2026, 9, 17, 3, 15), end: Date.UTC(2026, 9, 17, 4, 30), note: "Global (virtual) kick-off. The programme is also announced as 9:00–10:00 AM IST — Hack2Skill lists the start at 03:15 UTC; join early and watch the Discord.", key: true },
    { id: "man", title: "IBM Z Datathon 2026 Kick-off — Manchester, UK", start: Date.UTC(2026, 9, 17, 9, 0), end: Date.UTC(2026, 9, 17, 10, 0), note: "University of Manchester (in-person hub).", hub: true },
    { id: "ny", title: "IBM Z Datathon 2026 New York Kick-off", start: Date.UTC(2026, 9, 17, 13, 0), end: Date.UTC(2026, 9, 17, 14, 0), note: "New York University (in-person hub).", hub: true },
    { id: "dal", title: "IBM Z Datathon 2026 Kick-off — Dallas", start: Date.UTC(2026, 9, 17, 14, 0), end: Date.UTC(2026, 9, 17, 15, 0), note: "UT Dallas (in-person hub).", hub: true },
    { id: "survey", title: "Feedback Survey", start: Date.UTC(2026, 9, 18, 4, 30), end: Date.UTC(2026, 9, 23, 18, 29), note: "Share your experience of the Datathon. Open until 23 Oct." },
    { id: "vclose", title: "IBM Z Datathon Virtual Closing Ceremony", start: Date.UTC(2026, 9, 18, 5, 0), end: Date.UTC(2026, 9, 18, 5, 30), note: "Virtual closing ceremony." },
    { id: "gclose", title: "Global Closing Ceremony", start: Date.UTC(2026, 9, 18, 5, 30), end: Date.UTC(2026, 9, 18, 18, 29), note: "Listed on Hack2Skill with this window; watch the Discord for the exact session time.", key: true },
  ],
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

const STEP_NAMES = ["Register", "Provision", "Connect", "Done", "Guidebook", "FAQs", "Schedule", "Review"];
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
    ["Choose your server options", "<b>Instance name:</b> anything you like, e.g. <code>test1234</code><br><b>Select an Image:</b> <code>RHEL8.7</code> (Red Hat Enterprise Linux 8.7) — mentors say Ubuntu works just as well, so pick what your team prefers<br><b>Select a Flavor:</b> <code>LinuxONE</code> (the only option)"],
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
    <div class="callout info">👥 <b>Working in a team?</b> Only <b>one member</b> creates and deploys the server; the whole team then works together on that one server. 🖥️ <b>RHEL or Ubuntu?</b> Mentors say either works — this guide uses RHEL8.7, so pick what your team prefers.</div>
    <div class="btnrow"><a class="btn sm" href="${CFG.setupVideo}" target="_blank" rel="noopener">▶ Video: Get your LinuxONE ready (2025 edition) ↗</a></div>
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
    <p class="lead" style="font-size:14px">Prefer a video? <a href="${CFG.setupVideo}" target="_blank" rel="noopener">Watch “Get Your LinuxONE Ready”</a> (2025 edition). Can’t find your <code>.pem</code>? See the <a href="#" data-goto="5">FAQs</a>.</p>
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
    <div class="callout ok">💛 <b>A kind reminder:</b> hackathons are intense. Be kind to yourself, to your teammates, and to the mentors and organisers helping many teams at once. <b>Wishing you and your team all the best in the Datathon! 🌟</b></div>
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
    <h2>🧪 Team server, labs &amp; videos</h2>
    <div class="callout info">👥 <b>One server per team.</b> Only <b>one member</b> creates and deploys the LinuxONE server — then the whole team works together on that one server. Collaborate in GitHub, deploy to the shared server, and keep the <code>.pem</code> key private.</div>
    <div class="two">
      <div class="field"><label>SETUP VIDEO</label>
        <div class="lead" style="margin:0 0 10px;font-size:14px">“IBM Z Datathon 2025 - Get Your LinuxONE Ready” by Shooting Stars Foundation. Made for last year, so follow this guide wherever the event code (<b>${CFG.eventCode}</b>) or email advice differ.</div>
        <a class="btn sm" href="${CFG.setupVideo}" target="_blank" rel="noopener">▶ Watch the video ↗</a></div>
      <div class="field"><label>HANDS-ON ML LABS (JUPYTER)</label>
        <div class="lead" style="margin:0 0 10px;font-size:14px">Fraud detection (LSTM), customer churn, MNIST digits and loan approval notebooks running on IBM Z, with ONNX/PMML export. Needs Docker on your server. Its README mentions last year’s code SSF2025 — use <b>${CFG.eventCode}</b>.</div>
        <a class="btn sm" href="${CFG.jupyterRepo}" target="_blank" rel="noopener">Open jupyter-lab-ml ↗</a></div>
    </div>
    <div class="callout warn">📌 The event guidelines list two example AI/ML labs as <b>mandatory prerequisites</b> before you build your own solution: <b>“Predictive AI Hybrid AI scenarios (multi-model)”</b> and <b>“Predictive AI + Generative AI”</b>. The repo’s notebooks have different titles, so please <b>confirm with the organisers</b> where the official labs are. Times for every event are in the <a href="#" data-goto="6">Schedule</a>.</div>
  </div>

  <div class="card">
    <h2>🎓 Mentor’s corner: how to win the Datathon</h2>
    <p class="lead" style="font-size:14px">Advice from <b>Simanga Mchunu</b>, Mentor, plus key ideas from the “How to Win a Hackathon” guide.</p>
    <div class="two">
      <div class="field"><label>SIMANGA’S ADVICE</label>
        <ul class="plain">
          <li>🎯 <b>Solve a real problem</b> — one people actually have.</li>
          <li>🤝 <b>Make it relatable</b> — to people <i>and</i> to the judges.</li>
          <li>📈 <b>Is it scalable?</b> Show how it could grow beyond the demo.</li>
          <li>🔥 <b>Passionate but data-driven</b> — let your passion show, and back it with evidence.</li>
          <li>🧭 <b>Explore the IBM Z system</b> — judges reward meaningful use of IBM Z / LinuxONE, so go beyond the basics.</li>
        </ul></div>
      <div class="field"><label>FROM “HOW TO WIN A HACKATHON”</label>
        <ul class="plain">
          <li>👥 <b>Teamwork:</b> complement skills, don’t duplicate them.</li>
          <li>🔍 <b>Understand the problem:</b> defining it is half the solution. Always ask “why does this matter?”</li>
          <li>🧩 <b>Don’t fall in love with code:</b> build an MVP, use libraries and APIs.</li>
          <li>🛠️ <b>Collaborate:</b> GitHub for version control; keep everyone in sync.</li>
          <li>🎤 <b>Present well:</b> Problem → Solution → Impact → Demo, with a confident speaker and a backup.</li>
          <li>💤 <b>Look after yourselves:</b> rest, hydrate, stay positive.</li>
        </ul></div>
    </div>
    <div class="callout ok">If you built something new, you’ve already won something. Learning, networking and building are real success. 🌟</div>
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
  { c: "setup", q: "Which image and flavor do I pick when creating my server?", a: `Image <code>RHEL8.7</code>, flavor <code>LinuxONE</code> (the only option). The instance name can be anything, e.g. <code>test1234</code>. Mentors say Ubuntu works just as well — see the OS question below.` },
  { c: "setup", q: "My server status says UNKNOWN.", a: `That’s normal. It goes UNKNOWN → spawning → <b>ACTIVE</b> and can take a few minutes. ACTIVE means your server is ready.` },
  { c: "setup", q: "Where do I find my IP address, user name and key file?", a: `On <a href="${CFG.instanceUrl}" target="_blank" rel="noopener">Virtual Servers</a>: your IP is in the <b>IP Address</b> column of your ACTIVE server and the user is <code>linux1</code>. The <code>.pem</code> key file was downloaded by your browser when you created the key pair — check your Downloads folder and keep it safe.` },
  { c: "setup", q: "How do I connect from Windows or Mac?", a: `<b>Windows:</b> follow the <a href="${CFG.puttyPdf}" target="_blank" rel="noopener">PuTTY fast start guide</a>. <b>Mac:</b> in Terminal run <code>chmod 400 &lt;path-to-key-file&gt;</code> then <code>ssh linux1@&lt;ip-address&gt; -i &lt;path-to-key-file&gt;</code> and type <code>yes</code> at the fingerprint question. Full steps are in the Connect tab.` },
  { c: "setup", q: "Mac says “UNPROTECTED PRIVATE KEY FILE” or “permission denied”.", a: `Run <code>chmod 400 &lt;path-to-key-file&gt;</code> on your <code>.pem</code> file first, then retry the <code>ssh</code> command.` },
  { c: "setup", q: "How do I know I’m connected?", a: `You’ll see the <b>IBM LinuxONE</b> welcome banner and a prompt like <code>[linux1@test1234 ~]$</code>.` },
  { c: "setup", q: "I already had a LinuxONE account and server from before — can I use them for the Datathon?", a: `Usually not. IBM staff say you must create your registration and server <b>using the event code (<code>${CFG.eventCode}</code>) and the Datathon options</b>, and an account or server created without the code may not meet the Datathon requirements. Two ways forward: (1) <b>email <a href="mailto:linux1@us.ibm.com">linux1@us.ibm.com</a></b> asking them to delete your existing registration, then register again with the event code; or (2) the quicker option — <b>register a new account with a different (non-Microsoft) email</b> and enter the event code this time, then create the server in <a href="#" data-goto="1">Step 2</a>. Whichever way, it's the <b>one</b> account/server your team will share (only one member creates it). Hurry if the Datathon is live — option 2 gets you going within minutes.` },
  { c: "setup", q: "I created the key — what do I do in the terminal now?", a: `Nothing more to do with the key itself — your <code>.pem</code> file is ready. Finish creating the server in <a href="#" data-goto="1">Step 2</a> (select that key), wait for <b>ACTIVE</b>, copy the <b>IP address</b>, then connect: <br><b>Mac / Linux (Terminal):</b> <code>chmod 600 /path/to/key.pem</code> then <code>ssh -i /path/to/key.pem linux1@&lt;ip-address&gt;</code>.<br><b>Windows (PowerShell):</b> <code>ssh -i "C:\path\to\key.pem" linux1@&lt;ip-address&gt;</code>.<br>Tips: the user is always <code>linux1</code>; there is <b>no password login</b> (key only, and root login is disabled — use <code>sudo</code>); type a normal hyphen in <code>-i</code> (copying from a web page can paste a long dash <code>–</code>, which fails); type <code>yes</code> at the fingerprint question. Send the assistant your IP and it will write the exact commands.` },
  { c: "setup", q: "How do we create the SSH key?", a: `There are two things people mean by this:<br><b>1) The key for your server (everyone needs this).</b> You don’t create it in a terminal — IBM makes it for you in <a href="#" data-goto="1">Step 2</a>: on the Create Virtual Server page, under <b>Select a SSH key pair</b> click <code>Create</code>, type any name, click <code>Create a new key pair</code>, then click your new key pair’s button to select it. Your browser downloads a <code>.pem</code> file — that is your private key. Keep it safe; you can’t get it again.<br><b>2) Your own key for a teammate (optional, for sharing one server).</b> On your own computer run <code>ssh-keygen -t ed25519</code> (press Enter to accept the defaults), then send the server owner the <b>public</b> file <code>~/.ssh/id_ed25519.pub</code> (never the private one). The owner connects to the server and appends it with <code>echo "&lt;paste public key&gt;" &gt;&gt; ~/.ssh/authorized_keys</code>. After that you can connect with <code>ssh linux1@&lt;ip&gt;</code>. On Windows 10/11, <code>ssh-keygen</code> also works in PowerShell.` },
  { c: "setup", q: "Jupyter (or my web app) won’t open in the browser, and I can’t ping the server.", a: `Don’t rely on <code>ping</code> — it uses ICMP, which is often blocked even when everything is fine (I can’t confirm LinuxONE’s rule, so test with the browser/<code>curl</code> instead). Work from the inside out, on the server over SSH:<ol><li><b>Is it running?</b> <code>docker ps</code> (or <code>podman ps</code>) — the container should show <i>Up</i> and your port. If not: <code>docker logs notebook</code>.</li><li><b>Does it answer locally?</b> <code>curl -I http://localhost:38888</code> — a reply (200/302) means the app works and the problem is the firewall/network. No reply means it’s the container/app.</li><li><b>Is it listening on all interfaces?</b> <code>sudo ss -tlnp | grep 38888</code> should show <code>0.0.0.0:38888</code> (or <code>*:38888</code>), not <code>127.0.0.1</code>. For Jupyter use <code>--ip=0.0.0.0</code>. With Podman, if <code>--network host</code> misbehaves, publish the port instead (<code>-p 38888:8888</code>, using the container’s own Jupyter port), or run it with <code>sudo podman</code>.</li><li><b>Firewall:</b> only SSH is open by default. Run <code>sudo iptables -I INPUT -p tcp --dport 38888 -j ACCEPT</code>, then check <code>sudo iptables -L INPUT -n --line-numbers</code> — your ACCEPT rule must be above any REJECT/DROP rule. On RHEL, if <code>firewalld</code> is running (<code>systemctl status firewalld</code>), also check <code>sudo firewall-cmd --list-ports</code>; the LinuxONE guide covers firewalld/ufw.</li><li><b>From your side:</b> use <code>http://&lt;server-ip&gt;:38888</code> (<b>http</b>, not https), the public IP from the Virtual Servers page, and the token (<code>Your_Token1</code> by default). Some school/office/VPN networks block unusual ports — try a phone hotspot.</li></ol>Still stuck? Send the assistant what <code>docker ps</code>, the <code>curl</code> and the <code>ss</code> commands print and it can tell which layer is failing — or use “Draft a message for mentors”.` },
  { c: "setup", q: "pip install datasets fails: “installing build dependencies for pyarrow … error”", a: `What the log says: <code>datasets</code> needs a recent <b>pyarrow</b>, but for your platform (<code>s390x</code>) pip found <b>no ready-made wheel</b> — it downloaded the <i>source</i> (<code>pyarrow-…tar.gz</code>) and failed while preparing to compile it (one of its build tools, such as <code>libcst</code>, is itself being built from source and needs compilers/Rust). Note that <code>numpy</code> <i>did</i> install as an s390x wheel, so only pyarrow is the problem. Try, in order:<ol><li><b>See which pyarrow versions have an s390x wheel:</b> <code>pip install --only-binary=:all: pyarrow</code> (it installs the newest wheel that exists, or tells you there is none). If that works, you can then install <code>datasets</code> with <code>--no-deps</code> plus its other dependencies — or an older <code>datasets</code> release whose pyarrow requirement is lower: <code>pip install --only-binary=pyarrow "datasets&lt;VERSION&gt;"</code> (pick a lower version; <code>pip index versions datasets</code> lists them).</li><li><b>Use conda-forge</b> (often has s390x builds): Miniforge for Linux s390x, then <code>conda install -c conda-forge pyarrow datasets</code>.</li><li><b>Check if the Jupyter container already has it:</b> <code>python -c "import pyarrow, datasets"</code>.</li><li><b>Last resort — build from source:</b> install compilers first (RHEL <code>sudo dnf install gcc gcc-c++ cmake rust cargo python3-devel</code>; Ubuntu <code>sudo apt install build-essential cmake cargo python3-dev</code>), then retry. It is slow and can still fail.</li></ol>The <b>real error is at the very bottom</b> of the 493 lines — paste the last ~20 lines and the assistant can tell which of these applies. Do you really need <code>datasets</code>? If it’s only to read CSV/Parquet, pandas alone may be enough.` },
  { c: "setup", q: "pip install pyarrow fails in my venv.", a: `Please send the <b>exact error</b> (the last 15 lines) — it decides the fix. A likely cause on LinuxONE (IBM Z, <code>s390x</code>) is that pip can’t find a ready-made wheel for your Python version and tries to <b>build from source</b>, which fails without compilers. I can’t confirm which pyarrow versions publish s390x wheels, so try these in order:<ol><li>First check it isn’t already there: <code>python3 -c "import pyarrow; print(pyarrow.__version__)"</code> — the Jupyter lab container ships many ML packages.</li><li><code>python3 -m pip install --upgrade pip setuptools wheel</code>, then <code>pip install pyarrow</code> again.</li><li><b>Install the OS package</b> and let your venv see it: Ubuntu <code>sudo apt install python3-pyarrow</code>; RHEL <code>sudo dnf install python3-pyarrow</code> (if the repo has it). Create the venv with <code>python3 -m venv --system-site-packages venv</code>.</li><li><b>conda-forge</b> often has s390x builds: install Miniforge for Linux s390x, then <code>conda install -c conda-forge pyarrow</code>.</li><li>Building from source needs compilers first: Ubuntu <code>sudo apt install build-essential cmake python3-dev</code>; RHEL <code>sudo dnf install gcc gcc-c++ cmake python3-devel</code> — it is slow and can still fail, so use it last.</li></ol>If you only need it for reading/writing Parquet or CSV, pandas with another engine may do — or ask a mentor on Discord.` },
  { c: "setup", q: "Who creates the server — does every teammate need one?", a: `Only <b>one member</b> of your team creates and deploys the server (the quota is 1 instance per person). After that the <b>whole team works together on that one server</b>. Please don’t post the <code>.pem</code> key file anywhere public: send it privately inside your team, or (tidier) have each teammate create their own SSH key and ask the server owner to add the teammate’s <b>public</b> key to <code>~/.ssh/authorized_keys</code>. Everyone can still collaborate in GitHub and deploy to the shared server.` },
  { c: "setup", q: "Is there a video on setting up LinuxONE?", a: `Yes — watch <a href="${CFG.setupVideo}" target="_blank" rel="noopener">“IBM Z Datathon 2025 - Get Your LinuxONE Ready”</a> from Shooting Stars Foundation. It was made for last year’s Datathon, so the event code (this year: <code>${CFG.eventCode}</code>) and the email advice (non-Microsoft only) may differ — follow this guide wherever they do.` },
  { c: "setup", q: "I haven’t received my LinuxONE ID and password.", a: `You create your own LinuxONE account in <a href="#" data-goto="0">Step 1</a> with event code <code>${CFG.eventCode}</code>, and IBM then emails you an activation link. Check your <b>spam/junk</b> folder first. Use a non-Microsoft email — Hotmail, Outlook and Microsoft 365 addresses currently don’t receive IBM’s emails. Still nothing? Ask in the Discord with your team name, and send your email by direct message to an organiser rather than posting it publicly.` },
  { c: "setup", q: "Does LinuxONE support React JS and FastAPI?", a: `Yes. Mentors confirm that React JS and FastAPI work on LinuxONE and come pre-installed. If something you need is missing, you can install it, or check what is already on your server first.` },
  { c: "setup", q: "The website says RHEL 8.7 but another document says Ubuntu. Which OS image should we pick?", a: `Either works. Mentors say the OS makes little difference — they work almost the same for this — so pick whichever your team is most comfortable with. This guide walks through <code>RHEL8.7</code>, and the Jupyter lab repo’s README uses Ubuntu 22.04. If you choose Ubuntu, select the Ubuntu image offered in the list. What matters is your problem statement, your solution and your tech stack.` },
  { c: "setup", q: "I can’t find my .pem file.", a: `Check these in order: (1) your browser’s <b>Downloads</b> list (in Chrome press <code>Ctrl+J</code>, or <code>Cmd+Shift+J</code> on a Mac); (2) search your computer for <code>*.pem</code> (File Explorer on Windows; on a Mac run <code>find ~ -name "*.pem" 2&gt;/dev/null</code> in Terminal); (3) if a teammate created the server, <b>ask them</b> — they have the key. IBM only gives you the key when the key pair is created, so I can’t recover it for you. If your server is brand new with nothing on it, the simplest fix is to delete it and create a new one with a new key pair. If it already has work on it, ask a mentor in the Discord <b>before</b> deleting anything.` },
  /* event */
  { c: "event", q: "Do I have to attend in person?", a: `Not necessarily. The Datathon runs in person at 8 hubs <b>and</b> as Global Virtual, so you can take part from anywhere. See the Guidebook for the list of hubs.` },
  { c: "event", q: "How big can my team be?", a: `Teams have <b>4–6 members</b>.` },
  { c: "event", q: "Do I have to pick a theme?", a: `Choose a problem under one theme: <b>Real-time AI for critical decisions</b> or <b>AI secured: Innovation without exposure</b>. If you find an important or overlooked problem outside both, make a <b>wildcard</b> entry and use AI in a new, unexpected or technically ambitious way.` },
  { c: "event", q: "Do I have to use IBM Z (LinuxONE)?", a: `Yes — your solution must leverage the IBM Z (LinuxONE) platform. Judges ask whether it’s used <b>meaningfully, not just as hosting</b>, so show your LinuxONE instance and your model in the video.` },
  { c: "event", q: "What do I submit, and where?", a: `Submit on <a href="${CFG.submitUrl}" target="_blank" rel="noopener">Hack2Skill</a>. <b>Required:</b> a video of max 3 minutes and your code (GitHub/GitLab link or zip). <b>Optional:</b> a flowchart of your design and a prototype. Not sure how? <a href="${CFG.videoHelpUrl}" target="_blank" rel="noopener">Watch the how-to video</a>.` },
  { c: "event", q: "What should my 3-minute video cover?", a: `The <b>problem statement</b>, the <b>data</b> that supports the problem, your <b>solution</b>, and — most important — <b>how it leverages IBM Z</b> (share your tech stack, show your LinuxONE instance and model). The video is compulsory and must be 3 minutes or less.` },
  { c: "event", q: "How should I name my project?", a: `The project title must contain your Team Name, e.g. <code>${esc(CFG.titleExample)}</code>.` },
  { c: "event", q: "What time zone is the countdown in?", a: `The countdown is a live timer, so it’s the same moment for everyone: it counts down to the Global Kick-off, then to the project-submission deadline (18 Oct, 16:30 UTC). The <a href="#" data-goto="6">Schedule</a> tab shows every event in your own time zone.` },
  { c: "event", q: "How will projects be judged?", a: `On value to the community and theme fit, novelty and originality, and technical design including meaningful use of the LinuxONE Community Cloud and AI/ML open-source packages. The AI Innovation Excellence Awards add AI innovation &amp; originality and transformational impact &amp; technical excellence. Details are in the Guidebook.` },
  { c: "event", q: "First time — how do I take part? (the simple version)", a: `Welcome — everyone starts somewhere, and you can do this. 🌟 In plain steps:<ol><li><b>Be in a team</b> of 4–6 (if you’re unsure, ask on the Discord).</li><li><b>One teammate sets up the server:</b> register on LinuxONE with event code <code>${CFG.eventCode}</code> (a non-Microsoft email), create the server, connect — <a href="#" data-goto="0">Steps 1–3</a>. The whole team then shares that one server.</li><li><b>Choose a real problem</b> from the themes in the <a href="#" data-goto="4">Guidebook</a> and plan a small, working version (an MVP).</li><li><b>Build it together</b> in GitHub during the Datathon window and <b>deploy it on LinuxONE</b> (see the <a href="#" data-goto="6">Schedule</a> for your local times).</li><li><b>Submit</b> a video (max 3 minutes) and your code on <a href="${CFG.submitUrl}" target="_blank" rel="noopener">Hack2Skill</a>. Tip: use the Problem → Solution → Impact → Demo story.</li></ol>Stuck at any point? Ask the 💬 assistant or the mentors on Discord — asking is expected. Be kind to yourself and your team, and enjoy it. All the best! 🌟` },
  { c: "event", q: "Can someone review our project before we submit?", a: `Yes — use the <a href="#" data-goto="7">Review tab</a>. Enter your problem, data, solution and how it uses IBM Z, plus your repo and video links. It checks the <b>deliverables</b> (code link, video ≤ 3 min, title with team name, deployed on LinuxONE, built during the Datathon), whether the project <b>fits the guidelines</b>, and how it lines up with the <b>judging criteria</b>, then lists what to fix. For a public GitHub repo it also scans the README and commit dates. It’s an indicative check, not a prediction — mentors and judges decide, and nobody can promise a win.` },
  { c: "event", q: "Mentor’s advice: how do we win the Datathon?", a: `Simanga’s advice: <b>solve a real problem</b>; make it <b>relatable</b> to people and to the judges; show it’s <b>scalable</b>; be <b>passionate but data-driven</b>; and <b>explore the IBM Z system</b> — judges reward meaningful use of IBM Z / LinuxONE. From the “How to Win a Hackathon” guide: complement each other’s skills, define the problem well, build an MVP rather than perfect code, use GitHub, tell a clear story (Problem → Solution → Impact → Demo), and look after yourselves. More in the <a href="#" data-goto="4">Guidebook</a>. No guarantees, of course — but all the best! 🌟` },
  { c: "event", q: "When does everything happen, in my time zone?", a: `Open the <a href="#" data-goto="6">Schedule</a> tab — every event is shown in <b>your own time zone</b> with UTC underneath, plus add-to-calendar buttons. Key times (UTC): Global Kick-off <b>17 Oct, 03:15–04:30</b>; <b>project submissions close 18 Oct, 16:30 UTC</b> (18:30 SAST); closing ceremonies 18 Oct from 05:00 UTC; feedback survey open until 23 Oct 18:29 UTC. Hub kick-offs (Australia, Malaysia/Singapore, Manchester, New York, Dallas) are listed too. The official source is the <a href="${CFG.submitUrl}" target="_blank" rel="noopener">Hack2Skill</a> timeline.` },
  { c: "event", q: "Can we reuse code we wrote before the Datathon?", a: `Mentors say your team’s work must be done <b>during the Datathon</b>, not old work — they’ve phrased it as “within 24 hours of the Datathon”. So please don’t submit an implementation that already existed before the event. I don’t have a confirmed rule for partial reuse (for example open-source libraries or early ideas), so ask the organisers on Discord before relying on anything you built earlier. The official window is in the <a href="#" data-goto="6">Schedule</a>.` },
  { c: "event", q: "Do we deploy to LinuxONE at the start, throughout, or only at the end?", a: `Mentors say the project <b>must be deployed on LinuxONE</b>. A good flow: collaborate in GitHub, then deploy the team’s work to your LinuxONE server — all within the Datathon window. <i>Tip:</i> do a small first deployment early so any surprises (packages, ports, permissions) show up long before the final hours. I’m not aware of an official step-by-step deployment guide; the <a href="${CFG.jupyterRepo}" target="_blank" rel="noopener">jupyter-lab-ml</a> repo is the closest hands-on sample, and the organisers can confirm if there is more.` },
  { c: "event", q: "Should each member work separately and integrate later, or share one environment?", a: `Mentors suggest collaborating in <b>GitHub</b> (everyone on their own part) and then deploying the integrated project on your team’s <b>one shared LinuxONE server</b> — only one member creates it (see the team-server question). Merge and deploy regularly rather than only at the end.` },
  { c: "event", q: "What exactly must we submit — repo, deployment, video, presentation?", a: `The official required items are a <b>video of max 3 minutes</b> and your <b>code</b> (GitHub/GitLab link or zip) on <a href="${CFG.submitUrl}" target="_blank" rel="noopener">Hack2Skill</a>; a flowchart and prototype are optional. Mentors also suggest preparing a short <b>PowerPoint</b> summarising your problem and solution — it helps you plan the video. Your project should be <b>deployed on LinuxONE</b> and shown in the video. Check the submission page for the exact fields.` },
  { c: "event", q: "Do we have to submit Jupyter notebooks, or just the final product?", a: `Notebooks aren’t a listed required submission. Submit the video and your code; judges score with the rubric (value, originality, and meaningful use of IBM Z / LinuxONE). If your solution lives in notebooks, include them in your repo as part of your code.` },
  { c: "event", q: "Where are the two mandatory AI/ML labs?", a: `The event guidelines say two example AI/ML labs are <b>mandatory prerequisites</b> before teams build their own solution: “Predictive AI Hybrid AI scenarios (multi-model)” and “Predictive AI + Generative AI”. The LinuxONE community’s <a href="${CFG.jupyterRepo}" target="_blank" rel="noopener">jupyter-lab-ml</a> repo has hands-on notebooks, but their titles differ, so <b>I can’t confirm they’re the same labs</b>. Please ask the organisers in the Discord where the official labs are and how completion is checked.` },
  { c: "event", q: "Jupyter Lab says “unauthorized” / what is the password or token?", a: `Jupyter asks for a <b>token</b>, not your LinuxONE password — so typing a password there is rejected. Per the lab instructions the default token is <code>Your_Token1</code> (case-sensitive, no spaces). SSH and <code>sudo</code> don’t use a password either: you connect with your <code>.pem</code> key. If the token still fails: (1) SSH in and run <code>docker ps</code> — a container named <code>notebook</code> should be running (if not, <code>docker ps -a</code> and <code>docker logs notebook</code>); (2) set your own token by removing and restarting the container: <code>docker rm -f notebook</code>, then the same <code>docker run …</code> command with <code>jupyter notebook --ip=0.0.0.0 --NotebookApp.port=38888 --ServerApp.port=38888 --ServerApp.token='MyNewToken1'</code> added at the end (you may also need <code>--security-opt seccomp=unconfined</code>); (3) if the page doesn’t load at all, open the port: <code>sudo iptables -I INPUT -p tcp --dport 38888 -j ACCEPT</code>. If it’s <i>SSH</i> that says “Permission denied (publickey)”, check the key path, that it is the key for this server, and run <code>chmod 600 &lt;key&gt;.pem</code>.` },
  { c: "event", q: "How do I run the Jupyter ML lab on my server?", a: `The <a href="${CFG.jupyterRepo}" target="_blank" rel="noopener">jupyter-lab-ml</a> repo has four notebooks (fraud-detection LSTM, customer churn, MNIST digits, loan approval) that run Keras, TensorFlow, PyTorch, XGBoost and scikit-learn on IBM Z. In short: create your server, SSH in, install Docker, pull the prebuilt image, start the container on port <code>38888</code>, open that port in the firewall and browse to <code>http://&lt;your-ip&gt;:38888</code>. Follow the repo README for the exact commands. Heads-up: it describes an Ubuntu 22.04 server (<code>README_RHEL.md</code> covers RHEL 9.6) and mentions last year’s event code — use <code>${CFG.eventCode}</code>.` },
  { c: "event", q: "I didn’t get an in-person confirmation email.", a: `Check your spam/junk first. An SSF organiser has said that if there is no email for in-person participation, <b>please attend virtually</b>, and that concerns are being raised with the team. I can’t promise how individual cases will be resolved, so if you registered for in-person, ask in the Discord with your <b>team name and hub</b> — and send your email by direct message to an organiser instead of posting it publicly.` },
  { c: "event", q: "Will virtual teams be judged or rewarded differently from in-person teams?", a: `I don’t have a confirmed answer, and I don’t want to guess. Some participants have asked whether in-person and virtual teams are compared together, or whether in-person rewards differ. Please ask the organisers in the Discord and watch the official announcements.` },
  { c: "event", q: "Can we change our theme or idea after submitting the abstract?", a: `Not confirmed yet. Ask the organisers in the Discord before changing anything, and mention your team name. Whatever you decide, your final project still needs to be built during the Datathon and cover the problem, the data, your solution and how it uses IBM Z.` },
  { c: "event", q: "I missed a session — will there be a recording?", a: `Mentors say you will get the recording. Watch the Discord announcements for where it is shared.` },
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
  { c: "help", q: "I’m frustrated — nothing is working.", a: `That’s completely understandable — hackathons are stressful, especially with a clock ticking, and it isn’t your fault. Take a breath, then tell the 💬 assistant exactly what you see; it can walk you through the fix or write a ready-to-send message for the mentors. A gentle reminder: be kind to yourself, to your teammates, and to the mentors and organisers who are helping many teams at once. <b>Wishing you and your team all the best in the hackathon!</b> 🌟` },
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

/* ---------- Schedule (local time + calendar export) ---------- */
const SCH = Object.fromEntries(CFG.schedule.map((e) => [e.id, e]));
function fmtLocal(ms) { return new Intl.DateTimeFormat(undefined, { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZoneName: "short" }).format(new Date(ms)); }
function fmtShort(ms) { return new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZoneName: "short" }).format(new Date(ms)); }
function fmtUtc(ms) { return new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "UTC" }).format(new Date(ms)) + " UTC"; }
const icsDate = (ms) => new Date(ms).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
const gcalUrl = (e) => "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(e.title) + "&dates=" + icsDate(e.start) + "/" + icsDate(e.end) + "&details=" + encodeURIComponent(e.note);
const evState = (e) => { const n = Date.now(); return n < e.start ? "upcoming" : n < e.end ? "live" : "ended"; };

function icsFold(line) { const out = []; while (line.length > 74) { out.push(line.slice(0, 74)); line = " " + line.slice(74); } out.push(line); return out.join("\r\n"); }
const icsEsc = (s) => s.replace(/\\/g, "\\\\").replace(/;/g, "\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
function buildIcs(events) {
  const L = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//IBM Z Datathon 2026//Setup Guide//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH"];
  for (const e of events) {
    L.push("BEGIN:VEVENT", "UID:" + e.id + "-ibmz-datathon-2026@setup-guide", "DTSTAMP:" + icsDate(Date.now()), "DTSTART:" + icsDate(e.start), "DTEND:" + icsDate(e.end),
      "SUMMARY:" + icsEsc(e.title), "DESCRIPTION:" + icsEsc(e.note + "\nIBM Z Datathon 2026 · Shooting Stars Foundation x IBM"),
      "BEGIN:VALARM", "TRIGGER:-PT15M", "ACTION:DISPLAY", "DESCRIPTION:" + icsEsc(e.title + " starts soon"), "END:VALARM", "END:VEVENT");
  }
  L.push("END:VCALENDAR");
  return L.map(icsFold).join("\r\n") + "\r\n";
}
function downloadIcs(id) {
  const evs = id === "all" ? CFG.schedule.filter((e) => !e.hub) : CFG.schedule.filter((e) => e.id === id);
  if (!evs.length) return;
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([buildIcs(evs)], { type: "text/calendar;charset=utf-8" }));
  a.download = id === "all" ? "ibm-z-datathon-2026.ics" : id + ".ics";
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

function viewSchedule() {
  let tz = "your device’s time zone";
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || tz; } catch {}
  return `
  <div class="card">
    <span class="pill">SCHEDULE</span>
    <h1>When everything happens</h1>
    <p class="lead">Every time below is shown in <b>your own time zone</b> (${esc(tz)}), with UTC underneath so everyone can compare.</p>
    <div class="btnrow"><button class="btn" data-ics="all">📅 Add the main events to my calendar (.ics)</button></div>
    <div class="callout warn">⚠️ <b>Always double-check the deadline on the official <a href="${CFG.submitUrl}" target="_blank" rel="noopener">Hack2Skill page</a>.</b> If it ever shows a different time from this page, <b>Hack2Skill wins</b> — and please tell a mentor on Discord so we can fix it here.</div>
    <div class="callout info">The .ics file works with Apple Calendar, Outlook and Google Calendar, and every event has its own add button too. Hub kick-offs (Australia, Malaysia/Singapore, Manchester, New York, Dallas) have their own buttons. Your calendar shows each event in your local time and reminds you 15 minutes before.</div>
  </div>
  <div class="card">
    ${CFG.schedule.slice().sort((a, b) => a.start - b.start).map((e) => { const st = evState(e); return `
    <div class="ev ${st === "live" ? "live" : ""}">
      <span class="badge ${st === "live" ? "go" : ""} state">${st === "live" ? "● LIVE NOW" : st === "upcoming" ? "UPCOMING" : "FINISHED"}</span>
      <h3>${e.title}${e.key ? " <span class=\"badge\">KEY</span>" : ""}</h3>
      <div class="when">
        <div><small>STARTS (YOUR TIME)</small><b>${fmtLocal(e.start)}</b><div class="utc">${fmtUtc(e.start)}</div></div>
        <div><small>ENDS (YOUR TIME)</small><b>${fmtLocal(e.end)}</b><div class="utc">${fmtUtc(e.end)}</div></div>
      </div>
      <p class="lead" style="margin:0 0 10px;font-size:14px">${e.note}</p>
      <div class="btnrow" style="margin:0"><a class="btn sm" href="${gcalUrl(e)}" target="_blank" rel="noopener">Google Calendar ↗</a><button class="btn sm ghost" data-ics="${e.id}">Apple / Outlook (.ics)</button></div>
    </div>`; }).join("")}
  </div>`;
}

const VIEWS = [viewRegister, viewProvision, viewConnect, viewDone, viewGuide, viewFaq, viewSchedule, () => (window.REVIEW ? REVIEW.view() : "<div class=\"card\">Review is unavailable.</div>")];

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
  if (window.REVIEW) REVIEW.bind();
  $$("[data-ics]").forEach((b) => b.onclick = () => downloadIcs(b.dataset.ics));
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
  { k: ["schedule", "kick-off", "kickoff", "kick off", "closing ceremony", "feedback survey", "calendar", "what time", "when is", "when does", "local time", "time zone", "timezone", "submissions close", "submission deadline", "deadline"], a: "Key times (UTC): Global Kick-off 17 Oct 03:15–04:30; PROJECT SUBMISSIONS CLOSE 18 Oct 16:30 UTC (18:30 SAST); Virtual Closing Ceremony 18 Oct 05:00–05:30; Global Closing Ceremony from 05:30; feedback survey open until 23 Oct 18:29. Hub kick-offs: Australia 17 Oct 00:00 UTC, Malaysia/Singapore 01:00, Manchester 09:00, New York 13:00, Dallas 14:00. The Schedule tab shows each one in your own time zone and lets you add it to your calendar. If Hack2Skill shows something different, Hack2Skill wins." },
  { k: ["one member", "only one member", "team server", "same server", "share the server", "share server", "who creates", "who deploys", "one server", "shared environment"], a: "Only one member of your team creates and deploys the server; the whole team then works together on that one server. Collaborate in GitHub and deploy to the shared server. Don’t post the .pem key publicly — share it privately in your team, or have each teammate add their own public SSH key to ~/.ssh/authorized_keys on the server." },
  { k: ["setup video", "set up video", "setting up", "tutorial", "walkthrough", "youtube", "get your linuxone ready"], a: `Watch “IBM Z Datathon 2025 - Get Your LinuxONE Ready” from Shooting Stars Foundation: ${CFG.setupVideo} It was made for last year, so use this year’s event code (${CFG.eventCode}) and a non-Microsoft email.` },
  { k: ["created the key", "created my key", "created it", "key is created", "now what", "what next", "next step after", "telling me to do", "terminal now", "after creating the key", "after the key", "en dash", "unknown option"], a: "Your .pem key is ready — nothing else to do with it. Finish creating the server in Step 2 (select that key), wait for ACTIVE and copy the IP address. Then: Mac/Linux Terminal: chmod 600 /path/to/key.pem, then ssh -i /path/to/key.pem linux1@<ip>. Windows PowerShell: ssh -i \"C:\\path\\to\\key.pem\" linux1@<ip>. The user is always linux1, there is no password login (key only; root is disabled, use sudo), and use a normal hyphen in -i (a pasted long dash fails). Send me your IP and I'll write the exact commands." },
  { k: ["first time", "never done", "new to this", "beginner", "how do i participate", "how do i take part", "how to participate", "how do i go about", "how do i get started", "get started", "where do i start", "where to start", "what do i do"], a: "Welcome — you can do this! Simple version: (1) Be in a team of 4–6. (2) One teammate sets up the server: register on LinuxONE with event code SSF2026 and a non-Microsoft email, create the server and connect (Steps 1–3); the team shares that one server. (3) Pick a real problem from the Guidebook themes and plan a small working version (MVP). (4) Build together in GitHub during the Datathon window and deploy it on LinuxONE. (5) Submit a video (max 3 min) and your code on Hack2Skill. Ask me or the mentors whenever you're stuck. All the best! 🌟" },
  { k: ["review my project", "review my code", "check my project", "check my code", "is it winnable", "winnable", "ready to submit", "does it fit", "fit the guidelines", "rate my project", "evaluate my", "feedback on my project", "feedback on my code", "review my deliverables"], a: "Open the Review tab: enter your problem, data, solution, how it uses IBM Z, plus your repo and video links. It checks your deliverables, whether the project fits the Datathon guidelines, and how it lines up with the judging criteria, then lists what to fix. If your repo is public on GitHub it also scans it (README, commit dates vs the Datathon window, IBM Z signals). It's an indicative check — nobody can promise a win." },
  { k: ["create the ssh key", "create ssh key", "create an ssh key", "generate ssh key", "generate a key", "ssh-keygen", "make an ssh key", "how to create the key", "how do we create the ssh", "create the key", "create a key", "new key pair"], a: "Your server key is created for you in Step 2: under 'Select a SSH key pair' click Create, type a name, click 'Create a new key pair', then select it — your browser downloads the .pem private key (keep it safe, it can't be re-downloaded). To give a teammate their own access instead, they run ssh-keygen -t ed25519 on their computer and send the server owner the PUBLIC file ~/.ssh/id_ed25519.pub; the owner appends it to ~/.ssh/authorized_keys on the server. Never share a private key publicly." },
  { k: ["win the datathon", "win a hackathon", "how to win", "winning", "tips to win", "advice", "mentor's advice", "mentors advice", "how do we win", "judges like", "mentor's corner"], a: "Simanga's advice: solve a real problem; make it relatable to people and judges; show it's scalable; be passionate but data-driven; and explore the IBM Z system — judges reward meaningful use of IBM Z/LinuxONE. From the 'How to Win a Hackathon' guide: complement each other's skills, define the problem well, build an MVP not perfect code, use GitHub, tell a clear story (Problem → Solution → Impact → Demo), and look after yourselves. All the best! 🌟" },
  { k: ["can't find my .pem", "cant find my .pem", "can't find my pem", "cant find my pem", "lost my key", "lost my pem", "lost the key", "find my pem", "find my .pem", "missing .pem", "where is my .pem"], a: "Check your browser’s Downloads list (Ctrl+J, or Cmd+Shift+J on a Mac), then search your computer for *.pem, and ask the teammate who created the server — they have the key. IBM only provides the key when the key pair is created, so it can’t be recovered. If the server is brand new with nothing on it, delete it and create a new one with a new key pair; if it has work on it, ask a mentor on Discord before deleting anything." },
  { k: ["system id", "credentials", "login information", "didn't get the login", "no login", "password"], a: `You create your own LinuxONE account in Step 1 with event code ${CFG.eventCode}; IBM emails you an activation link. Check spam/junk first, and use a non-Microsoft email (Hotmail, Outlook and Microsoft 365 addresses currently don’t receive IBM’s emails).` },
  { k: ["react", "fastapi", "flask", "django", "nodejs", "node.js"], a: "Yes — mentors confirm React JS and FastAPI work on LinuxONE and come pre-installed. You can also install what you need, or check what’s already on your server." },
  { k: ["confirmation email", "in-person confirmation", "in person confirmation", "no mail", "no confirmation", "attend virtually", "not received any mail"], a: "Check spam/junk first. An SSF organiser said that if there is no email for in-person participation, please attend virtually, and that concerns are being raised. I can’t promise how individual cases are resolved — ask the organisers on Discord with your team name and hub, and share your email by direct message, not publicly." },
  { k: ["virtual teams", "evaluated against", "judged differently", "offline reward", "offline rewards", "in-person rewards"], a: "I don’t have a confirmed answer on whether virtual and in-person teams are judged or rewarded differently, and I don’t want to guess. Please ask the organisers on Discord and watch the official announcements." },
  { k: ["change the theme", "change our theme", "change theme", "change the topic", "change our idea", "after submitting the abstract", "after the abstract"], a: "That isn’t confirmed yet — ask the organisers on Discord before changing anything, with your team name. Your final project still needs to be built during the Datathon and cover the problem, data, solution and how it uses IBM Z." },
  { k: ["recording", "recordings", "missed the session", "missed the kick", "replay"], a: "Mentors say you will get the recording. Watch the Discord announcements for where it is shared." },
  { k: ["submit notebook", "submit notebooks", "submit jupyter", "jupyter notebooks for", "final product"], a: "Notebooks aren’t a listed required submission. Submit your video (max 3 minutes) and your code; judges use the rubric. If your solution lives in notebooks, include them in your repo as part of your code." },
  { k: ["old code", "previous code", "existing code", "reuse code", "reuse the code", "before the datathon", "prebuilt", "already built", "adapt code"], a: "Mentors say your team’s work must be done during the Datathon, not old work (they’ve said “within 24 hours of the Datathon”). I don’t have a confirmed rule for partial reuse, so ask the organisers on Discord before relying on earlier code." },
  { k: ["deploy", "deployment", "integrate", "sample project", "deployment guide"], a: "The project must be deployed on LinuxONE. Collaborate in GitHub, then deploy the team’s work to your team’s one LinuxONE server, within the Datathon window — and try a first deployment early. I’m not aware of an official deployment guide; the jupyter-lab-ml repo is the closest hands-on sample." },
  { k: ["powerpoint", "presentation", "slides", "ppt"], a: "The official required items are the video (max 3 minutes) and your code. Mentors also suggest a short PowerPoint summarising your problem and solution — handy for planning your video. Check the submission page for the exact fields." },
  { k: ["already have an account", "already had an account", "existing account", "old account", "previous account", "already registered", "without the event code", "didn't have the event code", "did not have the event code", "existing vm", "my old server", "existing server", "previous vm", "registered before", "register again", "delete my registration", "linux1@us.ibm.com"], a: "Usually an account or server created without the event code can't be used for the Datathon. IBM staff suggest two options: (1) email linux1@us.ibm.com asking them to delete your existing registration, then register again with event code SSF2026; or (2) the quicker one — register a new account with a different, non-Microsoft email and enter the event code this time, then create the server in Step 2. Your team only needs one account/server (one member creates it)." },
  { k: ["can't ping", "cant ping", "cannot ping", "ping the server", "ping server", "port is open", "firewall", "iptables", "website not opening", "site not opening", "not opening", "won't open", "wont open", "can't access the site", "cant access the site", "can't access", "refused to connect", "connection refused", "podman", "ran the terminal codes", "page not loading", "timed out"], a: "Don't rely on ping (ICMP is often blocked) — test with curl/browser. On the server over SSH: (1) docker ps / podman ps — container Up? (docker logs notebook if not). (2) curl -I http://localhost:38888 — a reply means the app works and it's the firewall/network. (3) sudo ss -tlnp | grep 38888 — should listen on 0.0.0.0, not 127.0.0.1 (Jupyter needs --ip=0.0.0.0; with Podman try -p 38888:8888 or sudo podman if --network host misbehaves). (4) Firewall: only SSH is open by default — sudo iptables -I INPUT -p tcp --dport 38888 -j ACCEPT, then sudo iptables -L INPUT -n --line-numbers (your ACCEPT must be above any REJECT); if firewalld is running also check sudo firewall-cmd --list-ports. (5) In the browser use http:// (not https) with the server's public IP, port 38888 and the token (default Your_Token1); try a phone hotspot in case your network blocks odd ports. Send me what those commands print and I'll help narrow it down." },
  { k: ["datasets", "installing build dependencies", "build dependencies", "subprocess-exited-with-error", "pyarrow-26", "tar.gz", "libcst", "scikit-build-core", "cython", "linux_s390x"], a: "That log means pip found no prebuilt pyarrow wheel for s390x (numpy did get one), so it downloaded the source and failed preparing to compile it (build tools like libcst need compilers/Rust). Try: (1) pip install --only-binary=:all: pyarrow — installs the newest pyarrow wheel that exists, or says there is none; then install datasets with --no-deps and its other dependencies, or an older datasets release that accepts that pyarrow (pip index versions datasets); (2) conda-forge via Miniforge s390x: conda install -c conda-forge pyarrow datasets; (3) check python -c 'import pyarrow, datasets' in the Jupyter container; (4) last resort build from source after installing gcc, gcc-c++, cmake, rust, cargo, python3-devel (RHEL) or build-essential cmake cargo python3-dev (Ubuntu). The real error is at the bottom of the log — send the last ~20 lines. If you only need CSV/Parquet, pandas alone may do." },
  { k: ["pyarrow", "pip install", "venv", "virtualenv", "pip fails", "cannot install", "can't install", "wheel", "building wheel", "failed building"], a: "Send the exact error (last ~15 lines). A likely cause on s390x is no prebuilt wheel, so pip tries to build from source without compilers — I can't confirm which versions publish s390x wheels. Try: (1) python3 -c 'import pyarrow' — maybe already installed in the Jupyter container; (2) python3 -m pip install --upgrade pip setuptools wheel, then retry; (3) OS package + venv with --system-site-packages (Ubuntu: sudo apt install python3-pyarrow; RHEL: sudo dnf install python3-pyarrow if available); (4) conda-forge via Miniforge for Linux s390x: conda install -c conda-forge pyarrow; (5) last resort, install compilers (Ubuntu: build-essential cmake python3-dev; RHEL: gcc gcc-c++ cmake python3-devel) and build — slow, may still fail. Ask a mentor if it still fails." },
  { k: ["unauthorized", "token", "your_token1", "jupyter password", "jupyter login", "docker login", "docker password", "linux0ne", "password for docker", "permission denied (publickey)", "publickey"], a: "Jupyter asks for a token, not your LinuxONE password, so a password there is rejected as unauthorized. The default token in the lab instructions is Your_Token1 (case-sensitive). SSH and sudo use no password: you connect with your .pem key (chmod 600 it first). If the token fails: run docker ps to check the 'notebook' container is running (docker logs notebook shows errors); or restart it with your own token: docker rm -f notebook, then the same docker run command with  jupyter notebook --ip=0.0.0.0 --NotebookApp.port=38888 --ServerApp.port=38888 --ServerApp.token='MyNewToken1'  at the end. If the page won't load, open the port: sudo iptables -I INPUT -p tcp --dport 38888 -j ACCEPT." },
  { k: ["jupyter", "jupyterlab", "notebook", "notebooks", "mandatory lab", "two labs", "prerequisite", "docker", "38888", "labs"], a: `Hands-on notebooks: ${CFG.jupyterRepo} (fraud LSTM, churn, MNIST digits, loan approval). You need Docker on your server and port 38888. Its README mentions last year’s code — use ${CFG.eventCode}. The event guidelines list two mandatory example labs (“Predictive AI Hybrid AI scenarios (multi-model)” and “Predictive AI + Generative AI”); I can’t confirm the repo is the same, so please check with the organisers.` },
  { k: ["email", "outlook", "hotmail", "microsoft", "school", "which mail"], a: "Use a non-Microsoft email such as Gmail, Yahoo or iCloud. IBM currently has an issue with Hotmail and Outlook addresses (the activation email won’t arrive), and Microsoft 365 addresses (including many school/work emails) should be avoided too. If you already registered with a Microsoft email, register again with a non-Microsoft one." },
  { k: ["event", "code", "ssf"], a: `The event code is ${CFG.eventCode}. Enter it exactly like that in the registration form.` },
  { k: ["description", "describe"], a: `The description is just a sample and you can edit it later. For example: "${CFG.descriptionSample}"` },
  { k: ["activation", "activate", "spam", "junk", "didn't get", "no email", "not receive", "expire", "48"], a: "The email comes from noreply@linuxone.cloud.marist.edu titled “IBM LinuxONE Community Cloud Registration - Action required to complete”. Check spam/junk. The ‘Activate your account or entitlement’ link is valid for 48 hours." },
  { k: ["register", "sign up", "signup", "account"], a: `Go to ${CFG.loginUrl} in Firefox or Chrome, click Register, fill in the form (event code ${CFG.eventCode}), click “Request your trial”, then activate via the email.` },
  { k: ["unknown", "spawning", "active", "wait", "slow", "provision", "create"], a: "After you click Create, the status shows UNKNOWN, then spawning, then ACTIVE — it can take a few minutes. ACTIVE means your server is ready." },
  { k: ["image", "rhel", "ubuntu", "which os", "operating system", "flavor", "flavour", "name", "instance"], a: "Instance name: anything (e.g. test1234). Image: RHEL8.7 (this guide’s choice) — mentors say Ubuntu works just as well, so pick what your team prefers. Flavor: LinuxONE (the only option)." },
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
  { k: ["dates", "deadline", "countdown", "hubs", "campus", "campuses", "in-person", "virtual", "team size", "members", "prize", "how many people"], a: "The Datathon runs 17–18 October 2026 — in-person at 8 hubs (Saveetha Engineering College Chennai, Global Academy of Technology Bangalore, Manchester University, NYU, UT Dallas, Federation University Ballarat, Cyberjaya University, NTU Singapore) and Global Virtual. Teams of 4–6. Prize bucket $50k+. The countdown (top right) follows the official schedule; the Schedule tab shows every event in your local time." },
];
const CHIPS = ["Which email should I use?", "When is the kick-off?", "I didn’t get the activation email", "How do I connect on Mac?", "Jupyter says unauthorized", "I can’t find my .pem", "Who creates the team server?", "How do I submit?", "I’m stuck 😟"];

/* A tiny local "agent": used whenever the Claude-powered /api/chat is unavailable.
   It diagnoses with quick replies, takes actions in the guide (open a tab, copy a command or message), and is kind. */
const A = {
  go: (step, label) => ({ type: "goto", step, label }),
  copy: (label, text) => ({ type: "copy", label, text }),
  link: (label, url) => ({ type: "link", label, url }),
};
const WISH = "Wishing you and your team all the best in the hackathon 🌟";
const KIND = "A small reminder: be kind to yourself, to your teammates, and to the mentors and organisers who are helping many teams at once. Everyone is doing their best.";
const OPENERS = [
  "That sounds really frustrating — and it makes sense, with the clock ticking.",
  "I’m sorry this is giving you such a hard time. It isn’t your fault, and we’ll take it one small step at a time.",
  "Deep breath — you’re closer than it feels. Let’s sort this out together.",
];
const CRISIS_RE = /(kill myself|suicid|end my life|want to die|self[- ]?harm|hurt myself|no reason to live)/i;
const CRISIS = "I’m really sorry you’re feeling this way, and I’m glad you said something. You matter far more than any hackathon. Please talk to someone you trust right now, or reach out to a local crisis line or emergency service — you don’t have to carry this alone. The setup can wait; I’ll be here whenever you feel ready. 💙";
let treeOpts = {}, kindShown = false;

function helpDraft() {
  const text = ["Hi mentors, I need a hand with the IBM Z Datathon.", "Team name: <your team name>", "Hub or virtual: <your hub / Global Virtual>",
    "Where I am stuck: " + (STEP_NAMES[state.step] || "<step>") + (state.os ? " (" + state.os + ")" : ""),
    "What I see (exact message): <paste it here>", "What I have tried: <1-2 things>", "(I’ll DM my email if you need it.) Thank you!"].join("\n");
  return A.copy("Copy message for mentors", text);
}

const TREE = {
  start: { msg: "Happy to help — where are you stuck?", opts: [["Registering or the activation email", "reg"], ["Creating my server", "prov"], ["Connecting (SSH / PuTTY)", "conn"], ["Creating the SSH key", "sshkey"], ["Team access to one server", "team"], ["Jupyter says unauthorized", "jup"], ["Website not opening", "web"], ["pip / pyarrow install fails", "pip"], ["Submitting my project", "sub"], ["Review my project", "rev"]] },
  reg: { msg: "Let’s check the most common cause first. Which kind of email did you register with?", opts: [["Gmail / Yahoo / iCloud / Proton", "reg_ok"], ["Hotmail / Outlook / Live", "reg_ms"], ["A school or work email", "reg_school"], ["I registered earlier without the event code", "reg_old"]] },
  reg_ms: { msg: "That’s very likely it — and it isn’t your fault. IBM currently can’t deliver emails to Hotmail/Outlook (or Microsoft 365) addresses. Please register again with a non-Microsoft email such as Gmail, using event code SSF2026.", go: [0, "Open Step 1: Register"], end: true },
  reg_school: { msg: "School addresses are often hosted on Microsoft 365, and those don’t receive IBM’s emails either. If you’re not sure, a personal Gmail/Yahoo/iCloud address is the safe choice (event code SSF2026).", go: [0, "Open Step 1: Register"], end: true },
  reg_old: { msg: "That's a common one. An account or server created without the event code usually can't be used for the Datathon. IBM staff suggest: (1) email linux1@us.ibm.com asking them to delete your existing registration, then register again with event code SSF2026; or (2) the quicker way — register a new account with a different, non-Microsoft email and use the event code this time, then create the server in Step 2. Your team only needs one server.", go: [0, "Open Step 1: Register"], end: true },
  reg_ok: { msg: "Good choice of email. Check spam/junk for a message from noreply@linuxone.cloud.marist.edu (“Action required to complete”) — the link lasts 48 hours. If it still hasn’t come after a few minutes, a mentor can look into it; I’ve prepared a message for you.", help: true, end: true },
  prov: { msg: "What does your server show?", opts: [["UNKNOWN or spawning", "prov_wait"], ["ACTIVE", "prov_ok"], ["Error", "prov_err"], ["I can’t create one", "team"]] },
  prov_wait: { msg: "Totally normal — it goes UNKNOWN → spawning → ACTIVE and can take a few minutes. Refresh the Virtual Servers page in a little while.", end: true },
  prov_ok: { msg: "Wonderful — your server is ready! Copy its IP address from the Virtual Servers page and connect.", go: [2, "Open Step 3: Connect"], end: true },
  prov_err: { msg: "I can’t fix an Error status from here, but a mentor can. Note the instance name and what you picked — I’ve prepared a message for you.", help: true, end: true },
  team: { msg: "Each person gets 1 instance, and in a team only ONE member needs to create and deploy the server — everyone then works together on that one server. Please don’t post the .pem key publicly: share it privately in your team, or have each teammate add their own public SSH key to ~/.ssh/authorized_keys.", go: [5, "Open the FAQs"], end: true },
  conn: { msg: "What’s going on?", opts: [["I’m on Windows", "conn_win"], ["I’m on a Mac", "conn_mac"], ["I can’t find my .pem", "pem"]] },
  conn_win: { msg: "On Windows you connect with PuTTY: Host Name = your server’s IP, Connection → Data → username linux1, and your key under Connection → SSH → Auth. The official guide shows every click. Send me your IP address and I’ll write the exact settings.", links: [["Open the PuTTY guide", CFG.puttyPdf]], go: [2, "Open Step 3: Connect"], end: true },
  conn_mac: { msg: "What do you see?", opts: [["Unprotected private key or permission denied", "conn_chmod"], ["Timed out or refused", "conn_net"], ["Show me the commands", "conn_cmds"]] },
  conn_chmod: { msg: "Easy fix — lock down the key file, then retry:\n\nchmod 400 <path-to-key-file>\nssh linux1@<ip-address> -i <path-to-key-file>", end: true },
  conn_net: { msg: "Let’s check three things: (1) your server shows ACTIVE on the Virtual Servers page, (2) you copied the IP from the IP Address column, (3) the user is linux1. Some school or office networks block SSH — try another network or a phone hotspot. Send me your IP and I’ll build the exact commands.", end: true },
  sshkey: { msg: "Your server key is made for you in Step 2: under 'Select a SSH key pair' click Create, name it, click 'Create a new key pair', then select it. Your browser downloads a .pem file — that's your private key, so keep it safe. (To give a teammate their own access: they run ssh-keygen -t ed25519 and send the server owner the PUBLIC file ~/.ssh/id_ed25519.pub, which the owner adds to ~/.ssh/authorized_keys.)", go: [1, "Open Step 2: Provision"], end: true },
  rev: { msg: "Let’s check it together. The Review tab looks at your deliverables, whether you fit the Datathon guidelines and the judging criteria, and lists what to fix. It’s an honest, indicative check — it can’t promise a win, but it will show you where to focus.", go: [7, "Open the Project Review"], end: true },
  web: { msg: "Let's work from the inside out (ping often fails even when all is well). On the server run: docker ps (container Up?), then curl -I http://localhost:38888. If curl answers, it's the firewall/network: sudo iptables -I INPUT -p tcp --dport 38888 -j ACCEPT, and open http://<server-ip>:38888 (http, not https). If curl doesn't answer, check docker logs notebook and that Jupyter listens on 0.0.0.0. Tell me what you see — or ask me for the full checklist.", go: [5, "Open the FAQs"], end: true },
  pip: { msg: "Please send me the last ~15 lines of the error. A common cause on LinuxONE (s390x) is that pip can't find a prebuilt wheel and tries to compile. Try: python3 -m pip install --upgrade pip setuptools wheel, then the OS package (Ubuntu: sudo apt install python3-pyarrow, with a venv made using --system-site-packages), or conda-forge via Miniforge.", go: [5, "Open the FAQs"], end: true },
  jup: { msg: "Jupyter asks for a TOKEN, not your LinuxONE password — that's why the password is rejected. The default token is Your_Token1 (case-sensitive). SSH and sudo use your .pem key, not a password. If the token still fails, run docker ps (is the 'notebook' container running?) and I can give you the command to restart it with your own token.", go: [5, "Open the FAQs"], end: true },
  conn_cmds: { msg: "Send me your server’s IP address (like 148.100.77.251) and I’ll build the exact commands for you." },
  pem: { msg: "Check your browser’s Downloads list (Ctrl+J, or Cmd+Shift+J on a Mac), search your computer for *.pem, and ask the teammate who created the server — they have the key. IBM only gives the key when the key pair is created, so it can’t be recovered. If the server is brand new, delete it and create a new one with a new key; if it has work on it, ask a mentor before deleting anything.", help: true, end: true },
  sub: { msg: "Submissions go to Hack2Skill: a video of max 3 minutes plus your code (GitHub/GitLab link or zip). Your project title must include your Team Name. The Guidebook has a full checklist.", go: [4, "Open the Guidebook"], links: [["Open the submission page", CFG.submitUrl]], end: true },
  fixed: { msg: "That’s great to hear — well done for sticking with it! 🎉\n\n" + WISH },
  stuck: { msg: "I’m sorry it’s still not working — thank you for not giving up. Let’s hand this to a human: I’ve prepared a message with what a mentor needs. Add your team name and the exact error or a screenshot. In the meantime, please be gentle with yourself — this part really is fiddly.", help: true },
};

function node(id) {
  const n = TREE[id], actions = [];
  if (n.go) actions.push(A.go(n.go[0], n.go[1]));
  (n.links || []).forEach((l) => actions.push(A.link(l[0], l[1])));
  if (n.help) actions.push(helpDraft());
  const opts = n.opts || (n.end ? [["That fixed it 🎉", "fixed"], ["I’m still stuck", "stuck"]] : null);
  treeOpts = {}; (opts || []).forEach((o) => { treeOpts[o[0]] = o[1]; });
  return { reply: n.msg, actions, choices: opts ? opts.map((o) => o[0]) : null };
}

const STRONG = ["frustrat", "angry", "furious", "fed up", "useless", "hate this", "waste of time", "give up", "giving up", "ridiculous", "unfair", "panic", "stressed", "stressful", "wtf", "nobody", "ignored", "!!"];
const MILD = ["not working", "doesn't work", "doesnt work", "won't work", "wont work", "stuck", "can't", "cant ", "cannot", "still no", "again", "hours", "nothing works", "error", "failed"];
const frustrated = (t) => STRONG.some((w) => t.includes(w)) || MILD.filter((w) => t.includes(w)).length >= 2;
const VAGUE = /^(i'?m stuck|im stuck|help( me)?|i need help|not working|it doesn'?t work|hi|hello|hey|start)\b/;

function bestKb(t) {
  let best = null, score = 0;
  const hit = (w) => (w.length <= 3 ? new RegExp("\\b" + w + "\\b").test(t) : t.includes(w));
  for (const e of KB) { const s = e.k.filter(hit).length; if (s > score) { score = s; best = e; } }
  return best;
}
const NAV = [
  [/review my|check my project|is it winnable|winnable|ready to submit|does it fit|my project fit|rate my|evaluate my|feedback on my project/, 7, "Open the Project Review"],
  [/schedule|kick-?off|calendar|closing|time ?zone|local time|deadline|what time|when (is|does)/, 6, "Open the Schedule"],
  [/certificate|raffle|prize|in-?person|confirmation|recording|jupyter|lab|notebook|pem|team server|one member|powerpoint|old code|react|fastapi/, 5, "Open the FAQs"],
  [/submit|judg|criteria|theme|hub|team size/, 4, "Open the Guidebook"],
  [/connect|ssh|putty|chmod|terminal/, 2, "Open Step 3: Connect"],
  [/server|instance|provision|image|rhel|ubuntu|key pair|spawning|unknown/, 1, "Open Step 2: Provision"],
  [/register|email|activation|event code|sign ?up|description/, 0, "Open Step 1: Register"],
];
const navFor = (t) => { const n = NAV.find((x) => x[0].test(t)); return n ? A.go(n[1], n[2]) : null; };

function sshHelp(ip, q) {
  const t = q.toLowerCase();
  const os = /windows|putty/.test(t) ? "windows" : /\bmac\b|terminal|macbook/.test(t) ? "mac" : (state.os || "mac");
  if (os === "windows") {
    return { reply: "Here’s your PuTTY setup:\n- Host Name: " + ip + "   Port: 22   Type: SSH\n- Connection → Data → Auto-login username: linux1\n- Connection → SSH → Auth → Credentials → your private key (PuTTY needs a .ppk; PuTTYgen can convert your .pem)\n\nThen click Open and accept the host key. You’re in when you see the IBM LinuxONE banner.", actions: [A.link("Open the PuTTY guide", CFG.puttyPdf), A.go(2, "Open Step 3: Connect")], choices: null };
  }
  const pm = q.match(/(?:~|\/)[\w~./+@:-]*\.pem/);
  const k = pm ? '"' + pm[0] + '"' : "<path-to-key-file>";
  const c1 = "chmod 400 " + k, c2 = "ssh linux1@" + ip + " -i " + k;
  return { reply: "Here are your exact commands (Terminal):\n\n" + c1 + "\n" + c2 + "\n\n" + (pm ? "" : "Replace <path-to-key-file> with the real path, e.g. ~/Downloads/test1234.pem. ") + "Type yes when asked about the fingerprint. You’re in when you see the IBM LinuxONE banner.", actions: [A.copy("Copy chmod command", c1), A.copy("Copy ssh command", c2)], choices: null };
}

function localAgent(q) {
  const t = q.toLowerCase().replace(/[’‘]/g, "'");
  const pick = treeOpts[q];
  if (pick) return node(pick);
  treeOpts = {};
  if (CRISIS_RE.test(t)) return { reply: CRISIS, actions: [], choices: null };
  const mail = q.match(/[\w.+-]+@([\w-]+(?:\.[\w-]+)+)/);
  if (mail) {
    const dom = mail[1].toLowerCase();
    if (/^(outlook|hotmail|live|msn|passport)\./.test(dom)) return { reply: "Thanks — I only look at the domain, not your address. " + dom + " is a Microsoft email, and IBM currently can’t deliver its activation emails there. It isn’t your fault. Please register again with a non-Microsoft email such as Gmail, Yahoo or iCloud (event code " + CFG.eventCode + ").\n\nTip: please don’t post your email in public channels — share it by direct message with an organiser if needed.", actions: [A.go(0, "Open Step 1: Register")], choices: null };
    return { reply: "Thanks — I only look at the domain, not your address. " + dom + " isn’t a known Microsoft consumer domain, which is good. One more check: if it’s a school or work address, make sure it isn’t hosted on Microsoft 365 (ask your school IT if unsure); a personal Gmail/Yahoo/iCloud address is the safe choice. And please don’t post your email in public channels.", actions: [], choices: null };
  }
  const ipm = q.match(/\b(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)\b/);
  if (ipm) return sshHelp(ipm[0], q);
  if (/^(thanks|thank you|thx|cheers|bye|goodbye|all good|that fixed it)\b/.test(t)) return { reply: "You’re so welcome! 💙 Be kind to yourself — you’re doing well.\n\n" + WISH, actions: [], choices: null };

  const mood = frustrated(t), kb = VAGUE.test(t) && t.split(/\s+/).length < 5 ? null : bestKb(t);
  let reply = "", actions = [], choices = null;
  if (mood) reply += OPENERS[t.length % OPENERS.length] + "\n\n";
  if (kb) {
    reply += kb.a;
    const nav = navFor(t); if (nav) actions.push(nav);
    if (mood) { reply += "\n\nIf that doesn’t do it, tell me exactly what you see and we’ll keep going — or send this to a mentor:"; actions.push(helpDraft()); }
  } else if (mood || VAGUE.test(t) || t.split(/\s+/).length < 3) {
    const n = node("start"); reply += n.msg; choices = n.choices;
    if (mood) actions.push(helpDraft());
  } else {
    const n = node("start");
    reply += "I don’t have a confirmed answer for that one, and I’d rather not guess. Tell me where you’re stuck, or send it to a mentor with the message below.";
    choices = n.choices; actions.push(helpDraft());
  }
  if (mood && !kindShown) { reply += "\n\n" + KIND + "\n" + WISH; kindShown = true; }
  return { reply, actions, choices };
}

/* ---------- chat UI ---------- */
let busy = false;
const history = [];
const scrub = (t) => t.replace(/[\w.+-]+@([\w-]+(?:\.[\w-]+)+)/g, "[email@$1]"); // emails never leave the browser
function addMsg(text, who) {
  const d = document.createElement("div"); d.className = "msg " + who; d.textContent = text;
  $("#chatLog").appendChild(d); $("#chatLog").scrollTop = 1e9; return d;
}
function closeChat() { $("#chat").classList.add("hidden"); $("#chatFab").style.display = ""; }
function setChoices(list) {
  const items = list && list.length ? list : CHIPS;
  $("#chips").innerHTML = items.map((c) => `<button type="button" class="chip">${esc(String(c))}</button>`).join("");
}
function runAction(a, btn) {
  if (a.type === "goto") {
    if (!Number.isInteger(a.step) || a.step < 0 || a.step >= VIEWS.length) return;
    state.step = a.step; render(); window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.innerWidth <= 860) closeChat();
  } else if (a.type === "copy" && typeof a.text === "string") copy(a.text.slice(0, 2000), btn);
}
function addActions(after, actions) {
  if (!Array.isArray(actions) || !actions.length) return;
  const box = document.createElement("div"); box.className = "acts";
  actions.slice(0, 5).forEach((a) => {
    if (!a || typeof a.label !== "string") return;
    if (a.type === "link") {
      if (typeof a.url !== "string" || !/^https:\/\//.test(a.url)) return;
      const l = document.createElement("a"); l.className = "act"; l.textContent = a.label + " ↗"; l.href = a.url; l.target = "_blank"; l.rel = "noopener"; box.appendChild(l);
    } else {
      const b = document.createElement("button"); b.type = "button"; b.className = "act"; b.textContent = a.label; b.onclick = () => runAction(a, b); box.appendChild(b);
    }
  });
  if (box.children.length) { after.after(box); $("#chatLog").scrollTop = 1e9; }
}
async function ask(q) {
  if (busy) return; busy = true;
  addMsg(q, "me");
  history.push({ role: "user", content: scrub(q) });
  const holder = addMsg("…", "bot");
  let out = null;
  try {
    const r = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history.slice(-10), step: STEP_NAMES[state.step], os: state.os }) });
    if (r.ok) { const j = await r.json(); if (j && typeof j.reply === "string" && j.reply.trim()) { out = j; treeOpts = {}; } }
  } catch {}
  if (!out) out = localAgent(q);
  holder.textContent = out.reply;
  history.push({ role: "assistant", content: out.reply });
  addActions(holder, out.actions);
  setChoices(out.choices);
  busy = false;
}
$("#chatFab").onclick = () => {
  $("#chat").classList.remove("hidden"); $("#chatFab").style.display = "none"; $("#chatInput").focus();
  if (!$("#chatLog").children.length) addMsg("Hi! 👋 I’m your setup guide for the IBM Z Datathon 2026. I can walk you through registering, creating your server and connecting — and if something isn’t working, tell me what you see and we’ll fix it together. Take a breath, you’ve got this 🌟", "bot");
};
$("#chatClose").onclick = closeChat;
$("#chatForm").onsubmit = (e) => { e.preventDefault(); const v = $("#chatInput").value.trim(); if (!v) return; $("#chatInput").value = ""; ask(v); };
$("#chips").onclick = (e) => { const b = e.target.closest(".chip"); if (b) ask(b.textContent); };
setChoices();

/* ---------- countdown (follows the official schedule) ---------- */
function tick() {
  const now = Date.now();
  let label, target, sub;
  if (now < SCH.kickoff.start) { label = "KICK-OFF IN"; target = SCH.kickoff.start; sub = "Kick-off " + fmtShort(target); }
  else if (now < SCH.submit.end) { label = "SUBMISSIONS CLOSE IN"; target = SCH.submit.end; sub = "Deadline " + fmtShort(target); }
  else { label = "DATATHON ENDED"; target = now; sub = "Thank you for taking part 💙"; }
  const s = Math.max(0, Math.floor((target - now) / 1000)), p = (n) => String(n).padStart(2, "0");
  $("#cdLabel").textContent = label;
  $("#cdD").textContent = p(Math.floor(s / 86400));
  $("#cdH").textContent = p(Math.floor((s % 86400) / 3600));
  $("#cdM").textContent = p(Math.floor((s % 3600) / 60));
  $("#cdS").textContent = p(s % 60);
  $("#cdSub").textContent = sub;
}
tick(); setInterval(tick, 1000);

render();
