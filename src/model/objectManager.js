export default class ObjectManager {
  constructor() {
    this.objects = []
    this.connections = []
  }

  static getInstance() {
    if (typeof this.manager === 'undefined') {
      this.manager = new ObjectManager()
    }
    return this.manager
  }

  addObject(object) {
    object.toElements().forEach(o => {
      if (o.type === 'connect-line') {
        this.connections.push(o)
      } else {
        this.objects.push(o)
      }
    })
  }

  addObjects(objects) {
    objects.forEach(o => this.addObject(o))
  }
}
