import React from "react"

import Footer from "~/components/Footer"
import Header from "~/components/Header"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-custom-1-2">
      <Header />
      <section id="main" className="flex-grow">
        {children}
      </section>
      <Footer />
    </div>
  )
}
