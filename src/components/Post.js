import React, { useEffect, useRef }  from 'react'
import './Post.css'
import { Link } from 'react-router-dom'
import placeholder from "../images/placeholder-image.jpg"
import outside from "../images/shonandai_hinata_outside02.jpg"


const Post = () => {

  return (
     <section id="post">
      
        <div class="w3-container w3-paper w3-padding-64">
          <div class="w3-row-padding">
          <br></br>
          <div class="w3-col l8 m8 s12">
          <h6>季節の便り 2025/9/##</h6>
          <h4><b>当院のホームページを刷新</b></h4><br></br>
          <p class="w3-medium">
          この度、ひなた治療院のホームページをリニューアルしました。    
          <br></br><br></br>
          湘南台でオープンして19年目。我々の治療法はオープン当初から大きく進歩し続けております。 
          <br></br><br></br>
          様々な辛い症状を緩和、改善していくゴールは常に変わりませんが、いかに鍼の痛み、刺激を少なくし治療を受ける患者さんの負担を軽減することを目標にして日々、技術の向上を目指してここまでやって来ました。       
          <br></br><br></br>
          具体的に申しますと、主に頭のツボや反応点を使って治療する『頭鍼法』、そして全身にあるツボのうち26穴だけを使い、その中から7穴以下で治療する『即効性無痛治療』の二本柱でおこなっております。         
          <br></br><br></br>
          それぞれのアプローチに違いはございますが、身体に優しい鍼灸治療によって人それぞれが持っている自己免疫力を最大限に引き出し、身体の不調を治すだけではなく、体質改善も目的として急性疾患から
          慢性疾患まで幅広く丁寧に対応しています。
          <br></br><br></br>
          治療に使う「はり」は安心と信頼の日本製を使用しています。毛髪と同じ位の細さで、刺入してもほとんど痛みを感じることはありません。
          <br></br><br></br>
          人間の皮膚には痛点(痛みを感じる細胞)が存在します。そこに刺激が加わると多少痛みを感じることがありますが、基本的に当院の治療は当院の患者さんからは「鍼を刺した感じがなくて、無痛だった」(個人差あり)などのお言葉を頂いており、安心して治療を受けて頂けます。
          <br></br><br></br>
          また、治療においては患者さんと当院施術士の信頼関係も重要なポイントとなります。信頼関係があると治療効果を最大限に出すことができると自負しております。
          <br></br><br></br>
          分からないこと、疑問点など何でもご相談ください！
          </p>
           <Link to="/moreposts" class="w3-button w3-round-xxlarge w3-teal w3-padding-large w3-margin-top  w3-hover-opacity-off past-posts">過去の便りを見る</Link>
        </div>
      
        <div class="w3-col l4 m4 s12">
          <br></br>
          <img class="w3-image w3-grayscale-min w3-round-large" src={outside} alt="post_image"></img>
      
      </div>
      
          
    </div>


      

    

          
        </div>
        
    </section>
  )
}

export default Post