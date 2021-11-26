import React from 'react';
import video from '../../Videos/video.mp4'
import {HeroContainer,
    HeroBg,
    VideoBg
} from './HeroElements'

function HeroSection() {
    return (
        <>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
            </HeroBg>
        </HeroContainer>
        </>
    )
}

export default HeroSection
