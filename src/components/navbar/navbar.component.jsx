import { Icon, InlineIcon } from "@iconify/react"

import { ReactComponent as Furniro } from "../../assets/SkinClinic.svg"
import { ReactComponent as FurniroLogo } from "../../assets/logo.svg"

import { Outlet,NavLink, Link } from 'react-router-dom'

import { Fragment } from 'react'

import './navbar.styles.css'
import { middleNav } from "../components"

export default function Navbar() {
  return (
    <Fragment>
    <header>
      <div className='navbar-container'>
        <NavLink to="/">
          <div className="logo-container">
            <div className="left-logo"><FurniroLogo className="logo" /></div>
            <div className="right-logo"><Furniro className="logo-word" /></div>
          </div>
        </NavLink>
          <nav>
          <ul>
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
      </div>
      </header>
      <Outlet />
    </Fragment>
  )
}
