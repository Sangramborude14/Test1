# 🛤️ Project Evolution: Test 2

This folder takes our simple server and adds structure to it by modularizing our routes and moving away from inline HTML.

### ✨ What's Unique in This Version?

- **Introduction of `express.Router()`**: Route handling is no longer clamped inside a single `app.js` file. We now have dedicated `userRouter.js` and `host.js` files.
- **Serving HTML Files**: Instead of utilizing `res.send()` with embedded HTML strings, `res.sendFile()` is introduced to serve standalone HTML files using `path.join()`.
- **Clean Architecture Initialized**: Code organization receives a major boost, making route management substantially easier.

> [!TIP]
> Modularizing routes is a critical professional standard that makes large-scale applications manageable.
