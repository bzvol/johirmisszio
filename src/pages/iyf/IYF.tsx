import React from "react"
import images from "./images"
import pointerImg from "../../assets/pointer.png"

export default function IYF() {
  return (
    <div className={"textpagetemplate pad-1"}>
      <a
        href={"https://www.iyfhungary.com/"}
        target={"_blank"}
        rel={"noreferrer"}
        className={"tpt-air"}
        style={{display:"inline-block"}}
      >
        <div className={"gradient-img-border w15 link-img"}>
          <img src={images.logo} alt={"Gracias Kórus logó"} style={{padding:".5rem",background:"#fefefe"}}/>
          <img src={pointerImg} alt={"pointer"} className={"pointer-on-img"}/>
        </div>
      </a>
      <div className={"title"}>International Youth Fellowship</div>

      <p><b>Az IYF szívvel-lélekkel neveli a fiatalokat</b></p>
      <p className={"no-margin"}><i>„Minden ember arra vágyik, hogy meglelje az igazi boldogságot. A legtöbben azt
        gondolják, hogy ehhez teljesülniük kell bizonyos feltételeknek, ám azt nem tudják, hogy honnan származik
        az igazi boldogság.</i></p>
      <p className={"no-margin"}><i>Az IYF segítségével megismerhetjük a szív világát. Olyan gondolkodásmódra tehetünk
        szert, amely képes leküzdeni bármilyen nehézséget. Ez akkor jön létre, amikor az ember leküzdi korlátait.
        Az IYF programjain keresztül a szívünk erősebbé válik, és élvezhetjük a tartós boldogságot. Emellett mentorokká
        válhatunk, aki ezt a boldogságot másoknak is továbbadhatják.</i></p>
      <p className={"no-margin"}><i>A jövőben azok a fiatalok fogják vezetni a világot, akik egészséges szívet szereztek
        az IYF -en keresztül. Hiszem, hogy ahol csak megjelennek, ott a boldogság illata árasztják magukból.”</i></p>
      <p className={"ta-r mb-1p4"}>(Moon Taek Park, az IYF elnöke)</p>

      <p><b>Az IYF fény, amely ragyog az ifjúság szívében</b></p>
      <p className={"no-margin"}><i>A fiatalok megpróbálják stílusossá tenni az életüket és egyéniségüket, ez azonban
        nem adhat igazi szabadságot
        vagy békét. A mai fiatalok már rég elkóboroltak a következő generáció irányításához szükséges értékektől és
        társadalmi felelősségvállalástól, pedig ők a mi reménységünk és a jövőnk. Az IYF osztja aggodalmaikat és
        nehézségeiket, és támogatja törekvéseiket. Az IYF az a globális vezetés bölcsője. Ahogy egy csillag csillog a
        sötétségben, úgy ragyog az IYF fiatalsága világszerte.</i></p>
      <p className={"ta-r mb-1p4"}>(Ock Soo Park, az IYF alapítója)</p>

      <div className={"gradient-img-border tpt-air w10"}><img src={images.kep1} alt={"IYF"}/></div>
      <p>Mi az IYF?</p>
      <p>Nemzetközi Ifjúsági Szervezet, egy keresztény alapú, globális ifjúsági szervezet, amelyet 1995-ben hoztak létre
        olyan vezetők, akik felismerték a fiatalok mai problémáit. Megalakulása óta az IYF exponenciálisan növekedett,
        és mára csaknem 80 országban tevékenykedik. Sokan vezető szerepet töltenek be világszerte. Sok nemzeti kormány,
        köztük Paraguay, Peru, Malajzia, Kenya és Ruanda kormányai is felismerték az IYF erejét a fiatalok
        megváltoztatásában, és kérték az IYF útmutatását ifjúságuk nevelésében.</p>

      <div className={"gradient-img-border tpt-ail w10"}><img src={images.kep2} alt={"IYF"}/></div>
      <p>Az IYF alapértékei:</p>
      <p>A Nemzetközi Ifjúsági Szervezet küldetése a következő generáció vezetőinek kinevelése, akik alázattal és erős
        vezetői képességekkel rendelkeznek. Valamint a globális közösség révén kölcsönös együttműködés kialakítása
        annak érdekében, hogy megalapozzanak egy egészséges társadalmat.</p>

      <div className={"gradient-img-border tpt-air w10"}><img src={images.kep3} alt={"IYF"}/></div>
      <p>Az IYF programjai:</p>
      <ul>
        <li>globális oktatás</li>
        <li>szociális szolgáltatások</li>
        <li>nemzetközi diákcsere program</li>
        <li>kulturális programok</li>
      </ul>

    </div>
  )
}