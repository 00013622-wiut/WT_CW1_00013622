import { $ } from "./helper.js"

if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
    $(".navbar").style.position = "absolute";
}
else {
    $(".navbar").style.position = "sticky";
}
if (window.screen.width > 805) {
    $(".navbar-menu-list").classList.remove("navbar-active")
    $(".navbar-menu-list").classList.add("list")
    $(".btn-group").classList.add("desktop-menu")
}

if ($("#toggleMenu")) {
    $("#toggleMenu").addEventListener("click", function () {
        // $(".navbar-menu-list").classList.toggle("list")
        $(".navbar-menu-list").classList.toggle("navbar-active")
    })
}

const footer = document.createElement("footer")
footer.innerHTML = `
    <div class="footer">
        <div class="footer-content">
            Copyright 2022 &copy; All Rights Reserved
        </div>
    </div>
`
document.body.append(footer)