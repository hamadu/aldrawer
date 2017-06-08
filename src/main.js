import Vue from 'vue'

import RectWithText from '/src/model/rectWithText'
import CircleWithText from '/src/model/circleWithText'
import ArrayColumn from '/src/model/arrayColumn'
import ArrayRow from '/src/model/arrayRow'
import ArrayTable from '/src/model/arrayTable'
import ConnectLine from '/src/model/connectLine'
import Circle from '/src/model/circle'
import Line from '/src/model/line'

import ObjectManager from '/src/model/objectManager'
import App from './components/App.vue'

class World {
  constructor(selector, options = {}) {
    const defaultOptions = {
      width: 320,
      height: 240
    }
    const svgOptions = Object.assign(defaultOptions, options)

    this.rootComponent = new Vue({
      el: selector,
      template: '<App :width=width :height=height :connections=connections :objects=objects></App>',
      data: {
        width: svgOptions.width,
        height: svgOptions.height,
        objects: ObjectManager.getInstance().objects,
        connections: ObjectManager.getInstance().connections,
      },
      components: { App }
    })
  }

  static make(selector, options = {}) {
    return new World(selector, options)
  }

  static get defaultShapeStyle() {
    return { fill: '#fff', stroke: '#000', 'stroke-width': 2 }
  }

  addObject(something) {
    ObjectManager.getInstance().addObject(something)
  }

  add(something) {
    this.addObject(something)
  }

  rect(x, y, w, h, _options = {}) {
    const options = Object.assign({ text: '', shapeStyle: World.defaultShapeStyle }, _options)
    const rect = new RectWithText(x, y, w, h, options.text)
    if (options.shapeStyle) {
      rect.setStyles(options.shapeStyle)
    }
    this.addObject(rect)
    return rect
  }

  circle(x, y, r, _options = {}) {
     const options = Object.assign({ text: '', shapeStyle: World.defaultShapeStyle }, _options)
     const circle = new CircleWithText(x, y, r, options.text)
     if (options.shapeStyle) {
      circle.setStyles(options.shapeStyle)
    }
    this.addObject(circle)
    return circle
  }

  array(x, y, w, h, values = [], _options = {}) {
    const options = Object.assign({ orientation: 'column', index: false, shapeStyle: World.defaultShapeStyle }, _options)
    const array = options.orientation === 'column' ?
        new ArrayColumn(x, y, w, h, values, { index: options.index })
      : new ArrayRow(x, y, w, h, values, { index: options.index })

    if (options.shapeStyle) {
      array.setStyles(options.shapeStyle)
    }
    this.addObject(array)
    return array
  }

  table(x, y, w, h, tableValue = [[]], _options = {}) {
    const options = Object.assign({ shapeStyle: World.defaultShapeStyle }, _options)
    const table = new ArrayTable(x, y, w, h, tableValue)
    if (options.shapeStyle) {
      table.setStyles(options.shapeStyle)
    }
    this.addObject(table)
    return table
  }

  connect(from, to) {
    const line = new ConnectLine(from, to)
    world.add(line)
    return line
  }
}

const make = World.make
export { make }

// const world = new World('#app', { width: 1280, height: 960 })
//
// const arr = world.array(16, 16, 48, 48, Array.from('abracadabra'))
// arr.setStyle(2, 'fill', '#ddf')
// arr.setStyle(4, 'fill', '#dfd')
//
// const arr2 = world.array(48, 128, 64, 64, Array.from('abr'), { orientation: 'row', index: true })
//
// const arr3 = world.array(416, 128, 48, 48, [1, 1, 4, 5, 1, 4], { orientation: 'column', index: true })
//
// const tableStyle = { fill: '#fff', stroke: '#000', 'stroke-width': 4 }
// const table = world.table(32, 480, 32, 32, [[1, 1, 4], [5, 1, 4], ['a', 'b', 'c', 'd', 'e', 'f']], { shapeStyle: tableStyle })
//
// const circle1 = world.circle(200, 260, 32, { text: '1' })
// const circle2 = world.circle(200, 420, 32, { text: '2' })
// const circle3 = world.circle(400, 340, 48, { text: '3' })
// world.connect(circle1, circle2)
// world.connect(circle2, circle3)
// world.connect(circle3, circle1)
// window.world = world
