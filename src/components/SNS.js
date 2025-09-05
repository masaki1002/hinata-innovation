import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Col, Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './SNS.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'




const SNS = () => {

   const instagramNewWindow = () => {
      window.open('https://www.instagram.com/p/DL4RtXrSSCc/', '_blank', 'noopener,noreferrer');
    }

  return (
  <section id="sns">
    <footer class="w3-center w3-white w3-opacity w3-hover-opacity-off">
          <br></br><br></br>
          <p><AnchorLink href="#top" class="w3-button w3-teal"><i class="fa fa-arrow-up w3-margin-right"></i>画面トップへ</AnchorLink></p>
        <p>© 2025 ひなた治療院</p>
  

</footer>
   
     
     
  
        
       






     
    </section>
  )
}

export default SNS




