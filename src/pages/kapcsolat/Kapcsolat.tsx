import React from "react";
import "./Kapcsolat.css"

export default function Kapcsolat() {
  return (
    <div className={"pad-1"} style={{fontSize:"1.3rem"}}>
      <div className={"title"}>Kapcsolat</div>

      <div className={"contactbox"}>Cím: <b>1147 Budapest, Ilosvai Selymes utca 110.</b></div>
      <div className={"contactbox"}>Telefonszám: <b>+36 30 407 7034</b></div>
      <div className={"contactbox"}>E-mail cím: <b>ddlee@goodnews.or.kr</b></div>

      <div className={"contactbox"}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.9143952073914!2d19.11080431594233!3d47.53052960
        122251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741db7404e25a97%3A0x24479a2baf4d744b!2sBudapesti%20
        Evang%C3%A9liumi%20Baptista%20Gy%C3%BClekezet!5e0!3m2!1shu!2shu!4v1628354430589!5m2!1shu!2shu"
          width="100%"
          height="600rem"
          style={{"border": 0}}
          allowFullScreen={false}
          loading="lazy"
          title="1147 Budapest, Ilosvai Selymes utca 110."
        />
      </div>
    </div>
  )
}