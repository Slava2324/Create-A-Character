createButton = document.querySelector(".create__button");
characterCard = document.querySelector(".character__card");
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
	characterCard.innerHTML = ""
};

createButton.addEventListener("click", tellAboutCharacter);