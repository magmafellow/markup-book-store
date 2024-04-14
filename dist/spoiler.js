const spoiler1 = document.querySelector('.spoiler-1');
const spoilerBtn1 = document.querySelector('.spoiler-1 .spoiler__btn')

spoilerBtn1.addEventListener('click', function(e) {
  spoiler1.classList.toggle('active')
})
