/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { navigate } from "@reach/router"

import React, { Component } from "react"

import "./style.scss"

class Layout extends Component {
  handleReturn = () => {
    navigate(-1)
  }
  render() {
    console.log(this)
    return (
      <>
        <div>
          <div className="header">
            {this.props.children[0].props.title != 1 ? (
              <div className="goback" onClick={() => this.handleReturn()}>
                <svg
                  width="30"
                  height="4"
                  viewBox="0 0 30 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.823223 1.82322C0.725592 1.92085 0.725592 2.07915 0.823223 2.17678L2.41421 3.76777C2.51184 3.8654 2.67014 3.8654 2.76777 3.76777C2.8654 3.67014 2.8654 3.51184 2.76777 3.41421L1.35355 2L2.76777 0.585786C2.8654 0.488155 2.8654 0.329864 2.76777 0.232233C2.67014 0.134602 2.51184 0.134602 2.41421 0.232233L0.823223 1.82322ZM30 1.75L1 1.75V2.25L30 2.25V1.75Z"
                    fill="black"
                  />
                </svg>

                <h4>BACK</h4>
              </div>
            ) : (
              <div> </div>
            )}
            <div className="pagi">
              <h6>PORTFOLIO</h6>
              <svg
                className="dash-thin"
                width="30"
                height="1"
                viewBox="0 0 30 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="2.18557e-08"
                  y1="0.75"
                  x2="30"
                  y2="0.750002"
                  stroke="black"
                  stroke-width="0.5"
                />
              </svg>
              <b>
                <h4>{this.props.children[0].props.title}/9</h4>
              </b>
            </div>
          </div>

          <main>{this.props.children}</main>
        </div>
      </>
    )
  }
}

export default Layout
