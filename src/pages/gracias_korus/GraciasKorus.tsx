import React from "react"
import "./GraciasKorus.css"
import images from "./images"
import pointerImg from "../../assets/pointer.png"

export default function GraciasKorus() {
  return (
    <div className={"textpagetemplate pad-1"}>
      <a
        href={"https://graciaschoir.com/"}
        target={"_blank"}
        rel={"noreferrer"}
        className={"tpt-air"}
        style={{display:"inline-block"}}
      >
        <div className={"gradient-img-border gk-img link-img"}>
          <img src={images.logo} alt={"Gracias Kórus logó"}/>
          <img src={pointerImg} alt={"pointer"} className={"pointer-on-img"}/>
        </div>
      </a>
      <div className={"title"}>Gracias Kórus</div>

      <p className={"no-margin"}><i>„Pál apostol dicséreteket énekelt a Fülöp-szigeteki börtönben. A házasságtörő asszony hálás volt, mert Jézus
        megmentette a haláltól. A 38 éve betegen fekvő ember és a Gyönyörű Kapunál meggyógyult sánta szintén örömmel
        dicsérte az Urat.</i></p>
      <p className={"no-margin"}><i>Sajnos nem voltunk ott, hogy halljuk az Úrnak énekelt dicséreteiket, de ma, a Gracias kóruson keresztül az ő
        hangjukat is hallhatjuk.</i></p>
      <p className={"no-margin"}><i>Isten kegyelméből a kórus minden egyes tagja bűnbocsánatot kapott, így megmenekült a pusztulástól. Hálával
        őrzik a szívükben ezt az üdvösséget, akárcsak a házasságtörő asszony vagy a meggyógyult sánta.</i></p>
      <p className={"no-margin"}><i>A Bibliában ugyan látjuk Isten munkáját, de nem halljuk a dicséreteket, ezért Isten a Gracias kórusnak adta
        ezeket a nem hallható hangokat, hogy általuk hallhassuk őket.</i></p>
      <p className={"no-margin"}><i>Manapság sok kórus énekel dicséreteket, de nem sokan vannak, akik szívükből becsülik Isten kegyelmét. Isten
        megengedi, hogy halljuk azokat a dicséreteket, amelyeket Isten szolgái hallottak előttünk. Ezért nagyon hálás
        vagyok.”</i></p>
      <p className={"ta-r mb-1p4"}>(részlet Ock Soo Park lelkész prédikációjából)</p>

      <p>Gracias spanyolul azt jelenti, hogy köszönöm. A Gracias kórus zenéje különleges erővel cseng az emberek
        szívében. Ennek oka az, hogy a kórus minden tagja – szívében az Istentől kapott hálával énekel.</p>
      <div className={"gradient-img-border tpt-ail gk-img"}><img src={images.kep1} alt={"Gracias Kórus"}/></div>
      <p>A Gracias kórus 2000-ben alakult. Fennállása óta arra törekszik, hogy méltóképpen interpretálja a klasszikus
        zenét, tiszta érzelmeket közvetítsen, részt vállaljon az oktatásban és a klasszikus zene nemzetközi közösségének
        részévé váljon.</p>
      <div className={"gradient-img-border tpt-air gk-img"}><img src={images.kep2} alt={"Gracias Kórus"}/></div>
      <p>Abban a hitben, hogy a zene megváltoztatja az emberek szívét, a Gracias kórus az elmúlt 20 évben több mint
        200 alkalommal lépett fel számos országban, világhírű helyszíneken, elnökök, királyok előtt, valamint
        nyomornegyedekben és elszegényedett városrészekben. A Gracias kórus vigaszt és reményt ad az emberek
        szívébe.</p>
      <div className={"gradient-img-border tpt-ail gk-img"}><img src={images.kep3} alt={"Gracias Kórus"}/></div>
      <p>A Gracias kórus világhírű kórussá nőtte ki magát. 2009 -ben megnyerte a Jeju Nemzetközi Kórusversenyt, majd
        öt jelentős nemzetközi kórusversenyen vett részt Európában. A Gracias kórus elnyerte a Grand Prix díjat a 13.
        Riva Del Garda nemzetközi kórusversenyen Olaszországban, az 1. díjat és a közönségdíjat az 50. Montreux -i
        nemzetközi kórusversenyen Svájcban, és elnyerte a fődíjat és a különdíjat a németországi Marktoberdorf
        Nemzetközi Kórusversenyen.</p>
      <div className={"gradient-img-border tpt-air gk-img"}><img src={images.kep4} alt={"Gracias Kórus"}/></div>
      <p>A Gracias kórus a világ legjobb kórusává vált.</p>

      <div className={"vaspred-title"} style={{display:"inline-block",marginRight:"1rem",marginBottom:".5rem"}}>
        <a href={"https://youtu.be/cVwFkRG_NZY"} target={"_blank"} rel={"noreferrer"}><b>Húsvéti koncert 2021</b></a>
      </div>
      <div className={"vaspred-title"} style={{display:"inline-block"}}>
        <a href={"https://youtu.be/2UxUDByeovc"} target={"_blank"} rel={"noreferrer"}><b>Karácsonyi koncert 2020</b></a>
      </div>

    </div>
  )
}