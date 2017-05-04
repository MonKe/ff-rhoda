import {HasName} from './HasName'
import Equipment from './Equipment'
import Bag from './Bag'
import Food from './Food'
import Stats from './Stats'
import Item from './Item'

export default class Person implements HasName {

  globalAttack: number
  globalDefense: number
  baseEquipment: Equipment

  constructor(
    public name: string,
    public stats: Stats,
    public equipment: Equipment,
    public bag: Bag
  ) {
    this.globalAttack = stats.attack + equipment.weapon.attack
    this.globalDefense = stats.defense + equipment.armor.defense
    this.baseEquipment = equipment
  }

  toString(): string {
    return `${this.name}: ${this.stats.toString()}`
      + `\n${this.equipment.toString()}\n${this.bag.toString()}`
  }

  // actions

  hit(target: Person): Person {
    let damage: number = this.globalAttack - target.globalDefense
    if (damage > 0) {
      target.stats.health -= damage
    }
    return target
  }

  eat(food: Food): Person {
    this.bag.remove(food)
    food.heal(this)
    return this
  }

  take(item: Item): Person {
    this.bag.add(item)
    return this
  }

  drop(item: Item): Person {
    this.bag.remove(item)
    return this
  }

  steal(target: Person): Person {
    this.bag.addAll(target.bag.items)
    target.bag = new Bag({})
    return target
  }
}
