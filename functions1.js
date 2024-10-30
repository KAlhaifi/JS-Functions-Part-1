function printName() {
  console.log("Khalaf");
}
printName();

function printAge(birthYear) {
  console.log(`${2024 - birthYear}`);
}

printAge(1998);
function printNameAndAge(Name, birthYear) {
  console.log(`hello ${Name} you are ${birthYear} years old`);
}

printNameAndAge("Khalaf", 1998);

function printHello(Name, language) {
  if (language === "en") {
    console.log(`Hello ${Name}`);
  } else if (language === "es") {
    console.log(`Hola ${Name}`);
  } else if (language === "fr") {
    console.log(`Bonjour ${Name}`);
  } else if (language === "tr") {
    console.log(`Merhaba ${Name}`);
  }
}
printHello("Khalaf", "fr");

function printMax(a, b) {
  if (a > b) {
    console.log(a);
  } else if (a < b) {
    console.log(`the bigger number is: ${b}`);
  }
}

printMax(5, 7);
