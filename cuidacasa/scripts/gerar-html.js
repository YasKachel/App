// Transforma cuidacasa.html em app-html.js (o formato que o aplicativo lê).
// Rode sempre que trocar o arquivo cuidacasa.html:  node scripts/gerar-html.js
const fs = require('fs');
const path = require('path');
const raiz = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(raiz, 'cuidacasa.html'), 'utf8');
fs.writeFileSync(
  path.join(raiz, 'app-html.js'),
  '// Gerado por scripts/gerar-html.js. Não edite à mão.\nexport default ' + JSON.stringify(html) + ';\n'
);
console.log('app-html.js atualizado (' + html.length + ' caracteres)');
