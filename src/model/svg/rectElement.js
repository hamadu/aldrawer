export default class RectElement {
  constructor(rect, style) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    element.setAttribute('width',  rect.width)
    element.setAttribute('height', rect.height)
    element.setAttribute('x', rect.x)
    element.setAttribute('y', rect.y)

    for (let key in style) {
      element.setAttribute(key, style[key])
    }
    this.element = element
  }

  setAttribute(arg, value) {
    this.element.setAttribute(arg, value)
  }
}
