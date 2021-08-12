import classFilePerson from "./person.js";

class Developer extends classFilePerson.Person {
  // Constructor
  constructor(name, codeLanguage) {
    super(name);
    this._codeLanguage = this._setCodeLanguage(codeLanguage);
  }

  // Accessor
  set codeLanguage(codeLanguage) {
    this._codeLanguage = this._setCodeLanguage(codeLanguage);
  }
  get codeLanguage() {
    return this._codeLanguage;
  }

  // Methods
  _setCodeLanguage(myValue) {
    return myValue.toUpperCase();
  }
  code() {
    return `${this._name} está codando em ${this._codeLanguage}`;
  }
}

export default { Developer };
