class Person {
  // Constructor
  constructor() {}

  // Accessors
  set name(name) {
    this._name = this._setName(name);
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
