class Person {
  // Constructor
  constructor(name) {
    this._name = this._setName(name);
  }

  // Accessors
  set name(name) {
    this._name = this._setName(name); // Aqui é possível utilizar lógicas, validações, etc.
  }
  get name() {
    return this._name;
  }

  // Methods
  _setName(myValue) {
    return myValue.toUpperCase();
  }
  walk() {
    return `${this._name} está andando.`;
  }
}

export default { Person };
