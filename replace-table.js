// replace-table.js
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const tables = ['todos', 'community_messages'];

// Fonction récursive pour lister fichiers ts et tsx
function getFiles(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getFiles(fullPath));
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      files.push(fullPath);
    }
  });
  return files;
}

function guessTable(filePath) {
  const lower = filePath.toLowerCase();
  if (lower.includes('todo')) return 'todos';
  if (lower.includes('community') || lower.includes('message')) return 'community_messages';
  return null;
}

const files = getFiles(srcDir);
let totalReplacements = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const tableGuess = guessTable(file);

  if (content.includes(`.from('table')`)) {
    if (tableGuess) {
      const regex = /\.from\('table'\)/g;
      content = content.replace(regex, `.from('${tableGuess}')`);
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Remplacé '.from("table")' par '.from("${tableGuess}")' dans : ${file}`);
      totalReplacements++;
    } else {
      console.warn(`Table inconnue pour ${file}, merci de vérifier manuellement.`);
    }
  }
});

console.log(`\nTotal de remplacements faits : ${totalReplacements}`);
