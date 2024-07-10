// script.js

// Fonction pour valider le format de l'email
function validateEmail(email) {
  // Expression régulière pour la validation basique de l'email
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Accéder aux éléments du formulaire et du message de validation
const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

// Ajouter un écouteur d'événements pour l'événement de soumission du formulaire
emailForm.addEventListener('submit', function(event) {
  // Empêcher le comportement par défaut de soumission du formulaire
  event.preventDefault();

  // Obtenir la valeur saisie dans l'entrée d'email
  const email = emailInput.value.trim();

  // Valider le format de l'email
  if (validateEmail(email)) {
      // Si valide, afficher un message de succès
      validationMessage.textContent = 'L\'email est valide. Soumission du formulaire empêchée.';
      validationMessage.style.color = 'green';
  } else {
      // Si non valide, afficher un message d'erreur
      validationMessage.textContent = 'Veuillez entrer une adresse email valide.';
      validationMessage.style.color = 'red';
  }
});