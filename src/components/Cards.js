import React from 'react'
import CardItem from './CardItem'
import "./Cards.css";


function Cards() {
    return (
        <div className="cards">
        <h1>Check these out!</h1>
        <div className="cards_container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem className="cards__item"
                    src="images/strength-training.jpg" 
                    text="Strength Training" 
                    label="Workout"/>
                    
                    <CardItem className="cards__item"
                    src="images/calisthenics.jpg" 
                    text="Calisthenics Guide" 
                    label="Workout"/>

                    <CardItem className="cards__item"
                    src="images/home-workout.jpg" 
                    text="Home Workouts" 
                    label="Workout"/>
                </ul>
                <ul className="cards__items">
                <CardItem className="cards__item"
                    src="images/veg-diet.jpg" 
                    text="Vegeterian Diet" 
                    label="Nutrition"/>
                    <CardItem className="cards__item"
                    src="images/nonveg-diet.jpg" 
                    text="Non-Vegetarian" 
                    label="Nutrition"/>
                </ul>
            </div>
        </div>

    
            
        </div>
    )
}


export default Cards
