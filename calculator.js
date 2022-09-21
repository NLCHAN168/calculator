let tracker = "";
let operator = "";
let n1 = "";
let n2 = "";
let numtracker = "";
let result = "";

const add = function (n1, n2) {
  tracker = "add";
  return n1 + n2;
};

const subtract = function (n1, n2) {
  tracker = "subtract";
  return n1 - n2;
};

const multiply = function (n1, n2) {
  tracker = "multiply";
  return n1 * n2;
};

const divide = function (n1, n2) {
  tracker = "divide";
  if (n1 === 0 || n2 === 0) {
    return undefined;
  } else return n1 / n2;
};

const update = function () {
  results.textContent = n1 + " " + operator + " " + numtracker + " = " + result;
};

const operate = function (tracker, n1, n2) {
  if (tracker == "add") {
    n2 = +numtracker;
    result = add(n1, n2);
    update();
    numtracker = "";
  }
  if (tracker == "subtract") {
    n2 = +numtracker;
    result = subtract(n1, n2);
    update();
    numtracker = "";
  }
  if (tracker == "multiply") {
    n2 = +numtracker;
    result = multiply(n1, n2);
    update();
    numtracker = "";
  }
  if (tracker == "divide") {
    n2 = +numtracker;
    result = divide(n1, n2);
    update();
    numtracker = "";
  }
};

const calculator = document.createElement("div");
calculator.setAttribute("id", "calculator");
document.body.appendChild(calculator);

const results = document.createElement("div");
results.setAttribute("id", "results");
results.textContent = "";
calculator.appendChild(results);

const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "button-container");
calculator.appendChild(buttonContainer);

const numContainer = document.createElement("div");
numContainer.setAttribute("id", "number-container");
buttonContainer.appendChild(numContainer);

for (let i = 0; i < 10; i++) {
  const button = document.createElement("button");
  button.textContent = i;
  button.setAttribute("id", "numbers");
  button.addEventListener("click", () => {
    update();
    numtracker += "" + i;
    update();
  });
  numContainer.appendChild(button);
}

const opContainer = document.createElement("div");
opContainer.setAttribute("id", "operation-container");
buttonContainer.appendChild(opContainer);
const addition = document.createElement("button");
addition.textContent = "+";
addition.addEventListener("click", () => {
  update();
  tracker = "add";
  update();
  operator = "+";
  update();
  if (typeof n1 != "number") {
    n1 = +numtracker;
  } else n2 = +numtracker;
  numtracker = "";
  update();
});
opContainer.appendChild(addition);

const subtraction = document.createElement("button");
subtraction.textContent = "-";
subtraction.addEventListener("click", () => {
  update();
  tracker = "subtract";
  update();
  operator = "-";
  update();
  if (typeof n1 != "number") {
    n1 = +numtracker;
  } else n2 = +numtracker;
  numtracker = "";
  update();
});
opContainer.appendChild(subtraction);

const multiplication = document.createElement("button");
multiplication.textContent = "x";
multiplication.addEventListener("click", () => {
  update();
  tracker = "multiply";
  update();
  operator = "x";
  update();
  if (typeof n1 != "number") {
    n1 = +numtracker;
  } else n2 = +numtracker;
  numtracker = "";
  update();
});
opContainer.appendChild(multiplication);

const division = document.createElement("button");
division.textContent = "/";
division.addEventListener("click", () => {
  update();
  tracker = "divide";
  update();
  operator = "/";
  update();
  if (typeof n1 != "number") {
    n1 = +numtracker;
  } else n2 = +numtracker;
  numtracker = "";
  update();
});
opContainer.appendChild(division);

const equals = document.createElement("button");
equals.textContent = "=";
equals.addEventListener("click", () => {
  operate(tracker, n1, n2);
  n1 = result;
});
opContainer.appendChild(equals);

const clear = document.createElement("button");
clear.textContent = "Clear";
clear.addEventListener("click", () => {
  results.textContent = "";
  tracker = "";
  operator = "";
  n1 = "";
  n2 = "";
  numtracker = "";
  result = "";
});
opContainer.appendChild(clear);
