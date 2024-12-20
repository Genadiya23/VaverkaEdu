const questions = [
    {
       question: "Who wrote Kurhan?",
       answers: [
          {text: "Yakub Kolas", correct: false},
          {text: "Yanka Kupala", correct: true},
          {text: "Maksim Bahdanovich", correct: false},
          {text: "Kuzma Chorny", correct: false},
       ]
    },
    {
       question: "Who printed first belarusian book?",
       answers: [
          {text: "Cimyaon Polatski", correct: false},
          {text: "Mikola Husouski", correct: false},
          {text: "Rahneda", correct: false},
          {text: "Francysk Scaryna", correct: true},
       ]
    },
    {
       question: "Who wrote Kurhan?",
       answers: [
          {text: "Yakub Kolas", correct: false},
          {text: "Yanka Kupala", correct: true},
          {text: "Maksim Bahdanovich", correct: false},
          {text: "Kuzma Chorny", correct: false},
       ]
    },
    {
       question: "Black Night is  ?",
       answers: [
          {text: "The night of the shot poets ", correct: true},
          {text: "Kupalle", correct: false},
          {text: "Kalyady", correct: false},
          {text: "Dzyady", correct: false},
       ]
    },
    {
       question: "Continue the phrase: You should go home more often?",
       answers: [
          {text: "You should not be a kid at home", correct: false},
          {text: "You should not be a pet at home", correct: false},
          {text: "You should not be a guest at home", correct: true},
          {text: "I'm home and home is me", correct: false},
       ]
    },
 
];
 
 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");
 const coursesButton = document.getElementById ("courses-btn");
 
 let currentQuestionIndex = 0;
 let score = 0;
 
 function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }

 function goCourses(){
    window.location.href = "http://courses.html";
 }
 
 function showQuestion() {
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
 
    currentQuestion.answers.forEach (answer =>{
       const button = document.createElement ("button");
       button.innerHTML = answer.text;
       button.classList.add ("btn");
       answerButtons.appendChild(button);
       if(answer.correct){
            button.dataset.correct = answer.correct;
       }
       button.addEventListener("click",selectAnswer);
    });
 }
 
 function resetState(){
    nextButton.style.display = "none";
    coursesButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add ("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore (){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display ="block";
    coursesButton.innerHTML = "Go to Courses";
    coursesButton.style.display ="block";

}
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=> {
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz ();
    }
});

coursesButton.addEventListener("click", ()=> {
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        goCourses();
    }
});
 startQuiz();
