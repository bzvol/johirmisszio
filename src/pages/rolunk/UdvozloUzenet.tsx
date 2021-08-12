import React from 'react';
import udvozloUzenetImg from "./UdvozloUzenet.jpeg"
import TextPageTemplate from "../TextPageTemplate";

export default function UdvozloUzenet() {
  return (
    <TextPageTemplate
      title={"Üdvözlő üzenet"}
      paragraphs={[
        "A Bibliában láthatjuk, hogy miközben Saul király dárdáját Dávidra szegezi, addig Dávid békésen hárfázik. Noha Saul hitt Istenben, ennek ellenére sosem érezte magát biztonságban, sosem tette le dárdáját a kezéből. Ezzel szemben Dávid akkor is énekelt és hárfázott, amikor tudta, hogy Saul a megölését tervezi. Dávid abban hitt, hogy Isten minden fenyegetésben és nehézségben vele lesz. Hitt benne, hogy Isten még Saul dárdájától is megvédelmezi őt. Dávid nyugalomban énekelt, míg Saul szíve félelemben élt.",
        "Akik Istennel élnek, bármilyen nehézséggel nézzenek is szembe, ideértve a bűneiket is, nyugodtan élhetnek, mert Isten az, aki mindezeket megoldja. Ám akik nem ismerik az igazi hitéletet, azok minden nehézséget a saját erejükkel igyekeznek megoldani, ezért mély szomorúságban, fájdalomban és félelemben élnek.",
        "Én azt látom, hogy a Good News Mission tagjai a bűnbocsánat elnyerése és hitéletük megváltozása által nyugodt, harmonikus és áldott életet élnek. Akik korábban elváltak, majd csatlakoztak a missziónkhoz, ismét házasságot kötöttek. A missziónkon belül szinte egyáltalán nem kerül sor válásra, mivel Isten az, aki őrzi a szívünket, és Isten az, aki boldog családot ajándékoz nekünk.",
        "Ha bűnbocsánatot kapunk és újjászületünk, így csatlakozunk Jézushoz, akkor Jézus nyugalmat ad nekünk, örömmel és békességgel tölt el bennünket. Olyan valóságos hitéletet élhetünk, amelyben Jézus munkálkodik értünk.",
        "Hiszem, hogy nálunk a Jó Hír Misszióban megismerheti az igaz Evangéliumot, bűnbocsánatot nyerve áldott, békés életet élhet."
      ]}
      img={
        (<img src={udvozloUzenetImg} alt={"Good News Mission"} />)
      }
      id={"udvozlo_uzenet"}
    />
  )
}