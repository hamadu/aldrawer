import assert from 'assert'
import Rect from "/src/model/rect"

describe('center positions', function () {
  it('returns center positions correctly', function () {
    const rect = new Rect(25, 80, 30, 120)
    assert.equal(rect.cx, 40)
    assert.equal(rect.cy, 140)
  })
})

describe('toElements', function () {
  it('returns array contains self', function () {
    const rect = new Rect(0, 0, 10, 10)
    assert.deepEqual(rect.toElements(), [rect])
  })
})
