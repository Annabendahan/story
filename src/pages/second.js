import React, { Component } from "react"
import { Link } from "gatsby"

import { navigate } from "@reach/router"

import ProjectLayout from "../components/project-layout"

import Layout from "../components/layout"
import SEO from "../components/seo"

import a1 from "../images/alice1.png"
import a2 from "../images/alice2.png"
import a3 from "../images/alice3.png"

class Second extends Component {
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
    navigate("/third/")
  }

  handleProject() {
    this.setState({ project: this.state.project + 1, scroll: 0 })
    console.log("PROJECT" + this.state.project)
  }

  render() {
    let project = (
      <ProjectLayout
        img=""
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
        text="After studiying business law, i decided to learn to code. I worked in a digital agency and now i am a freelance designer & developer."
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

export default Second
