import React, {useState} from 'react'
import { Button, Container } from '../ButtonElement'
import { Modal } from '../Modal';
import { GlobalStyle } from '../globalStyles';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements';

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    alt,
    primary,
    dark,
    dark2,
    img,
    link,
    link1
}) => {

    
    const[showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)

    }

    const handleClick = () => {
        if (id == 'about'){
            window.open(link1);

        } else{
            window.open(link);
        }
      };

  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText ={darkText}>{description}</Subtitle>
                        <BtnWrap>
                        <Button 
                            smooth ={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary ={primary ? 1 : 0}
                            dark = {dark ? 1 : 0}
                            dark2 = {dark2 ? 1: 0}
                            onClick={handleClick}
                            >{buttonLabel}
                        </Button>                        
                        </BtnWrap>                
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection
