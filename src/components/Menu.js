import React, { useState }  from 'react'
import './Menu.css'
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';


const Menu = () => {

  const intro_container = {
    padding: "64px 0px 12px 12px"
  }


  const [show, setShow] = useState(false);
  const [show_2, setShow_2] = useState(false);
  const [show_3, setShow_3] = useState(false);
  const [show_4, setShow_4] = useState(false);
  const [show_5, setShow_5] = useState(false);
  const [show_6, setShow_6] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose_2 = () => setShow_2(false);
  const handleShow_2 = () => setShow_2(true);

  const handleClose_3 = () => setShow_3(false);
  const handleShow_3 = () => setShow_3(true);

  const handleClose_4 = () => setShow_4(false);
  const handleShow_4 = () => setShow_4(true);

  const handleClose_5 = () => setShow_5(false);
  const handleShow_5 = () => setShow_5(true);

  const handleClose_6 = () => setShow_6(false);
  const handleShow_6 = () => setShow_6(true);

  const {t} = useTranslation();




  return (
     <section id="menu">
        <div class="w3-full w3-paper w3-container"><br></br>
        <div class="w3-center" style={intro_container}>
          <h2><b>{t('menuIntro1')}</b></h2>
          <p class="w3-center w3-large">{t('menuIntro2')}</p>
          <div class="w3-border-bottom w3-border-light-grey"></div>
          
          <div class="w3-container w3-center letter_spacing" id="pricing">
            <div class="w3-row-padding">
           
            {/* 針/お灸 */}
            <div class="w3-third w3-section">
              <ul class="w3-ul w3-white w3-hover-shadow">
              <li class="w3-blue-gray w3-large w3-padding-16">{t('hariOkyuTitle')}</li>
                <ul class="w3-ul w3-border w3-center w3-hover-shadow">   
                  <li class="w3-padding-32 w3-left-align price-info">
                    <ul class="w3-ul">
                      <li>
                      {t('hariOkyu1')}<br></br>{t('hariOkyu1-2')}
                      <br></br><br></br>
                      {t('hariOkyu2')}<br></br>{t('hariOkyu2-2')}
                      <br></br><br></br>
                      {t('hariOkyu3')}<br></br>{t('hariOkyu3-2')}
                      </li>
                    </ul>
                  </li>  
                <li class="w3-padding-16 w3-center-align">
                <button class="w3-button w3-teal w3-padding-large" onClick={handleShow}> {t('moreDetails')}</button>
                </li>
              </ul>  
            </ul>
          </div>

          {/* あん摩・指圧・マッサージ */}
          <div class="w3-third w3-section">
            <ul class="w3-ul w3-white w3-hover-shadow">
            <li class="w3-blue-gray w3-large w3-padding-16">{t('annmaShiatsuMassageTitle')}</li>
              <ul class="w3-ul w3-border w3-center w3-hover-shadow">   
                <li class="w3-padding-32 w3-left-align price-info">
                  <ul class="w3-ul">
                    <li>
                    {t('annmaShiatsuMassage1')}<br></br>{t('annmaShiatsuMassage1-2')}
                    <br></br><br></br>
                    <br></br><br></br>
                     <br></br><br></br>
                    <br></br>
                    </li>
                  </ul>
                </li>  
              <li class="w3-padding-16 w3-center-align">
              <button class="w3-button w3-teal w3-padding-large" onClick={handleShow_2}>{t('moreDetails')}</button>
              </li>
            </ul>  
          </ul>
          </div>

          {/* リンパ浮腫治療 */}
          <div class="w3-third w3-section">
            <ul class="w3-ul w3-white w3-hover-shadow">
            <li class="w3-blue-gray w3-large w3-padding-16">{t('limpaTitle')}</li>
              <ul class="w3-ul w3-border w3-center w3-hover-shadow">   
                <li class="w3-padding-32 w3-left-align price-info">
                  <ul class="w3-ul">
                    <li>
                    {t('limpa1')}<br></br>{t('limpa1-2')}
                     <br></br><br></br>
                    {t('limpa2')}<br></br>{t('limpa2-2')} 
                    <br></br><br></br><br></br><br></br>
                    </li>
                  </ul>
                </li>  
              <li class="w3-padding-16 w3-center-align">
              <button class="w3-button w3-teal w3-padding-large" onClick={handleShow_3}>{t('moreDetails')}</button>
              </li>
            </ul>  
          </ul>
          </div>

            {/* ヨモギ蒸し */}
          <div class="w3-third w3-section">
            <ul class="w3-ul w3-white w3-hover-shadow">
            <li class="w3-blue-gray w3-large w3-padding-16">{t('yomogiTitle')}</li>
              <ul class="w3-ul w3-border w3-center w3-hover-shadow">   
                <li class="w3-padding-32 w3-left-align price-info">
                  <ul class="w3-ul">
                    <li>
                    {t('yomogi1')}<br></br>{t('yomogi1-2')}    
                     <br></br>
                    {t('yomogi2')}
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    </li>
                  </ul>
                </li>  
              <li class="w3-padding-16 w3-center-align">
              <button class="w3-button w3-teal w3-padding-large" onClick={handleShow_4}> {t('moreDetails')}</button>
              </li>
            </ul>  
          </ul>
          </div>

             {/* 美顔鍼　 */}
          <div class="w3-third w3-section">
            <ul class="w3-ul w3-white w3-hover-shadow">
            <li class="w3-blue-gray w3-large w3-padding-16"> {t('biyobariTitle')}</li>
              <ul class="w3-ul w3-border w3-center w3-hover-shadow">   
                <li class="w3-padding-32 w3-left-align price-info">
                  <ul class="w3-ul">
                    <li>
                    {t('biyobari1')}<br></br>{t('biyobari1-2')}
                    <br></br><br></br>
                    {t('biyobari2')}<br></br>{t('biyobari2-2')}
                    <br></br><br></br><br></br><br></br>
                    </li>
                  </ul>
                </li>  
              <li class="w3-padding-16 w3-center-align">
              <button class="w3-button w3-teal w3-padding-large" onClick={handleShow_5}>{t('moreDetails')}</button>
              </li>
            </ul>  
          </ul>
          </div>

           {/* 小児鍼 */}
          <div class="w3-third w3-section">
            <ul class="w3-ul w3-white w3-hover-shadow">
            <li class="w3-blue-gray w3-large w3-padding-16">{t('shonibariTitle')}</li>
              <ul class="w3-ul w3-border w3-center w3-hover-shadow">   
                <li class="w3-padding-32 w3-left-align price-info">
                  <ul class="w3-ul">
                    <li>
                    {t('shonibari1')}<br></br>{t('shonibari1-2')}
                    <br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br>
                    </li>
                  </ul>
                </li>  
              <li class="w3-padding-16 w3-center-align">
              <button class="w3-button w3-teal w3-padding-large" onClick={handleShow_6}>{t('moreDetails')}</button>
              </li>
            </ul>  
          </ul>
          </div>
          <br></br>

        <div class="w3-left-align w3-opacity menu-disclaimers">
        <ul>
            <li>{t('menuGeneral1')}</li>
            <li>{t('menuGeneral2')}</li>
            <li>{t('menuGeneral3')}</li>
        </ul>
    
      </div>


     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t('hariOkyuTitle')}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
           <ul class="w3-ul w3-center">  
             <span class="w3-large">{t('contactIfApplied')}</span>     
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">{t('effect')}</span>
                <br></br><br></br>
                <ul class="w3-ul">
                  <li>{t('hariOkyu4')}</li>
                  <li>{t('hariOkyu5')}</li>
                  <li>{t('hariOkyu6')}</li>
                  <li>{t('hariOkyu7')}</li>   
                </ul>
              </li>
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">{t('characteristics')}</span>
                <br></br><br></br>
                {t('hariOkyu8')}
                <br></br><br></br>
                {t('hariOkyu9')}
                <br></br><br></br>
                {t('hariOkyu10')}
              </li>
            </ul>  
          </Modal.Body>
          <Modal.Footer>
            <button class="w3-button w3-teal w3-padding-large" onClick={handleClose}>{t('closeButton')}</button>
          </Modal.Footer>
        </Modal>

      <Modal show={show_2} onHide={handleClose_2}>
        <Modal.Header closeButton>
          <Modal.Title>{t('annmaShiatsuMassageTitle')}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 

          <ul class="w3-ul w3-center">  
             <span class="w3-large">{t('contactIfApplied')}</span>     
          <li class="w3-padding-32 w3-left-align">
           <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">{t('effect')}</span>
           <br></br>
           <br></br>
            <ul class="w3-ul">
              <li>
                {t('annmaShiatsuMassage2')}
              </li>
            </ul>
            </li>
            <li class="w3-padding-32 w3-left-align">
              <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">{t('characteristics')}</span>
              <br></br>
           <br></br>
            {t('annmaShiatsuMassage3')} 
          <br></br>
          <br></br>
          {t('annmaShiatsuMassage4')} 
          <br></br>
          <br></br>
          {t('annmaShiatsuMassage5')}
          <br></br>
          <br></br>
          {t('annmaShiatsuMassage6')} 
            </li>
          </ul>  
          
          </Modal.Body>
        <Modal.Footer>
           <button class="w3-button w3-teal w3-padding-large" onClick={handleClose_2}>{t('closeButton')}</button>
        </Modal.Footer>
      </Modal>

        <Modal show={show_3} onHide={handleClose_3}>
        <Modal.Header closeButton>
          <Modal.Title>{t('limpaTitle')}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
           <ul class="w3-ul w3-center">  
             <span class="w3-large">{t('contactIfApplied')}</span>     
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">{t('effect')}</span>
                <br></br><br></br>
                <ul class="w3-ul">
                  <li>{t('limpa3')}
                  </li>
                </ul>
              </li>
              <li class="w3-padding-32 w3-left-align">
              <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">{t('characteristics')}</span>
              <br></br>
              <br></br>
                {t('limpa4')}            
          <br></br>
          <br></br>
          {t('limpa5')} 
          <br></br>
          {t('limpa6')} 
          <br></br>
          {t('limpa7')} 
          <br></br>
          <br></br>
          {t('limpa8')} 
          <br></br>
          <br></br>          
          {t('limpa9')} 
          <br></br>
          <br></br>
          {t('limpa10')} 
              </li>
            </ul> 
          </Modal.Body>
        <Modal.Footer>
           <button class="w3-button w3-teal w3-padding-large" onClick={handleClose_3}>{t('closeButton')}</button>
        </Modal.Footer>
      </Modal>

       <Modal show={show_4} onHide={handleClose_4}>
        <Modal.Header closeButton>
          <Modal.Title>{t('yomogiTitle')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
          
           <ul class="w3-ul w3-center">  
             <span class="w3-large">{t('contactIfApplied')}</span>     
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">{t('effect')}</span>
                <br></br><br></br>
                <ul class="w3-ul">
                  <li>{t('yomogi3')}</li>
                  <li>{t('yomogi4')}</li> 
                </ul>
              </li>
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">{t('characteristics')}</span>
                <br></br><br></br>
                 {t('yomogi5')}
         <br></br>
          <br></br>
          {t('yomogi6')}
          <br></br>
          <br></br>
          {t('yomogi7')}
              </li>
            </ul> 
          
  
          </Modal.Body>
        <Modal.Footer>
           <button class="w3-button w3-teal w3-padding-large" onClick={handleClose_4}>{t('contactIfApplied')}</button>
        </Modal.Footer>
      </Modal>

      <Modal show={show_5} onHide={handleClose_5}>
        <Modal.Header closeButton>
          <Modal.Title>{t('biyobariTitle')}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          
           <ul class="w3-ul w3-center">  
             <span class="w3-large">{t('contactIfApplied')}</span>     
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">{t('effect')}</span>
                <br></br><br></br>
                <ul class="w3-ul">
                  <li>{t('biyobari3')}</li>
                  <li>{t('biyobari4')}</li>
                  <li>{t('biyobari5')}</li>   
                </ul>
              </li>
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">{t('characteristics')}</span>
                <br></br><br></br>
                {t('biyobari6')}
                
         <br></br>
          <br></br>
          {t('biyobari7')}
          <br></br>
          <br></br>
          {t('biyobari8')}
              </li>
            </ul> 
          </Modal.Body>
        <Modal.Footer>
           <button class="w3-button w3-teal w3-padding-large" onClick={handleClose_5}>{t('closeButton')}</button>
        </Modal.Footer>
      </Modal>


      <Modal show={show_6} onHide={handleClose_6}>
        <Modal.Header closeButton>
          <Modal.Title>{t('shonibariTitle')}</Modal.Title>
        </Modal.Header>            
          
        <Modal.Body>  
          
            <ul class="w3-ul w3-center">  
             <span class="w3-large">{t('contactIfApplied')}</span>     
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">{t('effect')}</span>
                <br></br><br></br>
                <ul class="w3-ul">
                  <li>{t('shonibari2')}</li>
                </ul>
              </li>
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">{t('characteristics')}</span>
                <br></br><br></br>
                {t('shonibari3')}
         <br></br>
          <br></br>
          {t('shonibari4')}
          
          <br></br>
          <br></br>
          {t('shonibari5')}
              </li>
            </ul> 
          
          
          </Modal.Body>
        <Modal.Footer>
           <button class="w3-button w3-teal w3-padding-large" onClick={handleClose_6}>{t('closeButton')}</button>
        </Modal.Footer>
      </Modal>

  </div>
 
</div>

 <div>

    </div>



    


</div>

          
            </div>
    </section>
  )
}

export default Menu