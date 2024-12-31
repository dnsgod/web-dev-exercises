const inputField = document.getElementById("inputField");
const output = document.getElementById("output");

inputField.addEventListener("keyup", function(event) {
  output.textContent = `You typed: ${event.target.value}`;
});
