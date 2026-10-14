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
};

const STEP_NAMES = ["Register", "Provision", "Connect", "Done"];
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
  if (i === 3) return false;
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
    <div class="nav" style="justify-content:center"><button class="btn ghost" data-goto="2">← Back</button><button class="btn" id="reset">Start over</button></div>
  </div>`;
}

const VIEWS = [viewRegister, viewProvision, viewConnect, viewDone];

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
  const r = $("#reset"); if (r) r.onclick = () => { state = { step: 0, os: null, checks: {} }; render(); };
}

$$(".step-btn").forEach((b) => b.onclick = () => { state.step = +b.dataset.step; render(); });

/* ---------- assistant ---------- */
const KB = [
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
  { k: ["who", "mentor", "created", "simanga", "help"], a: "This guide was created by Simanga Mchunu, Mentor, for the Shooting Stars Foundation × IBM — IBM Z Datathon 2026. Ask your mentor if you’re stuck." },
];
const CHIPS = ["Which email should I use?", "What is the event code?", "I didn’t get the activation email", "What do I pick for the image?", "How do I connect on Mac?", "How do I connect on Windows?"];

function localAnswer(q) {
  const t = q.toLowerCase();
  let best = null, score = 0;
  for (const e of KB) { const s = e.k.filter((w) => t.includes(w)).length; if (s > score) { score = s; best = e; } }
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

render();
