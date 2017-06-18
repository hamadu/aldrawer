export default class ConnectLine {
  constructor(from, to, style = { stroke: '#000', 'stroke-width': 2 }) {
    this.type = 'connect-line'
    this.from = from
    this.to = to
    this.style = style
  }
}
