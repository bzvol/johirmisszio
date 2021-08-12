import React from "react"
import "./BizTetelek.css"
import alairasImg from "./alairas.png"

export default function BizTetelek() {
  const biztTitles: string[] = [
    "A kezdet/Üdvösségem napja",
    "Az első utazás Afrikába / Miért nem látogatsz el Gánába?",
    "Eljöttem, hogy megmutassam nektek, Isten él",
    "Ifjú korom / Meg vagy váltva? / Harc a bűnnel",
    "Valóban üdvösséget akarok kapni",
    "Béke / Uram, elfogadsz engem, haszontalan embert?",
    "Növekedve békességben, távolabb a világtól / Misszionárius iskola",
    "Távozó diákok / A misszionárius és családja velünk éheztek",
    "Isten döntésre vezette a szívemet / Pénzmentes missziós út",
    "Marlon Baker misszionárius / Kays Glass misszionárius",
    "Melyik utat válasszam? / Az Ige, amely újjáéleszti a lelkemet",
    "Lelki nehézségek / Kételkedés az üdvösségben",
    "Együttműködés más misszionáriusokkal",
    "Első misszió: Apgok-dong / Két krumpli",
    "Tanúságtétel vásári napokon",
    "Egyedül Apsilban, Apgokdongban",
    "Apsilban/Sohn testvérnő",
    "Egy nagyon különös könyv",
    "Kíméletlen bűnözők",
    "Miközben a hideg padlón térdeltem",
    "Ha nem mész el, megölünk!",
    "Young Mok Hwang testvér",
    "Isten átöleli a szívemet",
    "Isten az Ő akaratában tartja az életemet",
    "Azóta sem változtál meg?",
    "Ock Soo, hogyan változtak jobbá a körülményeid?",
    "Bevonulás",
    "Korábban én is ilyen ember voltam"
  ]

  return (
    <div className={"pad-1 textpagetemplate"}>
      <div className={"title"}>Bizonyságtételek</div>
      <p><i>„Újjászületésem előtt bármit is tettem, semmi sem sikerült. De miután újjászülettem, egyetlen alkalom¬mal
          sem szenvedtem vereséget.”
      </i></p>

      <div className={"ta-r mb-1"}>
        <img src={alairasImg} alt={"Ock Soo Park aláírása"} className={"w10"}/>
      </div>

      <div className={"bt-list"}>
        {biztTitles.map((biztTitle, biztIdx) => (
          <a
            className={"bizt-box"}
            href={`${process.env.PUBLIC_URL}/pdf/bizonysagtetelek/${biztIdx + 1}.pdf`}
            rel={"noreferrer"}
            target={"_blank"}
            key={`bizt_box_${biztIdx + 1}`}
          >
            <div className={"bizt-idx"}>{biztIdx + 1}.</div>
            <div>{biztTitle}</div>
          </a>
        ))}
      </div>

    </div>
  )
}