import { $ } from "./helper.js";

const data = [
  {
    name: "Ozodova Dilnura",
    img: "./images/stuff1.jpg",
    position: "English Teacher",
  },
  {
    name: "Baxromova Nozimaxon",
    img: "./images/stuff2.jpg",
    position: "English Teacher",
  },
  {
    name: "Salokhiddinov Saddriddin",
    img: "./images/stuff1.jpg",
    position: "Maths Teacher",
  },
  {
    name: "Axmedov Muzaffar",
    img: "./images/stuff2.jpg",
    position: "Maths Teacher",
  },
];

const stuff = document.createElement("div");
stuff.className = "stuff";
stuff.innerHTML = `
${data
  .map(
    (item) => `
<div class="stuff-item">
                    <img src="${item.img}" alt="${item.name}"/>
                    <h3>${item.name}</h3>
                </div>
`
  )
  .join("")}
`;

$("#banner-content").append(stuff);
