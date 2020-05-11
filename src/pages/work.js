import React, { Component } from "react"
import { Link } from "gatsby"

import { navigate } from "@reach/router"

import ProjectLayout from "../components/project-layout"

import Layout from "../components/layout"
import SEO from "../components/seo"

import d2 from "../images/d2.png"
import a2 from "../images/alice2.png"
import a3 from "../images/alice3.png"

class Work extends Component {
  state = {
    project: 1,
    scroll: 0,
    away: false,
    lines: 32783,
    mounted: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true })
    this.setState({ mounted: true })
    setInterval(
      function() {
        this.setState({ lines: this.state.lines + 1 })
      }.bind(this),
      1000
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
    navigate("/football/")
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
            <p>
              I ALSO CREATED A WEBSITE FOR QUENTIN MAMERI, A LAWYER & FOR THE
              SKI ASSOCIATION OF AIR FRANCE, I HELPED ON CARGO & WORDPRESS
              WEBSITES...
            </p>
          </div>
          <div
            style={{
              transform: this.state.mounted
                ? "translateX(0vh)"
                : "translateX(100vw)",
              transition: "transform 1s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
            }}
            className="code-count"
          >
            <h5> {this.state.lines}</h5>
            <h3>LINES OF CODE</h3>
          </div>{" "}
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
        <SEO title="3" />
        <div onWheel={() => this.handleScroll()}>{project}</div>
      </Layout>
    )
  }
}

export default Work
