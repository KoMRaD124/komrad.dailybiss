if (window.screen.width <422){
    var clickActiveSam=document.getElementById("sam-button-mobile")
    var clickActiveVam=document.getElementById("vam-button-mobile")
}
else{
    var clickActiveSam=document.getElementById("sam-button")
    var clickActiveVam=document.getElementById("vam-button")
}
const hideSam=document.querySelector(".vibrat-variant-right-sam")
const hideVam=document.querySelector(".vibrat-variant-right-vam")
clickActiveSam.addEventListener("click", ()=>{
    if(!clickActiveSam.classList.contains("krya"))
    {
        clickActiveSam.classList.add("krya")
        clickActiveVam.classList.remove("krya")
        hideSam.classList.remove("hide")
        hideVam.classList.add("hide")
    }
})
clickActiveVam.addEventListener("click", ()=>{
    if(!clickActiveVam.classList.contains("krya"))
    {
        clickActiveVam.classList.add("krya")
        clickActiveSam.classList.remove("krya")
        hideSam.classList.add("hide")
        hideVam.classList.remove("hide")
        
    }
})

