import React, { Component } from "react"
import { Link } from "gatsby"

import { navigate } from "@reach/router"

import ProjectLayout from "../components/project-layout"

import Layout from "../components/layout"
import SEO from "../components/seo"

import mi from "../images/IMG_4473.jpg"

class Start extends Component {
  state = {
    project: 1,
    scroll: 0,
    away: false,
  }

  componentDidMount() {
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
    navigate("/first/")
  }

  handleProject() {
    this.setState({ project: this.state.project + 1, scroll: 0 })
    console.log("PROJECT" + this.state.project)
  }

  render() {
    let project = (
      <ProjectLayout text=<p className="start-text"> "SCROLL TO START"</p> />
    )

    return (
      <Layout>
        <SEO title="Projects" />
        <div
          className="linestart"
          style={{
            transform: this.state.away
              ? "translateX(-100vw)"
              : "translateX(0vh)",
            transition: "transform 1s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
          }}
        >
          <svg
            width="3440"
            height="1"
            viewBox="0 0 3440 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M-535 1L1922 0.999785" stroke="black" />
          </svg>
        </div>
        <div onWheel={() => this.handleScroll()}>{project}</div>
      </Layout>
    )
  }
}

export default Start
