const obj1 = { name: "Rama", age: 25, yuga: "Treta" };
const obj2 = { name: "Krishna", age: 31, yuga: "Dwapar" };

function compareObj(obj1, obj2) {
  let res;
  if (obj1.age > obj2.age) {
    res = obj1;
  } else {
    res = obj2;
  }
  return res;
}

console.log(compareObj(obj1, obj2));
