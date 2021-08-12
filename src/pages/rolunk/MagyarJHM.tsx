import React from 'react';
import TextPageTemplate from "../TextPageTemplate";
import magyarjhmimg from "./MagyarJHM.jpeg"

export default function MagyarJHM() {
  return (
    <TextPageTemplate
      title={"A Magyar Jó Hír Misszió"}
      paragraphs={[
        "A Jó Hír Misszió egy olyan missziós szervezet, amely az Evangéliumot hirdeti. Munkája során számos formában hirdeti az Evangéliumot Magyarországon, hogy az emberek megismerjék Krisztus szeretetét és munkálkodását, amely által örök életet nyerhetnek.",
        "A misszió tevékenysége: evangelizációs rendezvények szervezése a nagyvárosokban, prédikációkat tartalmazó könyvek, brosúrák kiadása, a “Jó Hír” címet viselő, havonta megjelenő folyóirat megjelentetése, szemináriumok szervezése és lebonyolítása, misszionáriusok képzése és delegálása Korea szerte, valamint más tengerentúli országokba.",
        "A Jó Hír Misszió budapesti gyülekezete több, mint húsz éve folytatja magyarországi tevékenységét. Az anyaország Dél-Korea, de a gyülekezet ma már az egész világon jelen van. A Koreából küldött misszionárius családok Istennek, a Zsoltárok könyve 2,8-ban adott ígérete alapján indulnak útnak és telepednek le egy-egy országban. Először megtanulják az adott ország nyelvét, majd Isten kegyelméből Evangéliumot hirdetnek az ott élő embereknek. „Kérjed tőlem és odaadom néked a pogányokat örökségül, és birtokodul a föld határait.” (Zsolt.2,8)",
        "A tékozló fiú, aki nagy önhittséggel már elhagyta apja házát, azt hitte, hogy a disznók közt kell éhen halnia. Nem amiatt kellett éheznie, mert az apja szegény volt, vagy mert nem szerette őt és nem akart neki segíteni, hanem azért éhezett, mert nem adta fel a saját akaratát. Végül olyan sanyarú körülmények közé jutott, hogy már nem bírta tovább az éhezést. Ettől függetlenül gondolataiban mindvégig harcolt magában, mert nem tudta elképzelni, hogy úgy térten vissza apjához, ahogy volt. Amikor pedig végképp feladta, hogy saját munkájával próbáljon meg elérni egy kis jólétet, visszament az apjához és újra élvezhette apja munkájának gyümölcseit.",
        "A kulcskérdés az, mire is éheztünk ki. Csak akkor áhítjuk Isten kegyelmét, és csak akkor változhatunk meg minden szempontból, amikor lelki éhínségbe kergettük magunkat. Ha tanácsot szeretne kapni az igazi hitéletet illetően, vagy Isten Igéjét szeretné hallani, kérjük, keressen fel minket bármikor. A Good News Mission olyan szervezet, amely annak Igéjét hirdeti, és abban segít, hogy bűneink mi módon nyernek megbocsátást, hogyan születhetünk újjá, ami egy új élethez vezet. Minderről olvashatja különféle kiadványainkat is, melyeket ingyen adunk mindenki számára."
      ]}
      id={"magyarjhm"}
      img={
        (<img src={magyarjhmimg} alt={"Budapest"} />)
      }
      imgAlign={"right"}
      imgWidth={20}
    />
  )
}