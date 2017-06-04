import assert from 'assert'
import Text from "/src/model/text"

describe('center positions', function () {
  it('returns center positions correctly', function () {
    const text = new Text(70, 0, 20, 120, 'someText')
    assert.equal(text.cx, 80)
    assert.equal(text.cy, 60)
  })
})

describe('toElements', function () {
  it('returns array contains self', function () {
    const text = new Text(0, 0, 10, 10, 'someText')
    assert.deepEqual(text.toElements(), [text])
  })
})
