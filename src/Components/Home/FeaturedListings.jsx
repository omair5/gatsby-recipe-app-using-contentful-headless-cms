import React from 'react';
import { mainContainer, wrapper, contentGrid } from './FeaturedListings.module.css'
import Grid from '@mui/material/Grid';
import RecipeCard from '../FrequentlyUsed/RecipeCard';


const FeaturedListings = () => {
    return (
        <div className={mainContainer}>
            <h1><span>Featured Recipes</span></h1>
            <Grid container className={wrapper}>

                <Grid item xs={12} lg={5} className={contentGrid} >
                    <h2>
                        we have prepared a variety of foods & beverages recipes
                        from famous chefs, with cooking steps & with good taste
                    </h2>
                </Grid>

                <Grid item xs={12} lg={7}  >
                    <Grid container>
                        <Grid item xs={12} md={6} >
                            <RecipeCard />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <RecipeCard />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
}

export default FeaturedListings;