// ex1.js

// Fonction pour ajouter une classe à un élément
function addClassToElement() {
  const element = document.getElementById('my-element');
  if (element) {
    element.classList.add('highlight');
  }
}

// Attendre que le DOM soit chargé pour ajouter l'écouteur d'événement
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('my-button');
  if (button) {
    button.addEventListener('click', addClassToElement);
  }
});

// Exporter la fonction addClassToElement si nécessaire pour les tests
module.exports = {
  addClassToElement
};
