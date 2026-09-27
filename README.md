**TEMPTED — React E-Commerce Storefront**

TEMPTED is a modern, single-page storefront built for an Egyptian women's fashion brand, implemented as a typed React component using industry-standard tooling: React with TypeScript, Tailwind CSS v4, and Iconify React for iconography. Unlike a static HTML mockup, this is a genuine component-driven application — every interactive element (the cart counter, wishlist toggles, the AI assistant input, the newsletter form) is backed by real React state and renders exactly the way a production storefront would.

**Architecture**

The entire experience lives in a single default-exported `App` component (`App.tsx`), authored in TypeScript with an explicit `Product` interface describing each catalog item (`id`, `title`, `subtitle`, `price`, `image`, `tag`). This keeps the product data typed and predictable: adding a new item is as simple as pushing another object into the `newArrivals` or `bestSellers` arrays, and TypeScript will immediately flag a missing field.

Four `useState` hooks drive all of the page's interactivity:
- `cartCount` — a running total shown as a badge on the shopping-bag icon, incremented whenever a shopper clicks "Add to Bag" on any product card.
- `wishlist` — an array of product IDs toggled by the heart icon on each card; the icon swaps between an outlined and filled state (`lucide:heart` / `lucide:heart-handshake`) and recolors using the destructive theme token, giving instant visual feedback without any page reload.
- `aiInput` — the text bound to the "smart shopping assistant" input field, which can also be pre-filled by tapping one of two quick-suggestion chips ("Best sellers this week" / "What suits me?"), demonstrating controlled-input patterns and programmatic state updates side by side.
- `email` — bound to the newsletter subscription field in the footer, submitted via a typed `React.FormEvent` handler.

Both the AI-assistant form and the newsletter form call `e.preventDefault()` on submit and confirm the action with a native `alert()` — a lightweight placeholder that's straightforward to swap for a real API call or toast notification once a backend is wired up.

**Design System**

Rather than hard-coding colors and fonts throughout the markup, the project uses a token-based theming approach: a companion `index.css` file defines every color, radius, font, and shadow value as a CSS custom property under `:root` (`--background`, `--foreground`, `--primary`, `--tertiary`, `--card`, `--border`, `--radius`, `--font-heading`, etc.), then maps them into Tailwind v4's `@theme inline` block so they become first-class Tailwind utilities (`bg-card`, `text-tertiary`, `border-border`, and so on). This means the entire visual identity — the near-black background, the warm wine-red (`--tertiary`) accent, the Playfair Display headings paired with Inter body text — can be re-themed globally by editing a handful of values in one file, with zero changes needed in the component markup.

Two accessibility safeguards are baked directly into the stylesheet rather than left to convention:
1. Every filled surface utility (`.bg-card`, `.bg-primary`, `.bg-accent`, etc.) is paired in `@layer base` with its own matching foreground color, so text painted onto a colored background is never accidentally invisible — a common failure mode when a component inherits page-level text color instead of a color chosen to contrast its own fill.
2. Brand colors used as *text* resolve through separate `--*-text` tokens (unlayered, so they intentionally outrank Tailwind's own utility layer) that nudge lightness just far enough to clear WCAG AA contrast on card and page backgrounds — keeping fills exactly on-brand while guaranteeing legible text.

**Layout & Sections**

The page is composed of, in order: a promotional top bar (free-shipping notice + language switcher), a sticky header with cart/wishlist icons, centered wordmark logo, and search button, a desktop navigation bar, a full-bleed hero banner with a two-button call-to-action, a seven-category icon grid (Sportswear, Dresses, Tops, Pants, Coats, Accessories, Hijabs), a five-item "New Arrivals" product grid with wishlist and add-to-cart controls on every card, a full-width editorial/brand-story banner, a five-item "Best Sellers" grid, a "smart shopping assistant" concierge panel with a live input and quick-reply chips, a footer with a newsletter signup and quick-link columns, and — on mobile viewports only — a fixed bottom tab bar (Home, Search, Wishlist, Bag, Account) for thumb-friendly navigation.

Every section is fully right-to-left (`dir="rtl"`), with Arabic copy throughout the UI and English product subtitles rendered in a nested `dir="ltr"` span so mixed-direction text (Arabic labels next to English SKU names and EGP prices) displays correctly without reversing digits or punctuation.

**Imagery**

Product and lifestyle photography is served from hosted image assets (studio-style shots generated and refined specifically for the brand — hero banner, sequin top, lace corset, chain jeans, satin maxi dress, blazer dress, tube top, editorial detail shot). Swapping any image is a one-line change: update the `image` field on the relevant product object, or the `src` on the hero/editorial `<img>` tags.

**Setup**

The component depends on three packages: `react`, `react-dom`, and `@iconify/react` for icons, plus `tailwindcss` and `@tailwindcss/vite` for styling (Tailwind v4's Vite plugin, configured by the consuming app). The companion `index.css` must be imported once from the app's entry point (e.g., `main.tsx`) — it carries every design token the component's class names depend on, so omitting it renders the page completely unstyled.

**Status**

This is a front-end-only interactive prototype: cart and wishlist state live in memory and reset on refresh, and the AI assistant / newsletter forms simulate success via `alert()` rather than calling a real backend. It's built to be dropped into an existing Vite + React + TypeScript project as a genuine starting point for a production storefront, with clear, typed extension points for connecting real product data, persistent cart storage, and payment processing.
