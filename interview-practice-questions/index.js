const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const plus = document.querySelector("#btn-plus");
const minus = document.querySelector("#btn-minus");
const div = document.querySelector("#btn-div");
const mul = document.querySelector("#btn-mul");
const outputDiv = document.querySelector("#output");

const mathOp = (type) => {
  const val1 = Number(input1.value);
  const val2 = Number(input2.value);
  let res;
  if (type === plus) {
    res = val1 + val2;
  }
  if (type === minus) {
    res = val1 - val2;
  }
  if (type === div) {
    res = val1 / val2;
  }
  if (type === mul) {
    res = val1 * val2;
  }
  outputDiv.innerText = res;
};

plus.addEventListener("click", () => {
  mathOp(plus);
});
div.addEventListener("click", () => {
  mathOp(div);
});
minus.addEventListener("click", () => {
  mathOp(minus);
});
mul.addEventListener("click", () => {
  mathOp(mul);
});
