import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('src');

function getFiles(dir) {
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getFiles(fullPath));
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = getFiles(srcDir);

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);

  lines.forEach((line, idx) => {
    if (line.includes('.from(')) {
      console.log(`Fichier: ${file}`);
      console.log(`Ligne: ${idx + 1}`);
      console.log(`Contenu: ${line.trim()}\n`);
    }
  });
});
