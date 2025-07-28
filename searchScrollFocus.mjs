import fs from 'fs';
import path from 'path';

const searchTerms = ['window.scrollTo', 'autoFocus'];
const srcDir = path.resolve('./src');

function searchInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  searchTerms.forEach(term => {
    if (content.includes(term)) {
      console.log(`Fichier: ${filePath}`);
      content.split('\n').forEach((line, index) => {
        if (line.includes(term)) {
          console.log(`Ligne: ${index + 1} -> ${line.trim()}`);
        }
      });
      console.log('---------------------');
    }
  });
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      searchInFile(fullPath);
    }
  });
}

walkDir(srcDir);
