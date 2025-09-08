import React from 'react'
import './Intro.css'
import placeholder from "../images/placeholder-image.jpg"
import windowdecoration from "../images/shonandai_hinata_window_decoration.jpg"
import laying from "../images/shonandai_hinata_interior_laying.jpg"
import shonandai_hinata_waitingroom from "../images/shonandai_hinata_waitingroom.jpeg"
import shonandai_hinata_counter from "../images/shonandai_hinata_counter.jpeg"
import shonandai_hinata_okiyu from "../images/shonandai_hinata_okiyu.jpeg"
import shonandai_hianta_bed from "../images/shonandai_hianta_bed.jpeg"








const Intro = () => {

   const intro_container = {
    padding: "16px 0px 0px 0px"
  }

  const intro_paragraph = {
    padding: "20px 0px 0px"
  }



  return (
    <section id="intro">
         <div class="w3-full w3-container w3-padding-64"><br></br>
      <div class="w3-row-padding">
         <div class="w3-center" style={intro_container}>
          <h2><b>ひなた治療院</b></h2>
          <div class="w3-border-bottom w3-border-light-grey"></div>
          <div class="w3-left-align" style={intro_paragraph}>
          <h5 class="intro-subtitle">日常を少し離れて、心と身体を整える時間を!<br></br>湘南台の隠れ家 鍼灸マッサージサロン</h5><br></br>
          <p class="w3-medium">
          忙しい毎日、気づかないうちに疲れやストレスをためこんでいませんか？湘南台駅近くにある「ひなた治療院」は、鍼灸とマッサージの力で、心と身体のバランスをやさしく整える、女性にも人気の治療院です。
          肩こりや腰痛、自律神経の乱れ、年齢による体調の変化——<br></br><br></br>
          病院に行くほどではないけれど、ずっと気になっている小さな不調。そんな“なんとなくの不調”こそ、丁寧に向き合うことで、日常が大きく変わります。<br></br><br></br><br></br>
          <i>「藤沢市で信頼できる鍼灸院を探している」</i><br></br>
          <i>「湘南台でリラックスできるマッサージを受けたい」</i><br></br><br></br><br></br>
          そんな方々に選ばれ続け、幅広い年代の患者さまにご来院いただいております。
          「ひなた」のような温かな空間で、一人ひとりのお悩みに合わせたオーダーメイドの施術をご提供します。治療でありながら、リラックスや癒しも感じていただける時間になるはずです。
          完全予約制・静かなプライベート空間で、安心してご相談いただけます。<br></br><br></br>
          湘南台・藤沢エリアで、質の高い鍼灸マッサージをお探しの方に、ぜひお越しいただきたい治療院です。  
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