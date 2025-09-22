import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'
import placeholder from "../images/placeholder-image.jpg"
import outside from "../images/shonandai_hinata_outside02.jpg";
import { useTranslation } from 'react-i18next';


const Post = () => {

  const {t} = useTranslation();

  return (
     <section id="post">
      
        <div class="w3-container w3-paper w3-padding-64">
          <div class="w3-row-padding">
          <br></br>
          <div class="w3-col l8 m8 s12">
          <h6>{t('seasonalLetterIntro')}</h6>
          <h4><b>{t('seasonalLetterIntro2')}</b></h4><br></br>
          <p class="w3-medium">
          {t('seasonalLetterParagraph')}
          <br></br><br></br>
          {t('seasonalLetterParagraph2')}
          <br></br><br></br>
          {t('seasonalLetterParagraph3')}
          <br></br><br></br>
          {t('seasonalLetterParagraph4')}
          <br></br><br></br>
          {t('seasonalLetterParagraph5')}
          <br></br><br></br>
          {t('seasonalLetterParagraph6')}
          <br></br><br></br>
          {t('seasonalLetterParagraph7')}
          <br></br><br></br>
          {t('seasonalLetterParagraph8')}
          <br></br><br></br>
          {t('seasonalLetterParagraph9')}
          </p>
           <Link to="/moreposts" class="w3-button w3-round-xxlarge w3-teal w3-padding-large w3-margin-top  w3-hover-opacity-off past-posts">{t('seasonalLetterButton')}</Link>
        </div>
      
        <div class="w3-col l4 m4 s12">
          <br></br>
          <img class="w3-image w3-grayscale-min w3-round-large" src={outside} alt="post_image"></img>
      
      </div>
      
          
    </div>


      

    

          
        </div>
        
    </section>
  )
}

export default Post