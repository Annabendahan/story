import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import d8 from "../images/d1.png"
import d9 from "../images/d2.png"
import d3 from "../images/d3.png"
import d4 from "../images/d4.png"
import d5 from "../images/d5.png"
import d6 from "../images/d6.png"
import d7 from "../images/d7.png"

const Projets = () => (
  <Layout>
    <SEO title="Projets" />
    <div className="projets">
      {" "}
      <p> site easyfork </p>
      <img src={d4} alt="img" />
      <img src={d7} alt="img" />
      <p> design pour Rentman </p>
      <img src={d9} alt="img" />
      <img src={d8} alt="img" />
      <p> ancien portfolio </p>
      <img src={d3} alt="img" />
      <p> template pour tina </p>
      <img src={d5} alt="img" />
    </div>
    <div className="footer">
      <Link to="/">Retour à l'accueil</Link>
    </div>
  </Layout>
)

export default Projets
