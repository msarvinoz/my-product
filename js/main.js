// theme change
function changeColor(){
  let elTheme = document.body;
  elTheme.classList.toggle("dark");

}


// faq
let elQuestions = document.querySelectorAll('.faq__question');
let elAnswer = document.querySelectorAll('.faq__answer');
let elPlus = document.querySelector('.plus');
let elMinus = document.querySelector('.minus');

elQuestions.forEach(elQuestions => {
  elQuestions.addEventListener('click', () => {
    elQuestions.nextElementSibling.style.display = elQuestions.nextElementSibling.style.display === 'none' ? 'block' : 'none';
    elMinus.style.display = 'inline-block'
    elPlus.style.display = 'none'
  });
});

