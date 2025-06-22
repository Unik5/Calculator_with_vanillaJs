const display = document.getElementById("display");
const remove = document.querySelector("#delete");
let answer; //stores the answers of previous calculations

// numbers haru append gareko screen ma, error raixa bhane cahi sidhai sab clear hunxa ani balla numbers auxa
function appendToDisplay(value) {
  if (display.value == "Error" || display.value == "Infinity") {
    clearDisplay();
  }
  display.classList.add("text-right"); //text lai right ma lyauna, sihdai uta html file ko class ma haleni hunxa yo
  display.value += value;
}

//clear the display when C is pressed
function clearDisplay() {
  display.value = "";
}

//calculate answer
function calculate() {
  try {
    if (eval(display.value) == "Infinity") {
      display.value = "Infinity";
      answer = null;
    } else {
      answer = eval(display.value);
      displayAns();
    }
  } catch (error) {
    display.value = "Error";
  }
}

//function to display answer
function displayAns() {
  display.value = answer;
}

//function banayera ni garna milthiyo tara ektal eventListener use garum bhanera
remove.addEventListener("click", (e) => {
  //   console.log(typeof display.element);
  if (display.value == "Error" || display.value == "Infinity") {
    clearDisplay();
  }
  display.value = display.value.slice(0, -1); //removes the last element of the string ie display.element
});
