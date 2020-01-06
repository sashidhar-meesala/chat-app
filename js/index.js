const domBtnOthers = document.getElementById(`btnOthers`);
const domOthers = document.getElementById(`others`);

domBtnOthers.addEventListener('click', event => {
  domOthers.classList.toggle('open');
});