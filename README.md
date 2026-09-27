# TEMPTED — Online Store 👗

A complete e-commerce website for **TEMPTED**, a women's fashion brand (Instagram: [@temptedofc](https://www.instagram.com/temptedofc)) — an elegant dark-themed store with full Arabic (RTL) support, built with plain HTML/CSS/JS and a React version of the landing page.

## 🖥️ Project Files

| File | Description |
|---|---|
| `index.html` + `style.css` + `script.js` | The full multi-page store (Home, Shop, Product Detail, Cart, Checkout, Order Confirmation, Wishlist, About, Contact) |
| `tempted-react.html` | A React version of the landing page (single self-contained file, React loaded via CDN — no install needed) |
| `images/` | Real product photos for the store |

## ✨ Features

- **Full Arabic RTL design** with Playfair Display / Tajawal fonts and a dark brown/cream theme
- **Fully working shopping cart**: add/remove items, adjust quantity, auto-calculated subtotal and shipping
- **Wishlist**, toggleable from anywhere in the store
- **Filtering & sorting**: by category, color, price, and sort order (newest / best-selling / price)
- **Product detail page**: image gallery, size/color selection, product description
- **Checkout flow** with input validation (Egyptian phone number, email, card fields) and an order confirmation page
- **Fully responsive** on mobile, tablet, and desktop

## 🛠️ Tech Stack

- HTML5, CSS3 (CSS variables for easy theming), vanilla JavaScript (no framework in the base version)
- React 18 (via CDN) + Babel Standalone in `tempted-react.html`
- Tailwind CSS (Play CDN) in the React version
- Google Fonts: Tajawal, Playfair Display

## 🚀 Getting Started

No dependencies or build step required — it's plain HTML/CSS/JS.

```bash
# Clone the repo
git clone https://github.com/USERNAME/tempted-store.git
cd tempted-store

# Open index.html directly in your browser, or run a simple local server:
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 📂 Project Structure

```
tempted-store/
├── index.html          # Main page structure
├── style.css           # All styling (colors, fonts, responsiveness)
├── script.js           # Store logic: products, cart, routing, form validation
├── tempted-react.html  # React version of the landing page
└── images/              # Product photos
```

## ✏️ Customization

- **Colors & fonts**: edit the CSS variables at the top of `style.css` under `:root`
- **Products**: edit the `PRODUCTS` array in `script.js` (name, price, images, colors, sizes)
- **Store info**: edit `STORE_INFO` in `script.js` (branches, Instagram link)

## ⚠️ Notes

- Checkout payment is **simulated only** — no real payment gateway is connected
- Cart data is kept in memory (React/JS state) and resets on page refresh — connect a backend or localStorage for persistence

## 📄 License

This project is for educational/demo purposes for the TEMPTED store.
