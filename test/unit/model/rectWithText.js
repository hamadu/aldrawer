import assert from 'assert'
import RectWithText from "/src/model/rectWithText"

describe('center positions', function () {
  it('returns center positions correctly', function () {
    const rectText = new RectWithText(25, 80, 30, 120, 'VALUE')
    assert.equal(rectText.cx, 40)
    assert.equal(rectText.cy, 140)
  })
})

describe('get/set value', function () {
  const rectText = new RectWithText(25, 80, 30, 120, 'VALUE')

  it('returns value correctly', function () {
    assert.equal(rectText.text, 'VALUE')
  })

  it('changes value correctly', function () {
    rectText.text = 'NEWVALUE'
    assert.equal(rectText.text, 'NEWVALUE')
  })
})

describe('get/set styles', function () {
  const rectText = new RectWithText(25, 80, 30, 120, 'VALUE')

  it('set styles', function () {
    rectText.setShapeStyles({ 'fill': '#0f0', 'stroke-width': '4px' })
    assert.equal(rectText.getShapeStyle().fill, '#0f0')
  })

  it('set single style', function () {
    rectText.setShapeStyle('hoge', 'moge')
    assert.equal(rectText.getShapeStyle().hoge, 'moge')
  })
})
