import assert from 'assert'
import Line from "/src/model/line"

describe('constructor', function () {
  const line = new Line(10, 20, 40, 60)

  it('get position correctly', function () {
    assert.equal(line.x1, 10)
    assert.equal(line.y1, 20)
    assert.equal(line.x2, 40)
    assert.equal(line.y2, 60)
  })
})
