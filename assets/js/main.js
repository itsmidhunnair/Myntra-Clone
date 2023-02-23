let DropDown = document.querySelectorAll(".navbar-nav");

console.log(DropDown);

for (let i = 0; i < DropDown.length; i++) {
    // const element = DropDown[i];
    DropDown[i].addEventListener("mouseenter",activeOverlay);
    DropDown[i].addEventListener("mouseleave",hideOverlay);
}

// DropDown.addEventListener("mouseenter",activeOverlay)
// DropDown.addEventListener("mouseleave",hideOverlay)


function activeOverlay() {
    document.querySelector(".overLay").style.display="block";
}
function hideOverlay() {
    document.querySelector(".overLay").style.display="none";
}

let popupStatus = 0;
let popup = document.querySelector(".PopupHead");

popup.addEventListener("click",openPop)

function openPop() {
    if(popupStatus==0)
    {
        document.querySelector(".sidePopUp").style.width="40%";
        popupStatus=1;
    }
    else{
        document.querySelector(".sidePopUp").style.width="30px";
        popupStatus=0;
    }
}