export default class ArrayElementHandler {
  constructor(elements) {
    this.elements = elements
  }

  methods() {
    return [this.setStyle, this.getElement, this.setElement, this.getValue, this.setValue]
  }

  setStyle(index, arg, value) {
    this.elements[index].setStyle(arg, value)
  }

  getElement(index) {
    return this.elements[index]
  }

  setElement(index, newRect) {
    return this.elements[index] = newRect
  }

  getValue(index) {
    return this.elements[index].value
  }

  setValue(index, newValue) {
    this.elements[index].value = newValue
  }
}
