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

  removeObject(object) {
    object.toElements().forEach(o => {
      [this.objects, this.connections].forEach(set => {
        const idx = set.indexOf(o)
        if (idx >= 0) {
          set.splice(idx, 1)
        }
      })
    })
  }

  addObjects(objects) {
    objects.forEach(o => this.addObject(o))
  }

  clearObjects() {
    this.objects.splice(0, this.objects.length, [])
    this.connections.splice(0, this.connections.length, [])
  }
}
