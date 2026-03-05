# 📝 Project Evolution: Test 4

This version transitions from serving static HTML files to delivering dynamic web pages by adopting a Template Engine.

### ✨ What's Unique in This Version?

- **EJS Templating Engine**: `app.set('view engine', 'ejs')` is incorporated to replace static HTML views with `.ejs` templates.
- **Dynamic Content Injection**: We replace `res.sendFile()` with `res.render()`, passing runtime objects (like `pageTitle` or `registeredHomes`) to inject dynamic context efficiently.
- **Flexible UI Components**: Data can now logically map across the frontend loop layouts directly generated from server data variables.

> [!NOTE]
> EJS is a widely used and robust tool that simplifies dynamic data binding on server-rendered pages perfectly.
