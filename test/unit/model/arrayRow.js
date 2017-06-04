import assert from 'assert'
import ArrayRow from "/src/model/arrayRow"

describe('constructor', function () {
  const arrayRow = new ArrayRow(0, 0, 40, 60, [1, 2, 3, 4, 5])

  it('can get value correctly', function () {
    assert.equal(arrayRow.getValue(2), 3)
  })

  it('can set value correctly', function () {
    arrayRow.setValue(4, 'X')
    assert.equal(arrayRow.getValue(4), 'X')
  })
})

describe('position of elements', function () {
  const arrayRow = new ArrayRow(20, 10, 32, 64, [1, 2, 3, 4, 5])

  it('computes element position correctly', function() {
    const element = arrayRow.getElement(3)
    assert.equal(element.x, 20)
    assert.equal(element.y, 10 + 64 * 3)
  })
})
