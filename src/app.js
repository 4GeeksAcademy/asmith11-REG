import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".btn").addEventListener("click" , generateExcuse)
};
const generateExcuse =()=>{
  let subject =["The cat", "My grandma", "That kid", "The Mailman", "The demented bunny"]
  let action = ["shot", "microwaved", "ate", "stole", "burnt"]
  let object = ["my car", "the house", "my computer", "my phone", "my mom"]
  let subjectIndex = Math.floor(Math.random()*subject.length)
  let actionIndex = Math.floor(Math.random()*action.length)
  let objectIndex = Math.floor(Math.random()*object.length)
  let randomSubject = subject[subjectIndex]
  let randomAction = action[actionIndex]
  let randomObject = object[objectIndex]
  document.querySelector(".subject").innerHTML = randomSubject
  document.querySelector(".action").innerHTML = randomAction
  document.querySelector(".object").innerHTML = randomObject
}