import React, { Component } from "react"
import { Link } from "gatsby"

import { navigate } from "@reach/router"

import ProjectLayout from "../components/project-layout"

import Layout from "../components/layout"
import SEO from "../components/seo"

import terrain from "../images/terr3.png"

class Fifth extends Component {
  state = {
    project: 1,
    scroll: 0,
    away: false,
    mounted: false,
  }

  componentDidMount() {
    this.setState({ mounted: true })
    window.addEventListener("scroll", this.handleScroll, { passive: true })
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
        1300
      )
    }
  }

  handleNextPage() {
    navigate("/sixth/")
  }

  handleProject() {
    this.setState({ project: this.state.project + 1, scroll: 0 })
    console.log("PROJECT" + this.state.project)
  }

  render() {
    let project = (
      <ProjectLayout
        content=<div className="box box__right">
          <div
            style={{
              transform: this.state.mounted
                ? "translateX(0vh)"
                : "translateX(100vw)",
              transition: "transform .5s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
            }}
            className="box__text"
          >
            <h3>Football</h3>
            <p>Beside designing & coding, I play football @usparisxifeminime</p>
          </div>
          <div
            style={{
              transform: this.state.mounted
                ? "translateX(0vh)"
                : "translateX(100vw)",
              transition: "transform 1s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
            }}
          >
            <img src={terrain} alt="terrain" />
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
        <SEO title="Projects" />
        <div onWheel={() => this.handleScroll()}>{project}</div>
      </Layout>
    )
  }
}

export default Fifth
