import Vue from 'vue'

import RectWithText from '/src/model/rectWithText'
import ArrayRect from '/src/model/arrayRect'
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
}

// this is for demo
// window.World = World
const world = new World('#app', { width: 640, height: 480 })

const arr = new ArrayRect(16, 16, 48, 48, Array.from('abracadabra'))
world.addObject(arr)

const arr2 = new ArrayRect(16, 128, 48, 48, Array.from('abr'))
world.addObject(arr2)

const connectLine = new ConnectLine(arr.getRectBox(0), arr2.getRectBox(2))
world.addObject(connectLine)

arr.getRect(0).y += 20

const circle = new Circle(60, 260, 32)
world.addObject(circle)
world.addObject(new ConnectLine(arr.getRectBox(4), circle))
