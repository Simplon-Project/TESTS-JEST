const hoverArea = document.getElementById('hover-area');
const interactionResult = document.getElementById('interaction-result');

hoverArea.addEventListener('mouseover', () => {
  interactionResult.textContent = 'Mouse over detected!';
});

hoverArea.addEventListener('mouseout', () => {
  interactionResult.textContent = 'Hover over the area.';
});

// Exporter les fonctions pour les tests
module.exports = {
  handleMouseOver: () => {
    interactionResult.textContent = 'Mouse over detected!';
  },
  handleMouseOut: () => {
    interactionResult.textContent = 'Hover over the area.';
  }
};
