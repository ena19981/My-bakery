const modal = document.querySelector(".backdrop");
const modalBtnOpenList = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpenList.forEach(button => {
  button.addEventListener("click", toggleModal);
});

modalBtnClose.addEventListener("click", toggleModal);