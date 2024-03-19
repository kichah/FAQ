const question = document.querySelectorAll('.faq__card--box');
question.forEach((qt) => {
  qt.addEventListener('click', function () {
    document
      .querySelector(`.plus-${qt.dataset.answer}`)
      .classList.toggle('hidden');
    document
      .querySelector(`.minus-${qt.dataset.answer}`)
      .classList.toggle('hidden');
    document
      .querySelector(`.an-${qt.dataset.answer}`)
      .classList.toggle('hidden');
  });
});
