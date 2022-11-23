import { $ } from "./helper.js"

const data = [
    {
        name: "Stuff 1",
        img: "./images/stuff1.jpg",
    },
    {
        name: "Stuff 2",
        img: "./images/stuff2.jpg",
    },
    {
        name: "Stuff 3",
        img: "./images/stuff1.jpg",
    },
    {
        name: "Stuff 4",
        img: "./images/stuff2.jpg",
    }
]

const stuff = document.createElement("div")
stuff.className = "stuff"
stuff.innerHTML = `
${data.map(item => `
<div class="stuff-item">
                    <img src="${item.img}" alt="${item.name}"/>
                    <h3>${item.name}</h3>
                </div>
`).join("")}
`

$("#banner-content").append(stuff)