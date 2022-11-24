import { $ } from "./helper.js";

const navbarContainer = document.createElement("div");
navbarContainer.className = "navbar-container";
navbarContainer.innerHTML = `
<div class="navbar-logo">
<a href="/" class="logo-child">Educator</a>
</div>
<ul class="navbar-menu-list list">
<li class="navbar-menu-item">
    <a href="/" class="navbar-menu-link">Home</a>
</li>
<li class="navbar__menu-item">
    <a href="/about" class="navbar-menu-link">About</a>
</li>

<li class="navbar__menu-item">
    <a href="/courses" class="navbar-menu-link">Courses</a>
</li>
<li class="navbar__menu-item">
    <a href="/contacts" class="navbar-menu-link">Contacts</a>
</li>
<li class="navbar__menu-item">
    <a href="/staff" class="navbar-menu-link">Staff</a>
</li>

<div class="btn-group-list" style="display: none">
    <button type="button" class="login-login">
        <a href="/login">Sign in</a>
    </button>
    <button type="button" class="login-register">
        <a href="/register">Sign up</a>
    </button>
</div>
</ul>
<div class="btn-group">
<button type="button" class="login-login">
    <a href="/login">Sign in</a>
</button>
<button type="button" class="login-register">
    <a href="/register">Sign up</a>
</button>
</div>
<div>
<button type="button" class="menu-open" id="toggleMenu">Menu</button>
</div>
`;
$("#navbar").append(navbarContainer);

const footer = document.createElement("footer");
footer.innerHTML = `
    <div class="footer">
    
        <div class="footer-content">
        &copy;Copyright 2022 All Rights Reserved
        </div>
    </div>
`;
document.body.append(footer);

if (window.screen.width > 805) {
  $(".navbar-menu-list").classList.remove("navbar-active");
  $(".navbar-menu-list").classList.add("list");
  $(".btn-group").classList.add("desktop-menu");
}

if ($("#toggleMenu")) {
  $("#toggleMenu").addEventListener("click", function () {
    // $(".navbar-menu-list").classList.toggle("list")
    $(".navbar-menu-list").classList.toggle("navbar-active");
  });
}
