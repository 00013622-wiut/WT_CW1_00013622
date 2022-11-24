import { $ } from "./helper.js"

const quoteContentList = [
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    }
]

for (let i = 0; i < 4; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
<h1>About Card</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat,
    tenetur laboriosam quos fugiat qui deserunt ullam. In, magni cumque.
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
    `
    $(".quotes-content").appendChild(card)
}