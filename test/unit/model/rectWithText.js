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
    assert.equal(rectText.value, 'VALUE')
  })

  it('changes value correctly', function () {
    rectText.value = 'NEWVALUE'
    assert.equal(rectText.value, 'NEWVALUE')
  })
})

describe('set width/height', function () {
  const rectText = new RectWithText(25, 80, 30, 120, 'VALUE')

  it('changes width correctly', function () {
    rectText.width = 128
    assert.equal(rectText.rect.width, 128)
    assert.equal(rectText.text.width, 128)
  })

  it('changes height correctly', function () {
    rectText.height = 64
    assert.equal(rectText.rect.height, 64)
    assert.equal(rectText.text.height, 64)
  })
})

describe('toElements', function () {
  it('returns two: rect and text', function () {
    const rectText = new RectWithText(0, 0, 10, 10, 'VALUE')
    assert.equal(rectText.toElements().length, 2)
  })
})
