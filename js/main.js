/*This is JS block comment*/
//This is a single line comment

function askQuestions(){








var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var fullName = firstName +' '+ lastName; 

console.log(fullName);

var age = prompt('How old are you?');
age = parseInt(age);

if(age>=18){
	console.log('User is an adult');
}else if (age>=13) {
	console.log('User is a teenager');
}else {
	console.log('User is a child');
}


/*is the user's first name is 'general' and last name is not 'assembly', 
then greet the general*/

if(firstName.toLowerCase() ==='general' && lastName.toLowerCase() !=='assembly'){
	console.log('Greetings');
	alert('Greetings');
}


/*change h1 to users favourite colour*/


var faveColour = prompt('What is your fave colour?').toLowerCase().trim();

	if (faveColour === 'red' ||
		faveColour === 'green' ||
		faveColour === 'blue' ||
		faveColour === 'yellow'){

	$('h1').css('color', faveColour);
}

}


//When the page has loaded
$(function() {

	$('img').on('click', askQuestions);

	//When the usre clicks an h3
	$('h3').on('click', function(){

		//Toggle the next element
		$(this).next().slideToggle(500);

	});


});