const answersArray = [
  'It is certain.',
  'It is decidedly so.',
  'Wihtout a doubt.',
  'Yes definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
]

const shakeAudio = new Audio('ball-shake.wav');
const errorAudio = new Audio('xp-error.mp3');

// Element Declarations
const ballImg = document.getElementById('ball-img');
const answerTxt = document.getElementById('answer-txt');
const questionInput = document.getElementById('question-input');
const nameInput = document.getElementById('name-input');
const submitBtn = document.getElementById('submit-btn');
const clearNameBtn = document.getElementById('nclear-btn');
const clearQuesBtn = document.getElementById('qclear-btn');
const clearAllBtn = document.getElementById('aclear-btn');

// Event Listener
ballImg.addEventListener('click', function() {
  if (nameInput.value === '' || questionInput.value === '') {
    answerTxt.textContent = 'One of the fields (name or question) is missing.'
    errorAudio.play();
    setTimeout(() => { answerTxt.textContent = '[Answer will be displayed here]' }, 2000);
  } else {
    const answerIndex = Math.floor(Math.random() * answersArray.length);
    answerTxt.textContent = answersArray[answerIndex];
    shakeAudio.play();
    setTimeout(() => { answerTxt.textContent = '[Answer will be displayed here]' }, 5000);
  }
})

clearNameBtn.addEventListener('click', function() {
  nameInput.value = '';
})

clearQuesBtn.addEventListener('click', function() {
  questionInput.value = '';
})

clearAllBtn.addEventListener('click', function() {
  nameInput.value = '';
  questionInput.value = '';
})