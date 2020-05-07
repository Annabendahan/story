import React, { Component } from "react"
import { Link } from "gatsby"

import { navigate } from "@reach/router"

import ProjectLayout from "../components/project-layout"

import Layout from "../components/layout"
import SEO from "../components/seo"

import iphone from "../images/mockup-alice.png"

class Fourth extends Component {
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
        1500
      )
    }
  }

  handleNextPage() {
    navigate("/five/")
  }

  handleProject() {
    this.setState({ project: this.state.project + 1, scroll: 0 })
    console.log("PROJECT" + this.state.project)
  }

  render() {
    let project = (
      <ProjectLayout
        content=<div className="box__text">
          <p>
            I ALSO CREATED A WEBSITE FOR{" "}
            <b>
              <a href="http://www.qm-avocat.com/" target="blank">
                QUENTIN MAMERI
              </a>
            </b>
            , A LAWYER & FOR THE{" "}
            <b>
              <a href="https://jeskieaveclasaf.fr/" target="blank">
                SKI ASSOCIATION
              </a>
            </b>{" "}
            OF AIR FRANCE, I DESIGNED VISUALS FOR RENTMAN, I HELPED ON CARGO &
            WORDPRESS WEBSITES...
          </p>
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
        <SEO title="5" />
        <div onWheel={() => this.handleScroll()}>{project}</div>
      </Layout>
    )
  }
}

export default Fourth
