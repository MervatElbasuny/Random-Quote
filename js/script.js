

// To get random quote
const quotes = [
  {
    title:`Quote of the day`,
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author :" ― Bernard M. Baruch"
  },
  {
    title:`Quote of the day`,
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "- Nelson Mandela"
  },

  {
    title:`Quote of the day`,
    quote: "What you're supposed to do when you don't like a thing is change it. If you can't change it, change the way you think about it. Don't complain.",
    author: "― Maya Angelou"
  },

  {
    title:`Quote of the day`,
    quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
    author: "― John Lennon"
  },

  {
    title:`Quote of the day`,
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "― Marilyn Monroe"
  },

  {
    title:`Quote of the day`,
    quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "― Bill Keane"
  },

  {
    title:`Quote of the day`,
    quote: "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend.",
    author: "― Albert Camu"
  },

  {
    title:`Quote of the day`,
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "― Winston S. Churchil"
  },

  {
    title:`Quote of the day`,
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "  ― Albert Einstein"
  },
  {
    title:`Quote of the day`,
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
    author: "― Dr. Seuss"
  },
];

let newArryQuote = [...quotes];
let button = document.querySelector("#q");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

button.addEventListener("click", function () {
  if (newArryQuote.length === 0) {
    newArryQuote = [...quotes]; 
  }

  let randomIndex = Math.floor( Math.random () * newArryQuote.length);
  let randomQuote = newArryQuote[randomIndex];

  quote.innerHTML = randomQuote.quote;
  author.innerHTML = randomQuote.author;

  newArryQuote.splice(randomIndex, 1);
  
});
// End



// To translate text to voiceover
quoteSound = document.querySelector(".sound");
quoteCopy=document.querySelector(".copy");
quoteShare = document.querySelector(".share")

quoteSound.addEventListener("click" , ()=>{
  const utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
  speechSynthesis.speak(utterance);
});
// End



// to copy quote outside
quoteCopy.addEventListener("click" , ()=>{
 navigator.clipboard.writeText(quote.innerText);
});
// End



// to share quote to facebook
quoteShare.addEventListener("click" , ()=>{
  const faceBookUrl =`https://www.facebook.com/${quote.innerText}`;
  window.open(faceBookUrl , "_blank")
 });
// End



// function to change color of (heart-icon)
 function changeColor(heart) {
  heart.style.color = 'red';
  setTimeout(function() {
    heart.style.color='#5a4a4a'
  }, 2500);
}
// End



// function to change text of(copy to copied)
function changText(copied){
  document.getElementById('copied').innerHTML="copied";
  setTimeout(function() {
    copied.innerHTML = 'Copy';
  }, 2000);
}
// End




// function to animation
let currentQuoteIndex = 0;  
let title =document.querySelector(".title");
button.addEventListener("click" , function () {   
  quote.classList.remove('animate__fadeInUp');
  author.classList.remove('animate__fadeInUp');
  title.classList.remove('animate__fadeInDown')
  setTimeout(() => {
    currentQuoteIndex = (currentQuoteIndex ) % quotes.length;
    quote.classList.add('animate__animated', 'animate__fadeInUp');
    author.classList.add('animate__animated', 'animate__fadeInUp');
    title.classList.add('animate__animated' , 'animate__fadeInDown');

  }, 25);
});
// End


