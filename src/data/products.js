/**
 * Product Data — FiveThirty Xperience
 * ---
 * Schema supports multi-brand architecture via `brandLine`.
 * Only 'core' products are rendered in the current UI.
 * Future 'xclusive' products can be added without any component changes.
 */

const products = [
    // ── MENSWEAR ──────────────────────────────────
    {
        id: 'core-m-001',
        title: 'OVERSIZED_UTILITY_TEE',
        price: 89.00,
        category: 'mens',
        type: 'tops',
        brandLine: 'core',
        images: [
            '/images/prod_m_tee_1771716756396.png',
            '/images/prod_m_tee_1771716756396.png',
        ],
    },
    {
        id: 'core-m-002',
        title: 'RAW_HEM_CARGO_PANT',
        price: 145.00,
        category: 'mens',
        type: 'bottoms',
        brandLine: 'core',
        images: [
            '/images/prod_m_cargo_1771716769612.png',
            '/images/prod_m_cargo_1771716769612.png',
        ],
    },
    {
        id: 'core-m-003',
        title: 'STRUCTURED_BOMBER_JKT',
        price: 265.00,
        category: 'mens',
        type: 'outerwear',
        brandLine: 'core',
        images: [
            '/images/prod_m_jacket_1771716809829.png',
            '/images/prod_m_jacket_1771716809829.png',
        ],
    },
    {
        id: 'core-m-004',
        title: 'MONOCHROME_HOODIE',
        price: 120.00,
        category: 'mens',
        type: 'tops',
        brandLine: 'core',
        images: [
            '/images/cat_man_1771716716009.png',
            '/images/cat_man_1771716716009.png',
        ],
    },

    // ── WOMENSWEAR ────────────────────────────────
    {
        id: 'core-w-001',
        title: 'DRAPED_MIDI_DRESS',
        price: 195.00,
        category: 'womens',
        type: 'tops',
        brandLine: 'core',
        images: [
            '/images/prod_w_dress_1771716783292.png',
            '/images/prod_w_dress_1771716783292.png',
        ],
    },
    {
        id: 'core-w-002',
        title: 'TAILORED_WIDE_TROUSER',
        price: 155.00,
        category: 'womens',
        type: 'bottoms',
        brandLine: 'core',
        images: [
            '/images/prod_w_pants_1771716796747.png',
            '/images/prod_w_pants_1771716796747.png',
        ],
    },
    {
        id: 'core-w-003',
        title: 'DECONSTRUCTED_BLAZER',
        price: 285.00,
        category: 'womens',
        type: 'outerwear',
        brandLine: 'core',
        images: [
            '/images/prod_w_blazer_1771716823020.png',
            '/images/prod_w_blazer_1771716823020.png',
        ],
    },
    {
        id: 'core-w-004',
        title: 'MINIMAL_KNIT_TOP',
        price: 98.00,
        category: 'womens',
        type: 'tops',
        brandLine: 'core',
        images: [
            '/images/cat_woman_1771716730937.png',
            '/images/cat_woman_1771716730937.png',
        ],
    },
];

export default products;

/**
 * Utility: filter products by brand line
 */
export const getProductsByBrand = (brand = 'core') =>
    products.filter((p) => p.brandLine === brand);

/**
 * Utility: filter products by category
 */
export const getProductsByCategory = (category) =>
    products.filter((p) => p.category === category);
