import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Popup = props => (
  <div className="popup">
    {" "}
    <img src={props.img} alt="photo" />
  </div>
)

export default Popup
