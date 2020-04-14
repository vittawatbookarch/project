import React from "react"
import { Link } from "gatsby"


import "../components/style.css"

const Header = () => (

  <div className="header">

    <div>
    <Link to="/" className="vittawat"> VITTAWAT ARCHANAINANT</Link>
    </div>

    <div>
    <Link to="page-2" className="gasf"> Design </Link>
    <Link to="page-3" className="gasf"> 3D </Link>
    <Link to="page-4" className="gasf"> Sound </Link>
    </div>

  </div>
)

export default Header
