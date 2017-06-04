import assert from 'assert'
import ArrayColumn from "/src/model/arrayColumn"

describe('constructor', function () {
  const arrayColumn = new ArrayColumn(0, 0, 40, 60, [1, 2, 3, 4, 5])

  it('can get value correctly', function () {
    assert.equal(arrayColumn.getValue(2), 3)
  })

  it('can set value correctly', function () {
    arrayColumn.setValue(4, 'X')
    assert.equal(arrayColumn.getValue(4), 'X')
  })

  it('can set style correctly', function () {
    arrayColumn.setStyle(2, 'fill', '#0f0')
    assert.equal(arrayColumn.getElement(2).rect.style['fill'], '#0f0')
  })
})

describe('position of elements', function () {
  const arrayColumn = new ArrayColumn(20, 10, 32, 64, [1, 2, 3, 4, 5])

  it('computes element position correctly', function() {
    const element = arrayColumn.getElement(4)
    assert.equal(element.x, 20 + 32 * 4)
    assert.equal(element.y, 10)
  })
})

describe('toElements', function () {
  const arrayColumn = new ArrayColumn(0, 0, 10, 10, [1, 2, 3, 4, 5, 6, 7])
  it('returns 7x2(rect and text) elements', function() {
    assert.equal(arrayColumn.toElements().length, 14)
  })
})
