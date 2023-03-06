class Cat extends Animal {
  speak(name) {
    console.log("name:", this.name);
    return `${this.name} meows.`;
  }
}