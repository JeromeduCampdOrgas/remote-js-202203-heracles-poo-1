const MAX_LIFE = 100;
/* Fighter class definition */
export default class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
  fight(enemy) {
    let attack = parseInt(Math.random() * (this.strength - 1) + 1);
    let defense = parseInt(Math.random() * (enemy.dexterity - 1) + 1);
    let damage = attack - defense > 0 ? attack - defense : 0;
    enemy.life = enemy.life - damage < 0 ? 0 : enemy.life - damage;
  }
}
