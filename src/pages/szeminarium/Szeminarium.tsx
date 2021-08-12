import React from "react"
import "./Szeminarium.css"

export default function Szeminarium() {
  const szeminariumok: SzeminariumProps[] = [
    {title: "Nabukadonozor álma", author: "Oh Yong Seon", description: "Lelki gyakorlat – 2000. április 19-23."},
  ]

  return (
    <div className={"pad-1"}>
      <div className={"title"}>Szemináriumok</div>

      {szeminariumok.map((szem, szemIdx) =>
        (
          <div className={"szembox mb-1"}>
            <div className={"szem-title mb-0p5"}>{szem.title}</div>

            <div className={"mb-0p5"}>prédikátor: <b>{szem.author} lelkész</b></div>

            <p className={"szem-description"}>
              {szem.description}
            </p>

            <a
              className={"szem-link"}
              href={process.env.PUBLIC_URL + `/pdf/szeminariumok/seminar${szemIdx + 1}.pdf`}
              rel={"noreferrer"}
              target={"_blank"}
            >
              A szeminárium itt olvasható.
            </a>
          </div>
        )
      )}
    </div>
  )
}

interface SzeminariumProps {
  title: string,
  author: string,
  description: string
}