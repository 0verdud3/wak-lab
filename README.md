# 🌐 Wak‑Lab Hugo Website

Dies ist das Hugo‑Projekt für die **Wak‑Lab Webseite**.  
Es basiert auf einem eigenen Theme mit nerdigem Hackerspace/Makerspace/Chaostreff‑Charakter und einem Hauch CCC‑Vibe.

---

## 📁 Projektstruktur
```bash
waklab-site/ 
├── config.toml # zentrale Konfiguration 
├── content/ # Inhalte (Startseite, Projekte, Events) 
├── layouts/ # Templates & Partials (Header, Hero, Footer) 
├── static/ # Statische Dateien (CSS, JS, Logos) 
└── ...
```

---

## ⚙️ Konfiguration (`config.toml`)
- Liegt im Root‑Verzeichnis.
- Enthält Titel, Sprache, Menüs und Parameter.
- **Wichtig:** keine `theme = "..."` Zeile, da wir direkt mit Projektdateien arbeiten.

Beispiel `hugo.toml`:

```toml
baseURL = "https://wak-lab.org"
title = "Wak‑Lab"
languageCode = "de-de"

[taxonomies]
  tag = "tags"

[params]
  primaryColor = "#19b2b2"
  accentColor = "#00c88a"
  footerText = "© 2025 Wak‑Lab e.V. · Hackerspace · Makerspace · Chaostreff"

[menu]
  [[menu.main]]
    name = "Projekte"
    url = "/projekte/"
    weight = 10
  [[menu.main]]
    name = "Mitmachen"
    url = "/mitmachen/"
    weight = 20
  [[menu.main]]
    name = "Events"
    url = "/events/"
    weight = 30
  [[menu.main]]
    name = "Über uns"
    url = "/ueber-uns/"
    weight = 40
```

# 🎨 Layouts
- `layouts/_default/baseof.html` → Grundgerüst mit Header, Hero, Main, Footer.
- `layouts/partials/header.html` → Logo + Navigation.
- `layouts/partials/hero.html` → Startseiten‑Hero mit Terminal‑Effekt.
- `layouts/partials/footer.html` → Minimaler Footer mit Impressum/Datenschutz.

# 💅 Styles & Scripts
- `static/css/theme.css` → zentrale Styles (Farben, Layout, Hero, Karten).
- `static/js/terminal.js` → animierter Terminal‑Effekt im Hero.

## Einbindung in `baseof.html`:

```html
<link rel="stylesheet" href="{{ "css/theme.css" | relURL }}">
<script src="{{ "js/terminal.js" | relURL }}" defer></script>
```

# 📄 Inhalte
- Startseite: `content/_index.md`
- Projekte: `content/projekte/*.md`
- Events: `content/events/*.md`

## Beispiel Projekt:

```md
---
title: "LED-Wand mit ESP32"
date: 2025-11-01
tags: ["hardware", "esp32", "led"]
status: "aktiv"
repo: "https://github.com/waklab/led-wall"
---

Interaktive LED-Wand mit ESP32 und MQTT‑Anbindung.
```

## Beispiel Event:

```markdown
---
title: "Offener Abend"
date: 2025-11-27T20:00:00
location: "Wak‑Lab, Werkraum 2"
tags: ["community", "einsteiger"]
---

Jeden Donnerstag ab 20:00 Uhr: Komm vorbei, bring Fragen oder Projekte mit.

```

# 🖼 Logos

- `static/images/logo-light.svg` → helle Version.
- `static/images/logo-dark.svg` → dunkle Version.

## Einbindung im Header:

```html
<img src="{{ "images/logo-light.svg" | relURL }}" alt="Wak‑Lab Logo" class="logo light-mode">
<img src="{{ "images/logo-dark.svg" | relURL }}" alt="Wak‑Lab Logo" class="logo dark-mode">
```

# 🛠 Build & Deployment

## Lokaler Build:

```bash
hugo server -D
```

## Minifizierter Build:

```bash 
hugo --minify
```

Output liegt in `public/`

# ✅ Checkliste für den Einbau

1. `hugo.toml` im Root anlegen (ohne theme = ...).
2. CSS/JS in `static/` ablegen.
3. Partials (header.html, hero.html, footer.html) in `layouts/partials/`.
4. Inhalte (_index.md, Projekte, Events) in `content/`.
5. Logos in `static/images/`.
6. `hugo server -D` starten und testen.