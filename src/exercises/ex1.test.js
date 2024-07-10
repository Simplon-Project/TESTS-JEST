// ex1.test.js

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Charger le contenu de ex1.js (le fichier à tester)
const scriptPath = path.resolve(__dirname, 'ex1.js');
const scriptCode = fs.readFileSync(scriptPath, 'utf8');

// Définir les tests avec Jest
describe('Test de ex1.js', () => {
  let window;

  // Avant chaque test, initialiser JSDOM et exécuter le script ex1.js
  beforeEach(() => {
    // Créer une nouvelle instance JSDOM
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
      <body>
        <button id="my-button">Click Me</button>
        <div id="my-element"></div>
        <script>${scriptCode}</script>
      </body>
      </html>
    `, { runScripts: 'dangerously' });

    // Récupérer la fenêtre (window) de JSDOM
    window = dom.window;
  });

  // Test de la fonction addClassToElement
  test('addClassToElement ajoute la classe "highlight" à l\'élément', () => {
    const { addClassToElement } = window;

    // Appeler la fonction addClassToElement
    addClassToElement();

    // Vérifier si la classe 'highlight' a été ajoutée à l'élément
    const element = window.document.getElementById('my-element');
    expect(element.classList.contains('highlight')).toBe(true);
  });
});
