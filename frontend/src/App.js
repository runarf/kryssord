import { useRef, useState } from "react";
import { Input } from "antd";

const backendUrl = `https://salty-gorge-71940.herokuapp.com/`; // `http://localhost:5000/`;

function App() {
  const [wordsByCountLetters, setWordsByCountLetters] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef();

  const fetchHtml = async (word) => {
    searchRef.current.input.select();
    if (word.length === 0) {
      return;
    }
    setLoading(true);
    const html = await fetch(`${backendUrl}${word}`).then((res) => res.json());
    window.history.replaceState({}, word, word);
    setLoading(false);
    setWordsByCountLetters(html);
  };
  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: "0",
        }}
      >
        <Input.Search
          ref={searchRef}
          onFocus={(event) => event.target.select()}
          allowClear
          loading={loading}
          size="large"
          enterButton="Search"
          onSearch={(value) => fetchHtml(value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          // justifyContent: "center",
          padding: "4px",
        }}
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
