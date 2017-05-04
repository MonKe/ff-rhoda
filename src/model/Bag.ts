import Item from './Item'
import Stack from './Stack'

type StackMap = {[key: string]: Stack}

export default class Bag {

  constructor(public items: StackMap) {}

  toString(): string {
    let buffer = Object
      .keys(this.items)
      .map(
        (key: string) => `\n* ${this.items[key].item.toString()} `
          + `x${this.items[key].amount}`
      )
      .join('')
    return `Bag: ${buffer}\n`
  }

  // actions

  add(item: Item): Bag {
    if (this.items.hasOwnProperty(item.name)) {
      this.items[item.name].amount ++
    }
    else {
      this.items[item.name] = new Stack(item, 1)
    }
    return this
  }

  remove(item: Item): Bag {
    if (this.items.hasOwnProperty(item.name)) {
      if (this.items[item.name].amount > 1) {
        this.items[item.name].amount --
      }
      else {
        delete this.items[item.name]
      }
    }
    return this
  }
}
