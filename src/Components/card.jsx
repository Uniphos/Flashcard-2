import React, { useState } from "react";
import "./card.css";

function Card() {
  const questions=([
    {quest : "Start", photo: "" },
    {quest: "what pokemon was created first?", photo: <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0b3d1204-c7aa-4194-bcf0-3287392c92e8/d2y702a-21f0e923-8c62-4f2b-93b7-bb0ce86cdbcf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBiM2QxMjA0LWM3YWEtNDE5NC1iY2YwLTMyODczOTJjOTJlOFwvZDJ5NzAyYS0yMWYwZTkyMy04YzYyLTRmMmItOTNiNy1iYjBjZTg2Y2RiY2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wrW6pGQHfZzlCVmz3zklg25jpQ936nlg0Y4CWQ2rG-M" alt="bulbasaur" />},
    {quest: "Whos that pokemon?", photo: <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/633.png" alt="bulbasaur" />},
    {quest: "what are the only 2 typings that are weak to itself?"},
    {quest: "What is the what is the highest base power move in Pokemon?", photo: <img src="https://www.serebii.net/itemdex/sprites/sv/tm144.png" />},
    {quest: "who is the box art legendary in Pokemon Platinum?", photo: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pokemon_Platinum_Version_logo.png/640px-Pokemon_Platinum_Version_logo.png" alt="giratina" />},
    {quest: "what is the only type that resists ghost?", photo: <img src="https://pixelmonmod.com/w/images/9/98/GhostType.png" />},
    {quest: "whos that pokemon?", photo: <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/605.png" alt="elgyem" />},
    {quest: "What type of item makes you use one move at a time in battle?"},
    {quest: "what fully evolved pokemon has the lowest base stat total?"},
    {quest: "whos that pokemon?", photo: <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/798.png" alt="kartana" />},
  ]);

  const answers = ([
    {ans: "press next to continue", photo: ""},
    {ans: "Rhydon ", photo: <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png" alt="ryhorn" />},
    {ans: "It's a Deino", photo: <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/633.png" alt="deino" />},
    {ans: "Ghost and Dragon type", photo: ""},
    {ans: "Explosion", photo: <img src="https://i.redd.it/lu5dy79rg4m11.png" />},
    {ans: "Giratina", photo: <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/487.png" alt="giratina" />},
    {ans: "Dark type", photo: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/1200px-Pok%C3%A9mon_Dark_Type_Icon.svg.png" />},
    {ans: "It's a Elgyem", photo: <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/605.png" alt="elgyem" />},
    {ans: "these are called choice items", photo: <img src="https://www.serebii.net/itemdex/sprites/sv/choicescarf.png" />},
    {ans: "wishiwashi", photo: <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/746.png" alt="wishiwashi" />},
    {ans: "It's a Kartana", photo: <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/798.png" alt="kartana" />},
  ]);

  const [isActive, setIsActive] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleNext = () => {
    let newIndex = Math.floor(Math.random() * (questions.length - 1)) + 1;
    setRandomIndex(newIndex);
    
    setIsActive(false);
  };

  return (
    <div className="card">
      <h5>Number of questions: {questions.length - 1}</h5>
      <button className={isActive ? "cButton-active" : "cButton"} onClick={handleClick}>
        <div>
          {isActive ?  answers[randomIndex].ans : questions[randomIndex].quest}
          <br />
          {isActive ? answers[randomIndex].photo : questions[randomIndex].photo}
        </div>
      </button>
      <div className="container">
        <button className="aButton" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Card;