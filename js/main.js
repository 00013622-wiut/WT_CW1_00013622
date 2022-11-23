import { $ } from "./helper.js"
$("#myButton").addEventListener("click", function () {
    console.log("Button clicked");
})

// $("#card-body").appendChild(`
// <div class="card">
// <h1>About title</h1>
// <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat,
//     tenetur laboriosam quos fugiat qui deserunt ullam. In, magni cumque.
// </p>
// </div>
// `)

// append to the card-body 


for (let i = 0; i < 4; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
<h1>About title</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat,
    tenetur laboriosam quos fugiat qui deserunt ullam. In, magni cumque.
</p>
`;
    $("#card-body").appendChild(card);
}


