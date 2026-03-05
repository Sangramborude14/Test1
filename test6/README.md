# 🏗️ Project Evolution: Test 6

This version marks a monumental shift from inline-handlers towards a robust MVC (Model-View-Controller) Architecture.

### ✨ What's Unique in This Version?

- **The Controllers Directory**: Heavy logic functions operating off routes are now stripped out and organized inside `controllers/` (e.g., `error.js`, `home.js`).
- **The Models Directory**: The fundamental business logic governing the data schema or static objects is extracted into distinct modules inside the `models/` directory.
- **Improved Code Segregation**: Routes only map HTTP methods into clean controller method handlers, promoting modularity and unit testability.

> [!CAUTION] 
> MVC is fundamentally important for large-scale web applications. This directory shifts the pattern toward best industry practices.
