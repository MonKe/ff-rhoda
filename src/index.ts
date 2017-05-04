import Person from './model/Person'
import Weapon from './model/Weapon'
import Armor from './model/Armor'
import Bag from './model/Bag'
import Food from './model/Food'
import Stats from './model/Stats'
import Item from './model/Item'

let itemBank: {[key: string]: any} = {
  // weapons
  kick: new Weapon('kick', 1),
  punch: new Weapon('punch', 1),
  // armors
  pants: new Armor('leather pants', 1),
  shirt: new Armor('sleeveless shirt', 1),
  // food
  apple: new Food('apple', 5)
}

let rhoda: Person = new Person(
  'Rhoda',
  new Stats(7, 6, 28),
  itemBank.kick,
  itemBank.pants,
  new Bag({})
)
let lenny: Person = new Person(
  'Lenny',
  new Stats(10, 3, 33),
  itemBank.punch,
  itemBank.shirt,
  new Bag({})
)

console.log(rhoda.toString(), lenny.toString())
console.log('Rhoda attacks Lenny!')
console.log(rhoda.hit(lenny).toString())

console.log('Rhoda picks an apple!')
console.log(rhoda.bag.add(itemBank.apple).toString())
console.log(rhoda.eat(itemBank.apple).toString())
