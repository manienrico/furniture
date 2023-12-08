import { Icon, InlineIcon } from "@iconify/react"

import { ReactComponent as Furniro } from "../../assets/SkinClinic.svg"
import { ReactComponent as FurniroLogo } from "../../assets/logo.svg"

import { Outlet,NavLink, Link } from 'react-router-dom'

import { Fragment } from 'react'

import { middleNav } from "../components"

import './navbar.styles.css'

export default function Navbar() {
  return (
    <Fragment>
    <header>
      <nav>
        <NavLink to="/" className="logo-container">
            <FurniroLogo className="logo" />
            <Furniro className="logo-word" />
        </NavLink>
          
          <ul className="mid-nav">
          {
            middleNav.map(item=>{
              return(
                <li key={item.id}>
                  <NavLink to={item.path} className={item.cName}>{item.title}</NavLink>
                </li>
              )
            })
          }
          </ul>
          <ul className="nav-icons">
            <li>
              <InlineIcon style={{fontSize: '24px', cursor: 'pointer', padding: 2, }} icon="mdi:account-alert-outline" />
            </li>
            <li>
              <InlineIcon style={{fontSize:'24px', cursor: 'pointer', padding: 2, }} icon="akar-icons:search" /> 
            </li>
            <li>
              <InlineIcon style={{fontSize:'24px', cursor: 'pointer', padding: 2, }} icon="akar-icons:heart" />
            </li>
            <li>
              <InlineIcon style={{fontSize:'24px', cursor: 'pointer', padding: 2, }} icon="ant-design:shopping-cart-outlined" onClick={{}} />
            </li>
          </ul>
          
            {/* <NavLink exact 
            to="/"
            activeClassName="active"
            className="navlink">Home</NavLink>
            <NavLink 
            to="shop"
            className="navlink" >Shop</NavLink>
            <NavLink 
            to="about"
            className="navlink" >About</NavLink>
            <NavLink 
            to="contact"
            className="navlink" >Contact</NavLink> */}
      </nav>
          {/* <ul className="header-icons-container">
            <li>
              
                <InlineIcon style={{fontSize: '24px', cursor: 'pointer'}} icon="mdi:account-alert-outline" />
              
            </li>
            <li>
              
                <InlineIcon style={{fontSize:'24px', cursor: 'pointer'}} icon="akar-icons:search" /> 
              
            </li>
            <li>
              
                <InlineIcon style={{fontSize:'24px', cursor: 'pointer'}} icon="akar-icons:heart" />
              
            </li>
            <li>
              
                <InlineIcon style={{fontSize:'24px', cursor: 'pointer'}} icon="ant-design:shopping-cart-outlined" onClick={{}} />
    
            </li>
          </ul> */}
      </header>
      <Outlet />
    </Fragment>
  )
}
