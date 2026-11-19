/* =====================================================================
   WEDDING INVITATION: EVERYTHING YOU EDIT LIVES IN THIS CONFIG OBJECT.
   Do not edit anything below the line "APP CODE".
   Items marked TODO are placeholders waiting for your details.
   ===================================================================== */
const CONFIG = {
  siteUrl: "https://gocportfolio.github.io/UD2026/",

  couple: {
    short: "Merit & EL DozZy",
    heroNames: "Merit & DozZy",
    bride: { short: "Merit", title: "Miss", given: "Merit Ugonnaya", surname: "Chijioke",
      parents: "Daughter of Mr Ejike Chijioke-Ohaeri & Mrs Evelyn Ulunma Ohaeri" },
    groom: { short: "EL DozZy", title: "Mr", given: "Prince Chidozie", surname: "Nnanta",
      parents: "Son of Late Deacon Ikechi Samuel Nnanta & Deaconess Justina Onyinyechi Nnanta" },
    seal: { line1: "Ugo", line2: "DozZy", line3: "'26" },
    hashtag: "#UgoDozZy'26",
    tagline: "To love and be loved"
  },

  event: {
    dateISO: "2026-12-26T09:00:00+01:00",   // Africa/Lagos (WAT, UTC+1)
    durationHours: 4,
    dateLong: "Saturday, 26th December 2026",
    timeLabel: "9:00 AM",
    city: "Aba, Abia State"
  },

  venues: [
    { label: "Ceremony", name: "The Apostolic Church", sub: "Umuocham Assembly, Aba",
      address: "Living Word Junction, Aba, Abia State", time: "9:00 AM",
      mapQuery: "The Apostolic Church Umuocham Assembly, Living Word Junction, Aba, Abia State",
      mapsUrl: "https://maps.app.goo.gl/MRSW2y5ukKPt3A5v7" },
    { label: "Reception", name: "Ngwa High School Field", sub: "Aba",
      address: "Ngwa High School Field, Aba, Abia State", time: "Immediately after the ceremony",   // TODO confirm
      mapQuery: "Ngwa High School Field, Aba, Abia State",
      mapsUrl: "https://maps.app.goo.gl/kR2DpcvVq5ZpVY5D9" }
  ],

  colours: [
    { name: "White", hex: "#ffffff" },
    { name: "Burgundy", hex: "#6d0f23" },
    { name: "Gold", hex: "#d4af37", metallic: true },
    { name: "Olive green", hex: "#6b7b2e" },
    { name: "Pink", hex: "#f2a7b8" }
  ],

  contact: {
    callNumbers: ["07065195313", "08107701366", "08085063530"],   // first one is used for the big Call button
    whatsapp: "2347065195313",                                    // international format, no +
    coordinatorName: "Wedding coordinator",                       // TODO give a real name if you like
    coordinatorPhone: "07065195313"
  },

  fatherOfDay: { label: "Father of the Day", name: "Hon. Levi Azuogu", role: "Commander" },

  vendors: [
    ["Event Planner", "Afri Comfort Resort"],
    ["Cake", "@Prichimescake"],
    ["Decoration", "Crest Concept Ventures", "080-379-03428"],
    ["DJ", "DJ Shocky"],
    ["Caterer", "Alaegbu Amarachi", "9033276434"],
    ["Coverage", "Brighter Light Media"],
    ["Make-up Artist", "Favglam-et-salon"],
    ["Make-up Artist", "Mariah's Touch"],
    ["Ring Vendor", "Arinze Jewelries"],
    ["Photo Shoot", "Genius Gist Media"],
    ["Traditional Outfit (Bride)", "Nwaugo Faith"],
    ["Traditional Outfit (Groom)", "Lucky Fashion Homes"],
    ["Reception Outfit (Bride)", "Tresic Styling"],
    ["Reception Outfit (Groom)", "Lucky Fashion Homes"]
  ],
  developer: "G.O.C | Brand Strategist",
  developerWhatsapp: "https://wa.me/2348027134537",   // TODO e.g. "Website: Your Name". Leave empty to hide.

  gifts: {
    bank: "First Bank", accountName: "Chidozie Prince Nnanta", accountNumber: "3060039856",
    message: "Your presence is our greatest gift. Thanks for being part of the event's success."
  },

  story: {
    intro: "Our story didn't start with anything magical. It started with a simple hello on Facebook.",
    moments: [
      { label: "Where it began", title: "A simple hello",
        text: "Just a conversation between two students in MOUAU who had no idea where it would lead.",
        img: "assets/story-1.webp", alt: "Merit and EL DozZy in an early photo together" },
      { label: "Near and far", title: "Calls, chats and little moments",
        text: "We built something through calls, chats and little moments shared from far and near. It wasn't perfect, but somehow it felt right.",
        img: "assets/story-2.webp", alt: "Merit and EL DozZy standing together by a lift in black and white" },
      { label: "Where love won", title: "Peace, fights and love",
        text: "There was peace in it, there were also fights in it. But at the end, love won it all.",
        img: "assets/story-3.webp", alt: "Merit and EL DozZy in a tender pre-wedding pose on a staircase" }
    ],
    closing: "The hello became conversations. The conversations became friendship. The friendship became love. And the love brought us here, ready to become husband and wife"
  },

  gallery: [
    { src: "assets/gallery-01.webp", sm: "assets/gallery-01-sm.webp", w: 959, h: 1198, sw: 560, sh: 700, alt: "Merit and EL DozZy in traditional attire at night" },
    { src: "assets/gallery-02.webp", sm: "assets/gallery-02-sm.webp", w: 992, h: 1239, sw: 560, sh: 699, alt: "The couple in matching red and gold traditional wear" },
    { src: "assets/gallery-03.webp", sm: "assets/gallery-03-sm.webp", w: 900, h: 1080, sw: 560, sh: 672, alt: "Merit waving with a bright smile in the garden" },
    { src: "assets/gallery-04.webp", sm: "assets/gallery-04-sm.webp", w: 853, h: 1280, sw: 560, sh: 840, alt: "Merit joyfully tossing the horsetail fan" },
    { src: "assets/gallery-05.webp", sm: "assets/gallery-05-sm.webp", w: 1200, h: 800, sw: 640, sh: 426, alt: "Merit and EL DozZy sharing a moment during the traditional wedding" },
    { src: "assets/gallery-06.webp", sm: "assets/gallery-06-sm.webp", w: 936, h: 1170, sw: 560, sh: 700, alt: "A tender pre-wedding moment on the staircase" },
    { src: "assets/gallery-07.webp", sm: "assets/gallery-07-sm.webp", w: 914, h: 1280, sw: 560, sh: 784, alt: "Merit carrying the wine, smiling" },
    { src: "assets/gallery-08.webp", sm: "assets/gallery-08-sm.webp", w: 1200, h: 855, sw: 640, sh: 456, alt: "EL DozZy celebrated with money spraying at the traditional wedding" },
    { src: "assets/gallery-09.webp", sm: "assets/gallery-09-sm.webp", w: 970, h: 1213, sw: 560, sh: 700, alt: "Merit and EL DozZy by the lift in black and white" },
    { src: "assets/gallery-10.webp", sm: "assets/gallery-10-sm.webp", w: 800, h: 1123, sw: 560, sh: 786, alt: "Merit and EL DozZy in the greenery" },
    { src: "assets/gallery-11.webp", sm: "assets/gallery-11-sm.webp", w: 594, h: 1080, sw: 560, sh: 1018, alt: "An early photo of Merit and EL DozZy" }
  ],

  toast: {
    heading: "Wedding Toast",
    lines: ["To love,", "and laughter,", "and our happily ever after.",
            "Join us as we raise a glass", "to the beginning", "of forever."]
  },

  faq: [
    { q: "What is the dress code?", a: "Please dress in our colours of the day.", swatches: true },
    { q: "Where can I park?", a: "Parking details will be shared closer to the day. Please call the contact person for guidance." },   // TODO
    { q: "Where can I stay?", a: "Accommodation suggestions will be shared closer to the day. Please call the contact person for help." },   // TODO
    { q: "Who do I contact?", contact: true },
    { q: "Who created this beautiful wedding website?",
  a: "This website was proudly designed by G.O.C | Brand Strategist, where we create beautiful, personalized digital wedding experiences.",
  extra: "Planning your wedding? Let's create yours too!",
  link: { text: "Chat with us on WhatsApp", href: "https://wa.me/2348027134537" } }
  ],

  footer: { thanks: "Thank you for celebrating with us. Your love and support mean the world to us." },
  share: { text: "You are invited to celebrate the wedding of Merit & EL DozZy on Saturday, 26th December 2026." },
  music: { src: "assets/music.mp3", volume: 0.5 },
  rsvp: { endpoint: "https://script.google.com/macros/s/AKfycbxZmCTH9yJn0aJY51OvW1ZbeOjg0qIupQMz1zULWrfSRPaQUXAqo3DHfD6mf1de3wKQsg/exec", maxGuests: 10 }   // paste your Google Apps Script Web App URL into endpoint (see README)
};

/* ============================ APP CODE ============================ */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const get = (o, p) => p.split(".").reduce((a, k) => (a == null ? a : a[k]), o);
  const lsGet = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } };
  const el = (tag, attrs, ...kids) => {
    const n = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([k, v]) => {
      if (v === false || v == null) return;
      if (k === "class") n.className = v; else if (k === "text") n.textContent = v; else n.setAttribute(k, v === true ? "" : v);
    });
    kids.flat().forEach((c) => c != null && n.append(c.nodeType ? c : document.createTextNode(c)));
    return n;
  };
  const C = CONFIG, E = C.event;
  const target = new Date(E.dateISO);
  const end = new Date(target.getTime() + E.durationHours * 3600e3);
  const pad = (n) => String(n).padStart(2, "0");
  const icsDate = (d) => d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + pad(d.getUTCMinutes()) + pad(d.getUTCSeconds()) + "Z";
  const params = new URLSearchParams(location.search);
  const guest = (params.get("guest") || "").trim().slice(0, 60);
  const ctaDigits = (s) => s.replace(/\D/g, "");
  const telHref = (n) => "tel:" + (n.replace(/[^\d+]/g, ""));

  /* ---------- fill data-cfg ---------- */
  $$("[data-cfg]").forEach((n) => { const v = get(C, n.getAttribute("data-cfg")); if (v != null) n.textContent = v; });

  /* ---------- swatches ---------- */
  function swatches(ul) {
    C.colours.forEach((c) => ul.append(el("li", {},
      el("span", { class: "sw" + (c.metallic ? " sw-metal" : ""), style: c.metallic ? "" : "background:" + c.hex }),
      el("span", { class: "sw-name", text: c.name }))));
  }
  swatches($("#swatchesCard"));

  /* ---------- guest greeting ---------- */
  if (guest) {
    $("#envDear").hidden = false; $("#envDearName").textContent = guest;
    $("#cardDear").hidden = false; $("#cardDear span").textContent = guest;
    $("#rName").value = guest;
  }

  /* ---------- venues ---------- */
  const mapsOpen = (v) => v.mapsUrl || "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(v.mapQuery);
  const mapsDir = (v) => "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(v.mapQuery);
  C.venues.forEach((v) => {
    $("#venueGrid").append(el("article", { class: "venue on-paper reveal" },
      el("p", { class: "c-pill", text: v.label }),
      el("h3", { class: "v-name", text: v.name }),
      el("p", { class: "v-sub", text: v.sub }),
      el("p", { class: "v-addr", text: v.address }),
      el("p", { class: "v-time" }, el("strong", { text: "Time: " }), v.time),
      el("div", { class: "btn-col" },
        el("a", { class: "btn btn-burg btn-block", href: mapsOpen(v), target: "_blank", rel: "noopener", text: "Open in Google Maps" }),
        el("a", { class: "btn btn-ghost-dark btn-block", href: mapsDir(v), target: "_blank", rel: "noopener", text: "Get directions" }))));
  });

  /* ---------- father of the day / vendors ---------- */
  if (C.fatherOfDay && C.fatherOfDay.name) $("#father").hidden = false;
  if (C.vendors.length) {
    $("#vendors").hidden = false;
    const list = $("#vendorList");
    C.vendors.forEach(([role, name, phone]) => list.append(el("li", {},
      el("span", { class: "vd-role", text: role }),
      el("span", { class: "vd-name" }, name, phone ? el("a", { class: "vd-tel", href: "tel:" + ctaDigits(phone).replace(/^(?!0)/, "+234"), text: " · " + phone }) : null))));
    if (C.developer) list.append(el("li", {}, el("span", { class: "vd-role", text: "Website" }), el("span", { class: "vd-name" }, C.developerWhatsapp ? el("a", { class: "vd-link", href: C.developerWhatsapp, target: "_blank", rel: "noopener", text: C.developer.replace(/^Website:\s*/i, "") }) : C.developer.replace(/^Website:\s*/i, ""))));
  }

  /* ---------- hero slideshow (soft cross-fade) ---------- */
  (function () {
    const slides = $$(".hero-slide"); if (slides.length < 2 || reduce) return;
    let i = 0;
    const load = (s) => { if (s.dataset.src) { s.src = s.dataset.src; delete s.dataset.src; } return s.decode ? s.decode().catch(() => {}) : Promise.resolve(); };
    const next = async () => {
      const n = (i + 1) % slides.length; await load(slides[n]);
      slides[n].classList.add("is-on"); slides[i].classList.remove("is-on"); i = n;
    };
    window.addEventListener("load", () => { slides.slice(1).forEach(load); setInterval(next, 6500); });
  })();

  /* ---------- story ---------- */
  C.story.moments.forEach((m, i) => $("#timeline").append(el("li", { class: "moment reveal" },
    el("figure", { class: "m-photo" }, el("img", { src: m.img, alt: m.alt, width: 640, height: 800, loading: "lazy", decoding: "async" })),
    el("div", { class: "m-body" },
      el("p", { class: "m-label", text: m.label }),
      el("h3", { class: "m-title", text: m.title }),
      el("p", { class: "m-text", text: m.text })))));

  /* ---------- toast text ---------- */
  C.toast.lines.forEach((l, i, a) => $("#toastLines").append(el("span", { class: "tl reveal" + (i === a.length - 1 ? " tl-last gold-text" : ""), text: l })));

  /* ---------- FAQ ---------- */
  const acc = $("#acc");
  C.faq.forEach((f, i) => {
    const body = el("div", { class: "acc-body", id: "acc-b" + i, role: "region", "aria-labelledby": "acc-h" + i });
    const inner = el("div", { class: "acc-in" });
    if (f.a) inner.append(el("p", { text: f.a }));
    if (f.extra) inner.append(el("p", { text: f.extra }));
    if (f.link) inner.append(el("p", {}, el("a", { href: f.link.href, target: "_blank", rel: "noopener", text: f.link.text })));
    if (f.swatches) { const ul = el("ul", { class: "swatches swatches-sm" }); swatches(ul); inner.append(ul); }
    if (f.contact) {
      inner.append(el("p", {}, el("strong", { text: C.contact.coordinatorName + ": " }), el("a", { href: telHref(C.contact.coordinatorPhone), text: C.contact.coordinatorPhone })));
      if (ctaDigits(C.contact.whatsapp) !== ctaDigits("234" + C.contact.coordinatorPhone.slice(1)))
        inner.append(el("p", {}, "WhatsApp: ", el("a", { href: "https://wa.me/" + C.contact.whatsapp, target: "_blank", rel: "noopener", text: "+" + C.contact.whatsapp })));
      else inner.append(el("p", { text: "This number is also on WhatsApp." }));
    }
    body.append(inner);
    const btn = el("button", { class: "acc-btn", id: "acc-h" + i, type: "button", "aria-expanded": "false", "aria-controls": "acc-b" + i }, el("span", { text: f.q }), el("i", { "aria-hidden": "true" }));
    acc.append(el("div", { class: "acc-item" }, el("h3", {}, btn), body));
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      $$(".acc-btn", acc).forEach((b) => { b.setAttribute("aria-expanded", "false"); b.parentElement.nextElementSibling.style.height = "0px"; });
      if (!open) { btn.setAttribute("aria-expanded", "true"); body.style.height = body.firstElementChild.offsetHeight + "px"; }
    });
  });
  window.addEventListener("resize", () => $$(".acc-btn[aria-expanded=true]").forEach((b) => { const bd = b.parentElement.nextElementSibling; bd.style.height = bd.firstElementChild.offsetHeight + "px"; }));

  /* ---------- gifts copy ---------- */
  const toastEl = $("#toast"); let toastT;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("show"), 2200); }
  $("#copyBtn").addEventListener("click", async () => {
    const num = C.gifts.accountNumber; let ok = false;
    try { await navigator.clipboard.writeText(num); ok = true; } catch (e) {
      const t = el("textarea", { style: "position:fixed;opacity:0", "aria-hidden": "true" }); t.value = num; document.body.append(t); t.select();
      try { ok = document.execCommand("copy"); } catch (e2) { ok = false; } t.remove();
    }
    toast(ok ? "Account number copied" : "Could not copy. Please copy it manually.");
  });

  /* ---------- calendar ---------- */
  const calTitle = "Wedding of " + C.couple.short;
  const calDesc = C.share.text + " " + C.siteUrl;
  const calLoc = C.venues[0].name + ", " + C.venues[0].address;
  $("#gcalBtn").href = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(calTitle) +
    "&dates=" + icsDate(target) + "/" + icsDate(end) + "&details=" + encodeURIComponent(calDesc) + "&location=" + encodeURIComponent(calLoc);
  $("#icsBtn").addEventListener("click", () => {
    const esc = (s) => s.replace(/[\\;,]/g, (m) => "\\" + m).replace(/\n/g, "\\n");
    const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Wedding Invitation//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT",
      "UID:" + icsDate(target) + "-ugodozzy2026@wedding", "DTSTAMP:" + icsDate(new Date()), "DTSTART:" + icsDate(target), "DTEND:" + icsDate(end),
      "SUMMARY:" + esc(calTitle), "LOCATION:" + esc(calLoc), "DESCRIPTION:" + esc(calDesc), "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const a = el("a", { href: url, download: "Merit-and-EL-DozZy-wedding.ics" }); document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  });

  /* ---------- countdown ---------- */
  const cdEls = { d: $("#cdD"), h: $("#cdH"), m: $("#cdM"), s: $("#cdS") };
  function setNum(n, v) { if (n.textContent !== v) { n.textContent = v; if (!reduce) { n.classList.remove("flip"); void n.offsetWidth; n.classList.add("flip"); } } }
  function tick() {
    const ms = target - Date.now();
    if (ms <= 0) { $("#cd").hidden = true; $("#married").hidden = false; return false; }
    const s = Math.floor(ms / 1000);
    setNum(cdEls.d, pad(Math.floor(s / 86400))); setNum(cdEls.h, pad(Math.floor(s % 86400 / 3600)));
    setNum(cdEls.m, pad(Math.floor(s % 3600 / 60))); setNum(cdEls.s, pad(s % 60));
    return true;
  }
  if (tick()) { const iv = setInterval(() => { if (!tick()) clearInterval(iv); }, 1000); }

  /* ---------- gallery + lightbox ---------- */
  const G = C.gallery, gPrev = $("#gPreview"), gMas = $("#gMasonry"), gBtn = $("#gAllBtn");
  const imgIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M4 5h16v14H4zM4 16l5-5 4 4 3-3 4 4M9 9.5h.01"/></svg>';
  let lastOpener = null;
  G.slice(0, 3).forEach((g, i) => {
    const b = el("button", { class: "g-tile reveal", type: "button", "aria-label": "Open photo: " + g.alt });
    b.append(el("img", { src: g.sm, alt: g.alt, width: g.sw, height: g.sh, loading: "lazy", decoding: "async" }), el("span", { class: "g-pill", text: "Moment " + (i + 1) }));
    b.addEventListener("click", () => openLb(i, b)); gPrev.append(b);
  });
  if (G[3]) {
    const more = G.length - 3;
    const b = el("button", { class: "g-tile g-more reveal", type: "button", "aria-label": "View all " + G.length + " photos" });
    b.append(el("img", { src: G[3].sm, alt: "", width: G[3].sw, height: G[3].sh, loading: "lazy", decoding: "async" }),
      el("span", { class: "g-over" }, el("span", { class: "g-plus", text: "+" + more }), el("span", { class: "g-view", text: "View other pictures" }), el("span", { class: "g-click", text: "Click to view all " + G.length + " photos" })));
    b.addEventListener("click", () => toggleAll(true)); gPrev.append(b);
  }
  G.forEach((g, i) => {
    const b = el("button", { type: "button", "aria-label": "Open photo: " + g.alt }, el("img", { src: g.sm, alt: g.alt, width: g.sw, height: g.sh, loading: "lazy", decoding: "async" }));
    b.addEventListener("click", () => openLb(i, b)); gMas.append(el("li", {}, b));
  });
  function toggleAll(open) {
    gMas.hidden = !open; gPrev.hidden = open; gBtn.setAttribute("aria-expanded", String(open));
    gBtn.innerHTML = open ? "Show less" : imgIcon + " View all photos (" + G.length + ")";
    if (open) gMas.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }
  gBtn.addEventListener("click", () => toggleAll(gBtn.getAttribute("aria-expanded") !== "true"));
  toggleAll(false);

  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap"), lbCount = $("#lbCount"), lbStage = $("#lbStage");
  let cur = 0;
  function show(i) {
    cur = (i + G.length) % G.length; const g = G[cur];
    lbImg.src = g.src; lbImg.alt = g.alt; lbImg.width = g.w; lbImg.height = g.h; lbCap.textContent = g.alt; lbCount.textContent = (cur + 1) + " / " + G.length;
  }
  function openLb(i, opener) { lastOpener = opener || document.activeElement; show(i); lb.hidden = false; document.documentElement.classList.add("lock"); $("#lbClose").focus(); }
  function closeLb() { lb.hidden = true; document.documentElement.classList.remove("lock"); lbImg.removeAttribute("src"); if (lastOpener) lastOpener.focus(); }
  $("#lbClose").addEventListener("click", closeLb);
  $("#lbPrev").addEventListener("click", () => show(cur - 1));
  $("#lbNext").addEventListener("click", () => show(cur + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft") show(cur - 1);
    else if (e.key === "ArrowRight") show(cur + 1);
    else if (e.key === "Tab") {
      const f = [$("#lbClose"), $("#lbPrev"), $("#lbNext")], i = f.indexOf(document.activeElement);
      e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
  let sx = null;
  lbStage.addEventListener("pointerdown", (e) => { sx = e.clientX; });
  lbStage.addEventListener("pointerup", (e) => { if (sx == null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); });
  lbStage.addEventListener("pointercancel", () => { sx = null; });

  /* ---------- RSVP ---------- */
  const form = $("#rsvpForm"), call = C.contact.callNumbers;
  $("#callBtn").href = telHref(call[0]); $("#callBtn").textContent = "Call to RSVP: " + call[0];
  if (call.length > 1) { const p = $("#callList"); p.append("Other numbers: "); call.slice(1).forEach((n, i) => p.append(i ? " · " : "", el("a", { href: telHref(n), text: n }))); }
  $("#guestsField input").max = C.rsvp.maxGuests;
  function waLink() {
    const n = form.name.value.trim(), att = (form.attending.value || ""), g = form.guests.value;
    let t = "Hello! RSVP for the wedding of " + C.couple.short + " (" + E.dateLong.replace(/^\w+, /, "") + ").";
    if (n) t += "\nName: " + n; if (att) t += "\nAttending: " + att;
    if (att === "Joyfully accept" && g) t += "\nGuests: " + g;
    return "https://wa.me/" + C.contact.whatsapp + "?text=" + encodeURIComponent(t);
  }
  const wa = $("#waBtn"); wa.href = waLink();
  ["input", "change"].forEach((ev) => form.addEventListener(ev, () => { wa.href = waLink(); }));
  $$("input[name=attending]").forEach((r) => r.addEventListener("change", () => { $("#guestsField").hidden = r.value !== "Joyfully accept"; }));
  wa.addEventListener("click", () => { wa.href = waLink(); });
  const setErr = (id, msg, input) => { $("#" + id).textContent = msg; if (input) input.setAttribute("aria-invalid", msg ? "true" : "false"); return !msg; };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (form.website.value) return;                       // honeypot
    const name = form.name.value.trim(), phone = form.phone.value.trim(), att = form.attending.value, accepting = att === "Joyfully accept";
    const g = parseInt(form.guests.value, 10);
    const okName = setErr("rName-e", name.length < 2 ? "Please enter your full name." : "", form.name);
    const digits = phone.replace(/\D/g, "");
    const okPhone = setErr("rPhone-e", digits.length < 7 || digits.length > 15 ? "Please enter a valid phone number." : "", form.phone);
    const okAtt = setErr("rAtt-e", att ? "" : "Please choose one option.");
    const okG = setErr("rGuests-e", accepting && !(g >= 1 && g <= C.rsvp.maxGuests) ? "Please enter 1 to " + C.rsvp.maxGuests + " guests." : "", form.guests);
    if (!(okName && okPhone && okAtt && okG)) { const f = $("[aria-invalid=true]", form) || $("#rAtt-e").previousElementSibling; if (f && f.focus) f.focus(); return; }
    const note = $("#rNote");
    if (!C.rsvp.endpoint) { note.textContent = "Online RSVP is not switched on yet. Please use the WhatsApp or Call buttons below. Thank you!"; return; }
    const btn = $("#rSubmit"); btn.disabled = true; note.textContent = "Sending…";
    try {
      await fetch(C.rsvp.endpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ name, phone, attending: att, guests: accepting ? g : 0, message: form.message.value.trim().slice(0, 500), website: "" }) });
      form.hidden = true; $("#rsvpOk").hidden = false;
      $("#okText").textContent = accepting ? "We can't wait to celebrate with you, " + name + "." : "We will miss you, " + name + ", and thank you for letting us know.";
      note.textContent = "";
    } catch (err) { note.textContent = "Something went wrong. Please try again or use the WhatsApp or Call buttons."; btn.disabled = false; }
  });

  /* ---------- footer share ---------- */
  $("#shareBtn").href = "https://wa.me/?text=" + encodeURIComponent(C.share.text + " " + C.siteUrl);

  /* ---------- reveal ---------- */
  if (!reduce && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    $$(".reveal").forEach((n) => io.observe(n));
  } else $$(".reveal").forEach((n) => n.classList.add("in"));

  /* ---------- music ---------- */
  const bgm = $("#bgm"), soundBtn = $("#soundBtn"), soundIco = $("#soundIco");
  bgm.src = C.music.src; let fadeT;
  function paintSound(on) { soundIco.setAttribute("href", on ? "#icoSoundOn" : "#icoSoundOff"); soundBtn.setAttribute("aria-pressed", String(on)); soundBtn.setAttribute("aria-label", on ? "Mute music" : "Play music"); }
  function fade(to, done) {
    clearInterval(fadeT);
    fadeT = setInterval(() => {
      const d = to - bgm.volume;
      if (Math.abs(d) < 0.03) { bgm.volume = to; clearInterval(fadeT); if (done) done(); } else bgm.volume = Math.min(1, Math.max(0, bgm.volume + Math.sign(d) * 0.03));
    }, 80);
  }
  function startMusic() { bgm.volume = 0; const p = bgm.play(); const ok = () => { paintSound(true); fade(C.music.volume); }; if (p && p.then) p.then(ok).catch(() => paintSound(false)); else ok(); }
  soundBtn.addEventListener("click", () => {
    if (bgm.paused) { lsSet("wedding-muted", "0"); startMusic(); }
    else { lsSet("wedding-muted", "1"); paintSound(false); fade(0, () => bgm.pause()); }
  });
  bgm.addEventListener("error", () => paintSound(false));

  /* ---------- intro ---------- */
  const intro = $("#intro"), page = $("#page"), seal = $("#seal"), env = $("#env"), flap = $("#envFlap"), card = $("#envCard");
  const root = document.documentElement;
  let opened = false;
  function endIntro() {
    intro.remove(); page.inert = false; root.classList.remove("lock");
    $("#main").focus({ preventScroll: true }); window.scrollTo(0, 0);
  }
  function lockIntro() { page.inert = true; root.classList.add("lock"); }
  function sparkle() {
    const box = $("#sparkles"), r = seal.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    for (let i = 0; i < 18; i++) {
      const s = el("i", { style: "left:" + cx + "px;top:" + cy + "px" }); box.append(s);
      const a = Math.random() * Math.PI * 2, d = 50 + Math.random() * 90;
      s.animate([{ transform: "translate(-50%,-50%) scale(1)", opacity: 1 }, { transform: "translate(" + (Math.cos(a) * d - 3) + "px," + (Math.sin(a) * d - 3) + "px) scale(0)", opacity: 0 }], { duration: 700 + Math.random() * 400, easing: "cubic-bezier(.2,.7,.3,1)", fill: "forwards" }).finished.then(() => s.remove());
    }
  }
  async function openInvite() {
    if (opened) return; opened = true;
    if (lsGet("wedding-muted") !== "1") startMusic();
    $("#hint").hidden = true; $("#skipBtn").hidden = true;
    if (reduce) { await intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 400, fill: "forwards" }).finished; endIntro(); return; }
    const A = (n, kf, o) => n.animate(kf, Object.assign({ fill: "forwards", easing: "cubic-bezier(.22,.8,.24,1)" }, o)).finished;
    A(seal, [{ transform: "scale(1)" }, { transform: "scale(.88)" }], { duration: 160 }); await wait(170);
    seal.style.visibility = "hidden"; $("#halfL").style.opacity = 1; $("#halfR").style.opacity = 1;
    A($("#halfL"), [{ transform: "translate(0,0) rotate(0)", opacity: 1 }, { transform: "translate(-22px,26px) rotate(-22deg)", opacity: 0 }], { duration: 650 });
    A($("#halfR"), [{ transform: "translate(0,0) rotate(0)", opacity: 1 }, { transform: "translate(22px,32px) rotate(24deg)", opacity: 0 }], { duration: 650 });
    A($(".sprig"), [{ opacity: 1 }, { opacity: 0 }], { duration: 500 }); A($(".ribbon"), [{ opacity: 1 }, { opacity: 0 }], { duration: 500 });
    A($("#envText"), [{ opacity: 1 }, { opacity: 0 }], { duration: 450 }); A($("#introTitle"), [{ opacity: 1 }, { opacity: 0 }], { duration: 500 });
    sparkle(); await wait(380);
    A(flap, [{ transform: "rotateX(0deg)" }, { transform: "rotateX(180deg)" }], { duration: 760, easing: "ease-in-out" });
    await wait(380); flap.style.zIndex = 0; await wait(240);   // once the lid passes upright, drop it behind the card
    // card slides up out of the envelope
    const er = env.getBoundingClientRect(), cr = card.getBoundingClientRect();
    const rise = (cr.bottom - er.top) - 0.15 * cr.height + 6;      // leave only the bottom 15% inside
    await A(card, [{ transform: "translate(-50%,0)" }, { transform: "translate(-50%," + (-rise) + "px)" }], { duration: 800, easing: "cubic-bezier(.3,.7,.2,1)" });
    // lift it above the envelope, scale to fill the screen, drop the envelope away
    const r = card.getBoundingClientRect();
    intro.append(card);
    Object.assign(card.style, { position: "fixed", left: r.left + "px", top: r.top + "px", width: r.width + "px", margin: "0", transform: "none", zIndex: 40, bottom: "auto" });
    const s = Math.min(innerWidth * 0.94 / r.width, innerHeight * 0.8 / r.height);
    const dx = innerWidth / 2 - (r.left + r.width / 2), dy = innerHeight / 2 - (r.top + r.height / 2);
    A(env, [{ transform: "translateY(0)" }, { transform: "translateY(115%)" }], { duration: 900, easing: "cubic-bezier(.5,0,.3,1)" });
    await A(card, [{ transform: "translate(0,0) scale(1)" }, { transform: "translate(" + dx + "px," + dy + "px) scale(" + s + ")" }], { duration: 900, easing: "cubic-bezier(.5,0,.2,1)" });
    await wait(120);
    page.inert = false;
    await intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 650, fill: "forwards" }).finished;
    endIntro();
  }
  seal.addEventListener("click", openInvite);
  $("#skipBtn").addEventListener("click", async () => {
    if (opened) return; opened = true;
    if (lsGet("wedding-muted") !== "1") startMusic();
    await intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: reduce ? 200 : 350, fill: "forwards" }).finished; endIntro();
  });
  if (params.has("nointro")) { intro.remove(); } else { lockIntro(); intro.focus({ preventScroll: true }); }
  if (lsGet("wedding-muted") === "1") paintSound(false);
})();
