class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    console.log('meow!');
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    console.log('woof!');
    
  }

}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (this.sex === 'male') {
      console.log(`It's me! ${this.name}`);
    } else {
      console.log('squwak!');
    }
  }
}