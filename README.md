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

## Edit the event details
Open `app.js` and change `CFG` at the top (event code, sample description, blocked email domains).

## Notes
- The email checker runs in the browser only; nothing is stored or sent.
- Registration itself happens on IBM's site; this guide never handles participants' accounts or keys.
