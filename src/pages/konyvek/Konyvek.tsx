import React from "react";
import "./Konyvek.css"

export default function Konyvek() {
  return (
    <div className={"pad-1"}>
      <div className={"title"}>Könyvek</div>

      <Book
        title={"Dávid élete"}
        author={"Ock Soo Park"}
        description={"Ha Saul és Dávid között van különbség, akkor az abban rejlik, hogy Saul önmaga erőszakolta ki " +
        "tetteit, ezzel szemben Dávid – ismerve a saját hiányosságait – nem tett semmit, hanem rábízta magát " +
        "Istenre, hogy Ő munkálkodhasson. Manapság is sokan élnek úgy, mint Saul, aki önmaga igyekszik cselekedni. " +
        "Az igazi hit viszont olyan, mint Dávid hite, aki beismerte, hogy ő maga semmire nem képes, ezért inkább " +
        "alkalmat ad Istennek a munkálkodásra."}
        pdfName={"David_elete"}
      />

      <Book
        title={"Bűnbánat és hit"}
        author={"Ock Soo Park"}
        description={"Isten kegyelmének köszönhetően egy napon rájöttem, hogy a bensőm gonosz. Felismertem, hogy ez " +
        "az oka annak, hogy gonosz, mocskos, trá¬gár és közönséges vagyok. Felsimertem, hogy nem lehet hitem, " +
        "hiszen a bensőm, amiben gonoszság lakozik, még a múltbeli tetteimnél is mocs¬kosabb. „Alapvetően gonosz " +
        "ember vagyok. Nem tudok jót tenni. Mocs¬kos vagyok.” Azóta megtagadom önmagam, nem bízok magamban és " +
        "eldobom a gondolataimat. Így Jézus csodálatos módon a szívembe köl¬tözött, az életem tisztává vált, a " +
        "bensőm pedig megváltozott."}
        pdfName={"Bunbanat_es_hit"}
      />

      <Book
        title={"Hagy el a gondolataidat és térj vissza hozzám"}
        author={"Cho Seong Hwa"}
        description={"Majdnem minden ember megéli a 70, vagy ha egészséges, akár a 80 évet is. De nagyon sokan úgy " +
        "halnak meg, hogy nem ismerik fel az élet igazi célját és értelmét. Az életüket fájdalmaktól, problémáktól " +
        "és nyomorúságtól kísérve élik, betegségben, megöregedve halnak meg vagy esetleg egy baleset áldozataivá " +
        "válnak. Nem hiábavalóság, ha valaki az egész életét így éli le? Ebben a világban a létező legnagyobb cél " +
        "– Istennel találkozni, Tőle kegyelmet kapni. Nincs annál nagyobb áldás és boldogság, mint amikor az ember " +
        "sok nehézség árán, találkozik Istennel."}
        pdfName={"Hagyd_el"}
      />
    </div>
  )
}

function Book(props: BookProps) {
  return (
    <div className={"bookbox mb-1"}>
      <div className={"book-title mb-0p5"}>{props.title}</div>

      <div className={"mb-0p5"}>írta: <b>{props.author}</b></div>

      <p className={"book-description"}>
        {props.description}
      </p>

      <a
        className={"book-link"}
        href={process.env.PUBLIC_URL + `/pdf/konyvek/${props.pdfName}.pdf`}
        rel={"noreferrer"}
        target={"_blank"}
      >
        A könyv itt olvasható.
      </a>
    </div>
  )
}

interface BookProps {
  title: string,
  author: string,
  description: string,
  pdfName: string
}