import React from 'react';
import { mainContainer, img, grid, middleGrid } from './ImageGallery.module.css'
import Grid from '@mui/material/Grid';
import MyButton from '../../Components/FrequentlyUsed/MyButton'
import Img from '../../Assets/Images/gallery8.jpg'


const ImageGallery = () => {
    return (
        <div className={mainContainer}>
            <Grid container >

                {/* GRDI 1 */}
                <Grid item xs={12} lg={4} >
                    <Grid container >
                        <Grid item xs={3} lg={6} className={grid}>
                            <img src={Img} alt="gallery" height={'100%'} width={'100%'} />
                        </Grid>
                        <Grid item xs={3} lg={6} className={grid}>
                            <img src={Img} alt="gallery" height={'100%'} width={'100%'} />
                        </Grid>
                        <Grid item xs={3} lg={6} className={grid}>
                            <img src={Img} alt="gallery" height={'100%'} width={'100%'} />
                        </Grid>
                        <Grid item xs={3} lg={6} className={grid}>
                            <img src={Img} alt="gallery" height={'100%'} width={'100%'} />
                        </Grid>
                    </Grid>
                </Grid>

                {/* GRID 2 */}
                <Grid item xs={12} lg={4} className={middleGrid}>
                    <h3>PHOTO GALLERY</h3>
                    <h1>
                        We love the aesthetics of good food.
                    </h1>
                    <MyButton content='Visit Our Instagram' bgcolor='black' />
                </Grid>

                {/* GRID 3 */}
                <Grid item xs={12} lg={4} >
                    <Grid container >
                        <Grid item xs={3} lg={6} className={grid}>
                            <img src={Img} alt="gallery" height={'100%'} width={'100%'} />
                        </Grid>
                        <Grid item xs={3} lg={6} className={grid}>
                            <img src={Img} alt="gallery" height={'100%'} width={'100%'} />
                        </Grid>
                        <Grid item xs={3} lg={6} className={grid}>
                            <img src={Img} alt="gallery" height={'100%'} width={'100%'} />
                        </Grid>
                        <Grid item xs={3} lg={6} className={grid}>
                            <img src={Img} alt="gallery" height={'100%'} width={'100%'} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div >
    );
}

export default ImageGallery;