import React, {useState} from "react";
import "./JoHirFolyoirat.css"

export default function JoHirFolyoirat() {
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null)

  const options: Option[] = [
    {title: "Ock Soo Park", element: OSPPredikaciok()},
    {title: "Zöld legelő", pastor: "Kim Young Sam", element: ZLPredikaciok()},
    {title: "Az elveszett lelkekért", pastor: "Kim Hung Soon", element: ELPredikaciok()}
  ]

  return (
    <div className={"pad-1"}>
      <div className={"title"}>Jó Hír folyóirat</div>
      <div className={"options mb-1p4"}>
        {options.map((option, optionIdx) => {
          return (
            <div
              className={`option${selectedOptionIdx === optionIdx ? " active-option" : ""}`}
              onClick={() => setSelectedOptionIdx(optionIdx)}
              key={`fi_option_${optionIdx}`}
            >
              <b>{option.title}</b>

              {option.pastor && (<><br/>{option.pastor}</>)}
              <br/>lelkész prédikációi
            </div>
          )
        })}
      </div>

      {selectedOptionIdx != null ? options[selectedOptionIdx].element : (
        <div style={{fontSize:"1.5rem"}}>Válassz egyet!</div>
      )}
    </div>
  )
}

const OSPPredikaciok = () => (
  <PreachingList
    url={"ocksoopark/osp"}
    bgColor={"#fef0f0"}
    preachings={[
      "Az állapot, amikor lehetetlen hittel élni",
      "Én is szamaritánus asszony szeretnék lenni",
      "Nincs olyan ember, akinek kezdettől fogva lett volna hite",
      "Jézus, aki helyettünk szeretné élni az életünket",
      "Dávid, akit nem lehetett elszakítani Istentől"
    ]}
  />
);

const ZLPredikaciok = () => (
  <PreachingList
    url={"zoldlegelo/zl"}
    bgColor={"#dff0e9"}
    preachings={[
      "A test gondolata és akarata, illetve az élet Igéje",
      "Ábrahám igazi utódai",
      "Aki az Úrtól erőt kap",
      "Érintés",
      "A feltétel, mely által hit alakul ki az ember szívében"
    ]}
  />
);

const ELPredikaciok = () => (
  <PreachingList
    url={"azelveszettlelkekert/el"}
    bgColor={"#e0f3ff"}
    preachings={[
      "Istennel élve az életünket",
      "Isten, aki ígér és beteljesít",
      "A szív az a hely, ahol megkaphatjuk Isten adományait",
      "Távol az Úrtól",
      "Visszatérés Istenhez"
    ]}
  />
);

function PreachingList(props: {preachings: string[], url: string, bgColor: string}) {
  return (
    <div className={"fi-list"}>
      {props.preachings.map((prTitle, prIdx) => {
        return (
          <a
            key={`preaching_${prIdx}`}
            className={"preaching"}
            href={`${process.env.PUBLIC_URL}/pdf/predikaciok/${props.url}${prIdx + 1}.pdf`}
            rel={"noreferrer"}
            target={"_blank"}
            style={{backgroundColor: props.bgColor}}
          >
            <div className={"preaching-idx"}>{prIdx + 1}.</div>
            <div className={"preaching-title"}>{prTitle}</div>
          </a>
        )
      })}
    </div>
  )
}

interface Option {
  title: string,
  pastor?: string,
  element: JSX.Element
}
