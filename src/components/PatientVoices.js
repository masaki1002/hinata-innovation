import React from 'react'
import './PatientVoices.css'

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
      height: "30rem"
    }



  return (
     <section id="patientvoices">
        <div class="w3-full w3-container w3-padding-64" style={testimony_container} id="team"><br></br>
       <div class="w3-row-padding">
        <h2 class="w3-center"><b>当院患者さんの声</b></h2>
        <p class="w3-center w3-large">治療効果を体感された方々を一部ご紹介</p>
        <div class="w3-border-bottom w3-border-light-grey"></div>


        <div class="w3-row-padding w3-left" style={testimony_subcontainer}>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_small}>
              <h5><b>「寝付きが良くなりました」</b></h5><br></br>
              <p><i>とても気持ちが良いです。治療を受けた日は、夜寝つきが良いです</i></p>
              <p class="w3-opacity">35歳女性 主婦</p>
            </div>
          </div>

          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_small}>
              <h5><b>「首/肩こり/腰痛が改善」</b></h5><br></br>
              <p><i>症状が改善された。親切。健康に関する良いアドバイス等が良い</i></p>
              <p class="w3-opacity">73歳男性 会社役員</p>
            </div>
          </div>

          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_small}>
              <h5><b>「不眠症解消」</b></h5><br></br>
              <p><i>今まで不眠症で悩んでましたが、ひなた治療院に通い始めて朝までぐっすり眠れます。本当にびっくりしました</i></p>
              <p class="w3-opacity">40歳女性</p>
            </div>
          </div>

          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_small}>
              <h5><b>「手足が楽に」</b></h5><br></br>
              <p><i>マッサージを受けた後は両足がとても楽になります。先生の人柄も素晴らしいです</i></p>
              <p class="w3-opacity">65歳女性</p>
            </div>
          </div>

          <div class="w3-col l4 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_medium}>
              <h5><b>「疲労回復とリフレッシュに」</b></h5><br></br>
              <p><i>相談しやすい先生で親切にやって頂いていつもお世話になってます。個人的にはもっとあちらこちらに刺してもらった方が心地良いですが、方針もあると思うので全部任せっきりです。疲労の回復とリフレッシュにすごく役立たせて頂いてます</i></p>
              <p class="w3-opacity">37歳男性 歯科医師</p>
            </div>
          </div>

          <div class="w3-col l4 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_medium}>
              <h5><b>「信頼しています」</b></h5><br></br>
              <p><i>首から肩、背中にかけての痛みから通院するようになりましたが、これまでのケガや病歴も踏まえて治療して下さり信頼しています。新たにかなりひどい冷え症であることもわかり、自分以上に体のことにも申告以上にきちんと見てくださっており、これからも継続して治療したいと思っています</i></p>
              <p class="w3-opacity">31歳女性 公務員</p>
            </div>
          </div>

          <div class="w3-col l4 m6 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_medium}>
              <h5><b>「的確なアドバイス」</b></h5><br></br>
              <p><i>針による治療はとても効果があるのにまだまだ認知されていないのが残念です。花粉症に今年初めてなりかけたのに症状がひどくならずにすみました。自分自身の生活習慣を詳しく聞かれ、PCなどの利用が多くて症状が出ていることを指摘されました。根本から治すためのアドバイスをして下さったのはこちらが初めてでした</i></p>
              <p class="w3-opacity">53歳女性 主婦</p>
            </div>
          </div>

          <div class="w3-col l6 m12 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_large}>
              <h5><b>「逆子が治りました」</b></h5><br></br>
              <p><i>妊娠27週・29週と逆子であったため、このままだといけないと思い、お灸に行きました。初めての訪問でしたが、あたたかい雰囲気で、アンケートを記入した後、お灸をしてもらいました。
              腰にお灸をしてもらったところ、お灸の最中から中でモニョっと動きがあり、反応しているのかなと思いました。お灸は熱くなく、じんわり暖かかったです。その後、冷やしているとあまり良くない
              とのことで、下半身を温めるようにアドバイスを頂きました。お灸の後、以前はむくんでいた足もすっきり、むくみも取れたのでびっくり。もちろん、5日後の妊婦健診のエコーで逆子が治っていました。
              逆子治療のために行きましたが、ついでに冷えやむくみも改善されてとても良かったです
                </i></p>
              <p class="w3-opacity">38歳女性 金融事務</p>
            </div>
          </div>

           <div class="w3-col l6 m12 w3-margin-bottom">
            <div class="w3-panel w3-leftbar w3-light-grey w3-padding-16" style={card_size_large}>
              <h5><b>「激痛がなくなりました」</b></h5><br></br>
              <p><i>突然足に激痛が走り歩行困難になりました。安静にしていても痛みが収まらず、意を決して自分で救急車を呼び総合病院へ搬送されました。総合病院に到着後も激痛は続きましたが、先生からは「すぐに治りますよ」と言われ、治療はされずに帰宅することに。激痛で泣きそうになりながら、家に帰りました。
              帰宅後も痛みが止まらないのでこれはマズイと考え、知り合い経由でひなた治療院に相談して直ぐに伺いました。ひなた治療院の女性の先生が足の痛みについて丁寧に質問してくださり、最適な治療メニューをその場で提案して頂きました。治療を受けている最中から痛みが弱まってきているのを感じ、驚きました。先生の丁寧な治療とアドバイスのお陰で3回の通院後に痛みは完全に消えました!
                </i></p>
              <p class="w3-opacity">42歳男性 ITコンサル</p>
            </div>
          </div>
        <p class="w3-left">※効果を実感した個人の感想です</p>
    </div>

  

        


        
    </div>    
</div>
    </section>
  )
}

export default PatientVoices