const iconEl = document.getElementById("icon")


iconEl.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        iconEl.src = "image/moon.png"
    }
    else{
        iconEl.src = "image/sun.png"
    }
}