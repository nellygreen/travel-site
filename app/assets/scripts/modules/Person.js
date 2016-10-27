class Person {
	constructor(fullName, favColor) {
	   this.name = fullName;
	   this.favoriteColor = favColor;
	}
	
	greet() {
		console.log("I am" + this.name + " and my color is " + this.favoriteColor + ".")
	}
}

module.export = Person;
