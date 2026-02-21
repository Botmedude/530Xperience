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
        brandLine: 'core',
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
        ],
    },
    {
        id: 'core-m-002',
        title: 'RAW_HEM_CARGO_PANT',
        price: 145.00,
        category: 'mens',
        brandLine: 'core',
        images: [
            'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
            'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
        ],
    },
    {
        id: 'core-m-003',
        title: 'STRUCTURED_BOMBER_JKT',
        price: 265.00,
        category: 'mens',
        brandLine: 'core',
        images: [
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
        ],
    },
    {
        id: 'core-m-004',
        title: 'MONOCHROME_HOODIE',
        price: 120.00,
        category: 'mens',
        brandLine: 'core',
        images: [
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
            'https://images.unsplash.com/photo-1578768079470-f8e97e87886f?w=800&q=80',
        ],
    },

    // ── WOMENSWEAR ────────────────────────────────
    {
        id: 'core-w-001',
        title: 'DRAPED_MIDI_DRESS',
        price: 195.00,
        category: 'womens',
        brandLine: 'core',
        images: [
            'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
            'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
        ],
    },
    {
        id: 'core-w-002',
        title: 'TAILORED_WIDE_TROUSER',
        price: 155.00,
        category: 'womens',
        brandLine: 'core',
        images: [
            'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
            'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
        ],
    },
    {
        id: 'core-w-003',
        title: 'DECONSTRUCTED_BLAZER',
        price: 285.00,
        category: 'womens',
        brandLine: 'core',
        images: [
            'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80',
            'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80',
        ],
    },
    {
        id: 'core-w-004',
        title: 'MINIMAL_KNIT_TOP',
        price: 98.00,
        category: 'womens',
        brandLine: 'core',
        images: [
            'https://images.unsplash.com/photo-1434389677669-e08b4cda3a69?w=800&q=80',
            'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80',
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
