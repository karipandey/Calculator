const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonValue = e.target.innerText.trim(); // Trim spaces

    if (buttonValue === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch (error) {
        input.value = "Error"; // Handle invalid expressions
        string = "";
      }
    } else if (buttonValue === "AC") {
      string = "";
      input.value = string;
    } else if (buttonValue === "DEL") {
      string = string.slice(0, -1); // Safer way to remove last character
      input.value = string;
    } else {
      string += buttonValue;
      input.value = string;
    }
  });
});
