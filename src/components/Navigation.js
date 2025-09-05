import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navigation.css'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav }  from 'react-bootstrap';
import hinata_logo_image from "../images/hinata_logo.jpg"




const Navigation = () => {
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
          <AnchorLink href="#post" class="w3-button w3-hover-opacity-off">季節の便り</AnchorLink>
          <AnchorLink href="#intro" class="w3-button w3-hover-opacity-off">当院の紹介</AnchorLink>
          <AnchorLink href="#approach" class="w3-button w3-hover-opacity-off">施術アプローチ</AnchorLink>
          <AnchorLink href="#menu" class="w3-button w3-hover-opacity-off">治療メニュー</AnchorLink>
          <AnchorLink href="#patientvoices" class="w3-button w3-hover-opacity-off">患者さんの声</AnchorLink>
          <AnchorLink href="#accessmap" class="w3-button w3-hover-opacity-off">アクセスマップ</AnchorLink>
          

           </Nav>

         </Navbar.Collapse>


         {/* <Link to="/">home</Link> */}
        
      


      </Container>




      </Navbar>
     





    </div>
    
      

       

   
  
    
  )
}

export default Navigation