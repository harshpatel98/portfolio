import React,{useState, useEffect} from 'react';
import{ FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import{
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'



const Navbar = ({toggle}) => {

    const[scrollNav, setScrollNav] = useState(false);

    const changeNav = () =>{
        if(window.scrollY >= 80 ){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const handleClick = () => {
        window.open("https://www.linkedin.com/in/harsh-patel-271527150/");
      };

      const toggleHome = () =>{
          scroll.scrollToTop();
      }
  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/'onClick={toggleHome}>Harsh</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'
                        smooth = {true} duration ={500} 
                        spy={true}
                        exact ='true'
                        offset={-90}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'
                        smooth = {true} duration ={500} 
                        spy={true}
                        exact ='true'
                        offset={-90}
                        >Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'
                        smooth = {true} duration ={500} 
                        spy={true}
                        exact ='true'
                        offset={-90}
                        >Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='sourceCode'
                        smooth = {true} duration ={500} 
                        spy={true}
                        exact ='true'
                        offset={-90}
                        >Source Code</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/" onClick={handleClick}>LinkedIn</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>

  )
}

export default Navbar;