var modal = document.querySelector(".pop-up");
var btn = document.querySelector(".reviews-form__btn");
btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("pop-up__show");
});
