import React from 'react';
import { mainContainer, center, copyright } from './Footer.module.css'
import Grid from '@mui/material/Grid';

const Footer = () => {
    return (
        <div className={mainContainer}>
            <Grid container spacing={3}>

                <Grid item xs={12} lg={3} className={center}>
                    <h1>RECIPE<span>APP</span></h1>
                </Grid>

                <Grid item xs={12} lg={3} className={center}>
                    <p>
                        Thank you for stopping by! We provide a variety of foods & beverages recipes with high taste from famous chefs.
                        we love to share wholesome and delicious recipes,
                        perfect for home cooked family meals.
                    </p>
                </Grid>

                <Grid item xs={6} lg={3} className={center}>
                    <h3>About</h3>
                    <h3>Recipes</h3>
                    <h3>Tags</h3>
                    <h3>Contact</h3>
                </Grid>
                <Grid item xs={6} lg={3} className={center}>
                    <h3>Instagram</h3>
                    <h3>Youtube</h3>
                    <h3>Facebook</h3>
                    <h3>Twitter</h3>
                </Grid>

            </Grid>
            <h4 className={copyright}>© 2021 RecipeApp Built With Gatsby & Contentful</h4>
        </div>
    );
}

export default Footer;