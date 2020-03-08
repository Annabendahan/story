import React, { Component } from "react"
import { Link } from "gatsby"

import Popup from "../components/popup"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import mi from "../images/mi.png"
import foot1 from "../images/fooot1.png"
import foot2 from "../images/fooot2.png"
import foot3 from "../images/fooot3.png"
import foot4 from "../images/foot4.png"
import nokia from "../images/nokia.png"
import cv from "../images/CVFEV2020.pdf"

import arrowright from "../images/arrowright.png"
import arrowleft from "../images/arrowleft.png"
import arrowdown from "../images/arrowdown.png"
import underl from "../images/underl.png"
import smallunderl from "../images/smallunderl.png"
import smallround from "../images/smallround.png"
import round from "../images/round.png"
import arrowdouble from "../images/arrowdouble.png"
import letout from "../images/lie.png"
import dash from "../images/dashh.png"
import load from "../images/load.png"

import footvid from "../images/footvid.mp4"

import asafv from "../images/asaf2.mp4"

import alicev from "../images/alicesite.mp4"

import alpe from "../images/alpeh3 1.png"
import img from "../images/IMG_0356 copie.jpg"

class IndexPage extends Component {
  state = {
    step: 1,
    l: 0,
    m: 0,
    showPopup: false,
    img: "mi",
  }

  nextStepHandler = e => {
    if (this.state.step >= 0 && this.state.step < 42) {
      this.setState({
        step: this.state.step + 1,
        l: this.state.l + 5,
        m: this.state.m + 3,
      })
    }
  }

  goEndHandler = () => {
    this.setState({ step: 42, l: 210, m: 126 })
  }

  resetHandler = () => {
    this.setState({ step: 1, l: 0, m: 0 })
  }

  openPopup = src => {
    this.setState({ showPopup: true, img: src })
  }

  goBack = () => {
    this.setState({
      step: this.state.step - 1,
      l: this.state.l - 6,
      m: this.state.m - 3,
    })
  }

  handleKeyPress = e => {
    if (e.keyCode === 37) {
      this.goBack()
    } else if (e.keyCode === 39) {
      this.nextStepHandler()
    }
  }

  closePopup = () => {
    this.setState({ showPopup: false })
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

        <div onClick={() => this.closePopup()}>
          {this.state.showPopup ? <Popup img={this.state.img} /> : null}{" "}
        </div>

        <div className="jauge">
          <div className="dash">
            <svg
              width="210"
              height="4"
              viewBox="0 0 210 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.74846e-07"
                y1="2"
                x2="210"
                y2="2.00002"
                stroke="black"
                stroke-width="3"
              />
            </svg>

            <svg
              style={{
                position: "absolute",
                top: "11px",
                left: `${this.state.l}px`,
              }}
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6.5" cy="6.5" r="6.5" fill="black" />
            </svg>
          </div>
        </div>

        <div className="mobilejauge">
          <div className="mobiledash">
            <svg
              width="126"
              height="3"
              viewBox="0 0 126 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.31134e-07"
                y1="1.5"
                x2="126"
                y2="1.50001"
                stroke="black"
                stroke-width="3"
              />
            </svg>

            <svg
              style={{
                position: "absolute",
                top: "11px",
                left: `${this.state.m}px`,
              }}
              width="10"
              height="10"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6.5" cy="6.5" r="6.5" fill="black" />
            </svg>
          </div>
        </div>

        {this.state.step !== 1 ? (
          <div>
            <div
              className="back-mobile"
              onClick={() => this.goBack()}
              onKeyDown={() => this.goBack()}
            ></div>
            <div className="back" onClick={() => this.goBack()}>
              {" "}
              <svg
                width="56"
                height="16"
                viewBox="0 0 56 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM56 7L1 7V9L56 9V7Z"
                  fill="black"
                />
              </svg>
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
                <svg
                  width="4"
                  height="86"
                  viewBox="0 0 4 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.5"
                    y1="85.5"
                    x2="2.5"
                    y2="0.5"
                    stroke="black"
                    stroke-width="4"
                  />
                </svg>

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
                    {" "}
                    <a href="https://alicethonnier.netlify.com/" target="blank">
                      Alice Thonnier
                    </a>
                  </span>
                  , styliste et modéliste
                </p>
                <video className="asafvid" playsInline autoPlay loop muted>
                  <source src={alicev} type="video/mp4" />
                </video>
                <div class="loader">
                  <img src={load} alt="load" />
                </div>
              </div>
            ) : null}
            {this.state.step === 8 ? (
              <div>
                <p>
                  Ou celui de l’
                  <span className="text">
                    <a href="https://jeskieaveclasaf.fr/" target="blank">
                      ASAF
                    </a>
                  </span>
                  (association de ski d’AIR FRANCE)
                </p>

                <video className="asafvid" playsInline autoPlay loop muted>
                  <source src={asafv} type="video/mp4" />
                </video>
                <div class="loader">
                  <img src={load} alt="load" />
                </div>
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
                    - React.js
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
                    - Javascript
                    <br />
                  </span>
                ) : null}
                {this.state.step === 12 ||
                this.state.step === 13 ||
                this.state.step === 14 ||
                this.state.step === 15 ||
                this.state.step === 16 ? (
                  <span style={{ display: "flex" }}>
                    - Gatsby.js
                    <br />
                  </span>
                ) : null}
                {this.state.step === 13 ||
                this.state.step === 14 ||
                this.state.step === 15 ||
                this.state.step === 16 ? (
                  <span style={{ display: "flex" }}>
                    - SCSS
                    <br />
                  </span>
                ) : null}
                {this.state.step === 14 ||
                this.state.step === 15 ||
                this.state.step === 16 ? (
                  <span style={{ display: "flex" }}>
                    - Vue.js
                    <br />
                  </span>
                ) : null}
                {this.state.step === 15 || this.state.step === 16 ? (
                  <span style={{ display: "flex" }}>
                    - GraphQL
                    <br />
                  </span>
                ) : null}
                {this.state.step === 16 ? (
                  <span style={{ display: "flex" }}>
                    - Netlify
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
                          Gatsby.js
                        </a>
                      </span>{" "}
                      qui permet une mise en page et undesign totalement libres.{" "}
                    </p>{" "}
                  </div>
                ) : null}
                {this.state.step === 21 ? (
                  <div>
                    <div className="arrowMobile">
                      <img src={letout} height="100px" alt="arrow" />
                    </div>
                    <div className="arrow">
                      <img width="200px" src={arrowdouble} alt="arrow" />
                      <p>
                        {" "}
                        le tout lié par{" "}
                        <span className="text">
                          <a href="https://graphql.org/" target="blank">
                            {" "}
                            GraphQL
                          </a>
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
                </span>{" "}
                ou{" "}
                <span className="text">
                  <a href="https://cargo.site/" target="blank">
                    cargo{" "}
                  </a>
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
                  - Pour ajuster un footer
                  <br />
                </span>
              ) : null}
              {this.state.step === 24 ||
              this.state.step === 25 ||
              this.state.step === 26 ||
              this.state.step === 27 ? (
                <span style={{ display: "flex" }}>
                  - Trier des articles
                  <br />
                </span>
              ) : null}
              {this.state.step === 25 ||
              this.state.step === 26 ||
              this.state.step === 27 ? (
                <span style={{ display: "flex" }}>
                  - Changer un header
                  <br />
                </span>
              ) : null}
              {this.state.step === 26 || this.state.step === 27 ? (
                <span style={{ display: "flex" }}>
                  - Modifier une page
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
                  <img
                    src={foot1}
                    className="footpic"
                    alt="mi"
                    onClick={() => this.openPopup(foot1)}
                  />
                ) : null}
                {this.state.step === 31 ||
                this.state.step === 32 ||
                this.state.step === 33 ? (
                  <img
                    src={foot2}
                    className="footpic"
                    alt="mi"
                    onClick={() => this.openPopup(foot2)}
                  />
                ) : null}
                {this.state.step === 32 || this.state.step === 33 ? (
                  <img
                    src={foot3}
                    className="footpic"
                    alt="mi"
                    onClick={() => this.openPopup(foot3)}
                  />
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
                  </span>{" "}
                </p>
              ) : null}
              {this.state.step === 35 ? (
                <p>
                  Télécharger mon{" "}
                  <span className="text">
                    <a href={cv} target="blank" download>
                      CV
                    </a>
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
                Petit récapitulatif{" "}
                <span className="dash2">
                  <svg
                    width="42"
                    height="14"
                    viewBox="0 0 42 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="6"
                      y1="7.5"
                      x2="58"
                      y2="7.5"
                      stroke="black"
                      stroke-width="3"
                    />
                  </svg>
                </span>
              </p>
            ) : null}
            {this.state.step > 41 ? (
              <div className="recap">
                <h1>RÉCAP</h1>
                <div className="recap-content">
                  <div className="first">
                    <p>Anna Bendahan, 25 </p>
                    <p>Design & développement web</p>
                    <p>Basée à Paris</p>
                  </div>
                  <br />
                  <div className="second">
                    <p>
                      {" "}
                      an<b>.</b>bendahan@gmail.com{" "}
                    </p>{" "}
                    <p> + 33 659133919</p>
                    <p>
                      <span className="text">
                        <a
                          href="https://www.linkedin.com/in/anna-bendahan-55324113a/"
                          target="blank"
                        >
                          linkedin{" "}
                        </a>
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
                      </span>{" "}
                    </p>
                    <p>
                      <span className="text">
                        <a href={cv} target="blank" download>
                          CV
                        </a>
                      </span>{" "}
                      <p />
                    </p>
                  </div>
                  <br />
                  <div className="third">
                    <p>
                      <span className="text">
                        <a href="http://www.qm-avocat.com/" target="blank">
                          www.qm-avocat.com{" "}
                        </a>
                      </span>{" "}
                    </p>
                    <p>
                      <span className="text">
                        <a
                          href="https://alicethonnier.netlify.com/"
                          target="blank"
                        >
                          alicethonnier.com{" "}
                        </a>
                      </span>{" "}
                    </p>
                    <p>
                      <span className="text">
                        <a href="https://jeskieaveclasaf.fr/" target="blank">
                          jeskieaveclasaf.fr{" "}
                        </a>
                      </span>{" "}
                    </p>
                    <br />
                    <p>
                      <div>
                        <Link to="/projets">Autres projets </Link>
                      </div>
                    </p>
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
              <span className="dash2">
                <svg
                  width="42"
                  height="14"
                  viewBox="0 0 42 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="6"
                    y1="6.5"
                    x2="58"
                    y2="7.5"
                    stroke="black"
                    stroke-width="3"
                  />
                </svg>
              </span>
            </p>
          </div>
        ) : (
          <div
            className="footer
          "
          >
            <p onClick={() => this.resetHandler()}>
              <span className="dash2">
                <svg
                  width="42"
                  height="14"
                  viewBox="0 0 42 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="6"
                    y1="6.5"
                    x2="58"
                    y2="7.5"
                    stroke="black"
                    stroke-width="3"
                  />
                </svg>
              </span>
              recommencer
            </p>
          </div>
        )}
      </Layout>
    )
  }
}
export default IndexPage
