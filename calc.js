//selecting various elements
let btns = document.querySelectorAll(".btn");
const deg = document.querySelector("#degree");
let functionButton = document.querySelector(".function-btn");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
let trigoButton = document.querySelector(".trigonometry-function");
let second = document.querySelector("#secondBtn");
const number = document.querySelectorAll(".number");
let screen = document.querySelector(".calculator-screen");
const backspace = document.querySelector("#backspace");
let clear = document.querySelector("#clear");
//initialize the screen value
let memory = 0;
i = 0;
screen.innerHTML = "";
let flag = false;
// 2nd button
second.addEventListener("click", function () {
  if (!second.classList.contains("color")) {
    second.classList.add("color");
  } else {
    second.classList.remove("color");
  }
  let rowSecond = document.querySelectorAll(".second");
  for (let i = 0; i < rowSecond.length; i++) {
    let firstChild = rowSecond[i].firstElementChild;
    let secondChild = firstChild.nextElementSibling;
    if (secondChild.classList.contains("hide")) {
      firstChild.classList.add("hide");
      secondChild.classList.remove("hide");
    } else {
      firstChild.classList.remove("hide");
      secondChild.classList.add("hide");
    }
  }
});
function eventList(e) {
  let char = e.target.id;
  switch (char) {
    case "sin":
      if (flag) {
        screen.innerHTML = Math.sin(
          (screen.innerHTML * Math.PI) / 180
        ).toPrecision(2);
      } else {
        screen.innerHTML = Math.sin(screen.innerHTML).toPrecision(10);
      }
      break;
    case "cos":
      if (flag) {
        screen.innerHTML = Math.cos(
          (screen.innerHTML * Math.PI) / 180
        ).toPrecision(2);
      } else {
        screen.innerHTML = Math.cos(screen.innerHTML).toPrecision(10);
      }
      break;
    case "tan":
      if (flag) {
        screen.innerHTML = Math.tan(
          (screen.innerHTML * Math.PI) / 180
        ).toPrecision(2);
      } else {
        screen.innerHTML = Math.tan(screen.innerHTML).toPrecision(10);
      }
      break;
    case "sec":
      if (flag) {
        screen.innerHTML = Math.sec(
          (screen.innerHTML * Math.PI) / 180
        ).toPrecision(2);
      } else {
        screen.innerHTML = Math.sec(screen.innerHTML).toPrecision(10);
      }
      break;
    case "ceil":
      screen.innerHTML = Math.ceil(parseFloat(screen.innerHTML));
      break;
    case "floor":
      screen.innerHTML = Math.floor(parseFloat(screen.innerHTML));
      break;
    case "round":
      screen.innerHTML = Math.round(parseFloat(screen.innerHTML));
      break;
    case "absolute":
      screen.innerHTML = Math.abs(parseFloat(screen.innerHTML));
      break;
    case "f-e":
      screen.innerHTML = Math.pow(parseFloat(10, screen.innerHTML));
      break;
    case "backspace":
      screen.innerHTML = backSpace(screen.innerHTML);
      break;
    case "clear":
      //clear the screen
      screen.innerHTML = "";
      break;
    case "pi":
      if (screen.innerHTML === " ") {
        screen.innerHTML = Math.PI;
      } else {
        screen.innerHTML = screen.innerHTML * Math.PI;
      }
      break;
    case "equal":
      if (screen.innerHTML.includes("^")) {
        screen.innerHTML = root(screen.innerHTML);
      } else {
        screen.innerHTML = evaluate(screen.innerHTML);
      }
      break;
    case "pos-neg":
      if (screen.innerHTML === " ") {
        alert("Enter the number for positive and negative ");
      } else {
        screen.innerHTML = changeSign(screen.innerHTML);
      }
      break;
    case "exponential":
      if (screen.innerHTML === "") {
        screen.innerHTML = Math.E;
        console.log(screen.innerHTML);
      } else {
        screen.innerHTML = screen.innerHTML * Math.E;
      }
      break;
    case "pow2":
      screen.innerHTML = Math.pow(screen.innerHTML, 2);
      break;
    case "denom":
      screen.innerHTML = 1 / screen.innerHTML;
      break;
    case "root":
      screen.innerHTML = Math.sqrt(screen.innerHTML);
      break;
    case "open-parenthesis":
      screen.innerHTML = screen.innerHTML + "(";
      break;
    case "close-parenthesis":
      screen.innerHTML = screen.innerHTML + ")";
      break;
    case "power":
      screen.innerHTML = screen.innerHTML + "^";
      break;
    case "exponent":
      screen.innerHTML = Math.exp(screen.innerHTML);
      break;
    case "mod":
      screen.innerHTML = screen.innerHtml + "%";
      break;
    case "base10":
      screen.innerHTML = Math.pow(10, screen.innerHTML);
      break;
    case "logarithm":
      if (screen.innerHTML === "") {
        alert("Enter the number for log");
      } else {
        screen.innerHTML = Math.log(screen.innerHTML);
      }
      break;
    case "natural-logarithm":
      if (screen.innerHTML == "") {
        alert("Enter the number for ln");
      } else {
        screen.innerHTML = Math.log10(screen.innerHTML);
      }
      break;
    case "factorial":
      screen.innerHTML = factorialFunc(screen.innerHTML);
      break;
    case "memory-stored":
      screen.innerHTML = memoryStored();
      break;
    case "memory-recall":
      screen.innerHTML = memory;
      break;
    case "memory-clear":
      memory = 0;
      break;
    case "memory-plus":
      memory = memory + parseFloat(screen.innerHTML);
      screen.innerHTML = "";
      break;
    case "memory-minus":
      memory = memory - parseFloat(screen.innerHTML);
      screen.innerHTML = "";
      break;
    case "pow3":
      if (screen.innerHTML.includes("-")) {
        screen.innerHTML = -1 * Math.pow(-1 * screen.innerHTML, 3);
      } else {
        screen.innerHTML = Math.pow(screen.innerHTML, 3);
      }
      break;
    case "qube-root":
      if (screen.innerHTML.includes("-")) {
        screen.innerHTML = -1 * Math.pow(-1 * screen.innerHTML, 1 / 3);
      } else {
        screen.innerHTML = Math.pow(screen.innerHTML, 1 / 3);
      }
      break;
    case "x-raised-y":
      screen.innerHTML += "^";
      break;
    case "base-e":
      screen.innerHTML = Math.pow(Math.E, screen.innerHTML);
      break;
    case "base2":
      screen.innerHTML = Math.pow(2, screen.innerHTML);
      break;
    case "log2":
      screen.innerHTML = Math.log2(screen.innerHTML);
      break;
  }
}
function backSpace(value) {
  return value.substring(0, value.length - 1);
}
//deg and rad function
degree.addEventListener("click", () => {
  if (!degree.classList.contains("show")) {
    degree.classList.add("show");
    degree.innerHTML = "RAD";
    flag = false;
  } else {
    degree.classList.remove("show");
    degree.innerHTML = "DEG";
    flag = true;
  }
});
//Function of factorial
function factorialFunc(n) {
  for (let i = 1; i <= n; i++) {
    if (n === 1 || n === 0) {
      return 1;
    } else {
      return n * factorialFunc(n - 1);
    }
  }
}
//function of root
function root(num) {
  let a, b;
  a = num.slice(0, num.indexOf("^"));
  b = num.slice(num.indexOf("^") + 1);
  return Math.pow(a, b);
}
// events for all the buttons
btns.forEach((btn) => {
  btn.addEventListener("click", eventList);
});
//power function
function pow(number) {
  let a, b;
  a = number.slice(0, num.indexOf("^"));
  b = number.slice(num.indexOf("^") + 1);
  return Math.pow(a, b);
}
// adding event listener to all
number.forEach((number) => {
  number.addEventListener("click", () => {
    screen.innerHTML += number.innerHTML;
  });
});
// adding to the screen
operator.forEach((operator) => {
  operator.addEventListener("click", () => {
    screen.innerHTML = screen.innerHTML + operator.innerHTML;
  });
});
//dropdown menu
function toggle(p) {
  if (!p.target.nextElementSibling.classList.contains("show")) {
    p.target.nextElementSibling.classList.add("show");
  } else {
    p.target.nextElementSibling.classList.remove("show");
  }
}
trigoButton.addEventListener("click", toggle);
functionButton.addEventListener("click", toggle);
//positive-negative
function changeSign(number) {
  number = -1 * number;
  return number;
}
//equal function
function evaluate(str) {
  function splitString(str) {
    let index = 0;
    let splitArray = str.split("").reduce((arr, operand, i) => {
      if (isNaN(parseInt(operand))) {
        arr.push(str.slice(index, i));
        arr.push(operand);
        index = i + 1;
      }
      return arr;
    }, []);
    splitArray.push(str.slice(index));
    return splitArray;
  }
  function findAdditionIndex(arr) {
    return arr.findIndex((i) => i == "+");
  }
  function findSubtractIndex(arr) {
    return arr.findIndex((i) => i == "-");
  }
  function findMultiplyIndex(arr) {
    return arr.findIndex((i) => i == "*");
  }
  function findDivideIndex(arr) {
    return arr.findIndex((i) => i == "/");
  }
  function add(arr) {
    let index = findAdditionIndex(arr);
    arr[index] = parseInt(arr[index - 1]) + parseInt(arr[index + 1]);

    return arr.filter((c, i) => {
      return i !== index - 1 && i !== index + 1;
    });
  }
  function subtract(arr) {
    let index = findSubtractIndex(arr);
    arr[index] = parseInt(arr[index - 1]) - parseInt(arr[index + 1]);
    return arr.filter((c, i) => {
      return i !== index - 1 && i !== index + 1;
    });
  }
  function multiply(arr) {
    let index = findMultiplyIndex(arr);
    arr[index] = parseInt(arr[index - 1]) * parseInt(arr[index + 1]);
    return arr.filter((c, i) => {
      return i !== index - 1 && i !== index + 1;
    });
  }
  function divide(arr) {
    let index = findDivideIndex(arr);
    arr[index] = parseInt(arr[index - 1]) / parseInt(arr[index + 1]);
    return arr.filter((c, i) => {
      return i !== index - 1 && i !== index + 1;
    });
  }
  function containsAdditionOrSubtract(arr) {
    return arr.some((i) => i === "+" || i === "-");
  }
  function containsMultiplyOrDivide(arr) {
    return arr.some((i) => i === "*" || i === "/");
  }
  function simplify(arr) {
    while (containsMultiplyOrDivide(arr)) {
      if (arr.includes("*")) {
        if (arr.includes("/")) {
          if (findDivideIndex(arr) < findMultiplyIndex(arr)) {
            arr = divide(arr);
          } else {
            arr = multiply(arr);
          }
        } else {
          arr = multiply(arr);
        }
      } else {
        arr = divide(arr);
      }
    }
    while (containsAdditionOrSubtract(arr)) {
      if (arr.includes("+")) {
        if (arr.includes("-")) {
          if (findSubtractIndex(arr) < findAdditionIndex(arr)) {
            arr = subtract(arr);
          } else {
            arr = add(arr);
          }
        } else {
          arr = add(arr);
        }
      } else {
        arr = subtract(arr);
      }
    }
    return arr;
  }
  var arithArray = splitString(str);
  return simplify(arithArray);
}
//Events of keyboard
document.onkeydown = (e) => {
  let char = e.code;
  switch (char) {
    case "Digit0":
    case "Number0":
    case "Numpad0":
      if (!e.shiftKey) {
        screen.innerHTML = screen.innerHTML + 0;
      } else {
        screen.innerHTML = ")";
      }
      break;
    case "Digit1":
    case "Number1":
    case "Numpad1":
      screen.innerHTML = screen.innerHTML + 1;
      break;
    case "Digit2":
    case "Number2":
    case "Numpad2":
      screen.innerHTML = screen.innerHTML + 2;
      break;
    case "Digit3":
    case "Number3":
    case "Numpad3":
      screen.innerHTML = screen.innerHTML + 3;
      break;
    case "Digit4":
    case "Number4":
    case "Numpad4":
      screen.innerHTML = screen.innerHTML + 4;
      break;
    case "Digit5":
    case "Number5":
    case "Numpad5":
      if (!e.shiftKey) {
        screen.innerHTML = screen.innerHTML + 5;
      } else {
        screen.innerHTML = "%";
      }
      break;
    case "Digit6":
    case "Number6":
    case "Numpad6":
      if (!e.shiftKey) {
        screen.innerHTML = screen.innerHTML + 6;
      } else {
        screen.innerHTML = "^";
      }
      break;
    case "Digit7":
    case "Number7":
    case "Numpad7":
      screen.innerHTML = screen.innerHTML + 7;
      break;
    case "Minus":
    case "NumpadSubtract":
      screen.innerHTML = screen.innerHTML + "-";
      break;
    case "NumpadAdd":
    case "NumpadAddition":
      screen.innerHTML = screen.innerHTML + "+";
      break;
    case "NumpadMultiply":
      screen.innerHTML = screen.innerHTML + "*";
      break;
    case "NumpadDivide":
    case "slash":
      screen.innerHTML = screen.innerHTML + "/";
      break;
    case "Digit9":
    case "Number9":
    case "Numpad9":
      if (!e.shiftKey) {
        screen.innerHTML = screen.innerHTML + 9;
      } else {
        screen.innerHTML = "(";
      }
      break;
    case "Enter":
    case "Equal":
    case "NumpadEnter":
      screen.innerHTML = eval(screen.innerHTML);
      break;
  }
};
