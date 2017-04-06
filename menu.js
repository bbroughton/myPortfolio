
var menu = document.getElementById('menu');
var btn = document.getElementById("menuButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
   menu.style.display = "block";
}

span.onclick = function() {
    menu.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == menu) {
        menu.style.display = "none";
    }
}