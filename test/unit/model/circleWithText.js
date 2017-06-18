import assert from 'assert'
import CircleWithText from "/src/model/circleWithText"

describe('positions', function () {
  const circleText = new CircleWithText(25, 80, 30, 'VALUE')

  it('returns center positions correctly', function () {
    assert.equal(circleText.cx, 25)
    assert.equal(circleText.cy, 80)
  })
})

describe('get/set value', function () {
  const circleText = new CircleWithText(25, 80, 30, 'VALUE')

  it('returns value correctly', function () {
    assert.equal(circleText.text, 'VALUE')
  })

  it('changes value correctly', function () {
    circleText.text = 'NEWVALUE'
    assert.equal(circleText.text, 'NEWVALUE')
  })
})

describe('get/set styles', function () {
  const circleText = new CircleWithText(25, 80, 30, 'VALUE')

  it('set styles', function () {
    circleText.setShapeStyles({ 'fill': '#0f0', 'stroke-width': '4px' })
    assert.equal(circleText.getShapeStyle().fill, '#0f0')
  })

  it('set single style', function () {
    circleText.setShapeStyle('hoge', 'moge')
    assert.equal(circleText.getShapeStyle().hoge, 'moge')
  })
})
