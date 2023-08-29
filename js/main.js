// document.querySelector('.theme__change').addEventListener('click', function() {
//     document.body.style.background = '#1f2e35';
//   });
  

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

