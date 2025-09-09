import React, { useState }  from 'react'
import './Menu.css'
import Modal from 'react-bootstrap/Modal';


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




  return (
     <section id="menu">
        <div class="w3-full w3-paper w3-container"><br></br>
        <div class="w3-center" style={intro_container}>
          <h2><b>治療メニュー</b></h2>
          <p class="w3-center w3-large">ご要望に合わせたご提案をします</p>
          <div class="w3-border-bottom w3-border-light-grey"></div>
          
          <div class="w3-container w3-center letter_spacing" id="pricing">
            <div class="w3-row-padding">
           
            {/* 針/お灸 */}
            <div class="w3-third w3-section">
              <ul class="w3-ul w3-white w3-hover-shadow">
              <li class="w3-blue-gray w3-large w3-padding-16">針/お灸</li>
                <ul class="w3-ul w3-border w3-center w3-hover-shadow">   
                  <li class="w3-padding-32 w3-left-align">
                    <ul class="w3-ul">
                      <li>
                      鍼灸治療: ６，０００円<br></br><br></br>
                      花粉症治療: １０，５００円 (1クール分)<br></br><br></br>
                      逆子治療: ３，５００円
                      </li>
                    </ul>
                  </li>  
                <li class="w3-padding-16 w3-center-align">
                <button class="w3-button w3-teal w3-padding-large" onClick={handleShow}>詳しく見る</button>
                </li>
              </ul>  
            </ul>
          </div>

          {/* あん摩・指圧・マッサージ */}
          <div class="w3-third w3-section">
            <ul class="w3-ul w3-white w3-hover-shadow">
            <li class="w3-blue-gray w3-large w3-padding-16">あん摩/指圧/マッサージ</li>
              <ul class="w3-ul w3-border w3-center w3-hover-shadow">   
                <li class="w3-padding-32 w3-left-align">
                  <ul class="w3-ul">
                    <li>
                    60分: ６，０００円 <br></br><br></br>
                    <br></br><br></br>
                    <br></br>
                    </li>
                  </ul>
                </li>  
              <li class="w3-padding-16 w3-center-align">
              <button class="w3-button w3-teal w3-padding-large" onClick={handleShow_2}>詳しく見る</button>
              </li>
            </ul>  
          </ul>
          </div>

          {/* リンパ浮腫治療 */}
          <div class="w3-third w3-section">
            <ul class="w3-ul w3-white w3-hover-shadow">
            <li class="w3-blue-gray w3-large w3-padding-16">リンパ浮腫治療</li>
              <ul class="w3-ul w3-border w3-center w3-hover-shadow">   
                <li class="w3-padding-32 w3-left-align">
                  <ul class="w3-ul">
                    <li>
                    ６０分: １０，５００円 <br></br><br></br>
                    ９０分: １５，５００円  
                    <br></br><br></br><br></br>
                    </li>
                  </ul>
                </li>  
              <li class="w3-padding-16 w3-center-align">
              <button class="w3-button w3-teal w3-padding-large" onClick={handleShow_3}>詳しく見る</button>
              </li>
            </ul>  
          </ul>
          </div>

            {/* ヨモギ蒸し */}
          <div class="w3-third w3-section">
            <ul class="w3-ul w3-white w3-hover-shadow">
            <li class="w3-blue-gray w3-large w3-padding-16">ヨモギ蒸し</li>
              <ul class="w3-ul w3-border w3-center w3-hover-shadow">   
                <li class="w3-padding-32 w3-left-align">
                  <ul class="w3-ul">
                    <li>
                    ２，５００円 <br></br>
                    鍼/灸/指圧/マッサージ併用は半額
                    <br></br><br></br><br></br><br></br>
                    </li>
                  </ul>
                </li>  
              <li class="w3-padding-16 w3-center-align">
              <button class="w3-button w3-teal w3-padding-large" onClick={handleShow_4}>詳しく見る</button>
              </li>
            </ul>  
          </ul>
          </div>

             {/* 美顔鍼　 */}
          <div class="w3-third w3-section">
            <ul class="w3-ul w3-white w3-hover-shadow">
            <li class="w3-blue-gray w3-large w3-padding-16">美顔鍼</li>
              <ul class="w3-ul w3-border w3-center w3-hover-shadow">   
                <li class="w3-padding-32 w3-left-align">
                  <ul class="w3-ul">
                    <li>
                    美顏 おてがる: ３，５００円<br></br><br></br>
                    美顏 しっかり: ６，０００円
                    <br></br><br></br><br></br>
                    </li>
                  </ul>
                </li>  
              <li class="w3-padding-16 w3-center-align">
              <button class="w3-button w3-teal w3-padding-large" onClick={handleShow_5}>詳しく見る</button>
              </li>
            </ul>  
          </ul>
          </div>

           {/* 小児鍼 */}
          <div class="w3-third w3-section">
            <ul class="w3-ul w3-white w3-hover-shadow">
            <li class="w3-blue-gray w3-large w3-padding-16">小児鍼</li>
              <ul class="w3-ul w3-border w3-center w3-hover-shadow">   
                <li class="w3-padding-32 w3-left-align">
                  <ul class="w3-ul">
                    <li>
                    ３０分: １，５００円<br></br><br></br>
                    <br></br><br></br><br></br>
                    </li>
                  </ul>
                </li>  
              <li class="w3-padding-16 w3-center-align">
              <button class="w3-button w3-teal w3-padding-large" onClick={handleShow_6}>詳しく見る</button>
              </li>
            </ul>  
          </ul>
          </div>

        <div class="w3-left-align">
        <ul>
            <li>初診料/再診料(前回の来院から半年以上経過)として、別途１，５００円(リンパ浮腫は別途２，５００円)を頂戴します</li>
            <li>リンパ浮腫においては「弾性包帯施行料: １，５００円」と「弾性包帯購入費用: ４，４００円〜１６，５００円」が別途発生します</li>
            <li>花粉症治療の効果を出すためには、1クール(３回続けて)の来院をお薦めしております</li>
        </ul>
    
      </div>


    

    


  
  

   

   

     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>針/お灸</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
           <ul class="w3-ul w3-center">  
             <span class="w3-large">下記にお悩みの方はぜひご相談を！</span>     
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">症状/効果</span>
                <br></br><br></br>
                <ul class="w3-ul">
                  <li>腰や手足の痛みが辛い</li>
                  <li>花粉アレルギーのため外出するのが億劫になる</li>
                  <li>(女性の方)病院で逆子と言われた。不安でなんとかしたい等</li>   
                </ul>
              </li>
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">説明/特徴</span>
                <br></br><br></br>
                当院ではディスポーザブル（使い捨て）の鍼を使用しており、衛生管理・消毒などの徹底を 心掛けておりますので、感染症などの心配はありません。
                <br></br><br></br>
                また、鍼の太さは毛髪程度で、注射針の ような痛みを感じる事はほとんどありません。どうしても鍼に抵抗がある方には無理強いしたりする事はしませんので、 安心してご来院下さい。
                <br></br><br></br>
                当院で行なう鍼治療は、身体の表面、主に経穴（ツボ）にあたる部位や反応点 （特定の筋や腱・痛みの強い部位）に鍼を刺入します。
              </li>
            </ul>  
          </Modal.Body>
          <Modal.Footer>
            <button class="w3-button w3-teal w3-padding-large" onClick={handleClose}>閉じる</button>
          </Modal.Footer>
        </Modal>

      <Modal show={show_2} onHide={handleClose_2}>
        <Modal.Header closeButton>
          <Modal.Title>あん摩・指圧・マッサージ</Modal.Title>
        </Modal.Header>
        <Modal.Body> 

          <ul class="w3-ul w3-center">  
             <span class="w3-large">下記にお悩みの方はぜひご相談を！</span>     
          <li class="w3-padding-32 w3-left-align">
           <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">症状/効果</span>
           <br></br>
           <br></br>
            <ul class="w3-ul">
              <li>
                腰や手足の痛みが辛い
              </li>
              <li>
                花粉アレルギーのため外出するのが億劫になる
              </li>
              <li>
                (女性の方)病院で逆子と言われた。不安でなんとかしたい等
              </li>   
            </ul>
            </li>
            <li class="w3-padding-32 w3-left-align">
              <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">説明/特徴</span>
              <br></br>
           <br></br>
            当院では、押す・引く・撫でる・さする・揉む・叩く等といった手技を用いて、個々の症状、体格などに適した刺激量を選んで治療を行なっていきます。 
          <br></br>
          <br></br>
          あん摩・指圧は経穴（ツボ）や経絡（ツボとツボを結ぶ経路）を意識して施術するのに対して、マッサージはリンパや血液の流れ、筋肉の走行に沿って施術を行ないます。 
          <br></br>
          <br></br>
          また、あん摩・指圧は体の中心から抹消に向かって遠心性の刺激を与えるのに対して、マッサージは体の抹消から中心に向かって求心性の刺激を与えていきます。
          いずれの効果も皮膚からの触圧刺激により、直接的にはリンパ管や血管などの循環器系に、間接的には神経系の反射を介して、内臓などに影響を与えます。
          <br></br>
          <br></br>
          それぞれ手技や理論などは違いますが、治療や癒しを目的とする事は共通しています。 あん摩は中国、指圧は日本、マッサージはフランスで生まれた手技療法です。 現在、日本においてあん摩・指圧・マッサージは、1つの国家資格として認められています。 
            </li>
          </ul>  
          
          </Modal.Body>
        <Modal.Footer>
           <button class="w3-button w3-teal w3-padding-large" onClick={handleClose_2}>閉じる</button>
        </Modal.Footer>
      </Modal>

        <Modal show={show_3} onHide={handleClose_3}>
        <Modal.Header closeButton>
          <Modal.Title>リンパ浮腫治療</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
           <ul class="w3-ul w3-center">  
             <span class="w3-large">下記にお悩みの方はぜひご相談を！</span>     
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">症状/効果</span>
                <br></br><br></br>
                <ul class="w3-ul">
                  <li>腰や手足の痛みが辛い</li>
                  <li>花粉アレルギーのため外出するのが億劫になる</li>
                  <li>(女性の方)病院で逆子と言われた。不安でなんとかしたい等</li>   
                </ul>
              </li>
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">説明/特徴</span>
                       <br></br>
           <br></br>
                リンパ浮腫とは体内組織にタンパク質や水分が溜まる状態をいいます。 
          <br></br>
          <br></br>
          原因として
          <br></br>
          ①原発性浮腫:リンパ節やリンパ管の発育不全によるもの
          <br></br>
          ②続発性浮腫:乳ガン・子宮ガン・前立腺ガンなどの手術や放射線治療の後遺症、静脈疾患、寄生虫によるもの
          <br></br>
          <br></br>
          体内組織のリンパの流れが滞るため腕や足がむくみ・だるさ・重さ疲れやすさ・深部痛などを感じます。さらに免疫力が低下するため　炎症を起こしやすくなります。
          むくみは手術後すぐに発症する場合もあれば5年後、10年後に発症する場合もあります。症状はゆっくり進行しますが、適切な治療を受けなかったり、炎症を繰り返すと象皮症にまで進むこともあります。
          <br></br>
          <br></br>          
          むくみを感じたら、早い段階で専門医の診断を受け、専門知識と技術を習得したセラピストによる複合的理学療法を受けることが大切です。
          <br></br>
          <br></br>
          複合的理学療法は「スキンケア」、「医療リンパドレナージ（リンパ液を排液するマッサージ）」、「圧迫療法弾性包帯やスリーブ・ストッキングによる）」、「運動療法」、「セルフケア指導」を指します。
              </li>
            </ul>  
          
          
          
          
          
          </Modal.Body>
        <Modal.Footer>
           <button class="w3-button w3-teal w3-padding-large" onClick={handleClose_3}>閉じる</button>
        </Modal.Footer>
      </Modal>

       <Modal show={show_4} onHide={handleClose_4}>
        <Modal.Header closeButton>
          <Modal.Title>ヨモギ蒸し</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
          
           <ul class="w3-ul w3-center">  
             <span class="w3-large">下記にお悩みの方はぜひご相談を！</span>     
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">症状/効果</span>
                <br></br><br></br>
                <ul class="w3-ul">
                  <li>腰や手足の痛みが辛い</li>
                  <li>花粉アレルギーのため外出するのが億劫になる</li>
                  <li>(女性の方)病院で逆子と言われた。不安でなんとかしたい等</li>   
                </ul>
              </li>
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">説明/特徴</span>
                <br></br><br></br>
                 よもぎにはシネオール他の精油成分が含まれ、温熱効果があり湯冷めをしにくいのです。「よもぎ蒸し」をした後、不思議とほかほか感が持続するのは、この成分が働きかけていることも大きいのです。
         <br></br>
          <br></br>
          また殺菌・消炎作用がある事から肌に大変良く、しっしん、吹き出物、かさつきを抑えます。お灸のもぐさは、よもぎが利用されていますのが、これは腰痛・神経痛に効果的に働きかけると言われているからなのです。
          <br></br>
          <br></br>
          漢方として名高いよもぎ。私達の体には色々な良い作用を示してくれるのです。特に30代～60代後半の女性から大きな反響を頂いております。
              </li>
            </ul> 
          
  
          </Modal.Body>
        <Modal.Footer>
           <button class="w3-button w3-teal w3-padding-large" onClick={handleClose_4}>閉じる</button>
        </Modal.Footer>
      </Modal>

      <Modal show={show_5} onHide={handleClose_5}>
        <Modal.Header closeButton>
          <Modal.Title>美顔鍼</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          
           <ul class="w3-ul w3-center">  
             <span class="w3-large">下記にお悩みの方はぜひご相談を！</span>     
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">症状/効果</span>
                <br></br><br></br>
                <ul class="w3-ul">
                  <li>腰や手足の痛みが辛い</li>
                  <li>花粉アレルギーのため外出するのが億劫になる</li>
                  <li>(女性の方)病院で逆子と言われた。不安でなんとかしたい等</li>   
                </ul>
              </li>
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">説明/特徴</span>
                <br></br><br></br>
                美顔鍼とは顔面・頭皮のツボに鍼を打つことにより皮膚や筋肉に作用し、血液やリンパの流れを促進させ、細胞内の老廃物を排除させ栄養を送り込むことができます。
         <br></br>
          <br></br>
          汗腺や皮脂腺の分泌も調整され、皮膚に潤いと血色、弾力を与え、乾燥肌や顔色のくすみ、シミ、小ジワ、吹き出物等の改善、さらに皮膚のたるみや引き締め効果によりリフトアップ・小顔効果も期待できます。
          <br></br>
          <br></br>
           美顔鍼では極めて細い鍼を使用しますが、顔面の血管は非常に細顔面の血管は非常に細い為、稀に内出血等する場合があります。この事を御了承頂いた上で施術させていただきます。
              </li>
            </ul> 
          </Modal.Body>
        <Modal.Footer>
           <button class="w3-button w3-teal w3-padding-large" onClick={handleClose_5}>閉じる</button>
        </Modal.Footer>
      </Modal>


      <Modal show={show_6} onHide={handleClose_6}>
        <Modal.Header closeButton>
          <Modal.Title>小児鍼</Modal.Title>
        </Modal.Header>            
          
        <Modal.Body>  
          
            <ul class="w3-ul w3-center">  
             <span class="w3-large">下記にお悩みの方はぜひご相談を！</span>     
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">症状/効果</span>
                <br></br><br></br>
                <ul class="w3-ul">
                  <li>腰や手足の痛みが辛い</li>
                  <li>花粉アレルギーのため外出するのが億劫になる</li>
                  <li>(女性の方)病院で逆子と言われた。不安でなんとかしたい等</li>   
                </ul>
              </li>
              <li class="w3-padding-32 w3-left-align">
                <span class="w3-left w3-tag w3-large w3-padding-small w3-teal w3-round">説明/特徴</span>
                <br></br><br></br>
               小児鍼とは先の丸い鍼や平らな形の鍼を使って全身を摩擦したりツボに刺激を与えたりするものです。鍼で皮膚を刺激する事により、内臓や脳の働きが活性化し免疫力を高め、自律神経やホルモンの調整を行います。
         <br></br>
          <br></br>
          疳の虫・夜泣き・キーキー声を出す・よく泣く・不機嫌・噛み付く・夜尿症・風邪を引きやすい・よく熱を出す・ひきつけ・食欲不振・下痢・便秘・よく腹痛を起こす・アレルギー疾患・喘息・扁桃腺炎などの症状に効果があります。
          <br></br>
          <br></br>
          副作用の心配はほとんどありません。(まれに眠くなる場合があります)治療時間は５～１０分です。体質改善には１年以上の継続治療が望ましいです。また、年齢は新生児から治療できます。早い時期に始めるほど高い効果が得られます。
              </li>
            </ul> 
          
          
          </Modal.Body>
        <Modal.Footer>
           <button class="w3-button w3-teal w3-padding-large" onClick={handleClose_6}>閉じる</button>
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