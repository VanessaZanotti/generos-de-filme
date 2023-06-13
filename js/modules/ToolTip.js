export default class ToolTip {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);

    // bind do objeto das classes aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(event) {
    this.toolTipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 740 > window.innerWidth) {
      this.toolTipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.toolTipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // Remove a tooltip de acordo com os eventos de MouseMove e MouseLeave
  onMouseLeave(event) {
    this.toolTipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Cria a tooltip box e coloca no body
  criarToolTipBox(element) {
    const toolTipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    toolTipBox.classList.add('tooltip');
    toolTipBox.innerText = text;

    document.body.appendChild(toolTipBox);

    this.toolTipBox = toolTipBox;
  }

  // Cria a tooltip e adiciona os eventos de mouseMove e mouseLeave ao target
  onMouseOver(event) {
    // Cria a tooltip box e coloca em uma propriedade
    this.criarToolTipBox(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // Adiciona os eventos de MouseOver a cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
