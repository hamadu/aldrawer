import assert from 'assert'
import ElementGroup from "/src/model/elementGroup"
import CircleWithText from "/src/model/circleWithText"
import RectWithText from "/src/model/rectWithText"

const group = new ElementGroup([
  new CircleWithText(100, 60, 20, 'text1'),   // cx = 100, cy = 60
  new RectWithText(40, 20, 20, 40, 'text2')   // x = 40, y = 20
])

describe('toElements', function () {
  it('returns four basic elements: [rect, text, circle, text]', function () {
    assert.equal(group.toElements().length, 4)
  })
})

describe('moving x', function () {
  group.x += 20
  it('should move circle and rect correctly', function () {
    assert.equal(group.elements[0].cx, 120)
    assert.equal(group.elements[1].x, 60)
  })
})

describe('moving y', function () {
  group.y -= 10
  it('should move circle and rect correctly', function () {
    assert.equal(group.elements[0].cy, 50)
    assert.equal(group.elements[1].y, 10)
  })
})
