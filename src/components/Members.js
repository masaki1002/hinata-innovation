import React from 'react'
import './Members.css'
import misuzu_image from "../images/misuzu.JPG"
import junichi_image from "../images/junichi.JPG"
import { useTranslation } from 'react-i18next';

const Members = () => {

   const intro_container = {
    padding: "16px 0px 0px 0px"
  }

  const intro_paragraph = {
    padding: "20px 0px 0px"
  }

  const {t} = useTranslation();

 
  return (
    <section id="members">
       <div class="w3-container w3-paper w3-padding-64"><br></br>
        <div class="w3-row-padding">
          <div class="w3-center" style={intro_container}>
            <h2><b>{t('memberTitle1')}</b></h2>
            <p class="w3-center w3-large">{t('memberTitle2')}</p>   
          </div>
         <div class="w3-border-bottom w3-border-light-grey"></div>
         <div class="w3-row-padding" style={intro_paragraph}>
          <div class="w3-col l2 m12 s12">
            <img class="w3-image w3-round-large w3-grayscale-min" src={misuzu_image} alt="misuzu oeda"></img><br></br><br></br>
          </div>
          <div class="w3-col l10 m12 s12">
            <p class="member_name"><b>{t('member1Intro1')}</b><br></br>{t('member1Intro2')}<br></br>{t('member1Intro3')}<br></br>{t('member1Intro4')}</p>
            <p class="member_intro">{t('member1Intro5')}
            <br></br><br></br>
            {t('member1Intro6')}
            <br></br>
            {t('member1Intro7')}
            </p>    
          </div>
        </div>
      <br></br><br></br>
        <div class="w3-row-padding">
          <div class="w3-col l2 m12 s12">
            <img class="w3-image w3-round-large w3-grayscale-min" src={junichi_image} alt="junichi oeda"></img><br></br><br></br>
          </div>  
          <div class="w3-col l10 m12 s12">
            <p class="member_name"><b>{t('member2Intro1')}</b><br></br>{t('member2Intro2')}<br></br>{t('member1Intro3')} </p>
            <p class="member_intro">{t('member2Intro3')}
            <br></br><br></br>
            {t('member2Intro4')}
            <br></br>
            {t('member2Intro5')}
            </p>    
          </div>
        </div>
        <br></br>

        <div class="w3-left-align">
        <ul>
            <li>{t('memberDisplaimer1')}</li>
            <li>{t('memberDisplaimer2')}</li>
        </ul>
    
      </div>

      








      </div>
 
        






      
      
      



      
      </div>

    </section>
   
  )
}

export default Members