const hideSam = document.querySelector(".vibrat-variant-right-sam")
const hideVam = document.querySelector(".vibrat-variant-right-vam")

const handleSamButtonClick = (samButton, vamButton) => () => {
    if (!samButton.classList.contains("krya")) {
        samButton.classList.add("krya")
        vamButton.classList.remove("krya")
        hideSam.classList.remove("hide")
        hideVam.classList.add("hide")
    }
}

const handleVamButtonClick = (samButton, vamButton) => () => {
    if (!vamButton.classList.contains("krya")) {
        vamButton.classList.add("krya")
        samButton.classList.remove("krya")
        hideSam.classList.add("hide")
        hideVam.classList.remove("hide")
    }
}

const eventHandler = () => {
    let samButton
    let vamButton
    if (window.screen.width < 768) {
        samButton = document.getElementById("sam-button-mobile")
        vamButton = document.getElementById("vam-button-mobile")
    } else {
        samButton = document.getElementById("sam-button")
        vamButton = document.getElementById("vam-button")
    }
    samButton.onclick = handleSamButtonClick(samButton, vamButton)
    vamButton.onclick = handleVamButtonClick(samButton, vamButton)

}

['DOMContentLoaded', 'resize'].forEach(function(e) {
    window.addEventListener(e, eventHandler);
});