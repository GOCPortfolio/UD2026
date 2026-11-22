# Merit & DozZy: Wedding Invitation Website (#UgoDozZy'26)

Saturday, 26th December 2026 · 9:00 AM · Aba, Abia State
Live address (once published): https://gocportfolio.github.io/UD2026/

---

## 1. What is in this folder

| File | What it does |
|---|---|
| `index.html` | The page structure. You almost never need to edit it. |
| `styles.css` | Colours and layout. Colours are at the very top. |
| `script.js` | **All the words and settings live in the `CONFIG` block at the top.** |
| `google-apps-script.gs` | The code that saves RSVPs into a Google Sheet. |
| `assets/` | Photos, music, icons and the WhatsApp preview picture. |

## 2. Changing words, numbers and settings

Open `script.js` in any text editor (Notepad is fine). Everything above the line `APP CODE` is yours to edit: names, parents, date, venues, colours, story, toast, phone numbers, bank details, vendors, FAQ. Keep the quotation marks and commas exactly as they are. Save, then re-upload.

### Placeholders still waiting for you (search `TODO` in script.js)
1. **Reception time**: it says "Immediately after the ceremony". Replace with the real time.
2. **Parking** and **Accommodation** answers in the FAQ (`faq`).
3. **Contact person's name** (`contact.coordinatorName`). It currently says "Wedding coordinator".
4. **Website developer credit** (`developer`). Leave empty to hide it.
5. **Music**: a short generated placeholder tune is in `assets/music.mp3` (see section 6).
6. **RSVP endpoint** (`rsvp.endpoint`). Empty until you do section 4.
7. **Colour hex codes**: you gave `#ff0000` for burgundy and `#00ff26` for olive green. Those are bright red and neon green, so I used a true burgundy (`#6d0f23`) and olive (`#6b7b2e`) and gave pink `#f2a7b8`. Change `colours` in `script.js` and the `:root` block in `styles.css` if you want something different.
8. **Vendor phone numbers**: Alaegbu Amarachi's number (9033276434) is only 10 digits. The site treats it as +234 9033276434, but please confirm it.

## 3. Photos

All photos are WebP files in `assets/`.

| File | Used for |
|---|---|
| `hero.webp` | Top of the page (the greenery photo) |
| `envelope-card.webp` | The photo that slides out of the envelope |
| `gallery-01.webp` … `gallery-11.webp` | Gallery. Each has a small `-sm.webp` version for thumbnails |
| `story-1/2/3.webp` | The three story moments |
| `footer-arch.webp` | Arched photo in the footer |
| `floral-left/right.webp` | Pink florals cut out of your flyer design |
| `og-image-2.jpg` | WhatsApp / Facebook preview (1200×630) |

To replace a photo, make a new file with the **same name and shape** and drop it in. To change the gallery order, captions or sizes, edit `gallery` in `script.js`. Photographer watermarks were removed from the pre-wedding photos; Genius Gist Media is credited in the vendors list.

## 4. Saving RSVPs in a Google Sheet (step by step)

1. Go to sheets.google.com and create a new blank sheet. Name it "Wedding RSVPs".
2. Click **Extensions → Apps Script**.
3. Delete what is there and paste everything from `google-apps-script.gs`. Click Save.
4. Click **Deploy → New deployment**. Click the gear and choose **Web app**.
5. Set **Execute as: Me** and **Who has access: Anyone**. Click Deploy and approve the permissions.
6. Copy the **Web app URL**.
7. In `script.js`, paste it: `rsvp: { endpoint: "PASTE_URL_HERE", ... }`.
8. Upload the site again, open it, send a real RSVP, and check that a row appears in the sheet tab "RSVPs".
9. If you ever change the Apps Script, use **Deploy → Manage deployments → Edit → New version** so the change goes live.

Until step 7 is done, the form politely tells guests to use the WhatsApp or Call buttons.

## 5. Link preview (WhatsApp, Facebook, Twitter)

The envelope picture `assets/og-image-2.jpg` appears when the link is shared. The text is exactly "You are invited to celebrate our union in marriage."

The address `https://gocportfolio.github.io/UD2026/` appears in **4 places in `index.html`**: `canonical`, `og:url`, `og:image`, `twitter:image` (and once in `script.js` as `siteUrl`). If you move to a custom domain, change all of them.

**If WhatsApp shows an old picture:** rename the file (for example `og-image-3.jpg`) and update the two image lines in `index.html`, or share the link with `?v=2` on the end. Then open the Facebook Sharing Debugger (developers.facebook.com/tools/debug), paste the link and click **Scrape Again**.

## 6. Music

Guests' phones need a tap before music can play, so it starts when they tap the seal; the speaker button (top right) mutes it, and the choice is remembered.

`assets/music.mp3` is only a quiet generated placeholder. **Replace it with your own licensed song** (I cannot supply copyrighted music). Keep it under about 1.5 MB. To shrink a song on your computer with ffmpeg:

```
ffmpeg -i mysong.mp3 -ac 2 -b:a 96k -t 150 music.mp3
```
Name the result `music.mp3` and put it in `assets/`. Or change `music.src` in `script.js`.

## 6b. Personalised guest links

Add `?guest=Name` to the link and the envelope and card say "Dear Name" and the RSVP name is filled in:

`https://gocportfolio.github.io/UD2026/?guest=Mr%20and%20Mrs%20Okafor`

Use `%20` for a space and `%26` for `&`. Add `?nointro` to skip the envelope while testing.

## 7. Putting it online (free)

**GitHub Pages (your plan).** Upload everything in this folder (not the folder itself) to your repository `GOCPortfolio/UD2026` so that `index.html` is at the top level. Then **Settings → Pages → Source: Deploy from a branch → main → / (root) → Save**. After a minute the site is at https://gocportfolio.github.io/UD2026/ . (Your GitHub link ended in `.git`; the public site address does not.)

**Netlify:** go to app.netlify.com/drop and drag the folder in.
**Vercel:** import the GitHub repository; no build settings are needed.

**Custom domain:** in your domain provider add four `A` records for the root domain (GitHub: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and a `CNAME` record for `www` pointing to `gocportfolio.github.io`. Then set the domain under Settings → Pages, and update the 4 addresses from section 5.

## 8. Before you send the link to guests

1. All placeholders from section 2 replaced.
2. A real test RSVP appears in the Google Sheet.
3. Music replaced with your licensed MP3.
4. The preview picture opens in a browser at `…/assets/og-image-2.jpg`.
5. Facebook Sharing Debugger shows the envelope; test in a fresh WhatsApp chat.
6. Opened on a real iPhone (Safari), an Android phone (Chrome) and a laptop.
