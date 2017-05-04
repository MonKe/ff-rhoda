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
    return this.addStack(new Stack(item, 1))
  }

  addStack(stack: Stack): Bag {
    if (this.items.hasOwnProperty(stack.item.name)) {
      this.items[stack.item.name].amount += stack.amount
    }
    else {
      this.items[stack.item.name] = stack
    }
    return this
  }

  addAll(items: StackMap): Bag {
    Object
      .keys(items)
      .map((key: string) => {
        this.addStack(items[key])
      })
    return this
  }

  remove(item: Item): Bag {
    return this.removeStack(new Stack(item, 1))
  }

  removeStack(stack: Stack): Bag {
    if (this.items.hasOwnProperty(stack.item.name)) {
      if (this.items[stack.item.name].amount > stack.amount) {
        this.items[stack.item.name].amount -= stack.amount
      }
      else {
        delete this.items[stack.item.name]
      }
    }
    return this
  }
}
