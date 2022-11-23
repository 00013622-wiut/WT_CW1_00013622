import { $ } from "./helper.js"

$("#form-login")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = $("#name").value;
    const password = $("#password").value;
    const data = {
        name,
        password
    }
    alert(`
    Name: ${data?.name}
    Password: ${data?.password}
    `);
    $("#form").reset();
})
$("#form-register")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = $("#name").value;
    const surname = $("#surname").value;
    const email = $("#email").value;
    const password = $("#password").value;
    const data = {
        name,
        surname,
        email,
        password
    }
    alert(`
    Name: ${data?.name}
    Surname: ${data?.surname}
    Email: ${data?.email}
    Password: ${data?.password}
    `);
    $("#form").reset();
})
