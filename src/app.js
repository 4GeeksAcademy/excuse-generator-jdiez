/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
let who_random = Math.floor(Math.random() * who.length);
let action_random = Math.floor(Math.random() * action.length);
let what_random = Math.floor(Math.random() * what.length);
let when_random = Math.floor(Math.random() * when.length);

function excuseGenerator() {
  return `${who[who_random]} ${action[action_random]} ${what[what_random]} ${when[when_random]}`;
}

excuse.innerHTML = excuseGenerator();
