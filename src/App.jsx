import "./App.css";
import { useState, useEffect } from "react";
import Image from "./Components/Image/Image";
import Form from "./Components/Form/Form";
import axios from "axios";


function App() {
  const [gifURL, getGifURL] = useState("");


  //random GIF call that returns embeded URL
  const randomGif = async () => {
    const randomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_SECRET_KEY}`;
    const randomGifRet = await axios.get(randomGifUrl);
    getGifURL(randomGifRet.data.data.images.original.url);
  };
  useEffect(() => {
    randomGif();
  }, []);

  // search function by using API
const searchSubmit = async (text) => {
  const searchGifUrl = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_SECRET_KEY}&q=${text.current.value}`;
  const searchGifRet = await axios.get(searchGifUrl);
    getGifURL(searchGifRet.data.data[Math.floor(Math.random() * 10)].images.original.url);
};  


  return (
    <div className="App">
      <h1>YX's GIPHY Clone</h1>
      <Form submitFn={searchSubmit}/>
      <Image gifURL={gifURL} />
     
    </div>
  );
}

export default App;
