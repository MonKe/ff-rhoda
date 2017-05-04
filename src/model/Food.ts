import {HasName} from './HasName'
import Person from './Person'
import Item from './Item'

export default class Food extends Item implements HasName {

  constructor(public name: string, public bonus: number) {
    super(name, (target: Person) => this.heal(target))
  }

  heal(target: Person): Person {
    target.stats.health += this.bonus
    return target
  }

  toString(): string {
    return `${super.toString()} (HP +${this.bonus})`
  }
}
