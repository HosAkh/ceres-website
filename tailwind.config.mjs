/** @type {import('tailwindcss').Config} */
// CERES DESIGN TOKENS — canonical color/type/spacing map.
// Changes from previous version:
//   • removed duplicate keys (secondary-container, on-tertiary-fixed were defined twice)
//   • added 'surface-cta' (#011e24) — the deep-teal footer/CTA band that was
//     previously a hardcoded hex in Footer.tsx and .cta-section
// Every UI color on the site must come from this map. No raw hex in pages.
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}'],
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
        full: '0.75rem',
      },
      fontFamily: {
        headline: ['Barlow Condensed', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
        label: ['DM Mono', 'monospace'],
        nav: ['DM Mono', 'monospace'],
        mono: ['DM Mono', 'monospace'],
      },
      fontSize: {
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '500' }],
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.02em', fontWeight: '500' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'headline-xl': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        /* Mono micro-label scale — 10px is the absolute floor (decorative
           data labels only); 11px for standard eyebrows/meta; 12px for
           anything interactive (nav links, buttons). */
        'label-xs': ['10px', { lineHeight: '14px', letterSpacing: '0.18em', fontWeight: '400' }],
        'label-sm': ['11px', { lineHeight: '16px', letterSpacing: '0.18em', fontWeight: '400' }],
        'label-nav': ['12px', { lineHeight: '16px', letterSpacing: '0.08em', fontWeight: '400' }],
      },
      spacing: {
        md: '16px',
        xl: '40px',
        sm: '8px',
        base: '4px',
        lg: '24px',
        xs: '4px',
        gutter: '16px',
        margin: '24px',
      },
    },
  },
  plugins: [],
};
