import "./App.css";
import { useState, useEffect } from "react";
import Image from "./Components/Image/Image";
import Form from "./Components/Form/Form";
import axios from "axios";

function App() {
  const [gifURL, getGifURL] = useState("");
  const gaKey = "1vLYyRUfrWa2giqKBPQzmWjqkhHx91oK";

  //random GIF call that returns embeded URL
  const randomGif = async () => {
    const randomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${gaKey}`;
    const randomGifRet = await axios.get(randomGifUrl);
    getGifURL(randomGifRet.data.data.images.original.url);
  };
  useEffect(() => {
    randomGif();
  }, []);

  // search function by using API
const searchSubmit = async (text) => {
  const searchGifUrl = `https://api.giphy.com/v1/gifs/search?api_key=${gaKey}&q=${text.current.value}`;
  console.log('search ok')
    const searchGifRet = await axios.get(searchGifUrl);
    getGifURL(searchGifRet.data.data[0].images.original.url);
};  


  return (
    <div className="App">
      <h1>YX's GIPHY Clone</h1>
      <Form submitFn={searchSubmit}/>
      <Image gifURL={gifURL} />
      <p>bottom</p>
    </div>
  );
}

export default App;
