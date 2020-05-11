import React, { Component } from "react"
import { Link } from "gatsby"

import { navigate } from "@reach/router"

import ProjectLayout from "../components/project-layout"

import Layout from "../components/layout"
import SEO from "../components/seo"

import mi from "../images/me.jpg"
import mi2 from "../images/me2.jpg"
import mi3 from "../images/me3.jpg"

class Presentation extends Component {
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
        1500
      )
    }
  }

  handleNextPage() {
    navigate("/childhood/")
  }

  handleProject() {
    this.setState({ project: this.state.project + 1, scroll: 0 })
    console.log("PROJECT" + this.state.project)
  }

  render() {
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
            <img src={mi} alt="" />
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
              {" "}
              WELCOME TO MY WEBSITE. I AM ANNA BENDAHAN, A FREELANCE DEVELOPER
              BASED IN PARIS. <b>I DESIGN & BUILD WEBSITES.</b>
            </p>
          </div>
        </div>
        line=<div className="line">
          <svg
            width="4267"
            height="1"
            viewBox="0 0 4267 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1L4267 0.999627" stroke="black" />
          </svg>
        </div>
      />
    )

    return (
      <Layout>
        <SEO title="2" />
        <div onWheel={() => this.handleScroll()}>{project}</div>
      </Layout>
    )
  }
}

export default Presentation
