const button = document.getElementById("showSections")
const hiddenSections = document.querySelectorAll(".hidden")
button.addEventListener('click', () => {
    hiddenSections.forEach(secetion => secetion.classList.remove("hidden"))
} )