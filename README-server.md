# Running the site with Express (development)

1. Install dependencies:

```bash
npm install
```

2. Start server:

```bash
npm start
```

3. Open http://localhost:3000

Notes:
- The existing static pages (e.g., `index.html`, `about.html`) remain usable.
- Visit `/blog` to see a dynamically generated listing of files in the `posts/` directory.
- Visit `/posts/<slug>` to view an individual post (slug = filename without `.html`).

Redirects:
- Requests to legacy `.html` paths are redirected to the new routes (for example `/blog.html` -> `/blog`, `/posts/my-post.html` -> `/posts/my-post`). This preserves existing links while you migrate fully to dynamic views.

Removing static files:
- After confirming the dynamic site works as expected, you can safely remove or archive the original static `.html` files. Keep backups before deleting.

Converting posts to Markdown:
- Run the converter script to convert existing `posts/*.html` files into `posts/*.md` with frontmatter. The converter will delete the original `.html` post files after conversion.

Commands:

```bash
npm install
npm run convert-posts
npm start
```
