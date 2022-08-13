let theGender;
let theName = prompt("What is your name?");
let result = prompt('What is your gender? (male or female)');

if(result === "male"){
  theGender="MR";
let ms1=alert("WELCOME MR " + theName);
}
else if (result === "female"){
  theGender="MS";
  let ms1=alert("WELCOME MS " + theName);
}
    else{
      theGender=""
      let ms1=alert("WELCOME");
    }

let age = prompt( theName + " How old are you now?");

if(age <= 0){
alert("valid age!!");
}else{
  alert("happy long life ^^")
};

let welcome = confirm('Do you want to see the welcoming msg?');

if(welcome == true){
if(age >0 ){
        alert('Hello ' + theGender + "  " + theName + " you are " + age + ' years old ' + " , Welcome here!" );
        } else{
        alert('Hello ' + theGender + "  " + theName + " , Welcome here!" )
        }
        };

        let questions = [ prompt("Do you like watching movies?"),prompt("Do you like programming?"),prompt("Do you have instagram account?")];
        for (let i = 0; i < 3; i++) {
          switch (questions[i]) {
            case "y":
            case "yes":
              questions[i] = "yes";
              break;
            case "n":
            case "no":
              questions[i] = "no";
              break;
            default:
              questions[i] = "invalid";
          }
        }
        
        console.log(questions);
        
        let rateMe = prompt("rate this page from (0 to 5)");
        if (rateMe >= 0 && rateMe <= 5) {
          alert("thanks for rated us");
        } else {
          alert("You didn't rated us!!");
        }
        