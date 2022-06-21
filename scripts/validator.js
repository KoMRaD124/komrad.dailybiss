let phone= document.querySelector(".form-mobile-text")
let checkbox = document.querySelector(".form-checked-checkbox")
let name = document.querySelector(".form-name-text")
let btm =document.querySelector(".form-button-button")

phone.addEventListener("input",()=>{
    if(phone.value.length===16 && name.value.length>0 &&checkbox.checked){
        btm.disabled=false
        btm.classList.add("btm-checked")
    }
    else{
        btm.disabled=true
        btm.classList.remove("btm-checked")
    }
})

name.addEventListener("input",()=>{
    if(phone.value.length===16 && name.value.length>0 &&checkbox.checked){
        btm.disabled=false
        btm.classList.add("btm-checked")
    }
    else{
        btm.disabled=true
        btm.classList.remove("btm-checked")
    }
})

checkbox.addEventListener("change",()=>{
    if(phone.value.length===16 && name.value.length>0 &&checkbox.checked){
        btm.disabled=false
        btm.classList.add("btm-checked")
    }
    else{
        btm.disabled=true
        btm.classList.remove("btm-checked")
    }
})