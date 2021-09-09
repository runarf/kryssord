import express from "express";
import fetch from "node-fetch";
import jsdom from "jsdom";
import cors from "cors";
const app = express();
app.use(cors());

const port = 3000;

app.get("/:word", async (req, res) => {
  const body = await fetch(
    `https://www.gratiskryssord.no/kryssordbok/${req.params.word}/`
  ).then((res) => res.text());
  const dom = new jsdom.JSDOM(body).window.document;
  const words = dom
    .querySelector(`#staticPage`)
    .querySelectorAll("section")
    .values();
  const words2 = Array.from(words).map((word) => {
    const countLetters = word
      .querySelector("h2")
      .textContent.trim()
      .replace(" bokstaver", "");
    const wordList = word.querySelectorAll("li");
    const wors = Array.from(wordList).map((word) => {
      return word.textContent.trim();
    });

    return { countLetters, word: wors };
  });
  res.send(words2);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
