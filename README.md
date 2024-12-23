# Assignment 2 for SE 3355 Web Programming
A basic shopping site made with Express, pug and sqlite.
[Deployed site link.](https://assignment-wegf.onrender.com/)
# Data Model

### Table: `products`

The `products` table consists of the following columns:

- **id**: `INTEGER PRIMARY KEY AUTOINCREMENT`  
  *Auto-increment identifier number.*

- **name**: `TEXT`  
  *Name of the product.*

- **description**: `TEXT`  
  *A detailed description of the product, which explains its features and materials.*

- **price**: `REAL`  
  *The price of the product.*

- **image_url**: `TEXT`  
  *The URL of the product's image for rendering on the website.*

- **categories**: `TEXT`  
  *A comma-separated list of categories that the product belongs to.*

# Assumptions
- Categories are stored as a single string, making it difficult to query for products by category or perform advanced filtering (like "clothing" AND "unisex").
- The products table is dropped and recreated on every initialization to ensure a fresh state.
# Issues
- Site has no scalability thus is not compatible with mobile viewing.
- Site logo does not show up on the product details view even though it uses the same method as home and search views.
