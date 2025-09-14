import React from 'react'
import './Members.css'
import misuzu_image from "../images/misuzu.JPG"
import junichi_image from "../images/junichi.JPG"

const Members = () => {

   const intro_container = {
    padding: "16px 0px 0px 0px"
  }

  const intro_paragraph = {
    padding: "20px 0px 0px"
  }

 
  return (
    <section id="members">
       <div class="w3-container w3-paper w3-padding-64"><br></br>
        <div class="w3-row-padding">
          <div class="w3-center" style={intro_container}>
            <h2><b>当院の鍼灸師</b></h2>
            <p class="w3-center w3-large">先ずはお気軽にご相談ください</p>   
          </div>
         <div class="w3-border-bottom w3-border-light-grey"></div>
         <div class="w3-row-padding" style={intro_paragraph}>
          <div class="w3-col l2 m12 s12">
            <img class="w3-image w3-round-large w3-grayscale-min" src={misuzu_image} alt="misuzu oeda"></img><br></br><br></br>
          </div>
          <div class="w3-col l10 m12 s12">
            <p class="member_name"><b>代表: 大江田美鈴</b><br></br>鍼師・灸師・あん摩マッサージ指圧師 <br></br>MLAJリンパドレナージセラピスト<br></br>認定心理士</p>
            <p class="member_intro">子育てが一段落したのを機に鍼灸の専門学校に通い、はり師・きゅう師・あん摩マッサージ指圧師の国家資格を取得。その後、長男とともに「ひなた治療院」を開業。学び続ける姿勢を大切にし、2024年には認定心理士の資格も取得。頭のツボや反応点を使い全身治療をおこなう高度な『頭鍼法』を習得。身体だけでなく、心の面からもアプローチする施術は多くの方から高い評価を得ている
            <br></br><br></br>
            8人の孫に手作りご飯を振舞うのが何よりの楽しみにしている
            <br></br>
            趣味は発酵食品、映画鑑賞と旅行
            </p>    
          </div>
        </div>
      <br></br><br></br>
        <div class="w3-row-padding">
          <div class="w3-col l2 m12 s12">
            <img class="w3-image w3-round-large w3-grayscale-min" src={junichi_image} alt="junichi oeda"></img><br></br><br></br>
          </div>  
          <div class="w3-col l10 m12 s12">
            <p class="member_name"><b>院長:大江田淳一</b><br></br>鍼師・灸師・あん摩マッサージ指圧師 </p>
            <p class="member_intro">学生時代はバスケットボール一筋で、高校ではチームとして全国大会に出場。しかし、自らのケガを経験したことで鍼灸の世界に興味を持ち、治療のみならず、アスリートの視点でケガの予防や身体のメンテナンスの大切さを深く追求し現在もその学びと実践を続けている。医学の先進国であるアメリカで考案され、日本では習得者が少なく世界でも類を見ない『即効性無痛治療』を習得。患者さんの身体の悩み解消/メンテナンスに寄与している
            <br></br><br></br>
            二人の娘の父
            <br></br>
            趣味は食べる事、キャンプ、スノーボード
            </p>    
          </div>
        </div>
        <br></br>

        <div class="w3-left-align">
        <ul>
            <li>施術者が不在の日もあるので指名制度は取り入れておりません</li>
            <li>一人の患者様を一人の施術者が対応するのではなく、施術者の色々な視点や特技を生かして患者様の治療を展開したいと考えていますが、毎回同じ施術者をご希望の場合は、その旨をお伝えくだされば対応致します</li>
        </ul>
    
      </div>

      








      </div>
 
        






      
      
      



      
      </div>

    </section>
   
  )
}

export default Members