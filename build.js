const fs = require('fs-extra');
const path = require('path');

async function build() {
  // Carrega o HTML template
  const templatePath = path.join(__dirname, 'index.html');
  const outputPath = path.join(__dirname, 'dist', 'index.html');
  const templateContent = await fs.readFile(templatePath, 'utf-8');

  // Carrega o conteúdo do Netlify CMS
  const dataPath = path.join(__dirname, 'content', 'pages', 'index.json');
  const data = await fs.readJson(dataPath);

  // Substitui os placeholders pelos valores do Netlify CMS
  let outputContent = templateContent
    .replace('<title>My Website</title>', `<title>${data.pageTitle}</title>`)
    .replace('<h1>Welcome to My Website</h1>', `<h1>${data.headerTitle}</h1>`)
    .replace('<p>This is a simple example of a static site.</p>', `<p>${data.headerDescription}</p>`);

  // Gera o HTML final
  await fs.outputFile(outputPath, outputContent);
}

build().catch(console.error);
