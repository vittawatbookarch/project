import React from "react"
import { Link } from "gatsby"


import "../components/style.css"
import Header from "../components/header"
import Content from "../components/content"


const IndexPage = () => (


  <div className="box">
   
   <div className="center">
   <Header />
   <Content />
   </div>
  <button type="button" className="button">aaaa </button> 
    
   <div className="wrapper">
  <div className="one">One
  <Content />

  </div>
  <div className="two">Two
  <Header />
  <Header />

  </div>
  <div className="three">Three</div>
  <div className="four">Four</div>
  <div className="five">Five</div>
  <div className="six">Six</div>
</div>
 

  </div>
)

export default IndexPage
