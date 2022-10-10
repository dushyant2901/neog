const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
btn.addEventListener("click", () => {
  const { value: password } = input;
  if (password.length < 10) {
    output.innerText = "error";
    output.style.color = "red";
  } else {
    output.innerText = "success";
    output.style.color = "green";
  }
});
input.addEventListener("keyup", () => {
  const { value: password } = input;
  if (password.length < 10) {
    console.log("first");
    input.style.border = "2px solid red";
    btn.disabled = true;
  } else {
    input.style.border = "2px solid green";
    btn.disabled = false;
  }
  // input.style.border='2px solid green'
  // input.style.border='2px solid red'
});
