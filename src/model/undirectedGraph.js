import CircleWithText from './circleWithText'
import ConnectLine from './connectLine'

export default class UndirectedGraph {
  constructor(x, y, w, h, graph = {}) {
    const n = graph.values.length
    const positions = UndirectedGraph.computePositions(n, x, y, w, h)

    const vertices = graph.values.map((v, idx) => new CircleWithText(positions[idx][0], positions[idx][1], 32, graph.values[idx]))
    const edges = graph.edges.map(e => new ConnectLine(vertices[e[0]], vertices[e[1]]))

    this.type = 'undirectedGraph'
    this.vertexElements = vertices
    this.edgeElements = edges
  }

  static computePositions(n, x, y, w, h) {
    const r = Math.min(w, h) / 2

    return Array(n).fill(0).map((_, i) => {
      const rad = 2 * i * Math.PI / n + 1.5 * Math.PI
      return [Math.floor(r * Math.cos(rad) + x + r), Math.floor(r * Math.sin(rad) + y + r)]
    })
  }

  setStyle(index, arg, value) {
    this.getVertexElement(index).setStyle(arg, value)
  }

  setStyles(styles) {
    this.vertexElements.forEach(e => e.setStyles(Object.assign({}, styles)))
  }

  getVertexElement(index) {
    return this.vertexElements[index]
  }

  getEdgeElement(index) {
    return this.edgeElements[index]
  }

  get(index) {
    return this.getVertexElement(index).value
  }

  set(index, newValue) {
    this.getVertexElement(index).value = newValue
  }
}
