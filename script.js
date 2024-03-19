const stat_button = document.querySelectorAll('.faq__card--question-state');
stat_button.forEach((btn) => {
  btn.addEventListener('click', function () {
    document
      .querySelector(`.plus-${btn.dataset.answer}`)
      .classList.toggle('hidden');
    document
      .querySelector(`.minus-${btn.dataset.answer}`)
      .classList.toggle('hidden');
    document
      .querySelector(`.an-${btn.dataset.answer}`)
      .classList.toggle('hidden');
  });
});
const link = document.querySelectorAll('.faq__card--question-title');
link.forEach((btn) => {
  btn.addEventListener('click', function () {
    document
      .querySelector(`.plus-${btn.dataset.answer}`)
      .classList.toggle('hidden');
    document
      .querySelector(`.minus-${btn.dataset.answer}`)
      .classList.toggle('hidden');
    document
      .querySelector(`.an-${btn.dataset.answer}`)
      .classList.toggle('hidden');
  });
});
