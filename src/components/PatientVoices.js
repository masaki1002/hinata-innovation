import React from 'react'
import './PatientVoices.css'
import { useTranslation } from 'react-i18next';

const PatientVoices = () => {

  const testimony_container = {
     padding: "32px 0px 0px 0px",
    height: "0%"
  }
  
    const testimony_subcontainer = {
      margin: "64px 0px 0px 0px"
    }

    const card_size_small = {
      height: "15rem"
    }

    const card_size_medium = {
      height: "22rem"
    }

    const card_size_large = {
      height: "35rem"
    }

    const {t} = useTranslation();



  return (
     <section id="patientvoices">
        <div class="w3-full w3-container w3-padding-64" style={testimony_container} id="team"><br></br>
       <div class="w3-row-padding">
        <h2 class="w3-center"><b>{t('patientvoicesTitle')}</b></h2>
        <p class="w3-center w3-large">{t('patientvoicesSubTitle')}</p>
        <div class="w3-border-bottom w3-border-light-grey"></div>


        <div class="w3-row-padding w3-left" style={testimony_subcontainer}>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_small}>
              <h5><b>{t('patientvoices1')}</b></h5><br></br>
              <p class="voice-content"><i>{t('patientvoices1_2')}</i></p>
              <p class="w3-opacity voice-content">{t('patientvoices1_3')}</p>
            </div>
          </div>

          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_small}>
              <h5><b>{t('patientvoices2')}</b></h5><br></br>
              <p class="voice-content"><i>{t('patientvoices2_2')}</i></p>
              <p class="w3-opacity voice-content">{t('patientvoices2_3')}</p>
            </div>
          </div>

          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_small}>
              <h5><b>{t('patientvoices3')}</b></h5><br></br>
              <p class="voice-content"><i>{t('patientvoices3_2')}</i></p>
              <p class="w3-opacity voice-content">{t('patientvoices3_3')}</p>
            </div>
          </div>

          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_small}>
              <h5><b>{t('patientvoices4')}</b></h5><br></br>
              <p class="voice-content"><i>{t('patientvoices4_2')}</i></p>
              <p class="w3-opacity voice-content">{t('patientvoices4_3')}</p>
            </div>
          </div>

          <div class="w3-col l4 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_medium}>
              <h5><b>{t('patientvoices5')}</b></h5><br></br>
              <p class="voice-content"><i>{t('patientvoices5_2')}</i></p>
              <p class="w3-opacity voice-content">{t('patientvoices5_3')}</p>
            </div>
          </div>

          <div class="w3-col l4 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_medium}>
              <h5><b>{t('patientvoices6')}</b></h5><br></br>
              <p class="voice-content"><i>{t('patientvoices6_2')}</i></p>
              <p class="w3-opacity voice-content">{t('patientvoices6_3')}</p>
            </div>
          </div>

          <div class="w3-col l4 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_medium}>
              <h5><b>{t('patientvoices7')}</b></h5><br></br>
              <p class="voice-content"><i>{t('patientvoices7_2')}</i></p>
              <p class="w3-opacity voice-content">{t('patientvoices7_3')}</p>
            </div>
          </div>

          <div class="w3-col l6 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_large}>
              <h5><b>{t('patientvoices8')}</b></h5><br></br>
              <p class="voice-content"><i>{t('patientvoices8_2')}</i></p>
              <p class="w3-opacity voice-content">{t('patientvoices8_3')}</p>
            </div>
          </div>

           <div class="w3-col l6 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_large}>
              <h5><b>{t('patientvoices9')}</b></h5><br></br>
              <p class="voice-content"><i>{t('patientvoices9_2')}
                </i></p>
              <p class="w3-opacity voice-content">{t('patientvoices9_3')}</p>
            </div>
          </div>
        <p class="w3-left">{t('patientvoicesDisclaimer')}</p>
    </div>

  

        


        
    </div>    
</div>
    </section>
  )
}

export default PatientVoices