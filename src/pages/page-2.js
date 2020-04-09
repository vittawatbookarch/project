import React from "react"
import { Link } from "gatsby"


import "../components/style.css"
import Header from "../components/header"


const SecondPage = () => (

  <div>

    <Header />
    
    <Link to="projectA" className="gasf"><img src="../images/IMG_0996.png"/></Link>

    <img src="components/images/img_0996.png"></img>

  </div>
)

export default SecondPage

