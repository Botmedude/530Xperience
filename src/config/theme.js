/**
 * Theme Configuration
 * ---
 * Multi-brand architecture: components consume theme tokens
 * so the entire UI can be re-skinned by swapping the active theme.
 */

export const coreTheme = {
    id: 'core',
    name: 'FiveThirty',
    mode: 'dark',
    colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        accent: '#FFFFFF',       // Pure White
        accentAlt: '#E6E4DD',    // Archive Bone
        accentTertiary: '#E6E4DD', // Archive Bone
        surface: '#0F0F0F',
        surfaceLight: '#1A1A1A',
        textPrimary: '#FFFFFF',
        textSecondary: '#CCCCCC',
        textMuted: '#666666',
        border: '#333333',
    },
    fonts: {
        display: "'Archivo Black', sans-serif",
        mono: "'JetBrains Mono', monospace",
        body: "'JetBrains Mono', monospace",
    },
    layout: {
        maxWidth: '1400px',
        sectionPadding: '10rem',
        borderWidth: '2px',
        borderRadius: '0px', // Brutalist: sharp edges only
    },
    logo: 'main',
};

// ──────────────────────────────────────
// FUTURE: FiveThirty Xclusive sub-brand
// ──────────────────────────────────────
// export const xclusiveTheme = {
//   id: 'xclusive',
//   name: 'FiveThirty Xclusive',
//   mode: 'dark',
//   colors: {
//     primary: '#0A0A0A',
//     secondary: '#F5F5F0',
//     accent: '#D4AF37',       // Gold
//     accentAlt: '#8B0000',    // Deep Red
//     accentTertiary: '#C0C0C0',
//     surface: '#111111',
//     surfaceLight: '#1C1C1C',
//     textPrimary: '#F5F5F0',
//     textSecondary: '#B0B0B0',
//     textMuted: '#555555',
//     border: '#2A2A2A',
//   },
//   fonts: {
//     display: "'Playfair Display', serif",
//     mono: "'JetBrains Mono', monospace",
//     body: "'Inter', sans-serif",
//   },
//   layout: {
//     maxWidth: '1400px',
//     sectionPadding: '12rem',
//     borderWidth: '1px',
//     borderRadius: '0px',
//   },
//   logo: 'xclusive',
// };

/**
 * Get theme by brand line identifier
 */
export const getTheme = (brandLine = 'core') => {
    const themes = {
        core: coreTheme,
        // xclusive: xclusiveTheme,
    };
    return themes[brandLine] || coreTheme;
};

export default coreTheme;
