import memesData from "../source/memesData.js";
import React from "react";

export default function Meme() {
  let url;
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: url
    }));
    const [allMemeImage, setAllImage] = React.useState(memesData);
  }

  return (
    <main>
      <p>{url}</p>
      <div className="form">
        <input
          type="text"
          className="form--input"
          value="Shut up"
          placeholder="Top text"
        />
        <input
          type="text"
          className="form--input"
          value="and take my money"
          placeholder="Bottom text"
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
        <img src={memeImage.randomImage} className="meme--image" />
      </div>
    </main>
  );
}
