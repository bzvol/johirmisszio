import React from "react";
import TextPageTemplate from "../TextPageTemplate";
import poslImg from "./ParkOckSooLelkesz.jpg"

export default function ParkOckSooLelkesz() {
  return (
    <TextPageTemplate
      title={"Park Ock Soo lelkész"}
      paragraphs={[
        "“Mielőtt újjászülettem volna, mindenben elbuktam, de miután bűnbocsánatot kaptam a bűneim felett, az Úr Örömhíre felé fordult szívem, az Úr egyedüli, kizárólagosan becses lehetőségeket kínált nekem, hogy elmondjam a jó hírt, az Ő örömhírét a megváltásról.” – Park Ock Soo lelkész",
        "Park Ock Soo lelkész a “Jó Hír Misszió” megalapítója, egy olyan független, babtista misszióé, melyet az Örömhír, a Gospel hírdetésének szenteltek a megváltásról, egészen a világ végezetéig.",
        "Mióta Park lelkész elnyerte a bűnbocsánat és megváltás örök ajándékát, szívébe fogadta azt l962-ben, Isten útját egy Örömhír -Gospel felé vezette, immár 49 éve. Megalapította a Jó Hír Missziót, és az egyházak alapításának csodálatos és értékes munkáját is elvégezte, mint ahogy hittérítők- misszionáriusok képzéséről is gondoskodik immár hosszú évek óta. Napjainkban mintegy 350 Jó Hír Misszió gyülekezet működik szerte a Földön. Mindegyik csoport annak szenteli életét és álmait, hogy a Jó hírt- a Gospelt eljuttassa minden emberhez.",
        "A lelkész úr által megjelentetett, leírt szolgálatok, igehírdetések emberek ezreit érnek el szerte a földön- leginkább “A bűnbocsánat és az Újjászületés titka” c. könyvén át, melyet a hit, a remény hat át. Szintén működik a “Jó hír-lap” is, mely a legnagyobb keresztény lappá vált Koreában, és “A Jó Hír” folyóirat is, mely külföldön is megjelenik.",
        "A lelkész úr nemzetközi rádióadásokban is részt vesz- “Tanítás a Teremtésről” című sorozat révén, írott munkái a New York Times és a Los Angeles Times hasábjain jelennek meg.",
        "2001-ben a Park Lelkész úr megalakította az International Youth Fellowship (IYF)- a “Fiatalok Nemzetközi Szövetsége” nevű szervezetet, egy közhasznú, nemzetközi csoportot, mely a fiatalok nevelésére, és a szellemi életük kimunkálására helyezi a hangsúlyt. Többféle elképzeléssel, programmal (IYF Világtalálkozó /World Camp/, “Jó Hír Üdvhadsereg”, “IYF egészségügyi Önkéntes”) az IYF szinte mindenütt a világban ott van, ahol szükség lehet a “Jó Hír”-re, és a fiataloknak reményt kell nyújtani.",
        "Park lelkész úr jelenleg a Jó Hír Misszió Gangnam Gyülekezetében szolgál a Dél-Koreai Köztársaságban.",
      ]}
      id={"posl"}
      img={
        (<img src={poslImg} alt={"Park Ock Soo lelkész"} />)
      }
      imgAlign={"left"}
      imgWidth={15}
    >
      <p style={{
        marginBottom: ".5rem"
      }}>Profil:</p>
      <ul>
        <li>A “Jó Hír Misszió” megalapítója</li>
        <li>38 köny szerzője, azok között a “Who are you who is dragging me?” és “A bűnbocsánat és újjászületés titka”</li>
        <li>A New York Times és a Los Angeles Times rovatvezetője</li>
        <li>A Mahanaim Keresztény Iskola alapítója New York-ban</li>
        <li>Az IYF megalapítója</li>
        <li>A Good News Corps tengerentúli keresztény önkéntes program megalapítója</li>
        <li>A Lincoln House School megalapítója</li>
        <li>A Mongol Nemzeti Egyetem bölcsészeti díszdoktora</li>
        <li>A “The Daily Sport” napilag “Új Hitbéli Vezető” díjának kitüntetettje</li>
        <li>A “Hankook Ilbo” “Új Koreai Nagydíj” kitüntetetje -2005-ben</li>
        <li>2005-ös “The Korean Times” hírlap “Koreai Nagydíj”-ának birtokosa</li>
        <li>A Koreai Hadsereg hivatalos vallásügyi szóvivője</li>
      </ul>
    </TextPageTemplate>
  )
}