import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [html, setHtml] = useState("");
  useEffect(() => {
    const fetchHtml = async () => {
      const html = await fetch(
        "https://www.gratiskryssord.no/kryssordbok/asiat/",
        { mode: "cors" }
      ).then((res) => res.body);
      setHtml(html);
    };
    fetchHtml();
  }, []);
  return <div className="App">{html}</div>;
}

export default App;
