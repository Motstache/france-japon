import fs from 'fs';
import path from 'path';

const searchTerm = 'href="#';
const srcDir = path.resolve('./src');

function searchInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes(searchTerm)) {
    console.log(`Fichier: ${filePath}`);
    content.split('\n').forEach((line, index) => {
      if (line.includes(searchTerm)) {
        console.log(`Ligne ${index + 1}: ${line.trim()}`);
      }
    });
    console.log('------------------------');
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.html')) {
      searchInFile(fullPath);
    }
  });
}

walkDir(srcDir);
