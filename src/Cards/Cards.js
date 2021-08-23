import React, {useState} from 'react'
import TinderCard from 'react-tinder-card';
import "./Cards.css"

export default function Cards() {

    const [people, setPeople] = useState([
        {
            name: "Naruto",
            url: "https://resize.cdn.otakumode.com/ex/700.700/shop/product/033c21499a3a43c0acdc8c18470fab31.jpg",
        },
        {
            name: "Luffy",
            url: "https://c4.wallpaperflare.com/wallpaper/119/612/15/one-piece-monkey-d-luffy-hat-anime-wallpaper-preview.jpg",
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " +nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }

    return (
        <div className="main-cards">
            <div className="mainCards-cardContainer">
                {people.map((person) => (
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div style={{backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
