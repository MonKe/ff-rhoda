import Weapon from './Weapon'
import Armor from './Armor'

export default class Equipment {

  constructor(public weapon: Weapon, public armor: Armor) {}

  toString(): string {
    return `Equipment: ${this.weapon.toString()}, ${this.armor.toString()}`
  }
}
