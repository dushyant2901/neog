const input = document.querySelector("#input");
const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");
const output = document.querySelector("#output");

function alterText(type) {
  output.innerHTML = `<${type}>${input.value}<${type}/>`;
}
h1.addEventListener("click", () => {
  alterText("h1");
});
h2.addEventListener("click", () => {
  alterText("h2");
});
h3.addEventListener("click", () => {
  alterText("h3");
});
