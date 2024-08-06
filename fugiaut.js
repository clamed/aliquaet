function createPerson(name, age) {
  return {
    name: name,
    age: age
  };
}

var person = createPerson("John", 25);
console.log(person); // { name: "John", age: 25 }
