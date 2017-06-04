import Vue from 'vue'

import RectWithText from '/src/model/rectWithText'
import CircleWithText from '/src/model/circleWithText'
import ArrayColumn from '/src/model/arrayColumn'
import ArrayRow from '/src/model/arrayRow'
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

  addObject(something) {
    ObjectManager.getInstance().addObject(something)
  }

  add(something) {
    this.addObject(something)
  }
}

const world = new World('#app', { width: 640, height: 480 })

const arr = new ArrayColumn(16, 16, 48, 48, Array.from('abracadabra'))
world.add(arr)

arr.setStyle(2, 'fill', '#ddf')
arr.setStyle(4, 'fill', '#dfd')

const arr2 = new ArrayColumn(16, 128, 64, 64, Array.from('abr'), { index: true })
world.add(arr2)

const arr3 = new ArrayRow(416, 128, 48, 48, [1, 1, 4, 5, 1, 4], { index: true })
world.add(arr3)

const circle1 = new CircleWithText(60, 260, 32, '1')
const circle2 = new CircleWithText(60, 420, 32, '2')
const circle3 = new CircleWithText(160, 340, 32, '3')
world.add(circle1)
world.add(circle2)
world.add(circle3)
world.add(new ConnectLine(circle1, circle2))
world.add(new ConnectLine(circle2, circle3))
world.add(new ConnectLine(circle3, circle1))
