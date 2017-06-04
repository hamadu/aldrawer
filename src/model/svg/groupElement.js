export default class GroupElement {
  constructor(childElements = []) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    this.element = element
    for (let i = 0 ; i < childElements.length ; i++) {
      this.element.appendChild(childElements[i])
    }
  }

  addElement(childElement) {
    this.element.appendChild(childElement)
  }

  setAttribute(arg, value) {
    this.element.setAttribute(arg, value)
  }
}
