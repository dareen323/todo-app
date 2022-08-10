let myname = prompt("please enter your name", "will smith");
 let gender =prompt("please enter your gender","male or female");
 let age = prompt('please enter your age');

    if (age <= 0 ) {
      alert("this is not age value ");
    }

    let result =confirm("Do you want to show a welcoming message?")
    if (result)
    {
     if (gender == "male"){alert("welcome Mr" + myname);
    } else if (gender =="female"){
        alert ("welcome Ms" + myname); 
    }else{
        alert('welcome');
     }

    }
