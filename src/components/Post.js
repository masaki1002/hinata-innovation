import React, { useEffect, useRef }  from 'react'
import './Post.css'
import { Link } from 'react-router-dom'
import placeholder from "../images/placeholder-image.jpg"


const Post = () => {

  return (
     <section id="post">
      
        <div class="w3-container w3-paper w3-padding-64">
          <div class="w3-row-padding">
          <br></br>
          <div class="w3-col l7">
          <h6>季節の便り 2025/9/2</h6>
          <h4><b>免疫力をアップさせて猛暑に勝ちましょう！</b></h4><br></br>
          <p class="w3-medium">
          毎日ジメジメして過ごしにくい日々が続きますね。
          ついイライラしてしまいますよね。針やお灸にはリラックス効果があります。治療を受けて心と身体をゆっくり休めませんか？
          具体的には###というツボに細い針を刺すと###という神経が刺激され、リラックスできる状態になります。この時期は人気の治療なので、ぜひお早めにお試しください！          
          <br></br><br></br>
          (一般的に人が読んでくれるブログの長さは500〜2000文字くらいと言われている)
          </p>
          <br></br>
           <Link to="/moreposts" class="w3-button w3-round-xxlarge w3-teal w3-padding-large w3-margin-top  w3-hover-opacity-off past-posts">過去の便りを見る</Link>
        </div>
      
        <div class="w3-col l5">
          <br></br>
          <img class="w3-image w3-round-large w3-grayscale-min " src={placeholder} alt="post_image"></img>
      
      </div>
      
          
    </div>


      

    

          
        </div>
        
    </section>
  )
}

export default Post