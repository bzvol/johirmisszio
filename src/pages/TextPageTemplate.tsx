import React from 'react';

export default function TextPageTemplate(props: TextPageProps) {
  return (
    <div className={"pad-1 textpagetemplate"}>
      {props.img &&
      <div
          className={`gradient-img-border ${(props.imgAlign === "left" ? "tpt-ail" : "tpt-air")}`}
          style={{
            width: `${props.imgWidth || "10"}rem`
          }}
      >
        {props.img}
      </div>}

      <div className={"title"}>{props.title}</div>

      {props.paragraphs.map((e, elN) => <p key={`${props.id}_pg_${elN}`}>{e}</p>)}

      {props.children}
    </div>
  )
}

type ReactImageElement = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
interface TextPageProps {
  title: string,
  img?: ReactImageElement,
  imgAlign?: "left" | "right",
  imgWidth?: number,
  paragraphs: string[],
  id: string,
  children?: React.ReactNode
}