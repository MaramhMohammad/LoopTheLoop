var age= 25;
//var specialty= "software development";


if (age<18){
  console.log("You can learn coding in your age, Keep learning");
}

if (age>-25){
    alert("Are you ready to Learn coding");
}


var ageUserInput=prompt("How old are you?");
var specialtyUserInput=prompt("What are you studing?");

//if(specialty= "software development")
//{
//console.log(" Keep going and stay up to date");
//}

//else {
  //  console.log("Evreyone can learn coding");
//}

var txt;
var r = confirm("Enjoy Your journey learning!");
if (r == true) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}

var number = prompt("How many GIF you want to see? ");

for(i = 0; i < number; i++) {

    document.write('<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--khJyKWT---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/gopsstdhcylskfcadcex.gif"> ');


}



var piccCount=prompt("how many picture you want?");
function count(x){
while(x<5){
    alert('please enter more than 5')
   x=prompt("how many picture you want?");
}
for(var i =0;i <= x; i++){
    document.write('<img src="https://cdn.educba.com/academy/wp-content/uploads/2015/12/Application-Software.jpg"> ');
}
}
count(piccCount);



confirm("Press OK if you are ready!");

var correct = "yes";
var guess = "";

while (guess != correct){
  guess = prompt ("Type yes or you will not enter", "");
  if (guess == correct){
    alert ("Correct");
  } else {
    alert ("opss sorry bye ...");
  }
}


function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World!";
}

myFunction();



