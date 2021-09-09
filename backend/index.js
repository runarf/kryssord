import express from "express";
import fetch from "node-fetch";
import jsdom from "jsdom";
import cors from "cors";
const app = express();
app.use(cors());
// heroku logs --tail
// git subtree push --prefix backend heroku master
const port = process.env.PORT; // 5000;

app.get("/:word", async (req, res) => {
  console.log(`Request for ${req.params.word}`);
  const body = await fetch(
    `https://www.gratiskryssord.no/kryssordbok/${req.params.word}/`
  ).then((res) => res.text());
  const dom = new jsdom.JSDOM(body).window.document;
  const staticPage = dom.querySelector(`#staticPage`);

  if (staticPage == null) {
    res.send([]);
    return;
  }
  const wordsArray = Array.from(
    staticPage.querySelectorAll("section").values()
  );
  const words2 = wordsArray.map((word) => {
    const countLetters = word
      .querySelector("h2")
      .textContent.trim()
      .replace(" bokstaver", "");
    const wordList = word.querySelectorAll("li");
    const wors = Array.from(wordList).map((word) => {
      return word.textContent.trim();
    });

    return { countLetters, words: wors };
  });
  res.send(words2);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
