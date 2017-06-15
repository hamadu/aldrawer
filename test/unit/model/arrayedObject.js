import assert from 'assert'
import ArrayedObject from "/src/model/arrayedObject"

describe('constructor', function () {
  const arrayedObject = new ArrayedObject(0, 0, 40, 60, [1, 2, 3, 4, 5])

  it('can get value correctly', function () {
    assert.equal(arrayedObject.get(2), 3)
  })

  it('can set value correctly', function () {
    arrayedObject.set(4, 'X')
    assert.equal(arrayedObject.get(4), 'X')
  })

  it('can set style correctly', function () {
    arrayedObject.setShapeStyle(2, 'fill', '#0f0')
    assert.equal(arrayedObject.getShapeStyle(2)['fill'], '#0f0')
  })
})

describe('position of column elements', function () {
  const arrayedObject = ArrayedObject.column(20, 10, 32, 64, [1, 2, 3, 4, 5])

  it('computes element position correctly', function() {
    const element = arrayedObject.getElement(4)
    assert.equal(element.x, 20 + 32 * 4)
    assert.equal(element.y, 10)
  })

  it('computes index element position correctly', function() {
    const indexElement = arrayedObject.getIndexElement(2)
    assert.equal(indexElement.x, 20 + 32 * 2)
  })
})

describe('position of row elements', function () {
  const arrayedObject = ArrayedObject.row(20, 10, 32, 64, [1, 2, 3, 4, 5])

  it('computes element position correctly', function() {
    const element = arrayedObject.getElement(4)
    assert.equal(element.x, 20)
    assert.equal(element.y, 10 + 64 * 4)
  })

  it('computes element position correctly', function() {
    const indexElement = arrayedObject.getIndexElement(2)
    assert.equal(indexElement.y, 10 + 64 * 2)
  })
})
