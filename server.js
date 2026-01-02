const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const matter = require('gray-matter');
const { marked } = require('marked');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from project root (keeps existing paths like /style.css)
app.use(express.static(path.join(__dirname)));

const POSTS_DIR = path.join(__dirname, 'posts');

async function readPostFile(slug) {
  const filePath = path.join(POSTS_DIR, `${slug}.html`);
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    return raw;
  } catch (e) {
    return null;
  }
}

function extractTitle(html) {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (m) return m[1].trim();
  const t = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return t ? t[1].trim() : null;
}

function extractExcerpt(html) {
  const m = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  if (m) return m[1].replace(/<[^>]+>/g, '').trim();
  return null;
}

function extractMainContent(html) {
  const mainMatch = html.match(/<main[\s\S]*?>[\s\S]*?<\/main>/i);
  if (mainMatch) {
    return mainMatch[0].replace(/^<main[^>]*>/i, '').replace(/<\/main>$/i, '');
  }
  const artMatch = html.match(/<article[\s\S]*?>[\s\S]*?<\/article>/i);
  if (artMatch) {
    return artMatch[0].replace(/^<article[^>]*>/i, '').replace(/<\/article>$/i, '');
  }
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : html;
}

app.get('/blog', async (req, res) => {
  try {
    const files = await fs.readdir(POSTS_DIR);
    const posts = [];
    for (const f of files) {
      if (!f.endsWith('.md')) continue;
      const slug = f.replace(/\.md$/i, '');
      const raw = await fs.readFile(path.join(POSTS_DIR, f), 'utf8');
      const parsed = matter(raw);
      const title = parsed.data.title || slug;
      const excerpt = parsed.content.replace(/<[^>]+>/g, '').slice(0, 200);
      posts.push({ slug, title, excerpt });
    }
    res.render('blog', { posts });
  } catch (err) {
    res.status(500).send('Error reading posts');
  }
});

app.get('/posts/:slug', async (req, res) => {
  const slug = req.params.slug;
  const mdPath = path.join(POSTS_DIR, `${slug}.md`);
  try {
    const raw = await fs.readFile(mdPath, 'utf8');
    const parsed = matter(raw);
    const title = parsed.data.title || slug;
    const html = marked(parsed.content);
    res.render('post', { title, content: html });
  } catch (e) {
    return res.status(404).send('Post not found');
  }
});

app.get('/', (req, res) => {
  res.render('index', { active: 'home' });
});

app.get('/about', (req, res) => {
  res.render('about', { active: 'about' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { active: 'projects' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { active: 'contact' });
});

app.post('/contact-submit', express.urlencoded({ extended: false }), (req, res) => {
  // Placeholder: in production you'd send email or persist form data
  console.log('Contact form submitted:', req.body);
  res.redirect('/contact');
});

app.get('/devrel', (req, res) => {
  res.render('devrel', { active: 'devrel' });
});

// Redirect legacy .html paths to new dynamic routes
app.get(['/index.html','/home.html'], (req, res) => res.redirect(301, '/'));
app.get('/about.html', (req, res) => res.redirect(301, '/about'));
app.get('/projects.html', (req, res) => res.redirect(301, '/projects'));
app.get('/contact.html', (req, res) => res.redirect(301, '/contact'));
app.get('/devrel.html', (req, res) => res.redirect(301, '/devrel'));
app.get('/blog.html', (req, res) => res.redirect(301, '/blog'));
app.get('/posts/:slug.html', (req, res) => {
  res.redirect(301, `/posts/${req.params.slug}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
