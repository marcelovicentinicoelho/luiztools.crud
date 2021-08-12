import classFilePerson from "./person.js";
import classFileDeveloper from "./developer.js";

let objPerson = new classFilePerson.Person("Pedro");
console.log(objPerson.walk());
console.log(objPerson.name);

let brendan = new classFileDeveloper.Developer("Brendan", "JavaScript");
let bert = new classFileDeveloper.Developer("Bert", "CSS");
console.log("");
console.log(brendan.code());
console.log(bert.code());

// Ao invés de criar um programador, foi utilizado um vetor de programadores. O resultado é o mesmo!
let objDeveloper = [];
objDeveloper.push(new classFileDeveloper.Developer("Brendan", "JavaScript"));
objDeveloper.push(new classFileDeveloper.Developer("Bert", "CSS"));
console.log("");
console.log(objDeveloper[0].code());
console.log(objDeveloper[1].code());
