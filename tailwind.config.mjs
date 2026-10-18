/** @type {import('tailwindcss').Config} */
// CERES DESIGN TOKENS — canonical color / type / spacing map.
// Every UI color on the site must come from this map. No raw hex in pages.
// Type scale: pages use only the named steps below (label, body, lead, title,
// heading, display, stat); h1–h4 are mapped to them in global.css.
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,mjs,ts}'],
  theme: {
    extend: {
      colors: {
        /* ── Brand ─────────────────────────────────────────────── */
        primary: '#ffb691',              // peach orange — links, accents, filled buttons
        'on-primary': '#552000',         // text on primary fills
        'primary-container': '#f37221',  // saturated brand orange — glows, accents only
        'on-primary-container': '#552000',
        'inverse-primary': '#9e4200',

        /* ── Support hues ──────────────────────────────────────── */
        secondary: '#b5cacf',            // cool steel — secondary icons/text
        'on-secondary': '#203337',
        'secondary-container': '#394c51',
        'on-secondary-container': '#a7bcc1',
        tertiary: '#acccd5',             // pale cyan — tertiary accents
        'on-tertiary': '#15353c',
        'tertiary-container': '#7e9da6',
        'on-tertiary-container': '#15343c',
        error: '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',

        /* ── Surfaces (dark teal ramp, darkest → lightest) ─────── */
        'surface-container-lowest': '#001019',
        'surface-cta': '#011e24',        // footer + bottom-of-page CTA band
        surface: '#03151e',              // page canvas (body background)
        background: '#03151e',
        'surface-dim': '#03151e',
        'surface-container-low': '#0b1e27',
        'surface-container': '#10222b',  // standard card
        'surface-container-high': '#1a2c36',
        'surface-container-highest': '#253741',
        'surface-variant': '#253741',
        'surface-bright': '#2a3b45',

        /* ── On-surface text roles ─────────────────────────────── */
        'on-surface': '#d2e5f2',         // headings, primary body text
        'on-background': '#d2e5f2',
        'on-surface-variant': '#dfc0b2', // secondary body text (warm)
        outline: '#a78b7e',              // muted labels, subdued icons (4.5:1+ on all surfaces)
        'outline-variant': '#584237',    // borders, dividers only — NEVER text

        /* ── Inverse / fixed (Material roles, kept for completeness) ── */
        'inverse-surface': '#d2e5f2',
        'inverse-on-surface': '#21333c',
        'surface-tint': '#ffb691',
        'primary-fixed': '#ffdbcb',
        'primary-fixed-dim': '#ffb691',
        'on-primary-fixed': '#341100',
        'on-primary-fixed-variant': '#793100',
        'secondary-fixed': '#d1e6eb',
        'secondary-fixed-dim': '#b5cacf',
        'on-secondary-fixed': '#0a1e22',
        'on-secondary-fixed-variant': '#374a4e',
        'tertiary-fixed': '#c8e8f1',
        'tertiary-fixed-dim': '#acccd5',
        'on-tertiary-fixed': '#001f26',
        'on-tertiary-fixed-variant': '#2d4b53',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
      },
      fontFamily: {
        headline: ['"Barlow Condensed"', '"Barlow Condensed Fallback: Arial"', '"Barlow Condensed Fallback: Roboto"', 'Arial', 'sans-serif'],
        body: ['Barlow', '"Barlow Fallback: Arial"', '"Barlow Fallback: Roboto"', 'Arial', 'sans-serif'],
        mono: ['"DM Mono"', '"DM Mono Fallback"', '"Courier New"', 'monospace'],
      },
      /* ── Type scale (px at 16px root) ──────────────────────────
         label-sm 11 · label 12 · sm 14 · body-sm 15 · base 16 · lead 18 ·
         lead-lg 20 · title-sm 18 · title 22 · title-lg 28 ·
         heading 30→44 · display 40→72 · stat 28→40 · stat-lg 40→56 */
      fontSize: {
        'label-sm': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.12em' }],
        label: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.14em' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.65' }],
        lead: ['1.125rem', { lineHeight: '1.6' }],
        'lead-lg': ['1.25rem', { lineHeight: '1.55' }],
        'title-sm': ['1.125rem', { lineHeight: '1.25' }],
        title: ['1.375rem', { lineHeight: '1.15' }],
        'title-lg': ['1.75rem', { lineHeight: '1.1' }],
        heading: ['clamp(1.875rem, 1.375rem + 1.75vw, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        display: ['clamp(2.5rem, 1.75rem + 3vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        stat: ['clamp(1.75rem, 1.25rem + 1.5vw, 2.5rem)', { lineHeight: '1.1' }],
        'stat-lg': ['clamp(2.5rem, 2rem + 2vw, 3.5rem)', { lineHeight: '1' }],
      },
      maxWidth: {
        measure: '65ch',
      },
    },
  },
  plugins: [],
};
