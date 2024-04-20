const facts = [
  {
    statement: "JavaScript was invented in 1995",
    answer: "true",
    explanation:
      "Brendan Eich created JS at Netscape in 1995. The initial version of the languaghe was written in just 10 days.",
  },
  {
    statement: "Strings in JS are editable values",
    answer: "false",
    explanation:
      "In JavaScript strings are immutable values, meaning they cannot be edited; however they can be replaced with new, different strings.",
  },
  {
    statement: "1 + 1 ===  2",
    answer: "true",
    explanation: "The plus operator gives the sum of two numbers.",
  },
  {
    statement: "'1' + '1' === '2'",
    answer: "false",
    explanation:
      "The plus operator concatenates (joins together) strings, so '1' + '1' === '11'.",
  },
  {
    statement: "typeof ['J', 'S'] === 'array'",
    answer: "false",
    explanation:
      "Arrays have the type 'object'. In JS, everything is either a primitive data type (e.g. 'string', 'number') or an object. Arrays are a kind of object with some special properties.",
  },
];

// count correct answer
let correct = 0;  

// sum up the total score
let completed = 0; 

//represent correct answer
let fact; 

// hide button, show button, enable and disable button
const hide = element => element.classList.add("hidden");
const show = element => element.classList.remove("hidden");
const disable = button => button.setAttribute("disabled", "");
const enable = button => button.removeAttribute("disabled");


// assigning each variable in a dom
const explanation = document.querySelector("#explanation");
const optionsButton = document.querySelectorAll("#options button");
const statement = document.querySelector("#statement");
const nextButton = document.querySelector("#nextQuest");
const score = document.querySelector("#score")


// function that will handle nextQuestion functionality
const nextQuestion = () => {
  // fact variable to handle each index from facts
  fact = facts.shift();
  statement.textContent = fact.statement;

  // hide any explanation for now untill click for any option
  hide(explanation);

  // remove the Css attribute "correct" and "incorrect" using for loop
  for(let button of optionsButton){
    button.classList.remove('correct');
    button.classList.remove('incorrect');
    enable(button);
  }
  disable(nextButton);
}


// listen to an event when NextQuestion is clicked
nextButton.addEventListener('click', nextQuestion)

// adding an event when each option is click using for loop
for(let option of optionsButton){
  option.addEventListener('click', () => {
    // When any of these options is clicked...

    // disable all other options button
    for(let button of optionsButton){
      disable(button);
    }

    // enable the 'next question' button, if we still have facts left
    if(facts.length > 0){
      enable(nextButton);
    }else{
      nextButton.textContent = 'No more questions';
    }

    // To activate css of correct/incorrect
    if(option.value === fact.answer){
      option.classList.add('correct');
      correct += 1;
      score.textContent = `score ${correct} / 5`
    }else{
      option.classList.add('incorrect');
    }

    // To activate css of explanation.
    explanation.textContent = fact.explanation;
    show(explanation)
  });
}




// nextQuestion
nextQuestion()
