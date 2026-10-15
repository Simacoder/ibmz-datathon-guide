# IBM Z Datathon 2026 · LinuxONE Setup Guide

Shooting Stars Foundation × IBM. Created by Simanga Mchunu, Mentor.

A guided, mobile-friendly site that walks participants through:
1. Registering on the IBM LinuxONE Community Cloud (event code `SSF2026`; non-Microsoft email only — no Hotmail/Outlook/Live or Microsoft 365, per IBM's current notice)
2. Provisioning a RHEL 8.7 LinuxONE server and SSH key pair
3. Connecting from Windows (PuTTY) or Mac (Terminal)

Includes a progress tracker (saved in the browser), copy buttons, an email checker, troubleshooting, and a "Need help?" assistant.

## Deploy on Vercel
1. Push this folder to a GitHub repo, then **Add New → Project** on Vercel and import it. No build settings are needed (static site + one serverless function).
   Or from this folder: `npx vercel --prod`.
2. Optional, to make the assistant answer with Claude: in Vercel → Settings → Environment Variables add
   - `ANTHROPIC_API_KEY` (required for AI answers)
   - `ANTHROPIC_MODEL` (optional, default `claude-haiku-5-5`)

   Without the key, the assistant still works using built-in answers.

## Participant Guidebook and countdown
The **Guidebook** tab holds the event details, hubs, themes, submission rules and checklist, judging criteria and help links. The top-right countdown runs in UTC from 17 Oct 2026 00:00 to 19 Oct 2026 00:00 (change `countdownStart` / `countdownEnd` in `CFG`).

## FAQs
The **FAQs** tab has 27 searchable questions (Setup & connecting, Event & submission, Certificates & prizes, Getting help). Answers learned from the 2025 Datathon are labelled "From the 2025 Datathon" because the 2026 process may differ. Edit the `FAQ` array in `app.js` to add or change questions; the assistant's matching answers live in `KB` (`app.js`) and the facts in `api/chat.js`.

## Edit the event details
Open `app.js` and change `CFG` and `GUIDE` at the top (event code, sample description, blocked email domains, countdown, links, hubs, judging text).

## Notes
- The email checker runs in the browser only; nothing is stored or sent.
- Registration itself happens on IBM's site; this guide never handles participants' accounts or keys.
