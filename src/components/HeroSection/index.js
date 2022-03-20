import React, { useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'

import { 
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements'

const HeroSection = () => {
  const[hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  const handleClick = () => {
    window.open("https://harshpatel98.github.io/harshpatel/");
  };

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src=
            {Video} type = 'video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroH1>Harsh Patel</HeroH1>
          <HeroP>Software Engineer</HeroP>
          <HeroBtnWrapper>
            <Button 
              to='resume'
              onClick={handleClick}
              onMouseEnter={onHover} 
              onMouseLeave={onHover}
              primary='true'
              dark='true' 
            >
            Resume {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;