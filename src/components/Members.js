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
            <img class="w3-image w3-round-large" src={misuzu_image} alt="misuzu oeda"></img><br></br><br></br>
          </div>
          <div class="w3-col l10 m12 s12">
            <p class="member_name"><b>代表: 大江田美鈴</b><br></br>鍼師・灸師・あん摩マッサージ指圧師 <br></br>MLAJリンパドレナージセラピスト臨床心理士</p>
            <p class="member_intro">子育てが一段落したのを機に鍼灸の専門学校に通い、はり師・きゅう師・あん摩マッサージ指圧師の国家資格を取得。その後、長男とともに「ひなた治療院」を開業。学び続ける姿勢を大切にし、2024年には臨床心理士の資格も取得。身体だけでなく、心の面からもアプローチする施術は多くの方から高い評価を得ている
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
            <img class="w3-image w3-round-large" src={junichi_image} alt="misuzu oeda"></img><br></br><br></br>
          </div>  
          <div class="w3-col l10 m12 s12">
            <p class="member_name"><b>院長:大江田淳一</b><br></br>鍼師・灸師・あん摩マッサージ指圧師 <br></br>MLAJリンパドレナージセラピスト臨床心理士</p>
            <p class="member_intro">学生時代はバスケットボール一筋で、高校ではチームとして全国大会に出場。しかし、自らのケガを経験したことで鍼灸の世界に興味を持ち、治療のみならず、アスリートの視点でケガの予防や身体のメンテナンスの大切さを深く追求し現在もその学びと実践を続けている
            <br></br><br></br>
            二人の娘の父
            <br></br>
            趣味は食べる事、キャンプ、スノーボード
            </p>    
          </div>
        </div>

      





      </div>
 
        






      
      
      



      
      </div>

    </section>
   
  )
}

export default Members