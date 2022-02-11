import React from "react";
import memesData from "../memesData";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function showImgURL() {
        var item = Math.floor(Math.random()*allMemeImages.data.memes.length);
        setMeme(pervState => ({
            ...pervState,
            randomImage: memesData.data.memes[item].url
        }))
    }

    function addMemeText(event) {
        const {value, name} = event.target
        setMeme(prevMemeState => ({
            ...prevMemeState,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input" 
                    value={meme.topText}
                    name="topText"
                    onChange={addMemeText}
                    />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={addMemeText}
                    />
                <button
                    className="form--button"
                    onClick={showImgURL}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage} />
                <h2 className="meme--text top">
                    {meme.topText}
                </h2>
                <h2 className="meme--text bottom">
                    {meme.bottomText}
                </h2>
            </div>
        </main>
    )
}