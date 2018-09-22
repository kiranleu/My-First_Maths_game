let score = 0;//Declaring variables
let scorebox = document.getElementById("score");  //refers to span
let questionbox = document.getElementById("question");//refers to paragraph
let answerform = document.getElementById("myForm");//referst to the form

function setAdditionGame() {
    answerform.setAttribute("data-gametype", "addition");// set att we created and runs the funct that give us the question
    additionQuiz();
}

function setSubtractionGame() {
    answerform.setAttribute("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame() {
    answerform.setAttribute("data-gametype", "multiplication");
    multiplicationQuiz();
}

function checkAnswer() {
    let gametype = answerform.getAttribute("data-gametype");
    if (answerform["answer"].value == answerform["rightAnswer"].value) {
        alert("Hey! You got it right :)");
        score++;
    } else {
        alert("Maybe next time!! Keep Trying");
    }
    answerform["answer"].value = ""; //This empties the answer field for typing next question.Gets the game type and runs the function that matches the type game
    scorebox.textContent = score;
    if(gametype == "addition") {
        additionQuiz();
    } else if(gametype == "subtraction") {
        subtractionQuiz();
    } else if(gametype == "multiplication") {
        multiplicationQuiz();
    }
    return false;//stops the page reloding.
}

function additionQuiz() {//generate random numbers
    let num1 = Math.floor(Math.random() * 50);//Random generating numbers.Entering math.floor function rounds the number so the number is whole  number instead of con punto.
    let num2 = Math.floor(Math.random() * 50);// if you wanna do it * 1000 we wil do it like this:  Math.floor(Math.random() * 900) + 100
    questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";//this sum also could be: ,What is: ${num1}+ ${num2}';'
    answerform["rightAnswer"].value = (num1 + num2);//We refer to our anwer form, we get the answer form and check if the answer is rigth
}

function setMultiplicationGame() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
     questionbox.textContent = "What is: " + num1 + " * " + num2 + "?";
     answerform["rightAnswer"].value = (num1 * num2);
}

function setSubtractionGame() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    if(num1<num2){ //To avoid negative numbers, if num1 is mayor que number2
        let num3=num1;// let num3 be num1
        num1=num2;//num1 swap with num 2
        num2=num3;//num2 swaps with num 3 then so in this way we won't get a negative number.
    }
    questionbox.textContent = "What is: " + num1 + " - " + num2 + "?";
    answerform["rightAnswer"].value = (num1 - num2);

}
 additionQuiz();//it calls the funct so game always starts with addition
 

 function hourglass() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf251;";
  setTimeout(function () {
      a.innerHTML = "&#xf252;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf253;";
    }, 2000);
}
hourglass();
setInterval(hourglass, 3000);


