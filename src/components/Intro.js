import React from 'react'
import './Intro.css'
import placeholder from "../images/placeholder-image.jpg"
import windowdecoration from "../images/shonandai_hinata_window_decoration.jpg"
import laying from "../images/shonandai_hinata_interior_laying.jpg"
import shonandai_hinata_waitingroom from "../images/shonandai_hinata_waitingroom.jpeg"
import shonandai_hinata_counter from "../images/shonandai_hinata_counter.jpeg"
import shonandai_hinata_okiyu from "../images/shonandai_hinata_okiyu.jpeg"
import shonandai_hianta_bed from "../images/shonandai_hianta_bed.jpeg"
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';



const Intro = () => {

   const intro_container = {
    padding: "16px 0px 0px 0px"
  }

  const intro_paragraph = {
    padding: "20px 0px 0px"
  }

    const {t} = useTranslation();
  

  return (
    <section id="intro">
         <div class="w3-full w3-container w3-padding-64"><br></br>
      <div class="w3-row-padding">
         <div class="w3-center" style={intro_container}>
          <h2><b>{t('hinataClinic')}</b></h2>
          <div class="w3-border-bottom w3-border-light-grey"></div>
          <div class="w3-left-align" style={intro_paragraph}>
          <h5 class="intro-subtitle">{t('hinataIntro')}<br></br>{t('hinataIntro2')}</h5><br></br>
          <p class="w3-medium">
          {t('hinataIntroParagraph')}
         <br></br><br></br>
          {t('hinataIntroParagraph2')}
          <br></br><br></br><br></br>
          <i>{t('hinataIntroParagraph3')}</i><br></br>
          <i>{t('hinataIntroParagraph4')}</i><br></br><br></br><br></br>
          {t('hinataIntroParagraph5')}
          <br></br><br></br>
          {t('hinataIntroParagraph6')} 
          </p>

          </div>
        </div>
      </div>
  </div>
 <div class="w3-container">
      <div class="w3-row-padding">
          <div class="row">
    <div class="column">
      <img class="w3-image w3-round-large w3-grayscale-min " src={shonandai_hinata_waitingroom} alt="post_image"></img>
      <img class="w3-image w3-round-large w3-grayscale-min " src={shonandai_hianta_bed} alt="post_image"></img>
      <img class="w3-image w3-round-large w3-grayscale-min " src={laying} alt="post_image"></img>
    </div>
     <div class="column">
      <img class="w3-image w3-round-large w3-grayscale-min " src={shonandai_hinata_counter} alt="post_image"></img>
      <img class="w3-image w3-round-large w3-grayscale-min " src={shonandai_hinata_okiyu} alt="post_image"></img>
      <img class="w3-image w3-round-large w3-grayscale-min " src={windowdecoration} alt="post_image"></img>
    </div>
  </div>

        {/* <div class="w3-col m6">
            <img class="w3-image w3-round-large w3-grayscale-min " src={windowdecoration} alt="post_image"></img>
        </div>
        <div class="w3-col m6">
            <img class="w3-image w3-round-large w3-grayscale-min" src={laying} alt="post_image"></img>
        </div> */}
        </div>
</div>
<br></br>

    <div class="w3-container w3-row w3-center w3-teal w3-padding-64">
      <div class="w3-quarter w3-padding-16">
        <span class="w3-xxlarge">19年目</span>
        <br></br>湘南台で開業
      </div>
      <div class="w3-quarter w3-padding-16">
        <span class="w3-xxlarge">30,000人+</span>
        <br></br>のべ患者数
     </div>
      <div class="w3-quarter w3-padding-16">
        <span class="w3-xxlarge">95%+</span>
        <br></br>治療満足度
      </div>
    <div class="w3-quarter w3-padding-16">
        <span class="w3-xxlarge">95%+</span>
        <br></br>リピート率
    </div>
  </div>

    </section>
  
  )
}

export default Intro