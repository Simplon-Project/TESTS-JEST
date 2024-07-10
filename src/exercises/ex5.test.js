/**
 * @jest-environment jsdom
 */

const { handleMouseOver, handleMouseOut } = require('./ex5');

describe('Hover Area Interaction', () => {
  beforeEach(() => {
    // Créer les éléments dans le DOM simulé (jsdom)
    document.body.innerHTML = `
      <div id="hover-area" style="width: 200px; height: 200px; background-color: lightblue;"></div>
      <p id="interaction-result">Hover over the area.</p>
    `;
  });

  it('updates interaction result on mouseover', () => {
    handleMouseOver();

    const interactionResult = document.getElementById('interaction-result');
    expect(interactionResult.textContent).toBe('Mouse over detected!');
  });

  it('resets interaction result on mouseout', () => {
    handleMouseOut();

    const interactionResult = document.getElementById('interaction-result');
    expect(interactionResult.textContent).toBe('Hover over the area.');
  });

  it('updates interaction result on actual mouseover event', () => {
    const hoverArea = document.getElementById('hover-area');
    hoverArea.dispatchEvent(new MouseEvent('mouseover'));

    const interactionResult = document.getElementById('interaction-result');
    expect(interactionResult.textContent).toBe('Mouse over detected!');
  });

  it('resets interaction result on actual mouseout event', () => {
    const hoverArea = document.getElementById('hover-area');
    hoverArea.dispatchEvent(new MouseEvent('mouseout'));

    const interactionResult = document.getElementById('interaction-result');
    expect(interactionResult.textContent).toBe('Hover over the area.');
  });
});

