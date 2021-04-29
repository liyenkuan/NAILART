const navBGC = document.querySelector(".navContainer");
window.onscroll = function () {
    if(window.pageYOffset >=100){
        navBGC.classList.add("navColor");
    }else{
        navBGC.classList.remove("navColor");
    }
};