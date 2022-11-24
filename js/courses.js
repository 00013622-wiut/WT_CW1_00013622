import { $ } from "./helper.js";
const englishCoursesList = [
  {
    title: "Pre-Intermediate English",
    description:
      "90 minutes per lesson, 3 times a week </br> Course Length: 3-4 Months </br> Course Fee: 5,500,000 UZS",
    img: "../images/Pre-Intermediate.png",
  },
  {
    title: "Intermediate English",
    description:
      "90 minutes per lesson, 3 times a week </br> Course Length: 3-6 Months </br> Course Fee: 7,000,000 UZS",
    img: "../images/Intermediate.png",
  },
  {
    title: "Advanced English",
    description:
      "90 minutes per lesson, 5 times a week </br> Course Length: 3-9 Months </br> Course Fee: 15,000,000 UZS",
    img: "../images/Advance.png",
  },
];

const mathCoursesList = [
  {
    title: "Math for beginners",
    description:
      "90 minutes per lesson, 3 times a week </br> Course Length: 3-9 Months </br> Course Fee: 5,500,000 UZS",
    img: "../images/math.webp",
  },
  {
    title: "Math tests",
    description:
      "90 minutes per lesson, 3 times a week </br> Course Length: 3-6 Months </br> Course Fee: 7,000,000 UZS",
    img: "../images/math.webp",
  },
  {
    title: "Math for advanced",
    description:
      "90 minutes per lesson, 5 times a week </br> Course Length: 3-9 Months </br> Course Fee: 15,000,000 UZS",
    img: "../images/math.webp",
  },
];

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
