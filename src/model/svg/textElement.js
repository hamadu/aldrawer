export default class TextElement {
  constructor(params, style) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    element.setAttribute('text-anchor', 'middle')
    element.setAttribute('alignment-baseline', 'central')
    element.setAttribute('dominant-baseline', 'central')
    element.setAttribute('x', params.x)
    element.setAttribute('y', params.y)
    for (let key in style) {
      element.setAttribute(key, style[key])
    }
    element.innerHTML = params.text
    this.element = element
  }

  setText(newValue) {
    this.element.node.textContent = newValue
  }
  setAttribute(arg, value) {
    this.element.setAttribute(arg, value)
  }
}
