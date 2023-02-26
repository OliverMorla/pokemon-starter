import React from "react";
import Card from "./Card"

export default function Content(){

    function showCard(e){
        
        // Retrieving all pokeballs using 'querySelectors'
        const leftPokeEl = document.querySelector(".card.first")
        const middlePokeEl = document.querySelector(".card.second")
        const rightPokeEl = document.querySelector(".card.third")
        
        // Retrieving CSS variable from the ':root' Selector
        var cardContainerEl = document.querySelector(":root")
       
        // Assigning each pokeball that is clicked into a 'const'
        const myPokeball = e.target;

        // Toggles the card if 'pokeball' element contains the corresponding class
        if(myPokeball.classList.contains("item-left")){
            leftPokeEl.classList.toggle("show")
            middlePokeEl.classList.remove("show")
            rightPokeEl.classList.remove("show")
            cardContainerEl.style.setProperty('--color', '#F15F3E')
        }else if(myPokeball.classList.contains("item-middle")){
            middlePokeEl.classList.toggle("show")
            leftPokeEl.classList.remove("show")
            rightPokeEl.classList.remove("show")
            cardContainerEl.style.setProperty('--color', '#55A3AB')
        }else if(myPokeball.classList.contains("item-right")){
            rightPokeEl.classList.toggle("show")
            leftPokeEl.classList.remove("show")
            middlePokeEl.classList.remove("show")
            cardContainerEl.style.setProperty('--color', '#89C893')
        }
    }

    return(
        <main>
            <div className="pokeball-container">
                <div className="pokeball-shadow"></div>
                <div className="leftPoke">
                    <img src="/pokeball-left.png" alt="" className="pokeball item-left" onClick={showCard}/>
                </div>
                <div className="card first">
                    <Card 
                    name = "Charmander"
                    level = "5"
                    type = "Fire"
                    weight = "8.5Kg"
                    attack1 = "Scratch"
                    attack2 = "Ember"
                    hp = "39"
                    pokedex = "0004"
                    img = "charmander.png" />
                </div>
            </div>
            <div className="pokeball-container">
                <div className="pokeball-shadow"></div>
                <div className="middlePoke">
                    <img src="/pokeball-middle.png" alt="" className="pokeball item-middle" onClick={showCard}/>
                </div>
                <div className="card second">
                    <Card 
                    name = "Squirtle"
                    level = "5"
                    type = "Water" 
                    img = "squirtle.png"
                    weight = "9.0Kg"
                    attack1 = "Tackle"
                    attack2 = "Water Gun"
                    hp = "44"
                    pokedex = "0007"/>
                </div>
            </div>
            <div className="pokeball-container">
                <div className="pokeball-shadow"></div>
                <div className="rightPoke">
                    <img src="/pokeball-right.png" alt="" className="pokeball item-right" onClick={showCard}/>
                </div>
                <div className="card third">
                    <Card 
                    name = "Bulbasaur"
                    level = "5"
                    type = "Grass / Poison " 
                    img = "bulbasaur.png"
                    weight = "6.9Kg"
                    attack1 = "Vine Whip"
                    attack2 = "Grow"
                    hp = "45"
                    pokedex = "0001"/>
                </div>
            </div>
        </main>
    )
}
