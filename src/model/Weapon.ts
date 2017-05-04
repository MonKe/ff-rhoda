import {HasName} from './HasName'
import Person from './Person'
import Item from './Item'

export default class Weapon extends Item implements HasName {

  constructor(public name: string, public attack: number) {
    super(name, (target: Person) => target)
  }

  toString(): string {
    return `${super.toString()} (ATK +${this.attack})`
  }
}
