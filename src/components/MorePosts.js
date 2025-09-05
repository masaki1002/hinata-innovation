import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Navbar, Nav }  from 'react-bootstrap'
import hinata_logo_image from "../images/hinata_logo.jpg"
import { Link } from 'react-router-dom'

const MorePosts = () => {
  return (
    <section id="moreposts">
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
            <Link to="/">トップに戻る</Link>
          

           </Nav>

         </Navbar.Collapse>


         {/* <Link to="/">home</Link> */}

      </Container>


      </Navbar>

      <div>Coming soon</div>
     





    </div>



    
    </section>
  )
}

export default MorePosts