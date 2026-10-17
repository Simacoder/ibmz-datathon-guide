# IBM Z Datathon 2026 · LinuxONE Setup Guide

Shooting Stars Foundation × IBM. Created by Simanga Mchunu, Mentor.

A guided, mobile-friendly site for participants:
- **Steps 1–3:** register on the IBM LinuxONE Community Cloud (event code `SSF2026`, non-Microsoft email only), provision a server, connect from Windows (PuTTY) or Mac (Terminal). Only one member per team creates the server.
- **Guidebook:** event details, hubs, themes, submission checklist, judging criteria, labs and videos (jupyter-lab-ml, setup video).
- **Schedule:** every event in the visitor's own time zone with UTC underneath, plus add-to-calendar (Google link and a `.ics` file for Apple/Outlook).
- **Review:** a project readiness check for teams and mentors — deliverables, fit with the guidelines, judging-criteria signals, plus a scan of a public GitHub repo (`api/review.js`) and an optional Claude coach's read. Indicative only; it never predicts a win. Optional env var `GITHUB_TOKEN` raises GitHub's rate limit for repo scans.
- **FAQs:** searchable, by topic. Answers learned from the 2025 Datathon are labelled because the 2026 process may differ.
- **Countdown** (top right) follows the official schedule: kick-off, end of the hacking period, submission deadline.
- **"Need help?" assistant:** agentic and humane (see below).

## Deploy on Vercel
1. Push this folder to a GitHub repo, then **Add New → Project** on Vercel and import it. No build settings are needed (static site + one serverless function). Or from this folder: `npx vercel --prod`.
2. Optional, to power the assistant with Claude, add environment variables in Vercel → Settings → Environment Variables:
   - `ANTHROPIC_API_KEY` (required for the Claude-powered assistant)
   - `ANTHROPIC_MODEL` (optional, default `claude-haiku-5-5`)

Without the key, the assistant still works using its built-in local agent.

## The assistant
- **Agentic:** `api/chat.js` runs a small tool-using loop. Claude can open a tab of the guide, build exact connect commands from the participant's IP, check an email domain, draft a ready-to-post message for mentors, and read the countdown. The browser turns the results into buttons (open tab, copy command, copy message, open link) and quick-reply chips.
- **Humane:** it acknowledges frustration first, never blames, gently reminds people to be kind (to themselves, teammates, mentors and organisers) and wishes them well. If someone seems to be in real distress it stops troubleshooting and responds with care.
- **Honest:** it only uses the facts in `api/chat.js`; when something isn't confirmed (in-person seats, rewards, certificates, prizes, theme changes) it says so and offers to draft a message to the organisers.
- **Privacy:** email addresses are replaced with `[email@domain]` in the browser before anything is sent, and again on the server. Requests are rate-limited (20 per minute per IP, best-effort per serverless instance).
- **Fallback:** if the API is unavailable, `app.js` runs a local agent (decision tree, keyword answers, same kind tone and actions).

## Edit the event details
Open `app.js` and change `CFG` and `GUIDE` at the top (event code, links, hubs, judging text, and the `schedule` in UTC). FAQs live in the `FAQ` array, the local assistant's answers in `KB`, and the Claude assistant's facts in `api/chat.js`.

## Notes
- The email checker runs in the browser only; nothing is stored or sent.
- Registration itself happens on IBM's site; this guide never handles participants' accounts or keys.
