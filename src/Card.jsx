import React from "react";
import "./Card.css"

// Card component that contains all pokemon stats in the form of a 'card'.
export default function Card(pokemon){
    return(
        <div className="card-container">
            <div className="card-container-inner">
                <div className="pokemon-card-top">
                    <div className="heading heading-left">
                        <div className="type">Basic</div>
                        <div className="pokemon-name">{pokemon.name}</div>
                    </div>
                    <div className="heading heading-right">
                        <div className="pokemon-hp"><span>HP</span>{pokemon.hp}</div>
                        <div className="pokemon-type">{pokemon.type}</div>
                    </div>
                </div>
                <div className="pokemon-card-middle">
                    <img src={pokemon.img} alt="" className="pokemon-image"/>
                    <div className="pokemon-card-middle-stats">
                        <div className="pokemon-pokedex-num">NO.{pokemon.pokedex}</div>
                        <div className="pokemon-weight">Weight: {pokemon.weight}</div>
                    </div>
                </div>
                <div className="pokemon-card-bottom">
                    <div className="pokemon-card-attack">Attack 1: {pokemon.attack1}</div>
                    <div className="pokemon-card-attack">Attack 2: {pokemon.attack2}</div>
                </div>
            </div>
        </div>
    )
}
