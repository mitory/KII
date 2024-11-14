function showPopup(message) {
    const popupMessage = document.getElementById("popupMessage");
    const popupText = document.getElementById("popupText");

    popupText.textContent = message;

    popupMessage.classList.add("show");

    setTimeout(function () {
        popupMessage.classList.remove("show");
    }, 5000);
}