import React from 'react'
import './Approach.css'

import Iframe from 'react-iframe'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHouse, faTrain, faPhone, faCalendar } from '@fortawesome/free-solid-svg-icons'

import { useTranslation } from 'react-i18next';


const AccessMap = () => {
  
  const intro_container = {
    padding: "16px 0px 0px 0px"
  }

  const testimony_subcontainer = {
      margin: "20px 0px 0px 0px"
    }

  const {t} = useTranslation();
  

  return (
    <section id="accessmap">

         <div class="w3-full w3-container w3-paper w3-padding-64" style={intro_container}><br></br>
        <div class="w3-row-padding">
          <div class="w3-center" style={intro_container}>
            <h2><b>{t('accessTitle')}</b></h2>
        </div>
        <div class="w3-border-bottom w3-border-light-grey"></div>
      </div>

 <div class="w3-container w3-padding-64" style={testimony_subcontainer}>
  <div class="w3-row-padding">
        <div class="w3-col l5 m12 s12 w3-margin-bottom w3-medium"> 
              <p><FontAwesomeIcon icon={faHouse} /> {t('access1')}</p>
              <p><FontAwesomeIcon icon={faTrain} />  {t('access2')}</p>
              <p><FontAwesomeIcon icon={faPhone} />  <a class="link_removal" href="tel:0466-53-5690" style={{"text-decoration": "none", "color": "black"}}>TEL&FAX：0466-53-5690</a></p>
              <p><FontAwesomeIcon icon={faClock} />  {t('access3')}</p>
              <p><FontAwesomeIcon icon={faCalendar} /> {t('access4')}</p>
        <br></br>
 
      <div class="w3-opacity">
        <ul>
            <li> {t('access5')}</li>
            <li> {t('access6')}</li>
            <li> {t('access7')}</li>
            <li> {t('access8')}</li>
            <li> {t('access9')}</li>
        </ul>
    
      </div>
        </div>
        <div class="w3-col l7 m12 s12">
             <div class="googlemap">
        <Iframe 
          url={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1626.286576856071!2d139.4638406!3d35.3910413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018516ccc7e13bd%3A0xe9e119140ebb24ac!2z44Gy44Gq44Gf5rK755mC6Zmi!5e0!3m2!1sja!2sjp!4v1551619669794"}
          width='100%'
          height='450'
          frameborder="0" 
          allowfullscreen
          >
          
        </Iframe>
      </div>
        </div>
      </div>
  
 </div>
     
     
        
        
       </div>
        
    </section>
  )
}

export default AccessMap