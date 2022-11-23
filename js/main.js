import { $ } from "./helper.js"

if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
    $(".navbar").style.backgroundColor = "none";
    $(".navbar").style.position = "absolute";
}
else {
    $(".navbar").style.backgroundColor = "#000";
    $(".navbar").style.position = "sticky";
}
if (window.screen.width > 768) {
    $(".navbar-menu-list").classList.remove("navbar-active")
    $(".navbar-menu-list").classList.add("list")
}

if ($("#toggleMenu")) {
    $("#toggleMenu").addEventListener("click", function () {
        // $(".navbar-menu-list").classList.toggle("list")
        $(".navbar-menu-list").classList.toggle("navbar-active")
    })
}
