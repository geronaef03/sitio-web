document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("openModalButton");
    const closeModalButton = document.getElementById("closeModalButton");
    const modal = document.getElementById("myModal");
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");

    openModalButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    const confirmButton = document.getElementById("confirmButton");
    confirmButton.addEventListener("click", function () {
        const number = parseFloat(numberInput.value);

        if (!isNaN(number)) {
            resultElement.textContent = number;
            modal.style.display = "none";
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    });
});