import "./App.css";
import { useState, useEffect } from "react";
import Image from "./Components/Image/Image";
import axios from "axios";

function App() {
  const [gifURL, getGifURL] = useState("");
  const gaKey = "1vLYyRUfrWa2giqKBPQzmWjqkhHx91oK";
  const randomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${gaKey}`;

  //random GIF call that returns embeded URL
  const randomGif = async () => {
    const randomGifRet = await axios.get(randomGifUrl);
    getGifURL(randomGifRet.data.data.images.original.url);
  };
  useEffect(() => {
    randomGif();
  }, []);

  return (
    <div className="App">
      <h1>YX's GIPHY Clone</h1>
      <Image gifURL={gifURL} />
      <p>bottom</p>
    </div>
  );
}

export default App;
