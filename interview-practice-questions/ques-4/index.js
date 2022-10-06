const input = document.querySelector("#input");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const output = document.querySelector("#output");

function changeTextColor(type) {
  output.style.color = type;
  output.innerText = input.value;
}
red.addEventListener("click", () => {
  changeTextColor("red");
});
green.addEventListener("click", () => {
  changeTextColor("green");
});
blue.addEventListener("click", () => {
  changeTextColor("blue");
});
