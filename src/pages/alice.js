import React, { Component } from "react"
import { Link } from "gatsby"

import { navigate } from "@reach/router"

import ProjectLayout from "../components/project-layout"

import Layout from "../components/layout"
import SEO from "../components/seo"

import alice from "../images/alice3.png"
import h1 from "../images/h1.png"
import n1 from "../images/n1.png"
import bx3 from "../images/bx3.png"
import bx5 from "../images/bx5.png"
import h5 from "../images/h5.png"

class Alice extends Component {
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
    navigate("/work/")
  }

  handleNextPhoto() {
    this.setState({ pic: this.state.pic + 1 })
  }

  handleProject() {
    this.setState({ project: this.state.project + 1, scroll: 0 })
    console.log("PROJECT" + this.state.project)
  }

  render() {
    let pic = 1

    if (this.state.pic == 1) {
      pic = alice
    } else if (this.state.pic == 2) {
      pic = h1
    } else if (this.state.pic == 3) {
      pic = bx3
    } else if (this.state.pic == 4) {
      pic = n1
    } else if (this.state.pic == 5) {
      pic = bx5
    } else if (this.state.pic == 6) {
      pic = h5
    } else if (this.state.pic == 7) {
      this.setState({ pic: 1 })
    }

    let project = (
      <ProjectLayout
        content=<div className="box box__left">
          <div
            style={{
              transform: this.state.mounted
                ? "translateX(0vh)"
                : "translateX(100vw)",
              transition: "transform 1s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
            }}
          >
            {" "}
            {/* <video playsInline autoPlay muted width="250">
              <source src={alicevid} type="video/mp4" />
            </video> */}
            <img src={pic} alt="" />
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
              BACK IN PARIS, I WORKED IN A DIGITAL AGENCY, AND THEN BECAME A
              FREELANCER. I CREATED A SITE FOR{" "}
              <b>
                <a href="https://alicethonnier.netlify.app/" target="blank">
                  ALICE THONNIER
                </a>
              </b>
              , A STYLIST & PATTERN MAKER, TO SHOW HER BRAND AND HER DIFFERENT
              COLLECTIONS.
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
        <SEO title="4" />
        <div onWheel={() => this.handleScroll()}>{project}</div>
      </Layout>
    )
  }
}

export default Alice
