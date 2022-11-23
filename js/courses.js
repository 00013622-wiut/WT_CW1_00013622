import { $ } from "./helper.js"

const english = ["Beginner", "Intermediate", "Advanced"];
const math = ["Math for beginners", "Math tests", "Math for advanced"];

for (let i = 0; i < 3; i++) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
    <img src="../images/project.jpeg" alt="project image"/>
<h1>${english[i]}</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat,
    tenetur laboriosam quos fugiat qui deserunt ullam. In, magni cumque.
</p>
`;
    $("#project-en").appendChild(card);
}
for (let i = 0; i < 3; i++) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
    <img src="../images/project.jpeg" alt="project image"/>
<h1>${math[i]}</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat,
    tenetur laboriosam quos fugiat qui deserunt ullam. In, magni cumque.
</p>
`;
    $("#project-math").appendChild(card);
}