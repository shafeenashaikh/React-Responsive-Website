import React from 'react';
import {Button} from '../ButtonElements';
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
         BtnWrap
} from './InfoElements';


function InfoSection({lightBg,id,imgStart,topLine,ligthText,darkText,headline,description,buttonLabel,img,alt}) {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading ligthText={ligthText}>{headline}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrap>
                                    <Button to="home">{buttonLabel}</Button>
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
