import fs from 'fs/promises';
import path from 'path';

const targetDir = path.resolve('src/components');

async function walkDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walkDir(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

async function replaceHrefInFile(filePath) {
  let content = await fs.readFile(filePath, 'utf-8');
  const regex = /href="#.*?"/g;
  const newContent = content.replace(regex, 'href="#" onClick="event.preventDefault()"');

  if (content !== newContent) {
    await fs.writeFile(filePath, newContent, 'utf-8');
    console.log(`Modifié: ${filePath}`);
  } else {
    console.log(`Pas de changement: ${filePath}`);
  }
}

async function main() {
  const files = await walkDir(targetDir);
  for (const file of files) {
    await replaceHrefInFile(file);
  }
  console.log('Remplacement terminé.');
}

main().catch(err => {
  console.error('Erreur:', err);
  process.exit(1);
});
