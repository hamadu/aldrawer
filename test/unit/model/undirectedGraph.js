import assert from 'assert'
import UndirectedGraph from "/src/model/undirectedGraph"

describe('constructor', function () {
  const graph = new UndirectedGraph(64, 320, 256, 256,
    {
      values: [1, 4, 9, 16],
      edges: [[0, 1], [1, 2], [2, 0], [2, 3], [1, 3]]
    }
  )

  it('can get vertex correctly', function () {
    assert.equal(graph.getVertexElement(2).text, 9)
  })

  it('can get edge correctly', function () {
    assert.equal(graph.getEdgeElement(4).to.text, 16)
  })
})
