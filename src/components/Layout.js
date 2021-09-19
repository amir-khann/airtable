import React from "react"
import "typeface-roboto"
import Nav from "./Nav"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Nav />
      <main className="container py-12">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
