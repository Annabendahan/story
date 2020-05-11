import React, { Component } from "react"
import { Link } from "gatsby"

import { navigate } from "@reach/router"

import ProjectLayout from "../components/project-layout"

import Layout from "../components/layout"
import SEO from "../components/seo"

import f1 from "../images/MHILSZ2.png"
import f2 from "../images/foot7.jpg"
import f4 from "../images/foot18.jpg"

import f3 from "../images/foot10.png"

class Football extends Component {
  state = {
    project: 1,
    scroll: 0,
    away: false,
    mounted: false,
    pic: 1,
  }

  componentDidMount() {
    this.setState({ mounted: true })
    window.addEventListener("scroll", this.handleScroll, { passive: true })
    setInterval(
      function() {
        this.handleNextPhoto()
      }.bind(this),
      500
    )
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleNextPhoto() {
    this.setState({ pic: this.state.pic + 1 })
  }

  handleScroll = e => {
    this.setState({ scroll: this.state.scroll + 1, away: true })
    console.log(this.state.scroll)
    if (this.state.scroll < 1) {
      setTimeout(
        function() {
          this.handleNextPage()
        }.bind(this),
        1500
      )
    }
  }

  handleNextPage() {
    navigate("/photography/")
  }

  handleProject() {
    this.setState({ project: this.state.project + 1, scroll: 0 })
    console.log("PROJECT" + this.state.project)
  }

  render() {
    let pic = f1

    if (this.state.pic == 1) {
      pic = f1
    } else if (this.state.pic == 2) {
      pic = f2
    } else if (this.state.pic == 3) {
      pic = f3
    } else if (this.state.pic == 4) {
      pic = f4
    } else if (this.state.pic == 5) {
      this.setState({ pic: 1 })
    }

    let project = (
      <ProjectLayout
        content=<div className="box box__right">
          <div
            style={{
              transform: this.state.mounted
                ? "translateX(0vh)"
                : "translateX(100vw)",
              transition: "transform 1s cubic-bezier(0.72, 0.0, 0.28, 1.0)",
            }}
          >
            <img className="terrain" src={f1} alt="terrain" />
          </div>
          <div
            style={{
              transform: this.state.mounted
                ? "translateX(0vh)"
                : "translateX(100vw)",
              transition: "transform .5s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
            }}
            className="box__text"
          >
            <p>
              APART FROM CODING, I PLAY FOOTBALL IN PARIS 20{" "}
              <b>
                <a
                  href="https://www.instagram.com/usparisxifeminine/"
                  target="blank"
                >
                  @USPARISXIFEMINIME
                </a>
              </b>
            </p>
          </div>
        </div>
        line=<div className="line">
          <svg
            width="1440"
            height="1"
            viewBox="0 0 1440 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M-535 1L1922 0.999785" stroke="black" />
          </svg>
        </div>
      />
    )

    return (
      <Layout>
        <SEO title="6" />
        <div onWheel={() => this.handleScroll()}>{project}</div>
      </Layout>
    )
  }
}

export default Football
