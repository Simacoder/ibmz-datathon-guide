/* IBM Z Datathon 2026 · Project Review tab
   Rules-based review that runs in the browser (nothing leaves the page), optionally enriched by /api/review
   (public GitHub repo scan + Claude coach). Indicative only: it cannot predict how judges will score. */
(function () {
  const WIN = { start: Date.UTC(2026, 9, 17, 3, 30), end: Date.UTC(2026, 9, 18, 16, 30) }; // kick-off → end of hacking (UTC)
  const THEMES = ["Theme 1 · Real-time AI for critical decisions", "Theme 2 · AI secured: Innovation without exposure", "Wildcard (outside the two themes)"];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const KEYS = ["team", "title", "theme", "problem", "data", "solution", "ibmz", "different", "repo", "video", "deployed", "window", "videoIbm", "flow", "proto", "ppt"];
  let FORM = { deployed: "", window: "", theme: "" }, RES = null, BUSY = false;

  const any = (t, words) => words.filter((w) => t.includes(w));
  const low = (s) => String(s || "").toLowerCase();

  const IBMZ = ["ibm z", "linuxone", "s390x", "mainframe", "telum", "z16", "z17", "ibm lin"];
  const IBMZ_DEPTH = ["inference", "telum", "accelerator", "onnx", "real-time", "real time", "latency", "throughput", "encrypt", "confidential", "pervasive", "secure execution", "hsm", "quantum", "in-transaction", "on-chip", "s390x", "triton", "cryptograph", "resilien", "scal"];
  const AI = ["tensorflow", "pytorch", "keras", "scikit", "sklearn", "xgboost", "lightgbm", "onnx", "pmml", "lstm", "transformer", "llm", "neural", "random forest", "classif", "regress", "anomaly", "model", "machine learning", "deep learning", "granite", "rag", "embedding", "nlp", "computer vision"];
  const PEOPLE = ["people", "users", "patients", "farmers", "students", "citizens", "customers", "communit", "families", "workers", "hospital", "clinic", "bank", "patient", "households", "small business", "smes", "drivers", "teachers", "victims"];
  const NOVEL = ["unlike", "existing", "novel", "first", "different", "instead", "differs", "gap", "today", "current solutions", "competitor", "alternative", "new approach", "unique", "combin"];
  const SCALE = ["scal", "million", "thousand", "throughput", "production", "extend", "other regions", "api", "multi", "nationwide", "countries", "per second", "pipeline", "batch", "stream"];
  const T1 = ["real-time", "real time", "latency", "decision", "critical", "fraud", "stream", "instant", "emergency", "triage", "live"];
  const T2 = ["secur", "privacy", "encrypt", "confidential", "attack", "adversar", "poison", "compliance", "leak", "exposure", "trust", "tamper", "protect"];

  function repoKind(u) {
    const m = /^https?:\/\/(?:www\.)?(github\.com|gitlab\.com)\/([\w.-]+)\/([\w.-]+?)(?:\.git)?\/?(?:[#?].*)?$/i.exec(String(u || "").trim());
    return m ? { host: m[1].toLowerCase(), owner: m[2], repo: m[3] } : null;
  }
  const videoOk = (u) => /^https?:\/\/(www\.)?(youtube\.com|youtu\.be|drive\.google\.com|loom\.com|vimeo\.com|onedrive\.live\.com|1drv\.ms|dropbox\.com|streamable\.com|vimeo\.com|[\w-]+\.sharepoint\.com)\//i.test(String(u || "").trim());

  /* ---------- rules review (works offline) ---------- */
  function review(f, repo) {
    f = f || {};
    const checks = [], fit = [], rubric = [], next = [];
    const add = (arr, s, t, d) => arr.push({ s, t, d });
    const all = low([f.problem, f.data, f.solution, f.ibmz, f.different].join(" \n "));
    const sol = low([f.solution, f.ibmz].join(" "));
    const rk = repoKind(f.repo);

    /* deliverables */
    if (!f.repo) { add(checks, "fail", "Code link", "Required. Add your GitHub/GitLab repo link (or plan a zip upload)."); next.push("Add a link to your code (GitHub/GitLab) and make sure it is public."); }
    else if (!rk) add(checks, "warn", "Code link", "This doesn’t look like a GitHub or GitLab repo link. A zip upload is also fine on the submission page — just make sure judges can open it.");
    else if (repo && repo.accessible === false) { add(checks, "fail", "Code link", "I couldn’t open this repo. If it is private, make it public (or add the organisers) so judges can read it."); next.push("Make your repo accessible: Settings → General → Change visibility → Public."); }
    else add(checks, "pass", "Code link", repo && repo.accessible ? "Repo found and readable." : "Repo link looks valid (run the review online to scan it).");

    if (!f.video) { add(checks, "fail", "Video (max 3 minutes)", "Required. Record your video and add the link."); next.push("Record the video (max 3 min): problem → data → solution → how it uses IBM Z → demo."); }
    else if (!videoOk(f.video)) add(checks, "warn", "Video (max 3 minutes)", "Link doesn’t look like YouTube/Drive/Loom/Vimeo — double-check judges can open it without signing in. I can’t measure its length: keep it ≤ 3 minutes.");
    else add(checks, "pass", "Video (max 3 minutes)", "Link added. I can’t measure its length — keep it ≤ 3 minutes, and check it plays without logging in.");

    if (!f.videoIbm) { add(checks, "warn", "Video shows IBM Z usage", "The video should show your tech stack, your LinuxONE instance and your model. Tick this once it does."); next.push("Show your LinuxONE instance (terminal or portal) and your model running in the video."); }
    else add(checks, "pass", "Video shows IBM Z usage", "Great — judges look for this.");

    if (!f.title || !f.team) add(checks, "warn", "Project title contains your team name", "Add your team name and project title. Example: [Team Name_IBM Z Datathon 2026 Project].");
    else if (low(f.title).includes(low(f.team).trim())) add(checks, "pass", "Project title contains your team name", "Looks right.");
    else { add(checks, "fail", "Project title contains your team name", "Your title should include your Team Name, e.g. [" + f.team + "_IBM Z Datathon 2026 Project]."); next.push("Rename your submission title so it includes your team name."); }

    if (f.deployed === "yes") add(checks, "pass", "Deployed on LinuxONE", "Required by the mentors — and show it in the video.");
    else if (f.deployed === "progress") { add(checks, "warn", "Deployed on LinuxONE", "Mentors say the project must be deployed on LinuxONE. Do a first deployment now so surprises show up early."); next.push("Deploy your current version to your LinuxONE server now, then improve it."); }
    else { add(checks, "fail", "Deployed on LinuxONE", f.deployed === "no" ? "Mentors say the project must be deployed on LinuxONE. Collaborate in GitHub, then deploy to your team’s one server." : "Tell me whether it is deployed on LinuxONE yet."); next.push("Deploy to your team’s LinuxONE server (one member creates it; the team shares it)."); }

    if (f.window === "yes") add(checks, "pass", "Built during the Datathon", "Mentors: work must be done within the Datathon window, not old work.");
    else if (f.window === "partly") { add(checks, "warn", "Built during the Datathon", "Mentors said work must be done within the Datathon window, not old work. I don’t have a confirmed rule for partial reuse — ask the organisers on Discord and be ready to say what is new."); next.push("Ask the organisers on Discord about reused code, and make the new work obvious in your repo history."); }
    else add(checks, "fail", f.window === "no" ? "Built during the Datathon" : "Built during the Datathon", f.window === "no" ? "Mentors said teams must work within the Datathon window, not old work. Please check with the organisers before submitting." : "Tell me whether the work was built during the Datathon.");

    add(checks, "info", "Optional extras", [f.flow ? "flowchart ✓" : "flowchart (helps judges follow your architecture)", f.proto ? "prototype ✓" : "prototype / clickable demo", f.ppt ? "PowerPoint ✓ (mentor-suggested)" : "short PowerPoint (mentor-suggested, not officially required)"].join(" · "));

    /* repo facts (from /api/review) */
    const repoLines = [];
    if (repo && repo.accessible) {
      const r = repo;
      repoLines.push(["info", "Repository", [r.files + " files", r.readmeChars ? "README " + r.readmeChars + " chars" : "no README", r.commits ? r.commits + " commits" : ""].filter(Boolean).join(" · ")]);
      if (!r.hasReadme) { repoLines.push(["warn", "README", "Add a README: problem, solution, architecture, how to run, and how it uses IBM Z."]); next.push("Add a README that explains the problem, solution, how to run it and how it uses IBM Z."); }
      if (r.firstCommit && Date.parse(r.firstCommit) < WIN.start) { repoLines.push(["warn", "Commit history", "The oldest commit (" + r.firstCommit.slice(0, 10) + ") is before the Datathon kick-off. If that is boilerplate or setup, fine — otherwise be ready to explain what is new, and check the “not old work” rule with the organisers."]); next.push("Be ready to show what you built during the Datathon (clear commits, README “what’s new”)."); }
      else if (r.commits) repoLines.push(["pass", "Commit history", "Commits start inside the Datathon window."]);
      if (r.afterEnd > 0) repoLines.push(["info", "Late commits", r.afterEnd + " of the latest commits are after the hacking window ended. Mentors said work should be within the Datathon window — keep late changes to polish and confirm with the organisers."]);
      repoLines.push([r.ibmzSignals.length ? "pass" : "warn", "IBM Z signals in the repo", r.ibmzSignals.length ? "Found: " + r.ibmzSignals.join(", ") + "." : "No mention of IBM Z / LinuxONE / s390x in the README or file names. Explain how you use the platform."]);
      repoLines.push([r.hasRun ? "pass" : "warn", "Runnable", r.hasRun ? "Found dependency/Docker files (" + r.hasRun + ")." : "No requirements/Dockerfile found — add one so judges can run it."]);
      if (r.notebooks) repoLines.push(["info", "Notebooks", r.notebooks + " notebook(s). Fine — but also show your deployed result."]);
      repoLines.push([r.hasTests ? "pass" : "info", "Tests", r.hasTests ? "Tests found." : "No tests found — even a few basic checks help show technical quality."]);
      repoLines.push([r.hasLicense ? "pass" : "info", "License", r.hasLicense ? "License file present." : "No license file (optional)."]);
    } else if (repo && repo.rateLimited) repoLines.push(["info", "Repository scan", "GitHub’s rate limit was hit — try again in a few minutes."]);

    /* guideline fit */
    const pLen = (f.problem || "").trim().length;
    if (pLen < 60) { add(fit, "fail", "Problem statement", "Describe the real problem and who has it (a few sentences)."); next.push("Write a clear problem statement: who is affected, how, and why it matters."); }
    else if (!any(low(f.problem), PEOPLE).length) add(fit, "warn", "Problem statement", "Good start. Name who benefits (people, community, sector) so judges can relate to it.");
    else add(fit, "pass", "Problem statement", "A real problem with people attached — relatable.");

    const dLen = (f.data || "").trim().length;
    if (dLen < 20) { add(fit, "warn", "Data that supports the problem", "The video must cover the data that backs the problem. Add your dataset(s) and a fact or number."); next.push("Add the data behind your problem (source, size, a key statistic)."); }
    else add(fit, /\d/.test(f.data + f.problem) ? "pass" : "warn", "Data that supports the problem", /\d/.test(f.data + f.problem) ? "Evidence with numbers — “passionate but data-driven”." : "Add at least one concrete number or source.");

    const z = any(sol, IBMZ), depth = any(sol, IBMZ_DEPTH);
    if (!z.length) { add(fit, "fail", "Meaningful use of IBM Z / LinuxONE", "Required: your solution must leverage IBM Z (LinuxONE). Say specifically how."); next.push("Explain how your solution uses IBM Z / LinuxONE beyond hosting (e.g. inference on s390x, security, throughput)."); }
    else if (!depth.length) { add(fit, "warn", "Meaningful use of IBM Z / LinuxONE", "You mention the platform, but judges ask “is it used meaningfully, not just as hosting?” Explain what IBM Z gives you (performance, security, AI inference, resilience)."); next.push("Spell out what IBM Z adds to your solution beyond “we deployed it there”."); }
    else add(fit, "pass", "Meaningful use of IBM Z / LinuxONE", "You go beyond hosting (" + depth.slice(0, 3).join(", ") + ").");

    const ai = any(sol + " " + all, AI);
    add(fit, ai.length >= 2 ? "pass" : "warn", "AI/ML component", ai.length >= 2 ? "AI/ML is clearly part of the solution (" + ai.slice(0, 3).join(", ") + ")." : "Say which model/package you use (TensorFlow, PyTorch, scikit-learn, XGBoost, ONNX …) and why.");

    const th = f.theme || "";
    if (!th) add(fit, "warn", "Theme alignment", "Choose Theme 1, Theme 2 or Wildcard.");
    else if (th.startsWith("Theme 1")) add(fit, any(all, T1).length ? "pass" : "warn", "Theme alignment", any(all, T1).length ? "Fits Theme 1 (real-time critical decisions)." : "Show why speed/real-time matters for the decision your solution supports.");
    else if (th.startsWith("Theme 2")) add(fit, any(all, T2).length ? "pass" : "warn", "Theme alignment", any(all, T2).length ? "Fits Theme 2 (AI security)." : "Show what is protected from exposure, and how.");
    else add(fit, (f.different || "").length > 40 ? "pass" : "warn", "Theme alignment (Wildcard)", (f.different || "").length > 40 ? "Explain the overlooked problem and the unexpected use of AI — you have started." : "For a wildcard, explain the overlooked problem and the new or technically ambitious use of AI.");

    add(fit, any(all, SCALE).length ? "pass" : "info", "Scalability", any(all, SCALE).length ? "You touch on scale/production." : "Mentor tip: show how this could grow beyond the demo (more users, regions, volume).");

    /* rubric signals */
    const rate = (n) => (n >= 2 ? "strong" : n === 1 ? "ok" : "weak");
    const hasThemeOk = th && fit.find((x) => x.t.startsWith("Theme alignment")).s === "pass";
    const value = (pLen >= 60 ? 1 : 0) + (any(low(f.problem), PEOPLE).length ? 1 : 0) + (hasThemeOk ? 1 : 0);
    const noveltyN = ((f.different || "").trim().length >= 40 ? 1 : 0) + (any(low(f.different), NOVEL).length ? 1 : 0);
    const techN = (z.length && depth.length ? 1 : 0) + (ai.length >= 2 ? 1 : 0) + (repo && repo.accessible && repo.hasRun ? 1 : 0) + (f.deployed === "yes" ? 1 : 0);
    const aiN = (ai.length >= 3 ? 1 : 0) + (noveltyN >= 2 ? 1 : 0) + (any(low(f.different + " " + f.solution), ["fine-tun", "ensemble", "hybrid", "novel", "combin", "multi-model", "multimodal", "rag", "explain", "shap"]).length ? 1 : 0);
    const impactN = (any(all, SCALE).length ? 1 : 0) + (/\d/.test(f.problem + f.data) ? 1 : 0) + (f.deployed === "yes" && f.window === "yes" ? 1 : 0) + (repo && repo.accessible && repo.hasReadme ? 1 : 0);
    rubric.push({ g: "Datathon", t: "Value to the Community & Theme Alignment", r: rate(Math.round(value * 0.8)), d: "Who benefits and how it fits the theme." });
    rubric.push({ g: "Datathon", t: "Novelty & Idea Originality", r: rate(noveltyN), d: (f.different || "").trim().length < 40 ? "Add what makes you different from existing solutions." : "You explain the difference — make it vivid in the video." });
    rubric.push({ g: "Datathon", t: "Technical Design & use of LinuxONE / AI-ML packages", r: rate(Math.min(2, Math.round(techN / 2))), d: "Meaningful platform use, sound architecture, runnable code." });
    rubric.push({ g: "AI Excellence", t: "AI Innovation & Originality", r: rate(Math.min(2, aiN)), d: "A genuine AI innovation, not a generic add-on." });
    rubric.push({ g: "AI Excellence", t: "Transformational Impact & Technical Excellence", r: rate(Math.min(2, Math.round(impactN / 2))), d: "Size of the potential impact and robustness of the build." });

    /* verdict */
    const reqFails = checks.filter((c) => c.s === "fail").length + fit.filter((c) => c.s === "fail").length;
    const strong = rubric.filter((r) => r.r === "strong").length, weak = rubric.filter((r) => r.r === "weak").length;
    let verdict, tone;
    if (reqFails) { verdict = "Not ready to submit yet"; tone = "bad"; }
    else if (strong >= 3 && weak === 0) { verdict = "Strong foundation"; tone = "ok"; }
    else if (weak <= 2) { verdict = "Promising — a few things to tighten"; tone = "warn"; }
    else { verdict = "Needs more work on the story"; tone = "warn"; }
    const uniq = [...new Set(next)].slice(0, 6);
    return { checks, fit, rubric, repoLines, verdict, tone, next: uniq, reqFails };
  }

  /* ---------- view ---------- */
  const ico = { pass: "✅", warn: "⚠️", fail: "❌", info: "ℹ️", strong: "🟢", ok: "🟡", weak: "🔴" };
  const rows = (arr) => arr.map((c) => `<li class="rv ${c.s}"><span class="i">${ico[c.s]}</span><div><b>${esc(c.t)}</b><div>${esc(c.d)}</div></div></li>`).join("");
  function resultHtml() {
    if (!RES) return "";
    const r = RES.rules, ai = RES.ai;
    return `
    <div class="card" id="revResult">
      <span class="pill">REVIEW RESULT</span>
      <h2 class="rv-verdict ${r.tone}">${esc(r.verdict)}</h2>
      <div class="callout info">This is an <b>indicative readiness check</b> against the official deliverables and judging criteria — not a prediction. I can’t see other teams or how judges will score, so nobody can promise a win. What <i>is</i> in your hands: the story, the IBM Z use, and a working, deployed demo.</div>
      <h2 style="font-size:15px">📦 Deliverables</h2><ul class="rvl">${rows(r.checks)}</ul>
      <h2 style="font-size:15px">📏 Fit with the Datathon guidelines</h2><ul class="rvl">${rows(r.fit)}</ul>
      <h2 style="font-size:15px">🏆 Judging criteria signals</h2>
      <ul class="rvl">${r.rubric.map((x) => `<li class="rv ${x.r}"><span class="i">${ico[x.r]}</span><div><b>${esc(x.t)}</b> <span class="badge">${esc(x.g)}</span><div>${esc(x.d)}</div></div></li>`).join("")}</ul>
      <p class="lead" style="font-size:13px">🟢 strong signal in your answers · 🟡 some evidence · 🔴 not shown yet. Based on what you wrote, so better detail = better feedback.</p>
      ${r.repoLines.length ? `<h2 style="font-size:15px">🔎 Repository scan</h2><ul class="rvl">${rows(r.repoLines.map((x) => ({ s: x[0], t: x[1], d: x[2] })))}</ul>` : ""}
      ${ai ? `<h2 style="font-size:15px">🧑‍🏫 Coach’s read</h2>
        <div class="callout ok" style="white-space:pre-wrap">${esc(ai.summary)}</div>
        ${ai.strengths.length ? `<p class="lead" style="margin-bottom:4px"><b>What’s working</b></p><ul class="plain">${ai.strengths.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        ${ai.risks.length ? `<p class="lead" style="margin:10px 0 4px"><b>Risks to fix</b></p><ul class="plain">${ai.risks.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        ${ai.improve.length ? `<p class="lead" style="margin:10px 0 4px"><b>How to score higher</b></p><ul class="plain">${ai.improve.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}` : (RES.aiNote ? `<div class="callout info">${esc(RES.aiNote)}</div>` : "")}
      ${r.next.length ? `<h2 style="font-size:15px">✅ Do these next</h2><ol class="plain">${r.next.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>` : ""}
      <div class="btnrow"><button class="btn sm" id="revCopy">Copy review summary</button><a class="btn sm ghost" href="${esc(typeof CFG !== "undefined" ? CFG.discordInvite : "#")}" target="_blank" rel="noopener">Ask a mentor on Discord ↗</a></div>
      <div class="callout ok">Be kind to yourselves — a working, honest project beats a perfect plan. All the best in the Datathon! 🌟</div>
    </div>`;
  }
  const fld = (k, label, ph, rowsN, hint) => `<div class="field" style="margin-bottom:10px"><label>${label}</label>${rowsN ? `<textarea class="input" data-rv="${k}" rows="${rowsN}" maxlength="1500" placeholder="${esc(ph)}">${esc(FORM[k] || "")}</textarea>` : `<input class="input" data-rv="${k}" maxlength="300" placeholder="${esc(ph)}" value="${esc(FORM[k] || "")}">`}${hint ? `<div class="hint">${hint}</div>` : ""}</div>`;
  const sel = (k, label, opts) => `<div class="field" style="margin-bottom:10px"><label>${label}</label><select class="input" data-rv="${k}">${opts.map(([v, t]) => `<option value="${esc(v)}" ${FORM[k] === v ? "selected" : ""}>${esc(t)}</option>`).join("")}</select></div>`;
  const chk = (k, label) => `<label class="rvchk"><input type="checkbox" data-rvc="${k}" ${FORM[k] ? "checked" : ""}> ${label}</label>`;
  function view() {
    return `
    <div class="card">
      <span class="pill">PROJECT REVIEW</span>
      <h1>Is your project ready to submit?</h1>
      <p class="lead">For teams <i>and</i> mentors. Tell me about the project and I’ll check the <b>deliverables</b>, whether it <b>fits the Datathon guidelines</b>, and how it lines up with the <b>judging criteria</b> — then list what to fix. Nothing is stored; it works from what you type. Don’t put passwords, keys or personal emails in the boxes.</p>
      <div class="two">
        <div>${fld("team", "TEAM NAME", "e.g. Orion Squad", 0)}${fld("title", "PROJECT TITLE (as you will submit it)", "[Team Name_IBM Z Datathon 2026 Project]", 0)}${sel("theme", "THEME", [["", "Choose…"], ...THEMES.map((t) => [t, t])])}</div>
        <div>${fld("repo", "CODE LINK (GitHub / GitLab — public)", "https://github.com/your-team/your-project", 0, "If it’s a public GitHub repo I can also scan it online.")}${fld("video", "VIDEO LINK (max 3 minutes)", "https://youtu.be/…", 0)}${sel("deployed", "DEPLOYED ON LINUXONE?", [["", "Choose…"], ["yes", "Yes — running on our LinuxONE server"], ["progress", "In progress"], ["no", "Not yet"]])}</div>
      </div>
      ${sel("window", "WAS THE WORK BUILT DURING THE DATATHON?", [["", "Choose…"], ["yes", "Yes — all built during the Datathon"], ["partly", "Partly — we reused earlier code"], ["no", "No — it existed before"]])}
      ${fld("problem", "1 · THE PROBLEM (who has it, how bad, why it matters)", "e.g. Rural clinics in … wait days for … which leads to …", 4)}
      ${fld("data", "2 · THE DATA THAT SUPPORTS IT (source, size, a key number)", "e.g. WHO data, 120k records; 1 in 5 cases missed …", 3)}
      ${fld("solution", "3 · YOUR SOLUTION (what it does, models/packages used)", "e.g. XGBoost + LSTM model served via … ", 4)}
      ${fld("ibmz", "4 · HOW IT USES IBM Z / LINUXONE (beyond hosting)", "e.g. model inference on s390x, low-latency scoring, encrypted data, …", 3)}
      ${fld("different", "5 · WHAT MAKES IT DIFFERENT FROM EXISTING SOLUTIONS", "e.g. Unlike …, ours …", 3)}
      <div class="rvchks">${chk("videoIbm", "Our video shows the tech stack, LinuxONE instance and model")}${chk("flow", "We have a flowchart (optional)")}${chk("proto", "We have a prototype/demo (optional)")}${chk("ppt", "We prepared a short PowerPoint")}</div>
      <div class="btnrow"><button class="btn" id="revGo">🔍 Review my project</button><button class="btn ghost" id="revClear">Clear form</button></div>
      <div id="revBusy" class="hint" style="min-height:20px"></div>
    </div>
    <div id="revOut">${resultHtml()}</div>`;
  }

  function summaryText() {
    const r = RES.rules;
    const L = ["IBM Z Datathon 2026 — project review", "Team: " + (FORM.team || "?") + " | " + (FORM.title || "?"), "Verdict: " + r.verdict, ""];
    const dump = (h, a) => { L.push(h); a.forEach((c) => L.push(" " + ({ pass: "[ok]", warn: "[check]", fail: "[fix]", info: "[info]" }[c.s] || "") + " " + c.t + ": " + c.d)); L.push(""); };
    dump("Deliverables", r.checks); dump("Guideline fit", r.fit);
    L.push("Criteria signals"); r.rubric.forEach((x) => L.push(" " + x.r + " - " + x.t)); L.push("");
    if (r.next.length) { L.push("Next steps"); r.next.forEach((n, i) => L.push(" " + (i + 1) + ". " + n)); }
    return L.join("\n");
  }

  function bind() {
    document.querySelectorAll("[data-rv]").forEach((el) => { el.oninput = el.onchange = () => { FORM[el.dataset.rv] = el.value; }; });
    document.querySelectorAll("[data-rvc]").forEach((el) => { el.onchange = () => { FORM[el.dataset.rvc] = el.checked; }; });
    const go = document.getElementById("revGo");
    if (go) go.onclick = run;
    const cl = document.getElementById("revClear");
    if (cl) cl.onclick = () => { FORM = { deployed: "", window: "", theme: "" }; RES = null; document.getElementById("stage").innerHTML = view(); bind(); };
    const cp = document.getElementById("revCopy");
    if (cp) cp.onclick = () => { try { navigator.clipboard.writeText(summaryText()); cp.textContent = "Copied ✓"; setTimeout(() => (cp.textContent = "Copy review summary"), 1500); } catch {} };
  }

  async function run() {
    if (BUSY) return; BUSY = true;
    const msg = document.getElementById("revBusy"), go = document.getElementById("revGo");
    if (go) go.disabled = true;
    const noEmail = (s) => String(s || "").replace(/[\w.+-]+@([\w-]+(?:\.[\w-]+)+)/g, "[email@$1]");
    const f = {}; KEYS.forEach((k) => { f[k] = typeof FORM[k] === "string" ? noEmail(FORM[k]).trim() : FORM[k]; });
    let repo = null, ai = null, aiNote = "";
    if (repoKind(f.repo) && /github\.com/i.test(f.repo)) {
      if (msg) msg.textContent = "Reading your public repo and asking the coach… (up to ~20 s)";
      try {
        const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 28000);
        const r = await fetch("/api/review", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f), signal: ctl.signal });
        clearTimeout(to);
        if (r.ok) { const j = await r.json(); repo = j.repo || null; ai = j.ai || null; aiNote = j.note || ""; } else aiNote = r.status === 429 ? "Too many reviews in a minute — wait a moment and try again for the repo scan and coach’s read." : "";
      } catch { aiNote = ""; }
    } else if (msg) msg.textContent = "Reviewing…";
    if (!repo && !aiNote && repoKind(f.repo) && /github\.com/i.test(f.repo)) aiNote = "The online repo scan and coach’s read weren’t available, so this is the rules-based review of what you wrote.";
    if (!ai && !aiNote) aiNote = "Tip: for a deeper read of your project, ask a mentor on Discord — or paste your repo link (GitHub) when the online scan is available.";
    RES = { rules: review(f, repo), ai, aiNote };
    const out = document.getElementById("revOut");
    if (out) { out.innerHTML = resultHtml(); bind(); const rs = document.getElementById("revResult"); if (rs) rs.scrollIntoView({ behavior: "smooth", block: "start" }); }
    if (msg) msg.textContent = "";
    if (go) go.disabled = false; BUSY = false;
  }

  const API = { view, bind, review, repoKind };
  if (typeof window !== "undefined") window.REVIEW = API;
  if (typeof module !== "undefined") module.exports = API;
})();
