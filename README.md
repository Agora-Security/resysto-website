# resysto Website

Static marketing site for resysto with internationalization support.

## Prerequisites
- Zola (Rust SSG) available in PATH, or use `zola` from CI steps
- Node 20+ (for Tailwind CLI only)

## Install
```bash
npm install
```

## Develop
In one terminal:
```bash
npm run dev
```

In another terminal:
```bash
zola serve
```

Open `http://127.0.0.1:1111`.

## Build
```bash
npm run build
zola build
```
The built site will be in the `public/` directory.

## Internationalization (i18n)

The website supports multiple languages using Zola's built-in multilingual capabilities.

### Supported Languages
- **English (en)** - Default language, served at `/`
- **Italian (it)** - Served at `/it/`

### Content Structure
Following [Zola's multilingual documentation](https://www.getzola.org/documentation/content/multilingual/):

- **English content**: `index.md` (no language suffix)
- **Italian content**: `index.it.md`

Example:
```
content/
  _index.md           # English homepage
  _index.it.md        # Italian homepage
  about/
    index.md          # English about page
    index.it.md       # Italian about page
```

### Adding New Languages

1. **Update `config.toml`:**
```toml
[languages.fr]
generate_feeds = true
build_search_index = true
taxonomies = [...]

[languages.fr.translations]
home = "Accueil"
features = "Fonctionnalités"
# ... more translations
```

2. **Create translated content files:**
```bash
# For French
cp content/about/index.md content/about/index.fr.md
# Then translate the content
```

3. **Update language switcher** in `templates/base.html`:
```html
<a href="#" id="lang-fr" class="..." data-lang="fr">
    Français
</a>
```

4. **Update JavaScript** in `templates/base.html` to handle new language routes.

### Language Features

- **Automatic Detection**: Visitors are automatically redirected to their browser's language if supported (Italian users → `/it/`)
- **Manual Selection**: Language switcher in header allows users to manually select their preferred language
- **Persistent Preference**: User's manual language selection is saved in `localStorage`
- **Context-Aware Switching**: Language switcher maintains the current page context (e.g., `/features/` ↔ `/it/features/`)

### URL Structure
- English (default): `https://resysto.io/`
- Italian: `https://resysto.io/it/`
- Other languages will follow the pattern: `https://resysto.io/{lang}/`

## Internationalization (i18n)

The website supports multiple languages using Zola's built-in multilingual capabilities.

### Supported Languages
- **English (en)** - Default language, served at `/`
- **Italian (it)** - Served at `/it/`

### Content Structure
Following [Zola's multilingual documentation](https://www.getzola.org/documentation/content/multilingual/):

- **English content**: `index.md` (no language suffix)
- **Italian content**: `index.it.md`

Example:
```
content/
  _index.md           # English homepage
  _index.it.md        # Italian homepage
  about/
    index.md          # English about page
    index.it.md       # Italian about page
```

### Adding New Languages

1. **Update `config.toml`:**
```toml
[languages.fr]
generate_feeds = true
build_search_index = true
taxonomies = [...]

[languages.fr.translations]
home = "Accueil"
features = "Fonctionnalités"
# ... more translations
```

2. **Create translated content files:**
```bash
# For French
cp content/about/index.md content/about/index.fr.md
# Then translate the content
```

3. **Update language switcher** in `templates/base.html`:
```html
<a href="#" id="lang-fr" class="..." data-lang="fr">
    Français
</a>
```

4. **Update JavaScript** in `templates/base.html` to handle new language routes.

### Language Features

- **Automatic Detection**: Visitors are automatically redirected to their browser's language if supported (Italian users → `/it/`)
- **Manual Selection**: Language switcher in header allows users to manually select their preferred language
- **Persistent Preference**: User's manual language selection is saved in `localStorage`
- **Context-Aware Switching**: Language switcher maintains the current page context (e.g., `/features/` ↔ `/it/features/`)

### URL Structure
- English (default): `https://resysto.io/`
- Italian: `https://resysto.io/it/`
- Other languages will follow the pattern: `https://resysto.io/{lang}/`

## Content

### Page Structure
- Pages under `content/`
- Templates in `templates/`
- CSS entry at `assets/css/main.css` → built to `static/css/main.css`

### Translated Pages
All major pages are available in English and Italian:
- Home page (`_index.md` / `_index.it.md`)
- About (`about/index.md` / `about/index.it.md`)
- Features (`features/index.md` / `features/index.it.md`)
- Roadmap (`roadmap/index.md` / `roadmap/index.it.md`)
- Partners (`partners/index.md` / `partners/index.it.md`)
- Access (`access/index.md` / `access/index.it.md`)
- Blog (`blog/index.md` / `blog/index.it.md`)

## SEO & Sharing

The site includes comprehensive SEO implementation:
- Complete meta tags (description, Open Graph, Twitter Cards)
- Structured data (JSON-LD) for Organization, WebSite, and WebPage schemas
- Multi-language support with hreflang tags
- Canonical URLs to prevent duplicate content
- Favicons and PWA manifest
- Sitemap generation (automatic)
- RSS/Atom feeds (automatic)

**Files:**
- Meta tags: `templates/base.html`
- Default OG image: `static/images/og-default.svg`
- Robots.txt: `static/robots.txt`
- PWA manifest: `static/site.webmanifest`
- Favicons: `static/images/favicon-*.png` and `static/favicon.ico`

## Technical Notes

### Search Indexing
For Chinese and Japanese support in the future, Zola needs to be built with additional features:
```bash
cargo build --features indexing-zh --features indexing-ja
```
Note: This increases binary size significantly (Chinese: ~5MB, Japanese: ~70MB).

### Configuration
Language configuration is in `config.toml`:
- Default language settings at the base level
- Additional languages under `[languages.{code}]` sections
- UI translations under `[translations]` and `[languages.{code}.translations]`
