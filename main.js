// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeButton = document.getElementsByClassName('like-glyph')
for(let btn of likeButton){
  btn.addEventListener('click',addEvent)
  
  }
  function addEvent(event){
    heart = event.target
    if(heart.innerText===EMPTY_HEART){
    mimicServerCall()
     .then(()=>{
      heart.innerText= FULL_HEART
      heart.classList.add('activated-heart')
    })
    .catch(()=>{
     const myModal = document.querySelector('#modal')
      myModal.classList.remove('hidden')
      setTimeout(()=>{
        myModal.classList.toggle('hidden')
      }, 3000)
    });
  }
    if(heart.innerText===FULL_HEART){
      heart.innerText=EMPTY_HEART;
      heart.classList.remove('activated-heart')
    }
  }





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}