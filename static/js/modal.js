// Получаем элементы
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

// ФИЧА 1.
// Открытие модального окна
openModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
});

// Закрытие модального окна при нажатии на крестик
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


// ФИЧА 2.
// Закрытие при клике на пустую область
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


// ФИЧА 3.
// Переход при нажатии на куракод 
const clickLinkBrif = document.querySelector(".modal__qr");
const telegramLink = "https://t.me/infantaluwx";

clickLinkBrif.addEventListener("click", () => {
    window.location.href = telegramLink;
});
