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
import nokia from "../images/nokia.jpg"
import cv from "../images/CVJAN2020.pdf"

import asafv from "../images/asafvideo2.mp4"

import alicev from "../images/alicesite.mp4"

import alpe from "../images/alpeh3 1.png"
import img from "../images/IMG_0356 copie.jpg"

class IndexPage extends Component {
  state = {
    step: 1,
  }

  nextStepHandler = () => {
    this.setState({ step: this.state.step + 1 })
  }

  goEndHandler = () => {
    this.setState({ step: 42 })
  }

  resetHandler = () => {
    this.setState({ step: 1 })
  }

  render() {
    let d2 = Date.now()
    let d1 = new Date("January 1, 2018")
    var dDiff = new Date(d2 - d1)

    console.log(dDiff)
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

    console.log(txt)

    return (
      <Layout>
        <SEO title="Accueil" />

        <div className="main" onClick={() => this.nextStepHandler()}>
          <div className="content">
            {this.state.step === 1 ? (
              <p>
                <b>
                  {" "}
                  Bonjour, <br /> Cliquer pour découvrir{" "}
                </b>
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
                    <p> Je suis Anna Bendahan </p>
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
                  Je suis <b> développeuse web en freelance </b> depuis 2 ans{" "}
                  <br />
                  <br />
                </p>
              </div>
            ) : null}

            {this.state.step === 6 ? (
              <div>
                <svg
                  width="9"
                  height="34"
                  viewBox="0 0 9 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.14645 33.8536C4.34171 34.0488 4.65829 34.0488 4.85355 33.8536L8.03553 30.6716C8.2308 30.4763 8.2308 30.1597 8.03553 29.9645C7.84027 29.7692 7.52369 29.7692 7.32843 29.9645L4.5 32.7929L1.67157 29.9645C1.47631 29.7692 1.15973 29.7692 0.964466 29.9645C0.769204 30.1597 0.769204 30.4763 0.964466 30.6716L4.14645 33.8536ZM4 0.5L4 33.5H5L5 0.5L4 0.5Z"
                    fill="#1027fa"
                  />
                </svg>
                <p className="short">
                  <br />
                  <br />
                  Je crée tout types de sites internet, depuis le design
                  d’interface jusqu’au déploiement du site
                </p>
              </div>
            ) : null}

            {this.state.step === 7 ? (
              <div>
                <p>
                  Comme le site d'<b>Alice Thonnier</b>, styliste et modéliste
                </p>
                <video className="asafvid" autoPlay loop muted>
                  <source src={alicev} type="video/mp4" />
                </video>
              </div>
            ) : null}

            {this.state.step === 8 ? (
              <div>
                <p>
                  Ou celui de l’<b>ASAF</b> (association de ski d’AIR FRANCE)
                </p>
                <video className="asafvid" autoPlay loop muted>
                  <source src={asafv} type="video/mp4" />
                </video>
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
                  J’utilise principalement des technologies modernes pour créer
                  des sites <b> rapides, efficaces et responsifs </b>
                </p>
              ) : null}
              <p style={{ textAlign: "left", width: "200px", margin: "auto" }}>
                {this.state.step === 10 ||
                this.state.step === 11 ||
                this.state.step === 12 ||
                this.state.step === 13 ||
                this.state.step === 14 ||
                this.state.step === 15 ||
                this.state.step === 16 ? (
                  <b>
                    <br />{" "}
                    <svg
                      width="24"
                      height="8"
                      viewBox="0 0 34 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3536 4.35356C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464469C29.9763 0.269207 29.6597 0.269207 29.4645 0.464469C29.2692 0.659731 29.2692 0.976313 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-4.37114e-08 4.5L33 4.5L33 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                        fill="#1027fa"
                      />
                    </svg>{" "}
                    React.js
                    <br />
                  </b>
                ) : null}
                {this.state.step === 11 ||
                this.state.step === 12 ||
                this.state.step === 13 ||
                this.state.step === 14 ||
                this.state.step === 15 ||
                this.state.step === 16 ? (
                  <b>
                    <svg
                      width="24"
                      height="8"
                      viewBox="0 0 34 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3536 4.35356C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464469C29.9763 0.269207 29.6597 0.269207 29.4645 0.464469C29.2692 0.659731 29.2692 0.976313 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-4.37114e-08 4.5L33 4.5L33 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                        fill="#1027fa"
                      />
                    </svg>{" "}
                    Javascript
                    <br />
                  </b>
                ) : null}
                {this.state.step === 12 ||
                this.state.step === 13 ||
                this.state.step === 14 ||
                this.state.step === 15 ||
                this.state.step === 16 ? (
                  <b>
                    {" "}
                    <svg
                      width="24"
                      height="8"
                      viewBox="0 0 34 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3536 4.35356C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464469C29.9763 0.269207 29.6597 0.269207 29.4645 0.464469C29.2692 0.659731 29.2692 0.976313 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-4.37114e-08 4.5L33 4.5L33 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                        fill="#1027fa"
                      />
                    </svg>{" "}
                    Gatsby.js
                    <br />
                  </b>
                ) : null}
                {this.state.step === 13 ||
                this.state.step === 14 ||
                this.state.step === 15 ||
                this.state.step === 16 ? (
                  <b>
                    {" "}
                    <svg
                      width="24"
                      height="8"
                      viewBox="0 0 34 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3536 4.35356C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464469C29.9763 0.269207 29.6597 0.269207 29.4645 0.464469C29.2692 0.659731 29.2692 0.976313 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-4.37114e-08 4.5L33 4.5L33 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                        fill="#1027fa"
                      />
                    </svg>{" "}
                    SCSS
                    <br />
                  </b>
                ) : null}
                {this.state.step === 14 ||
                this.state.step === 15 ||
                this.state.step === 16 ? (
                  <b>
                    {" "}
                    <svg
                      width="24"
                      height="8"
                      viewBox="0 0 34 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3536 4.35356C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464469C29.9763 0.269207 29.6597 0.269207 29.4645 0.464469C29.2692 0.659731 29.2692 0.976313 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-4.37114e-08 4.5L33 4.5L33 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                        fill="#1027fa"
                      />
                    </svg>{" "}
                    Vue.js
                    <br />
                  </b>
                ) : null}
                {this.state.step === 15 || this.state.step === 16 ? (
                  <b>
                    {" "}
                    <svg
                      width="24"
                      height="8"
                      viewBox="0 0 34 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3536 4.35356C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464469C29.9763 0.269207 29.6597 0.269207 29.4645 0.464469C29.2692 0.659731 29.2692 0.976313 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-4.37114e-08 4.5L33 4.5L33 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                        fill="#1027fa"
                      />
                    </svg>{" "}
                    GraphQL
                    <br />
                  </b>
                ) : null}
                {this.state.step === 16 ? (
                  <b>
                    {" "}
                    <svg
                      width="24"
                      height="8"
                      viewBox="0 0 34 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3536 4.35356C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464469C29.9763 0.269207 29.6597 0.269207 29.4645 0.464469C29.2692 0.659731 29.2692 0.976313 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-4.37114e-08 4.5L33 4.5L33 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                        fill="#1027fa"
                      />
                    </svg>{" "}
                    Netlify
                    <br />
                  </b>
                ) : null}
              </p>
            </div>
            {this.state.step === 17 ? (
              <p className="short">
                {" "}
                Ma priorité? Donner au client la plus grande marge de manoeuvre
                pour gérer son site{" "}
              </p>
            ) : null}
            {this.state.step === 18 ||
            this.state.step === 19 ||
            this.state.step === 20 ||
            this.state.step === 21 ? (
              <p>
                {" "}
                Comme par exemple pour le site de <b>Quentin Mameri</b>, avocat{" "}
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
                    <p className="t">
                      {" "}
                      <b> (gatbsy.js) </b>
                    </p>
                    <p className="veryshort">
                      {" "}
                      Une interface dynamique, une mise en page et un design
                      totalement libres{" "}
                    </p>{" "}
                  </div>
                ) : null}
                {this.state.step === 21 ? (
                  <div className="arrow">
                    <svg
                      width="183"
                      height="23"
                      viewBox="0 0 183 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M182.354 4.35356C182.549 4.1583 182.549 3.84172 182.354 3.64646L179.172 0.464476C178.976 0.269214 178.66 0.269214 178.464 0.464476C178.269 0.659738 178.269 0.976321 178.464 1.17158L181.293 4.00001L178.464 6.82844C178.269 7.0237 178.269 7.34028 178.464 7.53554C178.66 7.73081 178.976 7.73081 179.172 7.53554L182.354 4.35356ZM61 4.5L182 4.50001L182 3.50001L61 3.5L61 4.5Z"
                        fill="black"
                      />
                      <path
                        d="M0.646447 18.6464C0.451184 18.8417 0.451184 19.1583 0.646447 19.3536L3.82843 22.5355C4.02369 22.7308 4.34027 22.7308 4.53553 22.5355C4.7308 22.3403 4.7308 22.0237 4.53553 21.8284L1.70711 19L4.53553 16.1716C4.7308 15.9763 4.7308 15.6597 4.53553 15.4645C4.34027 15.2692 4.02369 15.2692 3.82843 15.4645L0.646447 18.6464ZM137 18.5L1 18.5V19.5L137 19.5V18.5Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      {" "}
                      tout ça lié avec <b>GraphQL</b>{" "}
                    </p>{" "}
                  </div>
                ) : null}
                {this.state.step === 20 || this.state.step === 21 ? (
                  <div>
                    <p className="t">
                      <b> (wordpress CMS) </b>
                    </p>
                    <p className="veryshort">
                      {" "}
                      Une plateforme qui permet au client de gérer le contenu de
                      son site{" "}
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
                Enfin, j’interviens aussi sur des sites <b>
                  {" "}
                  wordpress{" "}
                </b> ou <b>cargo</b>
              </p>
            ) : null}
            <p
              style={{
                textAlign: "left",
                width: "300px",
                margin: "auto",
              }}
            >
              {this.state.step === 23 ||
              this.state.step === 24 ||
              this.state.step === 25 ||
              this.state.step === 26 ||
              this.state.step === 27 ? (
                <b>
                  <svg
                    width="24"
                    height="8"
                    viewBox="0 0 34 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.3536 4.35356C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464469C29.9763 0.269207 29.6597 0.269207 29.4645 0.464469C29.2692 0.659731 29.2692 0.976313 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-4.37114e-08 4.5L33 4.5L33 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                      fill="#1027fa"
                    />
                  </svg>{" "}
                  Pour ajuster un footer <br />
                </b>
              ) : null}
              {this.state.step === 24 ||
              this.state.step === 25 ||
              this.state.step === 26 ||
              this.state.step === 27 ? (
                <b>
                  <svg
                    width="24"
                    height="8"
                    viewBox="0 0 34 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.3536 4.35356C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464469C29.9763 0.269207 29.6597 0.269207 29.4645 0.464469C29.2692 0.659731 29.2692 0.976313 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-4.37114e-08 4.5L33 4.5L33 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                      fill="#1027fa"
                    />
                  </svg>{" "}
                  Trier des articles
                  <br />
                </b>
              ) : null}
              {this.state.step === 25 ||
              this.state.step === 26 ||
              this.state.step === 27 ? (
                <b>
                  <svg
                    width="24"
                    height="8"
                    viewBox="0 0 34 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.3536 4.35356C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464469C29.9763 0.269207 29.6597 0.269207 29.4645 0.464469C29.2692 0.659731 29.2692 0.976313 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-4.37114e-08 4.5L33 4.5L33 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                      fill="#1027fa"
                    />
                  </svg>{" "}
                  Changer un header
                  <br />
                </b>
              ) : null}
              {this.state.step === 26 || this.state.step === 27 ? (
                <b>
                  <svg
                    width="24"
                    height="8"
                    viewBox="0 0 34 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.3536 4.35356C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464469C29.9763 0.269207 29.6597 0.269207 29.4645 0.464469C29.2692 0.659731 29.2692 0.976313 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-4.37114e-08 4.5L33 4.5L33 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                      fill="#1027fa"
                    />
                  </svg>{" "}
                  Modifier une page <br />
                </b>
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
              <p> A part ça, je fais beaucoup de football </p>
            ) : null}
            {this.state.step === 29 ||
            this.state.step === 30 ||
            this.state.step === 31 ||
            this.state.step === 32 ||
            this.state.step === 33 ? (
              <div>
                <p>
                  <b>
                    {" "}
                    <a
                      href="https://www.instagram.com/usparisxifeminine/"
                      target="blank"
                    >
                      @usparisxifeminine
                    </a>
                  </b>{" "}
                </p>
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
                  <img src={foot3} alt="mi" />
                ) : null}
                {this.state.step === 31 ||
                this.state.step === 32 ||
                this.state.step === 33 ? (
                  <img src={foot9} alt="mi" />
                ) : null}
                {this.state.step === 32 || this.state.step === 33 ? (
                  <img src={foot5} alt="mi" />
                ) : null}
                {this.state.step === 33 ? null : null}
              </div>
            ) : null}
            <div>
              {this.state.step === 34 || this.state.step === 35 ? (
                <p>
                  N'hésitez pas à aller voir mon{" "}
                  <b>
                    <a
                      href="https://www.instagram.com/annabdh_/"
                      target="blank"
                    >
                      instagram{" "}
                    </a>
                  </b>
                </p>
              ) : null}
              {this.state.step === 35 ? (
                <p>
                  et télécharger mon{" "}
                  <b>
                    {" "}
                    <a href={cv} target="blank" download>
                      CV
                    </a>
                  </b>
                </p>
              ) : null}
            </div>
            {/* CONTACT */}
            {this.state.step === 36 ||
            this.state.step === 37 ||
            this.state.step === 38 ||
            this.state.step === 39 ? (
              <p>Et me contacter bien sûr </p>
            ) : null}
            {this.state.step === 37 ||
            this.state.step === 38 ||
            this.state.step === 39 ? (
              <img className="nokia" src={nokia} alt="mi" />
            ) : null}
            {this.state.step === 38 || this.state.step === 39 ? (
              <p>
                <b>0659133919</b>
              </p>
            ) : null}
            {this.state.step === 39 ? (
              <p>
                <b>an.bendahan@gmail.com</b>
              </p>
            ) : null}
            {this.state.step === 40 || this.state.step === 41 ? (
              <p>Merci pour votre visite !</p>
            ) : null}
            {this.state.step === 41 ? (
              <p>
                Et petit récapitulatif{" "}
                <svg
                  width="34"
                  height="8"
                  viewBox="0 0 34 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.3536 4.35356C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464469C29.9763 0.269207 29.6597 0.269207 29.4645 0.464469C29.2692 0.659731 29.2692 0.976313 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-4.37114e-08 4.5L33 4.5L33 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                    fill="black"
                  />
                </svg>
              </p>
            ) : null}
            {this.state.step > 41 ? (
              <div className="recap">
                <div className="first">
                  <p>
                    • Anna Bendahan
                    <br />
                    • an.bendahan@gmail.com
                    <br />• 0659133919
                  </p>
                </div>
                <div className="second">
                  <p>
                    •{" "}
                    <a href="http://www.qm-avocat.com/" target="blank">
                      site de Quentin Mameri{" "}
                    </a>
                    <br />•{" "}
                    <a href="https://alicethonnier.netlify.com/" target="blank">
                      site d'Alice Thonnier{" "}
                    </a>
                    <br />•{" "}
                    <a href="https://jeskieaveclasaf.fr/" target="blank">
                      site de l'Asaf{" "}
                    </a>
                  </p>
                </div>
                <div className="third">
                  <p>
                    •{" "}
                    <a href={cv} target="blank" download>
                      CV
                    </a>
                    <br />•{" "}
                    <a
                      href="https://www.instagram.com/annabdh_/"
                      target="blank"
                    >
                      instagram{" "}
                    </a>
                    <br />•{" "}
                    <a
                      href="https://www.linkedin.com/in/anna-bendahan-55324113a/"
                      target="blank"
                    >
                      linkedin{" "}
                    </a>
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {this.state.step < 42 ? (
          <div className="footer" onClick={() => this.goEndHandler()}>
            <p>
              Aller directement à la fin{" "}
              <svg
                width="24"
                height="8"
                viewBox="0 0 34 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3536 4.35356C33.5488 4.15829 33.5488 3.84171 33.3536 3.64645L30.1716 0.464469C29.9763 0.269207 29.6597 0.269207 29.4645 0.464469C29.2692 0.659731 29.2692 0.976313 29.4645 1.17158L32.2929 4L29.4645 6.82843C29.2692 7.02369 29.2692 7.34027 29.4645 7.53554C29.6597 7.7308 29.9763 7.7308 30.1716 7.53554L33.3536 4.35356ZM-4.37114e-08 4.5L33 4.5L33 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                  fill="black"
                />
              </svg>{" "}
            </p>
          </div>
        ) : (
          <div className="footer" onClick={() => this.resetHandler()}>
            <p>
              <svg
                width="34"
                height="8"
                viewBox="0 0 34 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: "20px" }}
              >
                <path
                  d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM34 3.5L1 3.5V4.5L34 4.5V3.5Z"
                  fill="black"
                />
              </svg>
              recommencer
            </p>
          </div>
        )}
      </Layout>
    )
  }
}
export default IndexPage
