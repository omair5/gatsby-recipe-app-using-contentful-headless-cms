import React from 'react';
import { contentGrid } from './Hero.module.css'
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from '@mui/styles';
import MyButton from '../FrequentlyUsed/MyButton';

const useStyles = makeStyles({
    mainContainer: {
        minHeight: '100vh',
        marginTop: '-80px',
        width: '100%',
        position: 'relative',
    },
});

const HeroSection = () => {
    const classes = useStyles();
    return (
        <>
            <StaticImage
                src="../../Assets/Images/hero.png"
                alt="recipe app hero "
                placeholder="blurred"
                // imgClassName={classes.img}
                className={classes.mainContainer}
                objectFit={'fill'}
            />
            <div className={contentGrid}>
                <h1>SIMPLY RECIPES</h1>
                <h1>NO FLUFF , JUST RECIPES</h1>
                <h2>Lets Start Cooking With Popular Recipes</h2>
                <MyButton content='Explore Recipes' />
            </div>
        </>
    );
}
export default HeroSection;