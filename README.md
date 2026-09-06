# ITI-Storefront

A modern e-commerce storefront built with Vue 3, Vite, and Vue Router.

## Features

- Browse products by category
- Advanced product filtering (search, price, brand, stock)
- Shopping cart management
- Secure checkout process
- Order confirmation

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Environment Variables

Create a `.env.local` file:

```
VITE_API_BASE_URL=http://localhost:3000/api
```

For production (Vercel):

```
VITE_API_BASE_URL=https://your-api-domain.vercel.app/api
```

## Build for Production

```bash
npm run build
npm run preview
```

## Deployment

This project is deployed on Vercel. Connect your GitHub repository to Vercel and it will automatically deploy on push to `master`.

## Project Structure

- `src/` - Vue components and pages
- `src/pages/` - Page components (Home, Shop, Product, Cart, Checkout, Confirmation)
- `src/components/` - Reusable components (ProductCard)
- `src/services/` - API client
- `src/router.js` - Vue Router configuration
- `src/styles/` - Global CSS styles

## API Integration

The storefront connects to the ITI-API backend. Update the `VITE_API_BASE_URL` environment variable to point to your deployed API.

**Available API Endpoints:**
- `GET /categories` - Fetch all product categories
- `GET /products` - Fetch products with filtering
- `GET /products/:id` - Fetch single product
- `POST /orders` - Create new order

See [ITI-API](https://github.com/Elalmany1/ITI-API) for API documentation.
