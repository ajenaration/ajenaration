const fs = require('fs').promises;
const path = require('path');

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const e of entries) {
    const srcPath = path.join(src, e.name);
    const destPath = path.join(dest, e.name);
    if (e.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function prepare() {
  const root = path.join(__dirname, '..');
  const functionsDir = path.join(root, 'functions');
  // Ensure functions dir exists
  await fs.mkdir(functionsDir, { recursive: true });

  // Copy views, posts, images, and public assets if present
  const items = ['views', 'posts', 'images', 'style.css', 'script.js', 'ayana-n-resume.pdf'];
  for (const it of items) {
    const src = path.join(root, it);
    try {
      const stat = await fs.stat(src);
      const dest = path.join(functionsDir, stat.isDirectory() ? it : it);
      if (stat.isDirectory()) {
        await copyDir(src, dest);
        console.log('Copied', it, '->', dest);
      } else {
        await fs.copyFile(src, path.join(functionsDir, it));
        console.log('Copied file', it);
      }
    } catch (e) {
      // ignore missing
    }
  }
}

prepare().catch(err => { console.error(err); process.exit(1); });
