import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import "./Cards.css"
import axios from "axios";

export default function Cards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("http://localhost:5000/friendster/cards");

            setPeople(req.data);
        }

        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " +nameToDelete);
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
                        <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
