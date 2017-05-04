import {HasName} from './HasName'
import Person from './Person'

export default class Item implements HasName {

  constructor(
    public name: string,
    public effect: (target: Person) => Person
  ) {}

  toString(): string {
    return this.name
  }
}
