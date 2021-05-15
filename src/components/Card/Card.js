import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function Card() {
    return (
            <div className='cards'>

                <h1>Check out these EPIC Artworks !</h1>

                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            
                            <CardItem
                                animation="zoom-left"
                                delay="0"
                                src="images/img-1.jpg"
                                text="Beautiful sunset in the mountains"
                                label="Western Paintings"
                                path='/services'    
                            />

                            <CardItem
                                animation="zoom-left"
                                delay="250"
                                src='images/img-7.jpg'
                                text="Big ancient battle artwork"
                                label="Fresco Paintings"
                                path='/services' 
                            />

                            <CardItem
                                animation="zoom-left"
                                delay="450"
                                src="images/img-3.jpg"
                                text="Colorful Girl Open Hairs"
                                label="Drawings"
                                path='/services'    
                            />

                        </ul>

                        <ul className='cards__items'>
                            <CardItem
                                animation="zoom-left"
                                delay="0"
                                src="images/img-6.jpg"
                                text="Ancient lady dance artwork"
                                label="Tempera Paintings"
                                path='/services' 
                            />
                            <CardItem
                                animation="zoom-left"
                                delay="250"
                                src='images/img-5.jpg'
                                text="Appealing spring oil painting"
                                label="Oil Paintings"
                                path='/services' 
                            />
                        </ul>

                        <ul className='cards__items'>
                            
                            <CardItem
                                animation="zoom-left"
                                delay="0"
                                src="images/img-4.jpg"
                                text="Asthetic street mural painting"
                                label="Mural Paintings"
                                path='/services' 
                            />
                            <CardItem
                                animation="zoom-left"
                                delay="250"
                                src='images/img-8.jpg'
                                text="Ancient cave artwork"
                                label="Cave Art"
                                path='/services' 
                            />
                            <CardItem
                                animation="zoom-left"
                                delay="450"
                                src="images/img-2.jpg"
                                text="Charming lake view with mountains"
                                label="Chinese Paintings"
                                path='/services'    
                            />
                        </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Card
