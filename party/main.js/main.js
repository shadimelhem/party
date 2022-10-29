do {
   
    const age = prompt("Hi , Please enter your age");

  

    if (age < 18) {
        alert("Sorry you are too young!!");

    } else if (35 <= age) {
        alert("Sorry you are too old!!");


    } else if (age > 18 && age < 35) {
        prompt("Please enter your name");
        alert("welcome to the party!!");

    }

    else {
        alert("soory wrong entry");


    }
    

} while (confirm("is there anyone else?"));










