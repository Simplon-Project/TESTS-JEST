// ex3.test.js

// Importation des modules nécessaires pour simuler l'environnement DOM avec JSDOM
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Charger le contenu de script.js (le fichier à tester)
const scriptPath = path.resolve(__dirname, 'script.js');
const scriptCode = fs.readFileSync(scriptPath, 'utf8');

// Définir les tests avec Jest
describe('Test de script.js', () => {
  let window;

  // Avant chaque test, initialiser JSDOM et exécuter le script.js
  beforeEach(() => {
    // Créer une nouvelle instance JSDOM
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
      <body>
        <form id="email-form">
          <input type="text" id="email-input" placeholder="Enter your email">
          <button type="submit">Submit</button>
        </form>
        <p id="validation-message"></p>
        <script>${scriptCode}</script>
      </body>
      </html>
    `, { runScripts: 'dangerously' });

    // Récupérer la fenêtre (window) de JSDOM
    window = dom.window;
  });

  // Test de la fonction validateEmail
  test('validateEmail valide correctement les emails', () => {
    const { validateEmail } = window;

    // Cas de tests pour des emails valides
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user@domain.co')).toBe(true);
    expect(validateEmail('someone123@sub.domain.org')).toBe(true);
  });

  test('validateEmail rejette les emails invalides', () => {
    const { validateEmail } = window;

    // Cas de tests pour des emails invalides
    expect(validateEmail('invalidemail')).toBe(false);
    expect(validateEmail('invalid@')).toBe(false);
    expect(validateEmail('invalid@domain')).toBe(false);
    expect(validateEmail('@domain.com')).toBe(false);
  });

  // Test de la soumission du formulaire
  test('Soumission du formulaire avec validateEmail', () => {
    const { document } = window;
    const emailForm = document.getElementById('email-form');
    const emailInput = document.getElementById('email-input');
    const validationMessage = document.getElementById('validation-message');

    // Simuler la soumission du formulaire avec un email valide
    emailInput.value = 'validemail@example.com';
    emailForm.dispatchEvent(new window.Event('submit'));

    // Vérifier si le message de validation est correct
    expect(validationMessage.textContent).toContain('L\'email est valide');

    // Simuler la soumission du formulaire avec un email invalide
    emailInput.value = 'invalidemail';
    emailForm.dispatchEvent(new window.Event('submit'));

    // Vérifier si le message de validation est correct
    expect(validationMessage.textContent).toContain('Veuillez entrer une adresse email valide');
  });
});