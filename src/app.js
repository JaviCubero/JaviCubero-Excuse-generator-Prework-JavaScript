import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let full_excuse = [];

  let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
  let action = ['ate ', 'peed ', 'crushed ', 'broke '];
  let what = ['my homework ', 'my phone ', 'the car '];
  let when = ['before the class.', 'when I was sleeping.', 'while I was exercising.', 'during my lunch.', 'while I was praying.'];

  function randomNumber (array_lenght) {
    let randomNumber = 7;

		for (randomNumber; randomNumber > (array_lenght-1); randomNumber++) {
			randomNumber = Math.floor(Math.random()*10-1);
		}
    
    return randomNumber;
  }
    
  full_excuse += who[randomNumber(who.length)];
  full_excuse += action[randomNumber(action.length)];
  full_excuse += what[randomNumber(what.length)];
  full_excuse += when[randomNumber(when.length)];

  const excuse = document.querySelector(".excuse")

  excuse.innerHTML = full_excuse;
};
