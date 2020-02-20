import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import mi from "../images/miself.png"
import foot9 from "../images/foot9.png"
import foot3 from "../images/foot3.png"
import foot5 from "../images/foot5.png"
import foot4 from "../images/foot4.png"
import nokia from "../images/nokia.png"
import cv from "../images/CVJAN2020.pdf"

import arrowright from "../images/arrowright.png"
import arrowleft from "../images/arrowleft.png"
import arrowdown from "../images/arrowdown.png"
import underl from "../images/underl.png"
import smallunderl from "../images/smallunderl.png"
import smallround from "../images/smallround.png"
import round from "../images/round.png"
import doublearrow from "../images/doublearrow.png"
import letout from "../images/letout.png"

import footvid from "../images/footvid.mp4"

import asafv from "../images/asaf2.mp4"

import alicev from "../images/alicesite.mp4"

import alpe from "../images/alpeh3 1.png"
import img from "../images/IMG_0356 copie.jpg"

class IndexPage extends Component {
  state = {
    step: 1,
  }

  nextStepHandler = e => {
    this.setState({ step: this.state.step + 1 })
    console.log("event", e)
  }

  goEndHandler = () => {
    this.setState({ step: 42 })
  }

  resetHandler = () => {
    this.setState({ step: 1 })
  }

  goBack = () => {
    this.setState({ step: this.state.step - 1 })
  }

  handleKeyPress = e => {
    if (e.keyCode === 37) {
      this.goBack()
    } else if (e.keyCode === 39) {
      this.nextStepHandler()
    }
  }

  render() {
    let d2 = Date.now()
    let d1 = new Date("January 1, 2018")
    var dDiff = new Date(d2 - d1)

    var txt = "Il s'est écoulé : "

    txt += dDiff.getMonth()
    txt += " mois, "
    txt += dDiff.getDate() - 1
    txt += " jours, "
    txt += dDiff.getHours() - 1
    txt += " heures, "
    txt += dDiff.getMinutes() - 1
    txt += " minutes, "
    txt += dDiff.getSeconds() - 1
    txt += " secondes depuis 2013"

    return (
      <Layout>
        <SEO title="Accueil" />

        {this.state.step !== 1 ? (
          <div>
            <div
              className="back-mobile"
              onClick={() => this.goBack()}
              onKeyDown={() => this.goBack()}
            ></div>
            <div className="back" onClick={() => this.goBack()}>
              {" "}
              <img src={arrowleft} alt="arrow" />
            </div>
          </div>
        ) : null}

        <div
          tabIndex="0"
          className="main"
          onClick={() => this.nextStepHandler()}
          onKeyDown={e => this.handleKeyPress(e)}
        >
          <div className="content">
            {this.state.step === 1 ? (
              <p>
                {" "}
                Bonjour, <br /> Cliquez pour découvrir{" "}
              </p>
            ) : null}
            {this.state.step === 2 ||
            this.state.step === 3 ||
            this.state.step === 4 ? (
              <div className="profile">
                <div className="profile-left">
                  {this.state.step === 2 ||
                  this.state.step === 3 ||
                  this.state.step === 4 ? (
                    <p> Je suis Anna Bendahan</p>
                  ) : null}

                  {this.state.step === 4 ? <p> J'ai 24 ans </p> : null}
                </div>

                {this.state.step === 3 || this.state.step === 4 ? (
                  <img className="mi" src={mi} alt="mi" />
                ) : null}
              </div>
            ) : null}
            {this.state.step === 5 || this.state.step === 6 ? (
              <div>
                <p>
                  Je suis développeuse web en freelance depuis 2 ans <br />
                  <br />
                </p>
              </div>
            ) : null}
            {this.state.step === 6 ? (
              <div>
                <img src={arrowdown} alt="arrow" />
                <p className="short">
                  <br />
                  <br />
                  Je crée tous types de sites internet, du design d’interface
                  jusqu’au déploiement du site
                </p>
              </div>
            ) : null}
            {this.state.step === 7 ? (
              <div>
                <p>
                  Comme le site d'
                  <span className="text">
                    <a href="https://alicethonnier.netlify.com/" target="blank">
                      Alice Thonnier{" "}
                    </a>
                    <img
                      className="ex"
                      style={{
                        position: "absolute",
                        left: "0px",
                        bottom: "-5px",

                        width: "150px",
                        height: "8px",
                      }}
                      src={underl}
                    />{" "}
                  </span>{" "}
                  , styliste et modéliste
                </p>
                <video className="asafvid" playsInline autoPlay loop muted>
                  <source src={alicev} type="video/mp4" />
                </video>
                <div class="loader">Loading...</div>
              </div>
            ) : null}
            {this.state.step === 8 ? (
              <div>
                <p>
                  Ou celui de l’
                  <span className="text">
                    <a href="https://jeskieaveclasaf.fr/" target="blank">
                      ASAF{" "}
                    </a>
                    <img
                      style={{
                        position: "absolute",
                        left: "0px",
                        bottom: "-5px",

                        width: "40px",
                        height: "8px",
                      }}
                      src={smallunderl}
                    />{" "}
                  </span>{" "}
                  (association de ski d’AIR FRANCE)
                </p>

                <video className="asafvid" playsInline autoPlay loop muted>
                  <source src={asafv} type="video/mp4" />
                </video>
                <div class="loader">Loading...</div>
              </div>
            ) : null}
            <div className="techs">
              {" "}
              {this.state.step === 9 ||
              this.state.step === 10 ||
              this.state.step === 11 ||
              this.state.step === 12 ||
              this.state.step === 13 ||
              this.state.step === 14 ||
              this.state.step === 15 ||
              this.state.step === 16 ? (
                <p className="short">
                  J’utilise des technologies modernes pour créer des sites{" "}
                  rapides, efficaces et responsifs.
                </p>
              ) : null}
              <p
                style={{
                  textAlign: "left",
                  width: "150px",
                  margin: " 20px auto",
                }}
              >
                {this.state.step === 10 ||
                this.state.step === 11 ||
                this.state.step === 12 ||
                this.state.step === 13 ||
                this.state.step === 14 ||
                this.state.step === 15 ||
                this.state.step === 16 ? (
                  <span style={{ display: "flex" }}>
                    <img width="5px" src={round} alt="round" /> React.js
                    <br />
                  </span>
                ) : null}
                {this.state.step === 11 ||
                this.state.step === 12 ||
                this.state.step === 13 ||
                this.state.step === 14 ||
                this.state.step === 15 ||
                this.state.step === 16 ? (
                  <span style={{ display: "flex" }}>
                    <img width="5px" src={round} alt="round" /> Javascript
                    <br />
                  </span>
                ) : null}
                {this.state.step === 12 ||
                this.state.step === 13 ||
                this.state.step === 14 ||
                this.state.step === 15 ||
                this.state.step === 16 ? (
                  <span style={{ display: "flex" }}>
                    <img width="5px" src={round} alt="round" /> Gatsby.js
                    <br />
                  </span>
                ) : null}
                {this.state.step === 13 ||
                this.state.step === 14 ||
                this.state.step === 15 ||
                this.state.step === 16 ? (
                  <span style={{ display: "flex" }}>
                    <img width="5px" src={round} alt="round" /> SCSS
                    <br />
                  </span>
                ) : null}
                {this.state.step === 14 ||
                this.state.step === 15 ||
                this.state.step === 16 ? (
                  <span style={{ display: "flex" }}>
                    <img width="5px" src={round} alt="round" /> Vue.js
                    <br />
                  </span>
                ) : null}
                {this.state.step === 15 || this.state.step === 16 ? (
                  <span style={{ display: "flex" }}>
                    <img width="5px" src={round} alt="round" /> GraphQL
                    <br />
                  </span>
                ) : null}
                {this.state.step === 16 ? (
                  <span style={{ display: "flex" }}>
                    <img width="5px" src={round} alt="round" /> Netlify
                    <br />
                  </span>
                ) : null}
              </p>
            </div>
            {this.state.step === 17 ? (
              <p className="short">
                {" "}
                Ma priorité ? Donner à mes clients la plus grande marge de
                manoeuvre pour gérer leur site{" "}
              </p>
            ) : null}
            {this.state.step === 18 ||
            this.state.step === 19 ||
            this.state.step === 20 ||
            this.state.step === 21 ? (
              <p>
                {" "}
                Comme, par exemple, pour le site de{" "}
                <span className="text">
                  <a href="http://www.qm-avocat.com/" target="blank">
                    Quentin Mameri
                  </a>
                  <img
                    style={{
                      position: "absolute",
                      left: "0px",
                      bottom: "-5px",

                      width: "150px",
                      height: "8px",
                    }}
                    src={underl}
                  />{" "}
                </span>
                , avocat{" "}
              </p>
            ) : null}
            {this.state.step === 19 ||
            this.state.step === 20 ||
            this.state.step === 21 ? (
              <div className="flex">
                {this.state.step === 19 ||
                this.state.step === 20 ||
                this.state.step === 21 ? (
                  <div>
                    <p className="veryshort">
                      {" "}
                      Pour l'interface, j'utilise{" "}
                      <span className="text">
                        <a href="https://www.gatsbyjs.org/" target="blank">
                          {" "}
                          Gatsby.js{" "}
                        </a>
                        <img
                          style={{
                            position: "absolute",
                            left: "0px",
                            bottom: "-5px",

                            width: "95px",
                            height: "8px",
                          }}
                          src={underl}
                        />{" "}
                      </span>{" "}
                      qui permet une mise en page et un design totalement
                      libres.{" "}
                    </p>{" "}
                  </div>
                ) : null}
                {this.state.step === 21 ? (
                  <div>
                    <div className="arrowMobile">
                      <img src={letout} alt="arrow" />
                    </div>
                    <div className="arrow">
                      <img width="200px" src={doublearrow} alt="arrow" />
                      <p>
                        {" "}
                        le tout lié par{" "}
                        <span className="text">
                          <a href="https://graphql.org/" target="blank">
                            {" "}
                            GraphQL{" "}
                          </a>
                          <img
                            style={{
                              position: "absolute",
                              left: "0px",
                              bottom: "-5px",

                              width: "80px",
                              height: "8px",
                            }}
                            src={underl}
                          />{" "}
                        </span>{" "}
                      </p>{" "}
                    </div>
                  </div>
                ) : null}
                {this.state.step === 20 || this.state.step === 21 ? (
                  <div>
                    <p className="veryshort">
                      {" "}
                      Pour permettre au client de gérer lui-même le contenu de
                      son site, j'utilise{" "}
                      <span className="text">
                        <a href="https://fr.wordpress.org/" target="blank">
                          WordpressCMS
                        </a>
                        <img
                          style={{
                            position: "absolute",
                            left: "0px",
                            bottom: "-5px",

                            width: "130px",
                            height: "8px",
                          }}
                          src={underl}
                        />{" "}
                      </span>
                      .
                    </p>
                  </div>
                ) : null}
              </div>
            ) : null}
             
            {this.state.step === 22 ||
            this.state.step === 23 ||
            this.state.step === 24 ||
            this.state.step === 25 ||
            this.state.step === 26 ||
            this.state.step === 27 ? (
              <p>
                {" "}
                Enfin, j’interviens sur des sites{" "}
                <span className="text">
                  <a href="https://fr.wordpress.org/" target="blank">
                    wordpress
                  </a>
                  <img
                    style={{
                      position: "absolute",
                      left: "0px",
                      bottom: "-5px",

                      width: "95px",
                      height: "8px",
                    }}
                    src={underl}
                  />{" "}
                </span>{" "}
                ou{" "}
                <span className="text">
                  <a href="https://cargo.site/" target="blank">
                    cargo{" "}
                  </a>
                  <img
                    style={{
                      position: "absolute",
                      left: "0px",
                      bottom: "-5px",

                      width: "55px",
                      height: "8px",
                    }}
                    src={underl}
                  />{" "}
                </span>{" "}
              </p>
            ) : null}
            <p
              className="cargo"
              style={{
                textAlign: "left",
                width: "250px",
                margin: "auto",
              }}
            >
              {this.state.step === 23 ||
              this.state.step === 24 ||
              this.state.step === 25 ||
              this.state.step === 26 ||
              this.state.step === 27 ? (
                <span style={{ display: "flex" }}>
                  <img width="5px" src={round} alt="round" /> Pour ajuster un
                  footer
                  <br />
                </span>
              ) : null}
              {this.state.step === 24 ||
              this.state.step === 25 ||
              this.state.step === 26 ||
              this.state.step === 27 ? (
                <span style={{ display: "flex" }}>
                  <img width="5px" src={round} alt="round" /> Trier des articles
                  <br />
                </span>
              ) : null}
              {this.state.step === 25 ||
              this.state.step === 26 ||
              this.state.step === 27 ? (
                <span style={{ display: "flex" }}>
                  <img width="5px" src={round} alt="round" /> Changer un header
                  <br />
                </span>
              ) : null}
              {this.state.step === 26 || this.state.step === 27 ? (
                <span style={{ display: "flex" }}>
                  <img width="5px" src={round} alt="round" /> Modifier une page
                  <br />
                </span>
              ) : null}
              {this.state.step === 27 ? <p> ...</p> : null}
            </p>
            {/* FOOTBALL */}
            {this.state.step === 28 ||
            this.state.step === 29 ||
            this.state.step === 30 ||
            this.state.step === 31 ||
            this.state.step === 32 ||
            this.state.step === 33 ? (
              <p> À part ça, je joue au football </p>
            ) : null}
            {this.state.step === 29 ||
            this.state.step === 30 ||
            this.state.step === 31 ||
            this.state.step === 32 ||
            this.state.step === 33 ? (
              <div>
                <p>
                  <span className="text">
                    <a
                      href="https://www.instagram.com/usparisxifeminine/"
                      target="blank"
                    >
                      @usparisxifeminine
                    </a>
                    <img
                      style={{
                        position: "absolute",
                        left: "0px",
                        bottom: "-5px",

                        width: "190px",
                        height: "8px",
                      }}
                      src={underl}
                    />{" "}
                  </span>{" "}
                </p>{" "}
              </div>
            ) : null}
            {this.state.step === 30 ||
            this.state.step === 31 ||
            this.state.step === 32 ||
            this.state.step === 33 ? (
              <div className="footballpics">
                {this.state.step === 30 ||
                this.state.step === 31 ||
                this.state.step === 32 ||
                this.state.step === 33 ? (
                  <img src={foot3} className="footpic" alt="mi" />
                ) : null}
                {this.state.step === 31 ||
                this.state.step === 32 ||
                this.state.step === 33 ? (
                  <video className="footpic" playsInline autoPlay loop muted>
                    <source src={footvid} type="video/mp4" />
                  </video>
                ) : null}
                {this.state.step === 32 || this.state.step === 33 ? (
                  <img src={foot5} className="footpic" alt="mi" />
                ) : null}
                {this.state.step === 33 ? null : null}
              </div>
            ) : null}
            <div>
              {this.state.step === 34 || this.state.step === 35 ? (
                <p>
                  N'hésitez pas à aller voir mon{" "}
                  <span className="text">
                    <a
                      href="https://www.instagram.com/lebendan/"
                      target="blank"
                    >
                      instagram{" "}
                    </a>
                    <img
                      style={{
                        position: "absolute",
                        left: "0px",
                        bottom: "-5px",

                        width: "95px",
                        height: "8px",
                      }}
                      src={underl}
                    />{" "}
                  </span>{" "}
                </p>
              ) : null}
              {this.state.step === 35 ? (
                <p>
                  Télécharger mon{" "}
                  <span className="text">
                    <a
                      href="https://www.instagram.com/lebendan/"
                      target="blank"
                    >
                      <a href={cv} target="blank" download>
                        CV
                      </a>
                    </a>
                    <img
                      style={{
                        position: "absolute",
                        left: "0px",
                        bottom: "-5px",

                        width: "25px",
                        height: "8px",
                      }}
                      src={smallunderl}
                    />{" "}
                  </span>{" "}
                </p>
              ) : null}
            </div>
            {/* CONTACT */}
            {this.state.step === 36 ||
            this.state.step === 37 ||
            this.state.step === 38 ||
            this.state.step === 39 ? (
              <p>Et me contacter bien sûr! </p>
            ) : null}
            {this.state.step === 37 ||
            this.state.step === 38 ||
            this.state.step === 39 ? (
              <img className="nokia" src={nokia} alt="mi" />
            ) : null}
            {this.state.step === 38 || this.state.step === 39 ? (
              <p>0659133919</p>
            ) : null}
            {this.state.step === 39 ? <p>an.bendahan@gmail.com</p> : null}
            {this.state.step === 40 || this.state.step === 41 ? (
              <p>Merci pour votre visite !</p>
            ) : null}
            {this.state.step === 41 ? (
              <p
                className="r"
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "310px",
                  margin: "auto",
                }}
              >
                Petit récapitulatif <img src={arrowright} alt="arrow" />
              </p>
            ) : null}
            {this.state.step > 41 ? (
              <div className="recap">
                <h1>RÉCAP</h1>
                <div className="first">
                  <p>Anna Bendahan, 25 </p>
                  <p>Design & développement web</p>
                  <p>Basée à Paris</p>
                </div>
                <div className="second">
                  <p> an.bendahan@gmail.com </p> <p> + 33 659133919</p>
                  <p>
                    <span className="text">
                      <a
                        href="https://www.linkedin.com/in/anna-bendahan-55324113a/"
                        target="blank"
                      >
                        linkedin{" "}
                      </a>
                      <img
                        style={{
                          position: "absolute",
                          left: "0px",
                          bottom: "-5px",

                          width: "95px",
                          height: "8px",
                        }}
                        src={underl}
                      />{" "}
                    </span>{" "}
                  </p>
                  <p>
                    <span className="text">
                      <a
                        href="https://www.instagram.com/lebendan/"
                        target="blank"
                      >
                        instagram{" "}
                      </a>
                      <img
                        style={{
                          position: "absolute",
                          left: "0px",
                          bottom: "-5px",

                          width: "100px",
                          height: "8px",
                        }}
                        src={underl}
                      />{" "}
                    </span>{" "}
                  </p>
                  <p>
                    <span className="text">
                      <a
                        href="https://www.instagram.com/lebendan/"
                        target="blank"
                      >
                        <a href={cv} target="blank" download>
                          CV
                        </a>
                      </a>
                      <img
                        style={{
                          position: "absolute",
                          left: "0px",
                          bottom: "-5px",

                          width: "25px",
                          height: "8px",
                        }}
                        src={smallunderl}
                      />{" "}
                    </span>{" "}
                    <p />
                  </p>
                </div>
                <div className="third">
                  <p>
                    <span className="text">
                      <a href="http://www.qm-avocat.com/" target="blank">
                        www.qm-avocat.com{" "}
                      </a>
                      <img
                        style={{
                          position: "absolute",
                          left: "0px",
                          bottom: "-5px",

                          width: "180px",
                          height: "8px",
                        }}
                        src={underl}
                      />{" "}
                    </span>{" "}
                  </p>
                  <p>
                    <span className="text">
                      <a
                        href="https://alicethonnier.netlify.com/"
                        target="blank"
                      >
                        alicethonnier.netlify.com{" "}
                      </a>
                      <img
                        style={{
                          position: "absolute",
                          left: "0px",
                          bottom: "-5px",

                          width: "270px",
                          height: "8px",
                        }}
                        src={underl}
                      />{" "}
                    </span>{" "}
                  </p>
                  <p>
                    <span className="text">
                      <a href="https://jeskieaveclasaf.fr/" target="blank">
                        jeskieaveclasaf.fr{" "}
                      </a>
                      <img
                        style={{
                          position: "absolute",
                          left: "0px",
                          bottom: "-5px",

                          width: "200px",
                          height: "8px",
                        }}
                        src={underl}
                      />{" "}
                    </span>{" "}
                  </p>
                  <div>
                    <span className="text">
                      <Link to="/projets">Autres projets </Link>
                      <img
                        style={{
                          position: "absolute",
                          left: "0px",
                          bottom: "-35px",

                          width: "150px",
                          height: "8px",
                        }}
                        src={underl}
                      />{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {this.state.step < 42 ? (
          <div
            className="footer
          "
          >
            <p onClick={() => this.goEndHandler()}>
              <span>Aller directement à la fin </span>{" "}
              <img src={arrowright} alt="arrow" />
            </p>
          </div>
        ) : (
          <div
            className="footer
          "
          >
            <p onClick={() => this.resetHandler()}>
              <img src={arrowleft} alt="arrow" /> recommencer
            </p>
          </div>
        )}
      </Layout>
    )
  }
}
export default IndexPage
