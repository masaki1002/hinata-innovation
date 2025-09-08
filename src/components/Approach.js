import React,  { useEffect, useRef }  from 'react'
import './Approach.css'
import placeholder from "../images/placeholder-image.jpg"
import shonandai_hinata_okyu_patient from "../images/shonandai_hinata_okyu_patient.jpeg"
import shonandai_hinata_needle_patient from "../images/shonandai_hinata_needle_patient.jpeg"
import shonandai_hinata_okyu_video from "../images/shonandai_hinata_okyu.mp4"
import shonanda_hinata_senko_video from "../images/shonanda_hinata_senko.mov"
import shonandai_hinata_needle_patient_movie from "../images/shonandai_hinata_needle_patient_movie.mov"





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

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

   useEffect(() => {
    attemptPlay();
  }, []);


  return (
    <section id="approach">

      <div class="w3-full w3-container w3-white w3-padding-64"><br></br>
         <div class="w3-row-padding letter_spacing">
          <div class="w3-center" style={intro_container}>
          <h2><b>当院の施術アプローチ</b></h2>
          <p class="w3-center w3-large w3-border-bottom w3-border-light-grey w3-padding-16">「対症療法から根本療法へ。痛みや不調を薬で抑えるよりも体質改善が重要」</p>
          <div class="w3-container w3-padding-64" style={hinata_characteristics} id="about">
          <div class="w3-row-padding w3-center">
            <div class="w3-third">
              <i class="fa fa-check-square-o w3-margin-bottom w3-jumbo" style={icon_color}></i>
              <p class="w3-large"><b>免疫力向上を最重視</b></p>
              <p>頭の反応点から全身を整えて<section id="break">疲労回復と身体をメンテナンス</section></p>
              
            </div>
            <div class="w3-third">
              <i class="fa fa-check-square-o w3-margin-bottom w3-jumbo" style={icon_color}></i>
              <p class="w3-large"><b>即効性・無痛治療を導入</b></p>
              <p>予防医学の先進国アメリカで<section id="break">体系化され国内で希少性の高い技術を導入</section></p>
            </div>
            <div class="w3-third">
              <i class="fa fa-check-square-o w3-margin-bottom w3-jumbo w3-center" style={icon_color}></i>
              <p class="w3-large"><b>安心/安全を大切に</b></p>
              <p>厳選された国産使い捨て針と<section id="break">抗菌タオルを100%使用</section></p>
            </div>
          </div>
        </div>
       

          <div class="w3-left-align" style={approach_paragraph}>
            <p class="w3-medium">
            私たちの身体は、「日々の生活や仕事、ストレス、加齢などによって、少しずつ疲労やゆがみが蓄積されています」。痛みや不調として表れるのは、その「蓄積」が限界に近づいたサインです。
            鍼灸は、そうした不調の根本にアプローチし、身体が本来持っている自然治癒力を引き出す治療法です。ただし、身体は一度の施術ですぐに元通りになるわけではなく、少しずつバランスを整えていくことが必要です。
            <br></br>
            <br></br>
             <div class="w3-container">
              <div class="w3-row-padding">
                <div class="w3-col m6">
                  <img class="w3-image w3-round-large w3-grayscale-min " src={shonandai_hinata_okyu_patient} alt="post_image"></img>
                </div>
              <div class="w3-col m6">
                  <img class="w3-image w3-round-large w3-grayscale-min" src={shonandai_hinata_needle_patient} alt="post_image"></img>
              </div>
              </div>
            </div><br></br>
            そのため、継続的な通院によって体調の変化を見守りながら、無理のないペースで「整えていく」ことが、症状の改善と再発予防につながります。
            たとえば、車や歯の定期点検と同じように、私たちの身体にも「メンテナンス」が必要です。不調が出てから慌てて対処するのではなく、日頃から整えておくことで、大きなトラブルを防ぐことができます。
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
                    ref={videoEl}
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
                    ref={videoEl}
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
            鍼灸は、単に症状を取り除くだけではなく、心身のバランスを整え、疲れにくく回復しやすい身体づくりをサポートします。ご自身の身体を大切にするための“習慣”として、定期的なメンテナンスをぜひ取り入れてみてください。
            私たちは、患者様がご自身の体としっかり向き合い、より良い生活を送っていただくためのサポートをしていきたいと考えています。無理なく、でも着実に、身体の変化を感じていただけるよう一緒に取り組んでいきましょう。
            </p>
          </div>
        </div>
        
 

         </div>
        
        
        
      </div>


        
    </section>
  )
}

export default Approach