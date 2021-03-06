/* eslint-disable @typescript-eslint/no-unused-vars, jsx-a11y/anchor-is-valid, react/jsx-no-target-blank */
// noinspection ES6UnusedImports,DuplicatedCode

import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {useMediaQuery} from 'react-responsive'
import {Carousel} from 'react-responsive-carousel'
import * as Util from "./util"
import useVideoLister from "./UseVideoLister"

import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import socialIcons from "./assets/social_icons"
import carouselImages from "./assets/carousel"
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
                    <img src={carouselImages.carouselImg1} alt={"K??p 1"}/>
		    <img src={carouselImages.carouselImg2} alt={"K??p 2"}/>
		    <img src={carouselImages.carouselImg3} alt={"K??p 3"}/>
                  </Carousel>

                  <Divider/>

                  <div
                    className={"johir-folyoirat"}
                  >
                    <img alt={"J?? H??R Foly??irat"} src={johirFolyoiratImg}/>
                    <Link to={"/johirfolyoirat"} className={"folyoirat-btn brown-btn"}>
                      <b>J?? H??R</b> foly??irat
                    </Link>

                    <p>Amikor az ??r azt mondta a 38 ??ve betegen fekv?? embernek: ???Kelj fel, vedd ??gyadat ??s j??rj!???
                      ??? a 38 ??ve beteg mag??ra tekintett. ??nmaga szerint ?? olyan ember volt, aki soha nem lesz k??pes
                      l??bra ??llni, de a szeret?? J??zus szempontj??b??l egy??ltal??n nem ilyen volt. M??r teljesen
                      meggy??gyult. Nos, azon a napon a 38 ??ve betegnek v??lasztania kellett: Vajon abban kell
                      hinnie, ami J??zus szem??vel volt l??that??, ??s amit J??zus mondott? Vagy a saj??t tapasztalata ??s
                      l??t??sa alapj??n hozott d??nt??s??ben kell hinnie?</p>
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
        <Link to={"/"} className={"logo-text"}>J?? H??r Misszi??</Link>
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
      <DropdownLink text={"R??lunk"}>
        <Link to={"/rolunk/udvozlouzenet"}>??dv??zl?? ??zenet</Link>
        <Link to={"/rolunk/magyarjhm"}>A Magyar J?? H??r Misszi??</Link>
        <Link to={"/rolunk/kikvagyunk"}>Kik vagyunk</Link>
        <Link to={"/rolunk/evangelium"}>Az Evang??lium</Link>
        <Link to={"/rolunk/parkocksoo"}>Park Ock Soo lelk??sz</Link>
      </DropdownLink>
      <DropdownLink text={"Pr??dik??ci??k"}>
        <Link to={"/konyvek"}>K??nyvek</Link>
        <Link to={"/johirfolyoirat"}>J?? H??r foly??irat</Link>
        <Link to={"/bizonysagtetelek"}>Bizonys??gt??telek</Link>
        <Link to={"/szeminariumok"}>Szemin??riumok</Link>
      </DropdownLink>
      <JHMLink text={"International Youth Fellowship"} href={"/iyf"}/>
      <JHMLink text={"Gracias K??rus"} href={"/graciaskorus"}/>
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
        <b>Vas??rnapi pr??dik??ci??</b><br/>
        igehirdet??:<br/><span>Lee Daedoo p??sztor</span>
      </div>

      <div className={"vaspred-wrapper"}>
        {vasPredVideos.map(v => <YoutubeVideo title={v.title} date={v.date} link={v.videoLink} key={v.videoId}/>)}
      </div>

      <Divider />

      <div className={"vaspred-title"}>
        <b>J??nos evang??liuma</b><br/>
        igehirdet??:<br/><span>Park Ock Soo</span>
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
        Gy??lekezeti alkalmak<br/>
        <div className={"gyuli-alk"}>
          <b>Istentisztelet</b><br/>
          Vas??rnap 10:30<br/>
          <b>Ifi-alkalom</b><br/>
          Vas??rnap 16:00<br/>
          <b>Biblia??ra</b><br/>
          Szombat 19:00<br/>
          <b>Biblia-k??r</b><br/>
          Szerda 19:00<br/>
        </div>
      </div>

      <Divider />

      <div className={"rightside-links"} style={{marginBottom:".5rem"}}>
        <img src={rsli.paxtv} alt={"Pax TV"} title={"Pax TV"}/>
        <div>
          <div>
            <b>J?? H??r</b> a Pax TV-n
          </div>
          <Divider />
          <div>
            H??tf?? <b>20:00</b>
          </div>
          <div>
            Szerda <b>16:30</b>
          </div>
        </div>
      </div>
      <div className={"rightside-links"}>
        <img src={rsli.solaradio} alt={"Sola R??di??"} title={"Sola R??di??"}/>
        <div>
          <div>
            <b>J?? H??r</b> a Sola R??di??n
          </div>
          <Divider />
          <div>
            Cs??t??rt??k <b>16:05</b>
          </div>
          <div>
            Vas??rnap <b>13:05</b>
          </div>
        </div>
      </div>

      <Divider />

      <div className={"konyvajanlo"}>
        <b>K??nyvaj??nl??</b><br/>
        Park Ock Soo: A b??nbocs??nat ??s az ??jj??sz??let??s titka<br/>
        <div>
          <img src={bookImage} alt={"K??nyvaj??nl??"} />
          <i>A b??nbocs??nat Isten legnagyobb aj??nd??ka. Az ember a b??n miatt elt??volodott Istent??l, ez??rt sz??gyennel,
            f??jdalommal ??s f??lelemmel kell k??zdenie a s??t??ts??gben, ahelyett, hogy igazi ??r??mben, boldogs??gban ??s
            ??ld??sban ??lne. Mindez a b??n megbocs??t??s??val helyre??ll??that??. A b??nbocs??nat vil??gos igazs??g??t a Biblia titka
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
    <a href={props.link} target={"_blank"} className={"vaspred-playbtn brown-btn"}>???</a>
  </div>;
}

export default App;
