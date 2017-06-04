import assert from 'assert'
import Circle from "/src/model/circle"

describe('toElements', function () {
  it('returns array contains self', function () {
    const circle = new Circle(0, 0, 10)
    assert.deepEqual(circle.toElements(), [circle])
  })
})
