import React, { useState } from "react"

import menu from "content/settings/menu.json"
import siteMetadata from "content/settings/siteMetadata.json"

import SmartLink from "~/components/SmartLink"

import BurgerMenu from "./BurgerMenu"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  function toggleNavbar() {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <div className="bg-gray-300 md:flex md:justify-between md:items-center">
      <div className="p-3 flex items-center justify-between md:hidden">
        <BurgerMenu toggleNavbar={toggleNavbar} navbarOpen={navbarOpen} />
        <div>
          <SmartLink to="/">
            <img
              className="h-16"
              src={siteMetadata.logo}
              alt={siteMetadata.title}
            />
          </SmartLink>
        </div>
        <div></div>
      </div>
      <nav
        className={`${
          navbarOpen ? "block" : "hidden"
        } font-serif bg-gray-800 w-full text-white text-center border-brand-1-0 border-b-4 md:text-2xl md:block`}
      >
        <ul className="flex flex-col flex-wrap md:flex-row">
          {menu.links.map(link => (
            <li className="" key={link.label}>
              <SmartLink
                className="px-4 py-1 block hover:bg-brand-1-0 hover:text-gray-400"
                activeClassName="bg-brand-1-0"
                to={link.url}
              >
                {link.label}
              </SmartLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
