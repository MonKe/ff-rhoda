import Person from './model/Person'
import Weapon from './model/Weapon'
import Armor from './model/Armor'
import Bag from './model/Bag'
import Food from './model/Food'
import Stats from './model/Stats'
import Item from './model/Item'
import Equipment from './model/Equipment'

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
  new Equipment(itemBank.kick, itemBank.pants),
  new Bag({})
)
let lenny: Person = new Person(
  'Lenny',
  new Stats(10, 3, 33),
  new Equipment (itemBank.punch, itemBank.shirt),
  new Bag({})
)

let events: string[] = [
  '# Fighters: Rhoda and Lenny!',
  rhoda.toString(),
  lenny.toString(),

  '# Rhoda attacks Lenny!',
  rhoda.hit(lenny).toString(),

  '# Rhoda picks an apple!',
  rhoda.take(itemBank.apple).toString(),

  '# Rhoda eats the apple!',
  rhoda.eat(itemBank.apple).toString(),

  '# Rhoda takes lots of food!',
  rhoda.take(itemBank.apple).take(itemBank.apple).toString(),

  '# Lenny steals from Rhoda!',
  lenny.steal(rhoda).toString(),
  lenny.toString()
]

document.getElementById('output').innerHTML = events.join('\n')
