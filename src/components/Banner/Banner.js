import React from 'react';
import Button from '../Button/Button';
import './Banner.css';

function Banner() {
    return (
        <div className="banner-container">
            <video src="./videos/video1.mp4" autoPlay loop muted />

            <div className="banner-content">
                <h1>Adventures Awaits !</h1>
                <p>What are you waiting for ... ?</p>
                <div className="banner-btns">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >
                        GET STARTED
                    </Button>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' >
                        WATCH TRAILER <i className="fas fa-play-circle"></i>
                    </Button>    
                </div>
            </div>
        </div>
    )
}

export default Banner
