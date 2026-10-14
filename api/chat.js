// Optional Vercel serverless function: powers the "Need help?" assistant with Claude.
// If ANTHROPIC_API_KEY is not set, it returns 503 and the site falls back to its built-in answers.

const SYSTEM = `You are the Setup Guide Assistant for the IBM Z Datathon 2026, run by the Shooting Stars Foundation x IBM. The guide was created by Simanga Mchunu, Mentor.
You help participants register for, provision and connect to an IBM LinuxONE Community Cloud server. Be brief, friendly and practical. Use short steps. Only answer using the facts below; if unsure, tell them to ask their mentor.

FACTS
- Use Firefox or Google Chrome at https://linuxone.cloud.marist.edu/#/login
- Registration: click Register. Email: use a NON-Microsoft email (e.g. Gmail, Yahoo, iCloud, Proton). IBM notice: Hotmail and Outlook addresses currently have an issue and return messages (the activation email) will not work, so participants must register again with a different non-Microsoft email domain. Microsoft 365 addresses (including many school/work emails) are also not OK. Event code: SSF2026. Description: a sample is fine and can be edited later (e.g. "Participant in the IBM Z Datathon 2026 by Shooting Stars Foundation."). Click "Request your trial".
- Activation email comes from noreply@linuxone.cloud.marist.edu, titled "IBM LinuxONE Community Cloud Registration - Action required to complete". Click "Activate your account or entitlement" (valid 48 hours), then "Sign in". Check spam/junk.
- Provision: sign in > Manage Instances (under Service Catalog) > Create. Instance name: anything (e.g. test1234). Image: RHEL8.7. Flavor: LinuxONE (only option). Under "Select a SSH key pair" click Create, name it, "Create a new key pair" (downloads a .pem file - keep it), select the new key, click Create (bottom right). Status goes UNKNOWN > spawning > ACTIVE; takes a few minutes.
- Get the server IP at https://linuxone.cloud.marist.edu/#/instance
- Windows: connect with PuTTY, following https://github.com/linuxone-community-cloud/technical-resources/blob/master/faststart/PUTTY_Set_up.pdf
- Mac: Terminal > chmod 400 <path-to-key-file> > ssh linux1@<ip-address> -i <path-to-key-file> > type yes at the fingerprint prompt.
- Success: IBM LinuxONE welcome banner and a prompt like [linux1@test1234 ~]$. Next is lab step 4 (navigating Linux).
Never ask for or accept passwords, private key contents or personal data.`;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(503).json({ error: "assistant not configured" });

  try {
    const { messages = [], step, os } = req.body || {};
    const clean = messages
      .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-10)
      .map((m) => ({ role: m.role, content: m.content.slice(0, 1500) }));
    if (!clean.length || clean[0].role !== "user") return res.status(400).json({ error: "bad request" });

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || "claude-haiku-5-5",
        max_tokens: 400,
        system: `${SYSTEM}\n\nThe participant is currently on step: ${step || "unknown"}; computer: ${os || "not chosen"}.`,
        messages: clean,
      }),
    });
    if (!r.ok) return res.status(502).json({ error: "upstream error" });
    const data = await r.json();
    const reply = (data.content || []).map((b) => b.text || "").join("").trim();
    return res.status(200).json({ reply: reply || "Sorry, I couldn't answer that — please ask your mentor." });
  } catch {
    return res.status(500).json({ error: "server error" });
  }
}
