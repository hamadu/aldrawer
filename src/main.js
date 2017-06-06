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

export default class World {
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

  static get defaultShapeStyle() {
    return { fill: '#fff', stroke: '#000', 'stroke-width': 2 }
  }

  addObject(something) {
    ObjectManager.getInstance().addObject(something)
  }

  add(something) {
    this.addObject(something)
  }

  rect(x, y, w, h, options = { text: '', shapeStyle: World.defaultShapeStyle }) {
    const rect = new RectWithText(x, y, w, h, options.text)
    if (options.shapeStyle) {
      rect.setStyles(options.shapeStyle)
    }
    this.addObject(rect)
    return rect
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
}

const world = new World('#app', { width: 1280, height: 960 })

const arr = world.array(16, 16, 48, 48, Array.from('abracadabra'))
arr.setStyle(2, 'fill', '#ddf')
arr.setStyle(4, 'fill', '#dfd')

const arr2 = world.array(48, 128, 64, 64, Array.from('abr'), { orientation: 'row', index: true })

const arr3 = world.array(416, 128, 48, 48, [1, 1, 4, 5, 1, 4], { orientation: 'column', index: true })

const table = new ArrayTable(32, 480, 32, 32, [[1, 1, 4], [5, 1, 4], ['a', 'b', 'c', 'd', 'e', 'f']])
world.add(table)

const circle1 = new CircleWithText(200, 260, 32, '1')
const circle2 = new CircleWithText(200, 420, 32, '2')
const circle3 = new CircleWithText(400, 340, 32, '3')
world.add(circle1)
world.add(circle2)
world.add(circle3)
world.add(new ConnectLine(circle1, circle2))
world.add(new ConnectLine(circle2, circle3))
world.add(new ConnectLine(circle3, circle1))
