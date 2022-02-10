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
        var item = Math.floor(Math.random()*memesData.data.memes.length);
        setMeme(pervState => ({
            ...pervState,
            randomImage:memesData.data.memes[item].url
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input" />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input" />
                <button
                    className="form--button"
                    onClick={showImgURL}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img className="meme--image" src={meme.randomImage} />
        </main>
    )
}