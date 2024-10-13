const url = "https://api.quotable.io/random";
const newBtn = document.getElementById("new-btn");
const tweet = document.getElementById("tweet");

async function apiFetching() {
  const response = await fetch(url);
  const data = await response.json();

  const quote = data.content;
  const author = data.author;
  document.querySelector("blockquote").innerHTML = quote;
  document.querySelector("span").innerHTML = author;
}

newBtn.addEventListener("click", () => {
  apiFetching();
});

tweet.addEventListener("click", () => {
  const quoteText = document.querySelector("blockquote").innerHTML;
  const quoteAuthor = document.querySelector("span").innerHTML;
  const tweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quoteText}" - ${quoteAuthor}`
  )}`;
  window.open(tweetLink, "Tweet", "width=600,height=300");
});

apiFetching();
