import Vue from 'vue'

import ArrayedObject from '/src/model/arrayedObject'
import TabularObject from '/src/model/tabularObject'

import RectWithText from '/src/model/rectWithText'
import CircleWithText from '/src/model/circleWithText'
import ConnectLine from '/src/model/connectLine'
import Line from '/src/model/line'

import App from './components/App.vue'

class World {
  constructor(selector, options = {}) {
    const defaultOptions = {
      width: 320,
      height: 240
    }
    const svgOptions = Object.assign(defaultOptions, options)

    this.objects = []
    this.rootComponent = new Vue({
      el: selector,
      template: '<App :width=width :height=height :connections=connections :objects=objects></App>',
      data: {
        width: svgOptions.width,
        height: svgOptions.height,
        objects: this.objects
      },
      components: { App }
    })
  }

  static line(x1, y1, x2, y2) {
    return new Line(x1, y1, x2, y2)
  }

  static rect(x, y, w, h, v = '') {
    return new RectWithText(x, y, w, h, v)
  }

  static circle(x, y, r, v = '') {
    return new CircleWithText(x, y, r, v)
  }

  static column(x, y, w, h, values = [], options = { index: false }) {
    return ArrayedObject.column(x, y, w, h, values, options)
  }

  static row(x, y, w, h, values = [], options = { index: false }) {
    return ArrayedObject.row(x, y, w, h, values, options)
  }

  static table(x, y, w, h, values = [], options = { index: false }) {
    return TabularObject.table(x, y, w, h, values, options)
  }

  static connection(from, to) {
    return new ConnectLine(from, to)
  }

  static make(selector, options = {}) {
    return new World(selector, options)
  }

  static get defaultShapeStyle() {
    return { fill: '#fff', stroke: '#000', 'stroke-width': 2 }
  }

  addRect(...arg) {
    const rect = World.rect(...arg)
    this.add(rect)
    return rect
  }

  addCircle(...arg) {
    const circle = World.circle(...arg)
    this.add(circle)
    return circle
  }

  addColumn(...arg) {
    const column = World.column(...arg)
    this.add(column)
    return column
  }

  addRow(...arg) {
    const row = World.row(...arg)
    this.add(row)
    return row
  }

  addTable(...arg) {
    const table = World.table(...arg)
    this.add(table)
    return table
  }

  addLine(...arg) {
    const line = World.line(...arg)
    this.add(line)
    return line
  }

  addConnection(...arg) {
    const line = World.connection(...arg)
    this.add(line)
    return line
  }

  add(something) {
    this.objects.push(something)
  }

  remove(something) {
    const idx = this.objects.indexOf(something)
    if (idx >= 0) {
      this.objects.splice(idx, 1)
    }
  }

  clear() {
    this.objects.splice(0, this.objects.length)
  }
}

const make = World.make
const column = World.column
const row = World.row
const table = World.table
const rect = World.rect
const circle = World.circle
export { make, column, table, row, circle }
