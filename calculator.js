let tracker = "";
let operator = "";
let n1 = 0;
let n2 = 0;

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

const operate = function (fn, n1, n2) {};

const results = document.createElement("div");
results.textContent = "Result: ";
document.body.appendChild(results);
for (let i = 0; i < 10; i++) {
  const button = document.createElement("button");
  button.textContent = i;
  button.setAttribute("id", i);
  button.addEventListener("click", () => {
    n1 = n2;
    n2 = i;
    results.textContent = "Result: " + n1 + " " + operator + " " + n2;
  });
  document.body.appendChild(button);
}

const addition = document.createElement("button");
addition.textContent = "+";
addition.addEventListener("click", () => {
  tracker = "add";
  operator = "+";
});
document.body.appendChild(addition);

const subtraction = document.createElement("button");
subtraction.textContent = "-";
subtraction.addEventListener("click", () => {
  tracker = "subtract";
  operator = "-";
});
document.body.appendChild(subtraction);

const multiplication = document.createElement("button");
multiplication.textContent = "x";
multiplication.addEventListener("click", () => {
  tracker = "multiply";
  operator = "x";
});
document.body.appendChild(multiplication);

const division = document.createElement("button");
division.textContent = "/";
division.addEventListener("click", () => {
  tracker = "divide";
  operator = "/";
});
document.body.appendChild(division);

const equals = document.createElement("button");
equals.textContent = "=";
equals.addEventListener("click", () => {
  if (tracker == "add") {
    results.textContent = "Result: " + add(n1, n2);
    n1 = 0;
    n2 = 0;
  }
  if (tracker == "subtract") {
    results.textContent = "Result: " + subtract(n1, n2);
    n1 = 0;
    n2 = 0;
  }
  if (tracker == "multiply") {
    results.textContent = "Result: " + multiply(n1, n2);
    n1 = 0;
    n2 = 0;
  }
  if (tracker == "divide") {
    results.textContent = "Result: " + divide(n1, n2);
    n1 = 0;
    n2 = 0;
  }
});
document.body.appendChild(equals);

const clear = document.createElement("button");
clear.textContent = "Clear";
clear.addEventListener("click", () => (results.textContent = "Result: "));
document.body.appendChild(clear);
