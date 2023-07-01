import React from "react";
import TextPageTemplate from "../TextPageTemplate";
import kikvagyunkimg from "./KikVagyunk.jpg"

export default function KikVagyunk() {
  return (
    <TextPageTemplate
      title={"Kik vagyunk"}
      paragraphs={[
        "A Charles Studd (D.L Moody és Hudson Taylor munkatársa) által alapított WEC International szervezet, melyet az Egyetemisták Evangéliumi Mozgalmának úttörőjeként tartottak számon –1956-ban Dél-Koreába küldte Kays Glass misszionáriust. Glass és a vele együtt munkálkodó misszionáriusok missziós iskolát alapítottak Dél-Koreában. Az elsők közül került ki Park Ock Soo lelkész Úr, aki 1972-ben megalapította a Good News Mission-t. Miután a külföldről érkezett misszionáriusok 1975-ben a visszatértek hazájukba, Park lelkész urat bízták meg a misszió vezetésével, amely 1976 óta az ő vezetése alatt áll. Koreában jelenleg 178 gyülekezet folytatja a missziós tevékenységét és napjainkig mintegy 214 misszionáriust küldött ki a világ 80 országába. Megalapította a Mahanaim Bibliai főiskolát, amelynek keretében koreai és más nemzetiségű misszionáriusok képzését és nevelését végzi. A Jó Hír Misszió Koreában és világszerte több mint 760 gyülekezet megalapítójának vallhatja magát.",
        "A Jó Hír Misszió bibliai szemináriumok, nyári és téli lelki gyakorlatok, valamint az egyetemisták részére szervezett táborok által hirdeti az Evangéliumot Koreában és világszerte. A missziós tevékenységhez csatlakozva, több mint 30 országban került már sor az NGO megalapítására is, melynek keretében különböző kulturális programok, akadémiák, önismereti tréningek kerülnek megrendezésre, valamint zajlik a fiatalok továbbképzése és a fiatal vezetők kinevelése.",
        "A Jó Hír Misszió bibliai szemináriumok, nyári és téli lelki gyakorlatok, valamint az egyetemisták részére szervezett táborok által hirdeti az Evangéliumot Koreában és világszerte. A missziós tevékenységhez csatlakozva, több mint 30 országban került már sor az NGO megalapítására is, melynek keretében különböző kulturális programok, akadémiák, önismereti tréningek kerülnek megrendezésre, valamint zajlik a fiatalok továbbképzése és a fiatal vezetők kinevelése.",
        "A jelenlegi állás szerint a Jó Hír Misszió globális jelenlétének statisztikai mutatói a következők:",
        "– 180 gyülekezet Korea szerte",
        "– 600 gyülekezet világszerte (ebből 182 gyülekezetet koreai misszionáriusok alapítottak)",
        "– 220 misszionárius delegálása Koreából",
        "– mintegy 500 lelkész delegálása nemzetközi gyülekezeteink által",
        "– 2002 óta a mai napig, 5500 fő önkéntes egyetemista kiküldése 1 éves szolgálatra",
        "– 40 Mahanaim Bibliai főiskola megalapítása világszerte"
      ]}
      id={"kikvagyunk"}
      img={
        (<img src={kikvagyunkimg} alt={"Kik vagyunk"} />)
      }
      imgAlign={"right"}
      imgWidth={25}
    />
  )
}