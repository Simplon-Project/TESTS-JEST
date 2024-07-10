/**
 * @jest-environment jsdom
 */

// Importer les fonctions et les éléments à tester
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Charger le fichier HTML et le script JavaScript à tester
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const script = fs.readFileSync(path.resolve(__dirname, './ex2.js'), 'utf8');

// Variables globales pour le DOM simulé
let dom, window, document, clickMeButton, message;

// Fonction pour initialiser le DOM simulé avant chaque test
beforeEach(() => {
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  window = dom.window;
  document = window.document;

  // Exécuter le script dans le contexte du DOM simulé
  const scriptEl = document.createElement('script');
  scriptEl.textContent = script;
  document.body.appendChild(scriptEl);

  // Récupérer les éléments à tester
  clickMeButton = document.getElementById('click-me-button');
  message = document.getElementById('message');
});

// Test pour vérifier le changement de texte du paragraphe après un clic sur le bouton
test('clicking button changes message text', () => {
  // Vérifier que le texte initial est correct
  expect(message.textContent).toBe('Hello, World!');

  // Simuler un clic sur le bouton
  clickMeButton.click();

  // Vérifier que le texte du message a été mis à jour
  expect(message.textContent).toBe('Text has changed');
});
