let Question = [
    {
        numb: 1,
        question: "What is the First Anime Ever Produced?",
        answer: "Namakura Gatana",
        options: [
            "The Dull Sword",
            "Namakura Gatana",
            "Momotaro: Sacred Sailors",
            "Astro Boy"
        ]
    },
    {
        numb: 2,
        question: "Who is the main protagonist in 'Demon Slayer: Kimetsu no Yaiba'?",
        answer: "Tanjiro Kamado",
        options: [
            "Gon Freecss",
            "Nezuko Kamado",
            "Tanjiro Kamado",
            "Hisoka"
        ]
    },
    {
        numb: 3,
        question: "What is Naruto's main goal?",
        answer: "To Be The Leader Of His Village",
        options: [
            "Find His Parents",
            "Avenge His Brother",
            "Save His Sister",
            "To Be The Leader Of His Village"
        ]
    },
    {
        numb: 4,
        question: "What is the name of the virtual world in 'Sword Art Online'?",
        answer: "Aincard",
        options: [
            "Aincard",
            "The NerveGear",
            "A Guild",
            "The Metaverse"
        ]
    },
    {
        numb: 5,
        question: "Who is the main antagonist of 'Death Note'?",
        answer: "L",
        options: [
            "L",
            "Light Yagami",
            "Ryuk",
            "Misa Amane"
        ]
    },
    {
        numb: 6,
        question: "Which one is a wall on Paradise Island that protected the remnants of Eldia in 'Attack on Titan'?",
        answer: "All of Them",
        options: [
            "Maria",
            "sina",
            "Rose",
            "All of Them"
        ]
    },
    {
        numb: 7,
        question: "Who is god of Sharingan in Naruto?",
        answer: "Kaguya Otsusuki",
        options: [
            "Danzo",
            "Kakashi Hatake",
            "Kaguya Otsusuki",
            "Obito Uchiha"
        ]
    },
    {
        numb: 8,
        question: "What anime has a protagonist who aims to become the Pirate King?",
        answer: "One Piece",
        options: [
            "The Legend of Korra",
            "Bleach",
            "Vinland Saga",
            "One Piece"
        ]
    },
    {
        numb: 9,
        question: "What popular anime features a notebook that can kill people by writing their names in it?",
        answer: "Death note",
        options: [
            "Dragon's Dogma",
            "Death note",
            "Death Parade",
            "Terror in Resonance"
        ]
    },
    {
        numb: 10,
        question: "What is the name of the world in 'Attack on Titan'?",
        answer: "The World Within The Walls",
        options: [
            " The War Hammer Titan.",
            "Long Lost World",
            "World of Game",
            "The World Within The Walls"
        ]
    }
]

const startButton = document.querySelector('.startBtn');
const popupInfo = document.querySelector('.popupInfo');
const exitBtn = document.querySelector('.exit');
const continueBtn = document.querySelector('.continue');
const container = document.querySelector('.container');
const nextBtn = document.querySelector('.nextBtn');
const resultBox = document.querySelector('.result');
const tryAgainBtn = document.querySelector('.tryBtn');
const homeBtn = document.querySelector('.homeBtn');



startButton.onclick = () => {
    startButton.style.display = 'none';
    popupInfo.style.display = 'block';
}

exitBtn.onclick = () => {
    startButton.style.display = 'block';
    popupInfo.style.display = 'none';
}

continueBtn.onclick = () => {
    startButton.style.display = 'none';
    popupInfo.style.display = 'none';
    container.style.display = 'block';

    showQuestions(0);
}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

nextBtn.onclick = () => {
    if (questionCount < Question.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCount(questionNumb);

        nextBtn.classList.remove('active');

    }
    else {
        showResultBox();
    }
}

const optionList = document.querySelector('.optionList');

//getting questions and options from array
function showQuestions(index) {
    const questionText = document.querySelector('.quizText');
    questionText.textContent = `${Question[index].numb}. ${Question[index].question}`;

    let optionTag = `<div class="option"><span>${Question[index].options[0]}</span></div>
        <div class="option"><span>${Question[index].options[1]}</span></div>
        <div class="option"><span>${Question[index].options[2]}</span></div>
        <div class="option"><span>${Question[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }

}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = Question[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
    }
    else {
        answer.classList.add('incorrect');

        //If answer is incorrected, auto selected correct answer
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    //If user selected, disabled all options
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }
    nextBtn.classList.add('active');
}

//result function
function showResultBox() {
    resultBox.style.display = 'block';
    container.style.display = 'none';
    

    const scoreText = document.querySelector('.scoreText');
    scoreText.textContent = `Your Score ${userScore} out of ${Question.length}`
}

tryAgainBtn.onclick = () => {
    container.style.display = 'block';
    nextBtn.classList.remove('active');
    resultBox.style.display = 'none';
    
    
    questionCount = 0;
    questionNumb=1;
    userScore=0;

    showQuestions(questionCount);
}

homeBtn.onclick = () => {
    container.style.display = 'none';
    nextBtn.classList.remove('active');
    resultBox.style.display = 'none';
    startButton.style.display = 'block';
}