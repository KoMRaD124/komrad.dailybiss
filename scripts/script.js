const openBlock=document.querySelector(".form-button-button")
const popupbody=document.querySelector(".uspeh-popup-body")
const popup=document.querySelector(".uspeh-popup")
document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault(true);
})
openBlock.addEventListener("click",()=>{
   
    popup.classList.add("active")

})
popupbody.addEventListener("click",()=>{
    popup.classList.remove("active")
})