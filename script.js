createButton = document.querySelector(".create__button");

let character = {
	firstName: "a", 
	lastName: "b", 
	age: 10,
};

character.profession = "c"

let tellAboutCharacter = function() {
	console.log(character);
	console.log(Object.keys(character));
	console.log(Object.values(character));
	console.log(character.firstName);
};

createButton.addEventListener("click", tellAboutCharacter);