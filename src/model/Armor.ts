import {HasName} from './HasName'
import Person from './Person'
import Item from './Item'

export default class Armor extends Item implements HasName {

  constructor(public name: string, public defense: number) {
    super(name, (target: Person) => target)
  }

  toString(): string {
    return `${super.toString()} (DEF +${this.defense})`
  }
}
