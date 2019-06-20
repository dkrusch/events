// document
//   .querySelector("#activate-flight")
//   .addEventListener("click", function(event) {
//     let element = document.getElementById("flight");
//     console.log("working");
//     if (element.classList.contains("disabled")) {
//       element.classList.replace("disabled", "enabled");
//     } else if (element.classList.contains("enabled")) {
//       element.classList.replace("enabled", "disabled");
//     }
//   });

// document
//   .querySelector("#activate-mindreading")
//   .addEventListener("click", function(event) {
//     let element = document.getElementById("mindreading");
//     console.log("working");
//     if (element.classList.contains("disabled")) {
//       element.classList.replace("disabled", "enabled");
//     } else if (element.classList.contains("enabled")) {
//       element.classList.replace("enabled", "disabled");
//     }
//   });

// document
//   .querySelector("#activate-xray")
//   .addEventListener("click", function(event) {
//     let element = document.getElementById("xray");
//     console.log("working");
//     if (element.classList.contains("disabled")) {
//       element.classList.replace("disabled", "enabled");
//     } else if (element.classList.contains("enabled")) {
//       element.classList.replace("enabled", "disabled");
//     }
//   });

// document
//   .querySelector("#activate-all")
//   .addEventListener("click", function(event) {
//     console.log("activateall");
//     document.getElementById("flight").classList.replace("disabled", "enabled");
//     document
//       .getElementById("mindreading")
//       .classList.replace("disabled", "enabled");
//     document.getElementById("xray").classList.replace("disabled", "enabled");
//   });

// document
//   .querySelector("#deactivate-all")
//   .addEventListener("click", function(event) {
//     document.getElementById("flight").classList.replace("enabled", "disabled");
//     document
//       .getElementById("mindreading")
//       .classList.replace("enabled", "disabled");
//     document.getElementById("xray").classList.replace("enabled", "disabled");
//   });


// gets list of buttons to sort through
let buttons = document.getElementsByTagName("button");


// loops over buttons to apply event listener
for (button of buttons) {
  addEventListener("click", function(event) {
    // create string out of the button ids and split into the activate/deactivate and power section
    let splitID = event.target.id.split("-");
    // if statement to catch activate-power button clicks
    if (splitID[0] === "activate") 
    {
      // handles the all case
      if (splitID[1] === "all") 
      {
        document.getElementById("flight").classList.replace("disabled", "enabled");
        document.getElementById("mindreading").classList.replace("disabled", "enabled");
        document.getElementById("xray").classList.replace("disabled", "enabled");
      } 
      // targets an individual element if that power's button is clicked
      else {
        document.getElementById(splitID[1]).classList.replace("disabled", "enabled");
      }
    } 
    // if they click the deactivate all button this statement runs
    else if (splitID[0] === "deactivate") 
    {
      document.getElementById("flight").classList.replace("enabled", "disabled");
      document.getElementById("mindreading").classList.replace("enabled", "disabled");
      document.getElementById("xray").classList.replace("enabled", "disabled");
    }
  });
}
