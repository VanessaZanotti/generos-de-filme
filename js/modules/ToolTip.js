export default function initToolTip() {}

const tooltips = document.querySelectorAll('[data-tooltip]');

function criarToolTipBox(element) {
  const toolTipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  toolTipBox.classList.add('tooltip');
  toolTipBox.innerText = text;

  document.body.appendChild(toolTipBox);

  return toolTipBox;
}

const onMouseMove = {
  handleEvent(event) {
    this.toolTipBox.style.top = `${event.pageY + 20}px`;
    this.toolTipBox.style.left = `${event.pageX + 20}px`;
  },
};

const onMouseLeave = {
  handleEvent() {
    this.toolTipBox.remove();
    this.element.removeEventListener('mouseleave', onMouseLeave);
  },
};

function onMouseOver() {
  const toolTipBox = criarToolTipBox(this);

  onMouseMove.toolTipBox = toolTipBox;
  this.addEventListener('mousemove', onMouseMove);

  onMouseLeave.toolTipBox = toolTipBox;
  onMouseLeave.element = this;
  this.addEventListener('mouseleave', onMouseLeave);
}

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver);
});
