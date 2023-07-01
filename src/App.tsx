/* eslint-disable @typescript-eslint/no-unused-vars, jsx-a11y/anchor-is-valid, react/jsx-no-target-blank */
// noinspection ES6UnusedImports,DuplicatedCode

import React, {useState} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {useMediaQuery} from 'react-responsive'
import {Carousel} from 'react-responsive-carousel'
import * as Util from "./util"
import useVideoLister from "./videoLister"
import useCarousel from './carousel';

import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import socialIcons from "./assets/social_icons"
import johirFolyoiratImg from "./assets/johir_folyoirat.png"
import {rightSideLinksImages as rsli} from "./assets"
import bookImage from "./assets/pos_konyv.png"

import JoHirFolyoirat from "./pages/johirf/JoHirFolyoirat";
import UdvozloUzenet from "./pages/rolunk/UdvozloUzenet";
import MagyarJHM from "./pages/rolunk/MagyarJHM";
import KikVagyunk from "./pages/rolunk/KikVagyunk";
import Evangelium from "./pages/rolunk/Evangelium";
import ParkOckSooLelkesz from "./pages/rolunk/ParkOckSooLelkesz";
import GraciasKorus from "./pages/gracias_korus/GraciasKorus";
import IYF from "./pages/iyf/IYF";
import Kapcsolat from "./pages/kapcsolat/Kapcsolat";
import Konyvek from "./pages/konyvek/Konyvek";
import BizTetelek from "./pages/biz_tetelek/BizTetelek";
import NotFound from "./pages/NotFound";
import Szeminarium from "./pages/szeminarium/Szeminarium";

function App() {
  const isMobile = useMediaQuery({query: '(max-width: 960px)'})

  const [images, setImages] = useState<string[]>([])

  useCarousel(setImages)

  return (
    <Router>
      <header>
        <UpperHeader/>
        <LowerHeader/>
      </header>
      <main className={"main"}>
        <div className={"main-wrapper"}>
          {!isMobile && <LeftSidebar/>}
          <div className={"center"}>
            <Switch>
              <Route path={"/"} exact render={() =>
                <>
                  <Carousel
                    showThumbs={false}
                    autoPlay
                    interval={8000}
                    infiniteLoop
                    transitionTime={1250}
                    showStatus={false}
                    className={"center-carousel"}
                  >
                    {images.map((image, index) => <img key={index} src={image} alt={`JHM Carousel #${index + 1}`}/>)}
                  </Carousel>

                  <Divider/>

                  <div
                    className={"johir-folyoirat"}
                  >
                    <img alt={"JÓ HÍR Folyóirat"} src={johirFolyoiratImg}/>
                    <Link to={"/johirfolyoirat"} className={"folyoirat-btn brown-btn"}>
                      <b>JÓ HÍR</b> folyóirat
                    </Link>

                    <p>Amikor az Úr azt mondta a 38 éve betegen fekvő embernek: „Kelj fel, vedd ágyadat és járj!”
                      – a 38 éve beteg magára tekintett. Önmaga szerint ő olyan ember volt, aki soha nem lesz képes
                      lábra állni, de a szerető Jézus szempontjából egyáltalán nem ilyen volt. Már teljesen
                      meggyógyult. Nos, azon a napon a 38 éve betegnek választania kellett: Vajon abban kell
                      hinnie, ami Jézus szemével volt látható, és amit Jézus mondott? Vagy a saját tapasztalata és
                      látása alapján hozott döntésében kell hinnie?</p>
                  </div>
                </>} />

              <Route path={"/rolunk/udvozlouzenet"} exact component={UdvozloUzenet} />
              <Route path={"/rolunk/magyarjhm"} exact component={MagyarJHM} />
              <Route path={"/rolunk/kikvagyunk"} exact component={KikVagyunk} />
              <Route path={"/rolunk/evangelium"} exact component={Evangelium} />
              <Route path={"/rolunk/parkocksoo"} exact component={ParkOckSooLelkesz} />

              <Route path={"/graciaskorus"} exact component={GraciasKorus}/>
              <Route path={"/iyf"} exact component={IYF}/>
              <Route path={"/kapcsolat"} exact component={Kapcsolat}/>

              <Route path={"/konyvek"} exact component={Konyvek}/>
              <Route path={"/johirfolyoirat"} exact component={JoHirFolyoirat} />
              <Route path={"/bizonysagtetelek"} exact component={BizTetelek} />
              <Route path={"/szeminariumok"} exact component={Szeminarium}/>

              <Route component={NotFound}/>
            </Switch>
          </div>
          {!isMobile && <RightSidebar/>}
        </div>
      </main>
    </Router>
  );
}

function UpperHeader() {
  return <div className={"header1"}>
    <div className={"header1-wrapper"}>
      <div className={"logo-wrapper"}>
        {/*<img src={logo} alt={"logo"} className={"logo"}/>*/}
        <Link to={"/"} className={"logo-text"}>Jó Hír Misszió</Link>
      </div>
      <div className={"social-wrapper"}>
        <a href={"https://www.facebook.com/johirmisszio"} target={"_blank"} rel="noreferrer">
          <img src={socialIcons.facebook} alt={"FB"}/>
        </a>
        <a href={"https://www.youtube.com/channel/UC9WnTUJAxyL9f1-mIKvW9cQ"} target={"_blank"} rel="noreferrer">
          <img src={socialIcons.youtube} alt={"YT"}/>
        </a>
        <a href={"https://www.instagram.com/iyf_hungary/"} target={"_blank"} rel="noreferrer">
          <img src={socialIcons.instagram} alt={"IG"}/>
        </a>
      </div>
    </div>
  </div>;
}

function LowerHeader() {
  return <div className={"header2"}>
    <nav className={"header2-wrapper"}>
      <DropdownLink text={"Rólunk"}>
        <Link to={"/rolunk/udvozlouzenet"}>Üdvözlő üzenet</Link>
        <Link to={"/rolunk/magyarjhm"}>A Magyar Jó Hír Misszió</Link>
        <Link to={"/rolunk/kikvagyunk"}>Kik vagyunk</Link>
        <Link to={"/rolunk/evangelium"}>Az Evangélium</Link>
        <Link to={"/rolunk/parkocksoo"}>Park Ock Soo lelkész</Link>
      </DropdownLink>
      <DropdownLink text={"Prédikációk"}>
        <Link to={"/konyvek"}>Könyvek</Link>
        <Link to={"/johirfolyoirat"}>Jó Hír folyóirat</Link>
        <Link to={"/bizonysagtetelek"}>Bizonyságtételek</Link>
        <Link to={"/szeminariumok"}>Szemináriumok</Link>
      </DropdownLink>
      <JHMLink text={"International Youth Fellowship"} href={"/iyf"}/>
      <JHMLink text={"Gracias Kórus"} href={"/graciaskorus"}/>
      <JHMLink text={"Kapcsolat"} href={"/kapcsolat"}/>
    </nav>
  </div>;
}

function DropdownLink(props: { text: string, children?: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={"dropdown-link"}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      // onClick={() => setOpen(!open)}
    >
      {props.text}
      {open && <nav className={"dropdown"}>{props.children}</nav>}
    </div>
  )
}

const JHMLink = ({text, href = "/"}: { text: string, href?: string }) =>
  <div className={"link"}><Link to={href}>{text}</Link></div>

function Divider() {
  return (
    <div className={"divider"}/>
  )
}

export type videosArrayType = {
  title: string,
  date: Date,
  videoLink: string,
  videoId: string,
}[]

function LeftSidebar() {
  // noinspection JSUnusedLocalSymbols
  const [vasPredVideos, setVasPredVideos] = useState<videosArrayType>([])
  // noinspection JSUnusedLocalSymbols
  const [janosEvVideos, setJanosEvVideos] = useState<videosArrayType>([])

  useVideoLister(setVasPredVideos, setJanosEvVideos);

  return (
    <aside className={"left-sidebar"}>
      <div className={"vaspred-title"}>
        <b>Vasárnapi prédikáció</b><br/>
        igehirdető:<br/><span>Lee Daedoo pásztor</span>
      </div>

      <div className={"vaspred-wrapper"}>
        {vasPredVideos.map(v => <YoutubeVideo title={v.title} date={v.date} link={v.videoLink} key={v.videoId}/>)}
      </div>

      <Divider />

      <div className={"vaspred-title"}>
        <b>János evangéliuma</b><br/>
        igehirdető:<br/><span>Park Ock Soo</span>
      </div>

      <div className={"vaspred-wrapper"}>
        {janosEvVideos.map(v => <YoutubeVideo title={v.title} date={v.date} link={v.videoLink} key={v.videoId}/>)}
      </div>

      <Divider />

      <div className={"vaspred-title"}>
        <b>Pax TV - Gospel Cafe</b><br />
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/VguWn9Bz58U?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            paddingTop: ".5rem"
          }}
        />
      </div>
    </aside>
  );
}

function RightSidebar() {
  return (
    <aside className={"right-sidebar"}>
      <div className={"gyuli-alk-wrapper"}>
        Gyülekezeti alkalmak<br/>
        <div className={"gyuli-alk"}>
          <b>Istentisztelet</b><br/>
          Vasárnap 10:30<br/>
          <b>Ifi-alkalom</b><br/>
          Vasárnap 15:00<br/>
          <b>Bibliaóra</b><br/>
          Szombat 19:00<br/>
          <b>Biblia-kör</b><br/>
          Szerda 19:00<br/>
        </div>
      </div>

      <Divider />

      <div className={"rightside-links"} style={{marginBottom:".5rem"}}>
        <img src={rsli.paxtv} alt={"Pax TV"} title={"Pax TV"}/>
        <div>
          <div>
            <b>Jó Hír</b> a Pax TV-n
          </div>
          <Divider />
          <div>
            Hétfő <b>20:00</b>
          </div>
          <div>
            Szerda <b>16:30</b>
          </div>
        </div>
      </div>
      <div className={"rightside-links"}>
        <img src={rsli.solaradio} alt={"Sola Rádió"} title={"Sola Rádió"}/>
        <div>
          <div>
            <b>Jó Hír</b> a Sola Rádión
          </div>
          <Divider />
          <div>
            Csütörtök <b>16:05</b>
          </div>
          <div>
            Vasárnap <b>13:05</b>
          </div>
        </div>
      </div>

      <Divider />

      <div className={"konyvajanlo"}>
        <b>Könyvajánló</b><br/>
        Park Ock Soo: A bűnbocsánat és az újjászületés titka<br/>
        <div>
          <img src={bookImage} alt={"Könyvajánló"} />
          <i>A bűnbocsánat Isten legnagyobb ajándéka. Az ember a bűn miatt eltávolodott Istentől, ezért szégyennel,
            fájdalommal és félelemmel kell küzdenie a sötétségben, ahelyett, hogy igazi örömben, boldogságban és
            áldásban élne. Mindez a bűn megbocsátásával helyreállítható. A bűnbocsánat világos igazságát a Biblia titka
            rejti.</i>
        </div>
      </div>
    </aside>
  );
}

function YoutubeVideo(props: { title: string, date: Date, link: string }) {
  const dateHunString = Util.dateToHuString(props.date)

  return <div className={"vaspred-video"}>
    <div className={"vaspred-text-wrapper"}>
      <b>{props.title}</b><br/>
      {dateHunString}
    </div>
    <a href={props.link} target={"_blank"} className={"vaspred-playbtn brown-btn"}>▶</a>
  </div>;
}

export default App;
