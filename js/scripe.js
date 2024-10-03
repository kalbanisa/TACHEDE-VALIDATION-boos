var menuIcon = document.querySelector(".fa-bars");
var sidebar = document.querySelector(".sidebar");
var princi = document.querySelector(".princi");

menuIcon.onclick = function (){
    sidebar.classList.toggle("small-sidebar");
    princi.classList.toggle("large-princi");
}