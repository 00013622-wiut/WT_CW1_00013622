import { $ } from "./helper.js";
const aboutCardSList = [
  {
    title: "Our Mission",
    description:
      "Is to realize the potential of our students, through our delivery of exceptional training by highly qualified and experienced teachers.",
  },
  {
    title: "Our Goal",
    description:
      "Is the recognition of Educator LC as the best language school in Tashkent by setting quality standards in curriculum development for innovative learning and professional development.",
  },
  {
    title: "Our Curriculum",
    description:
      "Is prepared through the years of experience along with creativity, passion and ",
  },
  {
    title: "Our Teachers",
    description:
      "Are highly qualified with a minimum of 5 years of teaching experience. They are also trained in the latest teaching methods and techniques.",
  },
];

const quoteContentList = [
  {
    quote:
      "Education is the key to unlocking the world. lt is the passport to freedom",
    author: "Oprah Winfrey",
  },
  {
    quote: "To have another language is to possess a second soul",
    author: "Edmund De Waal",
  },
  {
    quote: "Pure mathematics is, in its way, the poetry of logical ideas",
    author: "Alber Einstein",
  },
];

for (let i = 0; i < 4; i++) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
<h1>${aboutCardSList[i].title}</h1>
<p>
    ${aboutCardSList[i].description}
</p>
`;
  $("#card-body").appendChild(card);
}

for (let i = 0; i < quoteContentList.length; i++) {
  const card = document.createElement("div");
  card.className = "quote";
  card.innerHTML = `
    <span>
    <img
        src="./images/icon-quote.svg"
        style="fill: #fff; color: #fff"
        alt="quote-string"
    />
</span>
<p>
${quoteContentList[i].quote}
</p>
<h1>${quoteContentList[i].author}</h1>
    `;
  $(".quotes-content").appendChild(card);
}
