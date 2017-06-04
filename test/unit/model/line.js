import assert from 'assert'
import Line from "/src/model/line"

describe('toElements', function () {
  it('returns array contains self', function () {
    const line = new Line(0, 0, 10, 10)
    assert.deepEqual(line.toElements(), [line])
  })
})
