import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navigation.css';
import { Container, Navbar, Nav }  from 'react-bootstrap';
import hinata_logo_image from "../images/hinata_logo.jpg";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';



const Navigation = () => {

  const [lang, setLang] = useState('ja');
  const {t, i18n} = useTranslation();

  useEffect (() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);




  return (
    <div class="w3-top">
      <Navbar className="w3-card custom-navbar-bg" expand="lg"sticky="top">
      <Container fluid style={{ minHeight: "3vh"}}>
         <Navbar.Brand href="#">
          <img class="w3-image w3-round-large image-max-width"   style={{ maxWidth: "60%", width: "100px",  margin: "0 auto" }} src={hinata_logo_image} alt="Hinata logo"></img>
          {/* <b>ひなた治療院</b> */}
         </Navbar.Brand>
         

         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end navbar_stylize" style={{ width: "100%" }}>
          {/* <AnchorLink href="#top">トップ</AnchorLink> */}
          <AnchorLink href="#post" class="w3-button w3-hover-opacity-off">{t('seasonalLetter')}</AnchorLink>
          <AnchorLink href="#intro" class="w3-button w3-hover-opacity-off">{t('clinicIntro')}</AnchorLink>
          <AnchorLink href="#approach" class="w3-button w3-hover-opacity-off">{t('approach')}</AnchorLink>
          <AnchorLink href="#menu" class="w3-button w3-hover-opacity-off">{t('menu')}</AnchorLink>
          <AnchorLink href="#patientvoices" class="w3-button w3-hover-opacity-off">{t('voices')}</AnchorLink>
          <AnchorLink href="#accessmap" class="w3-button w3-hover-opacity-off">{t('access')}</AnchorLink>
          

           </Nav>
          <button class="w3-button w3-right w3-teal w3-margin-left" onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}>
           To {lang=== 'en' ? ("日本語") : ("English")}
          </button>

         </Navbar.Collapse>



         {/* <Link to="/">home</Link> */}
        
      


      </Container>




      </Navbar>
     





    </div>
    
      

       

   
  
    
  )
}

export default Navigation