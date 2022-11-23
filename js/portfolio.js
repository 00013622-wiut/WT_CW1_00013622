import { $ } from "./helper.js"

for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
    <img src="../images/project.jpeg" alt="project image"/>
<h1>Project ${i + 1}</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat,
    tenetur laboriosam quos fugiat qui deserunt ullam. In, magni cumque.
</p>
`;
    $("#project").appendChild(card);
}