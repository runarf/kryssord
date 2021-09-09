import { useState } from "react";
import { Input } from "antd";

function App() {
  const [wordsByCountLetters, setWordsByCountLetters] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHtml = async (word) => {
    if (word.length === 0) {
      return;
    }
    // const encodedWord encodeURIComponent(word)
    setLoading(true);
    const html = await fetch(`http://localhost:5000/${word}`).then((res) =>
      res.json()
    );
    window.history.replaceState({}, word, word);
    setLoading(false);
    setWordsByCountLetters(html);
  };
  return (
    <div
      style={{
        width: "120%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "300px" }}>
          <Input.Search
            onFocus={(event) => event.target.select()}
            allowClear
            loading={loading}
            size="large"
            enterButton="Search"
            onSearch={(value) => fetchHtml(value)}
            onPressEnter={(event) => {
              event.target.select();
              fetchHtml(event.target.value);
            }}
          />
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "4px" }}
      >
        {wordsByCountLetters.map(({ words, countLetters }) => {
          return (
            <div key={countLetters} style={{ padding: "4px" }}>
              <div>
                <div>{countLetters} </div>
              </div>
              <div>
                <div>
                  {words.map((word) => (
                    <div>{word}</div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
