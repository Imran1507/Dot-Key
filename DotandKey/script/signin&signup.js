import {navbar} from '..//component/navbar.js';
document.getElementById('navbar').innerHTML =navbar();

import {footter} from '..//component/footter.js';
document.getElementById('footer').innerHTML =footter();

document.querySelector("form").addEventListener("submit", loginFunction);
  var regdUsers = JSON.parse(localStorage.getItem("userCreds"));
  //console.log(regdUsers);

  function loginFunction() {

    event.preventDefault();

    var enteredEmail = document.querySelector("#email").value;
    var enteredPass = document.querySelector("#pass").value;
    
       //console.log(email, pass);

    for (var i = 0; i < regdUsers.length; i++) {
      console.log(regdUsers[i]);
      if (
        regdUsers[i].email == enteredEmail &&
        regdUsers[i].password == enteredPass
      ) {
        alert("login success");
        window.location.href = "index.html";
        break;
      } else {
      ("login failed ");

      }
    }
  }