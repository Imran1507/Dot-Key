import {navbar} from '..//component/navbar.js';
document.getElementById('navbar').innerHTML =navbar();

import {footter} from '..//component/footter.js';
document.getElementById('footer').innerHTML =footter();



document.querySelector("#formTag").addEventListener("submit", myFunction);

function myFunction() {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  alert("Payment Done")
  window.location.href="index.html"
}