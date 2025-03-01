import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".btn").addEventListener("click" , generateExcuse);
};
const generateExcuse =()=>{
  // arrays represent each part of the excuse. 
  let subject =["The cat", "My grandma", "That kid", "The Mailman", "The demented bunny", "The Sasquatch"];
  let action = ["shot", "microwaved", "ate", "stole", "burnt" , "abducted"];
  let object = ["my car", "the house", "my computer", "my phone", "my mom", "the bike"];

  // randomize the index
  let randomSubject = subject[Math.floor(Math.random()*subject.length)];
  let randomAction = action[Math.floor(Math.random()*action.length)];
  let randomObject = object[Math.floor(Math.random()*object.length)];

  // replace existing HTML with new excuse
  document.querySelector(".subject").innerHTML = randomSubject;
  document.querySelector(".action").innerHTML = randomAction;
  document.querySelector(".object").innerHTML = randomObject;
}