const input = document.querySelector("#input");
const incr = document.querySelector("#incr");
const decr = document.querySelector("#decr");
const output = document.querySelector("#output");

let fSize = 16;
function showRes(val) {
  output.innerText = input.value;
  output.style.fontSize = `${val}px`;
}
function alterSize(type) {
  if (type === "incr") {
    fSize += 2;
  }
  if (type === "decr") {
    fSize -= 2;
  }

  showRes(fSize);
}
incr.addEventListener("click", () => {
  alterSize("incr");
});
decr.addEventListener("click", () => {
  alterSize("decr");
});
