import React, { Component } from "react"
import { Link } from "gatsby"

import { navigate } from "@reach/router"

import ProjectLayout from "../components/project-layout"

import Layout from "../components/layout"
import SEO from "../components/seo"

import mi from "../images/IMG_4473.jpg"

class End extends Component {
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
    navigate("/one/")
  }

  handleProject() {
    this.setState({ project: this.state.project + 1, scroll: 0 })
    console.log("PROJECT" + this.state.project)
  }

  render() {
    let project = <ProjectLayout />

    return (
      <Layout>
        <SEO title="9" />
        <div
          className="lineend"
          style={{
            transform: this.state.mounted
              ? "translateX(0vw)"
              : "translateX(100vh)",
            transition: "transform 1s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
          }}
        >
          <div>
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
          <h3>THANKS FOR VISITING :)</h3>
        </div>
        <div onWheel={() => this.handleScroll()}>{project}</div>
      </Layout>
    )
  }
}

export default End
