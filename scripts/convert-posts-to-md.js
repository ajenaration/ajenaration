const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');

const POSTS_DIR = path.join(__dirname, '..', 'posts');

async function convert() {
  const files = await fs.readdir(POSTS_DIR);
  for (const f of files) {
    if (!f.endsWith('.html')) continue;
    const slug = f.replace(/\.html$/i, '');
    const filePath = path.join(POSTS_DIR, f);
    let raw = await fs.readFile(filePath, 'utf8');

    // Extract title
    const titleMatch = raw.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const title = titleMatch ? titleMatch[1].trim() : slug;

    // Extract date/meta from post-meta if present
    const metaMatch = raw.match(/<div class="post-meta">([\s\S]*?)<\/div>/i);
    let date = '';
    if (metaMatch) {
      const d = metaMatch[1].match(/(\w+ \d{1,2}, \d{4})/);
      if (d) date = d[1];
    }

    // Extract main content
    const mainMatch = raw.match(/<main[\s\S]*?>[\s\S]*?<\/main>/i) || raw.match(/<article[\s\S]*?>[\s\S]*?<\/article>/i) || raw.match(/<body[\s\S]*?>[\s\S]*?<\/body>/i);
    let htmlContent = mainMatch ? mainMatch[0] : raw;
    // remove outer tags
    htmlContent = htmlContent.replace(/^<[^>]+>/, '').replace(/<\/[^>]+>$/, '');

    // Basic conversion: keep HTML but wrap in frontmatter for now
    const mdContent = matter.stringify(htmlContent, { title, date });

    const outPath = path.join(POSTS_DIR, `${slug}.md`);
    await fs.writeFile(outPath, mdContent, 'utf8');
    console.log('Converted', f, '->', `${slug}.md`);

    // Remove original HTML file
    await fs.unlink(filePath);
    console.log('Removed', f);
  }
}

convert().catch(err => {
  console.error(err);
  process.exit(1);
});
