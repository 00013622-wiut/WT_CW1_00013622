import { $ } from "./helper.js"
const englishCoursesList = [
    {
        title: "Pre-Intermediate English",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat, tenetur laboriosam quos fugiat qui deserunt ullam. In, magni cumque.",
        img: "../images/Pre-Intermediate.png",
    },
    {
        title: "Intermediate English",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat, tenetur laboriosam quos fugiat qui deserunt ullam. In, magni cumque.",
        img: "../images/Intermediate.png",
    },
    {
        title: "Advanced English",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat, tenetur laboriosam quos fugiat qui deserunt ullam. In, magni cumque.",
        img: "../images/Advance.png",
    }
]

const mathCoursesList = [
    {
        title: "Math for beginners",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat, tenetur laboriosam quos fugiat qui deserunt ullam. In, magni cumque.",
        img: "../images/math.webp",
    },
    {
        title: "Math tests",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat, tenetur laboriosam quos fugiat qui deserunt ullam. In, magni cumque.",
        img: "../images/math.webp",
    },
    {
        title: "Math for advanced",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat, tenetur laboriosam quos fugiat qui deserunt ullam. In, magni cumque.",
        img: "../images/math.webp",
    }
]

for (let i = 0; i < 3; i++) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
    <img src="${englishCoursesList[i].img}" alt="project image"/>
<h1>${englishCoursesList[i].title}</h1>
<p>
    ${englishCoursesList[i].description}
</p>
`;
    $("#project-en").appendChild(card);
}
for (let i = 0; i < 3; i++) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
    <img src="${mathCoursesList[i].img}" alt="project image"/>
<h1>${mathCoursesList[i].title}</h1>
<p>
    ${mathCoursesList[i].description}
</p>
`;
    $("#project-math").appendChild(card);
}