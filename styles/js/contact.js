import { $ } from "./helper.js"

$("#form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = $("#name").value;
    const email = $("#email").value;
    const message = $("#message").value;
    const data = {
        name,
        email,
        message
    }
    alert(`
    Name: ${data.name}
    Email: ${data.email}
    Message: ${data.message}
    `);
    $("#form").reset();
})

console.log("Hello World")