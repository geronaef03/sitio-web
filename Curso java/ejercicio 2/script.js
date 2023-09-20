document.addEventListener("DOMContentLoaded", function () {

    const promedioCells = document.querySelectorAll(".promedio-10");

    promedioCells.forEach(function (cell) {
        const promedio = parseFloat(cell.textContent);
        if (promedio === 10) {
            cell.classList.add("promedio-10");
        }
    });
});