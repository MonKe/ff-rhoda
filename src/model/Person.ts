import {HasName} from './HasName'
import Weapon from './Weapon'
import Armor from './Armor'
import Bag from './Bag'
import Food from './Food'
import Stats from './Stats'

export default class Person implements HasName {

  globalAttack: number
  globalDefense: number
  baseWeapon: Weapon
  baseArmor: Armor

  constructor(
    public name: string,
    public stats: Stats,
    public weapon: Weapon,
    public armor: Armor,
    public bag: Bag
  ) {
    this.globalAttack = stats.attack + weapon.attack
    this.globalDefense = stats.defense + armor.defense
    this.baseWeapon = weapon
    this.baseArmor = armor
  }

  toString(): string {
    return `${this.name}: ${this.stats.toString()}`
      + `\nEquiped with a ${this.weapon.toString()} `
      + `and a ${this.armor.toString()}\n${this.bag.toString()}`
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
}
