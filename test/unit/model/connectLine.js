import assert from 'assert'
import ConnectLine from "/src/model/connectLine"
import RectWithText from "/src/model/rectWithText"

describe('constructor', function () {
  const line = new ConnectLine(new RectWithText(0, 10, 20, 30), new RectWithText(90, 100, 120, 130))

  it('get position correctly', function () {
    assert.equal(line.from.cx, 10)
    assert.equal(line.from.cy, 25)
    assert.equal(line.to.cx, 150)
    assert.equal(line.to.cy, 165)
  })
})
