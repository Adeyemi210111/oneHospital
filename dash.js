let icon = document.getElementById("ini");
let smallmenu = document.getElementById("men");
icon.addEventListener("click", option);
function option() {
    if (smallmenu.style.display=="none") {
        smallmenu.style.display = "block";
    }
    else{
        smallmenu.style.display = "none";
    }
}