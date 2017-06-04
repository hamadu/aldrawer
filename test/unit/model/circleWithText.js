import assert from 'assert'
import CircleWithText from "/src/model/circleWithText"

describe('center positions', function () {
  it('returns center positions correctly', function () {
    const circleText = new CircleWithText(25, 80, 30, 'VALUE')
    assert.equal(circleText.cx, 25)
    assert.equal(circleText.cy, 80)
  })
})

describe('get/set value', function () {
  const circleText = new CircleWithText(25, 80, 30, 'VALUE')

  it('returns value correctly', function () {
    assert.equal(circleText.value, 'VALUE')
  })

  it('changes value correctly', function () {
    circleText.value = 'NEWVALUE'
    assert.equal(circleText.value, 'NEWVALUE')
  })
})

describe('toElements', function () {
  it('returns two: circle and text', function () {
    const circleText = new CircleWithText(0, 0, 10, 10, 'VALUE')
    assert.equal(circleText.toElements().length, 2)
  })
})
