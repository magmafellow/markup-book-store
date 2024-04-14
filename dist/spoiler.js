const spoiler1 = document.querySelector(".spoiler-1");
const spoilerBtns = document.querySelectorAll(".spoiler .spoiler__btn");

console.log(spoilerBtns)

if(spoilerBtns instanceof NodeList) {
  console.log('in if')
  for (let i = 0; i < spoilerBtns.length; i++) {
  spoilerBtns[i].addEventListener('click', function(e){
    if (e.target.matches('img')) {
      e.target.parentNode.parentNode.classList.toggle('active')
    }
    e.target.parentNode.classList.toggle('active')
  })
}
} else {
  console.log('in else')
  spoilerBtns.addEventListener('click', function(e){
    if (e.target.matches('img')) {
      e.target.parentNode.parentNode.classList.toggle('active')
    }
    e.target.parentNode.classList.toggle('active')
  })
}
