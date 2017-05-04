export default class Stats {

  constructor(
    public attack: number,
    public defense: number,
    public health: number
  ) {}

  toString(): string {
    return `ATK ${this.attack} / DEF ${this.defense} / HP ${this.health}`
  }
}
