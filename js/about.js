import { $ } from "./helper.js";

const quoteContentList = [
  {
    quote:
      "Education is the key to unlocking the world. lt is the passport to freedom",
    author: "Oprah Winfrey",
  },
  {
    quote: "With languages, you are at home anywhere",
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
<h1>Our mission</h1>
<p>
  Is to realize the potential of our students, through our delivery of 
  exceptional training by highly qualified and experienced teachers.
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
