import React from 'react';
import Paper from '@mui/material/Paper';
import Img from '../../Assets/Images/gallery8.jpg'
import { paper, ImageContainer, iconWrapper, iconContainer, icon, ButtonContainer } from './RecipeCard.module.css'
import { BiTime } from "react-icons/bi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import MyButton from './MyButton'





const RecipeCard = () => {
    return (
        <>
            <Paper elevation={3} className={paper} >

                <div className={ImageContainer}>
                    <img src={Img} alt="check" height={'100%'} width={'100%'} />
                </div>

                <div className={iconWrapper}>
                    <div className={iconContainer}>
                        <div><BiTime className={icon} /> <span>20</span></div>
                        <h4>Minutes</h4>
                    </div>
                    <div className={iconContainer}>
                        <div><GiFruitBowl className={icon} /> <span>5</span></div>
                        <h4>Ingredients</h4>
                    </div>
                    <div className={iconContainer}>
                        <div><GiForkKnifeSpoon className={icon} /> <span>4-6</span></div>
                        <h4>Servings</h4>
                    </div>
                </div>

                <div className={ButtonContainer}>
                    <MyButton content='View Recipe' />
                </div>
                
            </Paper>
        </>
    );
}

export default RecipeCard;