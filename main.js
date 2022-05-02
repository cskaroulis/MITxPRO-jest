function greet(name) {
  name = name || "there!";
  let result = "";

  if (Array.isArray(name)) {
    // process array

    // [‘Alex’,’Arsene’,’Jose’,’Zidane’]
    // Hello, Alex, Arsene, Jose, Zidane
    let names = "";
    for (let i = 0; i < name.length; i++) {
      names += ", " + name[i];
    }
    result = "Hello" + names;
  } else {
    // create full greeting
    result = "Hello " + name;

    // are we shouting?
    let weAreShouting = name === name.toUpperCase();
    if (weAreShouting) {
      result = result.toUpperCase();
    }
  }

  return result;
}

module.exports = greet;
