import React from "react"
import { Link } from "gatsby"


import "../components/style.css"
import Header from "../components/header"
import Pavilion from "../images/IMG_0996.png"
import Image from "../images/gatsby-icon.png"

const IndexPage = () => (

  <div>
   
    <Header />
    
    <Link to="page-2" className="gasf"> aaa </Link>
    <p>Bangkok based designer, proficient in product design, interior design, lighting object, 3D Making, furniture, decorative product, sound design. With 4 years of experience in end to end Industrial design, I’ve developed and maintain in organisation’s design process and delivery. Created and executed design projects for Lightsculptures, Heineken, non-corporate clients and etc. Delivered creativity, flexibility and sincerity. Transforming conceptual into rich, fulfilling experiences into completed outcome.</p>

    <Link to="page-2" className="gasf"><img src={Pavilion}/></Link>


    <img src={Pavilion}/>    
    <p>Pavilion</p>
    <img src={Image}/>
    <p>Gatsbyicon</p>

  </div>
)

export default IndexPage
