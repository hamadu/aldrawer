import assert from 'assert'
import TabularObject from "/src/model/tabularObject"

describe('constructor', function () {
  const tabularObject = new TabularObject(0, 0, 40, 60, [[1, 2, 3], [4, 5, 6]])

  it('can get value correctly', function () {
    assert.equal(tabularObject.get(0, 1), 2)
    assert.equal(tabularObject.get(1, 2), 6)
  })

  it('can set value correctly', function () {
    tabularObject.set(1, 0, 'X')
    assert.equal(tabularObject.get(1, 0), 'X')
  })

  it('can set style correctly', function () {
    tabularObject.setShapeStyle(0, 2, 'fill', '#0f0')
    assert.equal(tabularObject.getShapeStyle(0, 2)['fill'], '#0f0')
  })
})

describe('position of elements', function () {
  const arrayedObject = new TabularObject(20, 10, 32, 64, [[1, 2, 3], [4, 5, 6]])

  it('computes element position correctly', function() {
    const element = arrayedObject.getElement(1, 2)
    assert.equal(element.x, 20 + 32 * 2)
    assert.equal(element.y, 10 + 64 * 1)
  })
})
