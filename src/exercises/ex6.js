// Fonction pour trouver la valeur maximale dans un tableau de nombres
function findMaxValue(arr) {
    if (arr.length === 0) {
      return null;
    }
    return Math.max(...arr);
  }
  
  // Fonction pour supprimer les doublons d'un tableau
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Fonction pour vérifier si un tableau inclut une valeur spécifique
  function includesValue(arr, value) {
    return arr.includes(value);
  }
  
  // Fonction pour trier un tableau de nombres par ordre croissant
  function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
  // Exporter les fonctions pour les rendre accessibles depuis d'autres modules
  module.exports = {
    findMaxValue,
    removeDuplicates,
    includesValue,
    sortArray
  };
  