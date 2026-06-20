const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace Red rgba(217,4,41,...) with Blue rgba(37,99,235,...)
      const oldContent = content;
      content = content.replace(/217,\s*4,\s*41/g, '37,99,235');
      content = content.replace(/239,\s*35,\s*60/g, '59,130,246'); // For brand-secondary hover shadows
      
      // Replace hardcoded red-500 classes in tables
      content = content.replace(/bg-red-500/g, 'bg-indigo-500');
      content = content.replace(/bg-red-50/g, 'bg-indigo-50');
      content = content.replace(/border-red-200/g, 'border-indigo-200');
      
      if (content !== oldContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('Done replacing colors.');
