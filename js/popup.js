function showPopup(message) {
    const popupMessage = document.getElementById("popupMessage");
    const popupText = document.getElementById("popupText");

    popupText.textContent = message;

    popupMessage.classList.add("show");

}

const popup_button = document.getElementById("popupButton");


popup_button.addEventListener("click", function () {
    popupMessage.classList.remove("show");
});