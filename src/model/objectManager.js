export default class ObjectManager {
  constructor() {
    this.objects = []
  }

  static getInstance() {
    if (typeof this.manager === 'undefined') {
      this.manager = new ObjectManager()
    }
    return this.manager
  }

  addObject(object) {
    this.objects.push(...object.toElements())
  }

  addObjects(objects) {
    objects.forEach(o => this.addObject(o))
  }
}
