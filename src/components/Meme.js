import React from "react";
import memesData from "../memesData";

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState();

    function showImgURL() {
        var item = Math.floor(Math.random()*memesData.data.memes.length);
        setMemeImage(pervState => memesData.data.memes[item].url)
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
            <img className="meme--image" src={memeImage} />
        </main>
    )
}