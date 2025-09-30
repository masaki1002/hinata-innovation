import React,  { useEffect, useRef }  from 'react'
import './Approach.css'
import placeholder from "../images/placeholder-image.jpg"
import shonandai_hinata_okyu_patient from "../images/shonandai_hinata_okyu_patient.jpeg"
import shonandai_hinata_needle_patient from "../images/shonandai_hinata_needle_patient.jpeg"
import shonandai_hinata_okyu_video from "../images/shonandai_hinata_okyu.mp4"
import shonanda_hinata_senko_video from "../images/shonanda_hinata_senko.mov"
import shonandai_hinata_needle_patient_movie from "../images/shonandai_hinata_needle_patient_movie.mov"
import { useTranslation } from 'react-i18next';






const Approach = () => {

  const intro_container = {
    padding: "16px 0px 0px 0px"
  }

  const approach_paragraph = {
    padding: "20px 0px 0px"
  }
  const hinata_characteristics = {
    padding: "12px 16px"
  }

  const icon_color = {
    color: "teal"
  }

  const videoEl = useRef(null);
  const videoEl_2 = useRef(null);
  const videoEl_3 = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

    const attemptPlay2 = () => {
    videoEl_2 &&
      videoEl_2.current &&
      videoEl_2.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

    const attemptPlay3 = () => {
    videoEl_3 &&
      videoEl_3.current &&
      videoEl_3.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

   useEffect(() => {
    attemptPlay();
    attemptPlay2();
    attemptPlay3();
  }, []);

  const {t} = useTranslation();


  return (
    <section id="approach">

      <div class="w3-full w3-container w3-white w3-padding-64"><br></br>
         <div class="w3-row-padding letter_spacing">
          <div class="w3-center" style={intro_container}>
          <h2><b>{t('approachTitle')}</b></h2>
          <p class="w3-center w3-large w3-border-bottom w3-border-light-grey w3-padding-16">{t('subTitle')}</p>
          <div class="w3-container w3-padding-64" style={hinata_characteristics} id="about">
          <div class="w3-row-padding w3-center">
            <div class="w3-third">
              <i class="fa fa-check-square-o w3-margin-bottom w3-jumbo" style={icon_color}></i>
              <p class="w3-large"><b>{t('approach1Title')}</b></p>
              <p>{t('approach1Paragraph1')}<section id="break">{t('approach1Paragraph2')}</section></p>
              
            </div>
            <div class="w3-third">
              <i class="fa fa-check-square-o w3-margin-bottom w3-jumbo" style={icon_color}></i>
              <p class="w3-large"><b>{t('approach2Title')}</b></p>
              <p>{t('approach2Paragraph1')}<section id="break">{t('approach2Paragraph2')}</section></p>
            </div>
            <div class="w3-third">
              <i class="fa fa-check-square-o w3-margin-bottom w3-jumbo w3-center" style={icon_color}></i>
              <p class="w3-large"><b>{t('approach3Title')}</b></p>
              <p>{t('approach3Paragraph1')}<section id="break">{t('approach3Paragraph2')}</section></p>
            </div>
          </div>
        </div>


          <div class="w3-left-align" style={approach_paragraph}>
            <p class="w3-medium">
            {t('approachExplanation1')}
            <br></br>
            <br></br>
             <div class="w3-container">
              <div class="w3-row-padding">
             
                <div class="w3-col w3-padding-16 m6">
                  <img class="w3-image w3-round-large w3-grayscale-min " src={shonandai_hinata_okyu_patient} alt="post_image"></img>
                </div>
           
              <div class="w3-col w3-padding-16 m6">
                  <img class="w3-image w3-round-large w3-grayscale-min" src={shonandai_hinata_needle_patient} alt="post_image"></img>
              </div>
              </div>
       
            </div><br></br>
             {t('approachExplanation2')}
            <br></br>
            <br></br>
            <div class="w3-container">
              <div class="w3-row-padding">
                <div class="w3-col l4 m4 s12">
                  <video
                    src={shonanda_hinata_senko_video}
                    style={{ maxWidth: "100%", width: "300px",  margin: "0 auto" }}
                    playsInline
                    loop
                    muted
                    controls
                    alt="All the devices"
                    ref={videoEl_2}
                  />
                </div>
              <div class="w3-col m4">
                   <video
                    src={shonandai_hinata_okyu_video}
                    style={{ maxWidth: "100%", width: "300px",  margin: "0 auto" }}
                    playsInline
                    loop
                    muted
                    controls
                    alt="All the devices"
                    ref={videoEl_3}
                  />
              </div>
               <div class="w3-col m4">
                 <video
                    src={shonandai_hinata_needle_patient_movie}
                    style={{ maxWidth: "100%", width: "300px",  margin: "0 auto" }}
                    playsInline
                    loop
                    muted
                    controls
                    alt="All the devices"
                    ref={videoEl}
                  />
              </div>
              
              </div>
            </div><br></br>
             {t('approachExplanation3')}
            </p>
          </div>
        </div>
        
 

         </div>
        
        
        
      </div>


        
    </section>
  )
}

export default Approach