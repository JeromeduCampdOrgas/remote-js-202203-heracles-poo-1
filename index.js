// First Labour : Heracles vs Nemean Lion
import Fighter from "./src/Fighter.js";
// use your Figher class here
let fighters = [];
let round = { roundNb: 0, attack: "" };
const Heracles = new Fighter("🧔 Heracles", 20, 6);
fighters.push(Heracles);

const Nemean = new Fighter("🦁 Nemean", 11, 13);
fighters.push(Nemean);
let firstAttack = Math.floor(Math.random() * 2);
round.attack = firstAttack;
do {
  //console.log(JSON.stringify(round));
  switch (round.attack) {
    case 1:
      fighters[0].fight(fighters[1]);
      round.roundNb += 1;
      round.attack = 0;
      console.log(fighters[0]);
      console.log(fighters[1]);
      console.log("🕛 " + round.roundNb);
      break;
    case 0:
      fighters[1].fight(fighters[0]);
      round.roundNb += 1;
      round.attack = 1;
      console.log(fighters[0]);
      console.log(fighters[1]);
      console.log("🕛 " + round.roundNb);
  }
} while (Heracles.life > 0 && Nemean.life > 0);
fighters[0].life == 0
  ? console.log("💀" + fighters[0].name + " : " + fighters[0].life)
  : console.log("🏆" + fighters[0].name + " : " + fighters[0].life);

fighters[1].life == 0
  ? console.log("💀" + fighters[1].name + " : " + fighters[1].life)
  : console.log("🏆" + fighters[1].name + " : " + fighters[1].life);
