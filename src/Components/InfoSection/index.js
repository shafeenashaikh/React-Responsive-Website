import React from 'react';
import {Button} from '../ButtonElements';
// import svg1 from '../../Images/svg1.svg';
import {
         Img, 
         ImgWrap, 
         InfoContainer,
         InfoWrapper,
         InfoRow,
         Column1,
         Column2,
         TextWrapper,
         TopLine,
         Heading,
         SubTitle,
         BtnWrap,
        
} from './InfoElements';


function InfoSection({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    darkText,
    headline,
    description,
    buttonLable,
    alt,
    primary,
    dark,
    dark2,
    img
}) {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrap>
                                    <Button to="home"
                                       smooth={true}
                                       duration={500}
                                       spy={true}
                                       exact="true"
                                       offset={-80}
                                       primary={primary ? 1 : 0}
                                       dark={dark ? 1 : 0}
                                       dark2={dark2 ? 1 : 0}
                                    >{buttonLable}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
