import React,{useState} from 'react';
import video from '../../Videos/video.mp4';
import { Button } from '../ButtonElements';
import {HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

function HeroSection() {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1> Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign Up for a new account today and recive $250 in 
                    credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default HeroSection
