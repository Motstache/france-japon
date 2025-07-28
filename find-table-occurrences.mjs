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

function printContext(lines, index, context=3) {
  const start = Math.max(0, index - context);
  const end = Math.min(lines.length -1, index + context);
  for(let i=start; i<=end; i++) {
    const lineNum = i + 1;
    const prefix = (i === index) ? '>> ' : '   ';
    console.log(`${prefix}${lineNum}: ${lines[i]}`);
  }
  console.log('');
}

const files = getFiles(srcDir);
let totalOccurrences = 0;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  lines.forEach((line, idx) => {
    if (line.includes(".from('table')")) {
      totalOccurrences++;
      console.log(`Fichier: ${file}`);
      console.log(`Ligne: ${idx + 1}`);
      printContext(lines, idx);
    }
  });
}

console.log(`\nTotal d'occurrences de ".from('table')": ${totalOccurrences}`);
