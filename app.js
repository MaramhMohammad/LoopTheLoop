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

    document.write('<img src="https://cdn.dribbble.com/users/1059583/screenshots/4171367/coding-freak.gif" alt="">')

}


var userinp = prompt("how many pistures you want")
function newimg(){
  for(var i =0; i<userinp; i++ ) {
    document.write("https://www.gan.co/wp-content/uploads/2018/06/Powered-by-Stacked-Dark-2color-gray-1-1-pdf.jpg")
  }
}
newimg()


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