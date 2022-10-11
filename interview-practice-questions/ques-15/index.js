const obj1 = { name: "Rama", power: 2500, yuga: "Treta" };
const obj2 = { name: "Krishna", power: 2325, yuga: "Dwapar" };

function compareObj(obj1, obj2) {
  let res;
  if (obj1.power > obj2.power) {
    res = obj1;
  } else {
    res = obj2;
  }
  return res;
}

console.log(compareObj(obj1, obj2));
