const close = document.getElementById('close')
const popContainer= document.getElementsByClassName('popup_overlay')
popContainer[0].style.display="none"
close.addEventListener('click',()=>{
    console.log(popContainer);
    popContainer[0].style.display="none"
})

window.onload=()=>{
    console.log("nu");
    setTimeout(()=>{
        console.log("running..");
       popContainer[0].style.display="block"
    },5000)
}
