const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const matter = require('gray-matter');
const { marked } = require('marked');

const app = express();

// Views and posts are expected to live inside the functions folder at deploy time.
// During local development they can be referenced from the repo root (prepare script copies them).
const VIEWS_DIR = path.join(__dirname, 'views');
const POSTS_DIR = path.join(__dirname, 'posts');

app.set('view engine', 'ejs');
app.set('views', VIEWS_DIR);

app.use(express.static(path.join(__dirname, 'public')));

async function listPosts() {
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
  return posts;
}

app.get('/blog', async (req, res) => {
  try {
    const posts = await listPosts();
    res.render('blog', { posts });
  } catch (e) {
    res.status(500).send('Error reading posts');
  }
});

app.get('/posts/:slug', async (req, res) => {
  const slug = req.params.slug;
  try {
    const raw = await fs.readFile(path.join(POSTS_DIR, `${slug}.md`), 'utf8');
    const parsed = matter(raw);
    const html = marked(parsed.content);
    const title = parsed.data.title || slug;
    res.render('post', { title, content: html });
  } catch (e) {
    res.status(404).send('Post not found');
  }
});

app.get('/', (req, res) => res.render('index', { active: 'home' }));
app.get('/about', (req, res) => res.render('about', { active: 'about' }));
app.get('/projects', (req, res) => res.render('projects', { active: 'projects' }));
app.get('/contact', (req, res) => res.render('contact', { active: 'contact' }));
app.post('/contact-submit', express.urlencoded({ extended: false }), (req, res) => {
  console.log('Contact submission (functions):', req.body);
  res.redirect('/contact');
});
app.get('/devrel', (req, res) => res.render('devrel', { active: 'devrel' }));

// Redirect legacy .html
app.get(['/index.html','/home.html'], (req, res) => res.redirect(301, '/'));
app.get('/about.html', (req, res) => res.redirect(301, '/about'));
app.get('/projects.html', (req, res) => res.redirect(301, '/projects'));
app.get('/contact.html', (req, res) => res.redirect(301, '/contact'));
app.get('/devrel.html', (req, res) => res.redirect(301, '/devrel'));
app.get('/blog.html', (req, res) => res.redirect(301, '/blog'));
app.get('/posts/:slug.html', (req, res) => res.redirect(301, `/posts/${req.params.slug}`));

exports.app = functions.https.onRequest(app);
