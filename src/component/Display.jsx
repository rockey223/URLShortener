// import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Display() {
  const [shortURL, setShortURL] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;
  const [text, setText] = useState("");

  function fetchData() {
    axios

      .post(apiUrl, {
        token: apiKey,
        url: text,
        ttl: 600,
      })

      .then((res) => {
        // console.log(res);
        setShortURL(res.data.link_url);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="App">
      <h1>Hello User</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={fetchData}>Send</button>
      <h2>{shortURL}</h2>
    </div>
  );
}
