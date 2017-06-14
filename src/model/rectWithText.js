export default class RectWithText {
  constructor(x, y, w, h, value) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.value = value
    this.style = {
      shape: {
        fill: '#fff', stroke: '#000', 'stroke-width': 2
      },
      text: {
        'fill': '#000',
        'font-size': Math.min(w, h) / 2,
        'text-anchor': 'middle',
        'alignment-baseline': 'central',
        'dominant-baseline': 'central'
      }
    }
  }

  //
  // setStyles(styles) {
  //   this.rect.style = styles
  // }
  //
  // setTextStyles(styles) {
  //   this.text.style = styles
  // }
  //
  // setStyle(arg, value) {
  //   this.rect.style[arg] = value
  // }
  //
  // setTextStyle(arg, value) {
  //   this.text.style[arg] = value
  // }
}
