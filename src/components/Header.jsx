import React from "react"
import { NavLink } from "react-router-dom"

const HeaderComp = () => {
  return (
    <div>
      <div className="logoText">
        <h1 className="textThe">The</h1>
        <h1 className="textSiren">Siren</h1>
      </div>

      <div className="navBar">
        <NavLink to="/home" className="link">
          Home
        </NavLink>
        <NavLink to="/bollywood" className="link">
          Bollywood
        </NavLink>
        <NavLink to="/technology" className="link">
          Technology
        </NavLink>
        <NavLink to="/hollywood" className="link">
          Hollywood
        </NavLink>
        <NavLink to="/fitness" className="link">
          Fitness
        </NavLink>
        <NavLink to="/food" className="link">
          Food
        </NavLink>
      </div>
      <hr className="navHr" />
    </div>
  )
}

export default HeaderComp