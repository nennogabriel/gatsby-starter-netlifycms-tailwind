import React from "react"

import siteMetadata from "content/settings/siteMetadata.json"
import Navbar from "./Navbar"

export default function Header() {
  return (
    <section id="page-header" className="container">
      <div className="hidden md:block w-full">
        <div className="p-8 flex justify-center lg:justify-between">
          <img src={siteMetadata.logo} alt="logo" />
        </div>
      </div>
      <Navbar />
    </section>
  )
}
