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

// Element Declarations
const ballImg = document.getElementById('ball-img');
const answerTxt = document.getElementById('answer-txt');
const questionTxt = document.getElementById('question-txt');
const submitBtn = document.getElementById('submit-btn');

// Event Listener
ballImg.addEventListener('click', function() {
  const answerIndex = Math.floor(Math.random() * answersArray.length);
  answerTxt.textContent = answersArray[answerIndex];
  shakeAudio.play()
})