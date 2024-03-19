const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggLeModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggLeModal);
modalBtnClose.addEventListener("click", toggLeModal);