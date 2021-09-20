import React from "react"
import { Link } from "gatsby"
import { globalHistory } from "@reach/router"

const navLinks = [
  { label: "Entrepreneurship", to: "/", include: "entrepreneurship" },
  { label: "Diversity", to: "/diversity", include: "diversity" },
  { label: "91s Boosters", to: "/boosters", include: "boosters" },
  { label: "Startups", to: "/startups", include: "startups" },
  { label: "Other Support", to: "/other-support", include: "other-support" },
  { label: "Resources", to: "/resources", include: "resources" },
]

const Nav = () => {
  const pathname = globalHistory.location.pathname

  return (
    <div className="bg-white border-b-2">
      <nav className="container max-w-custom max-auto">
        <ul
          className="grid py-4 place-items-center gap-8 text-base	font-normal"
          style={{
            gridTemplateColumns: " repeat(auto-fit, minmax(100px, 1fr) )",
          }}
        >
          {navLinks.map((link, index) => (
            <li key={`key-${index}`}>
              <Link
                className={`pb-4 cursor-pointer transition duration-150 ease-in border-b-2 hover:text-logo hover:border-logo ${
                  pathname === link.to || pathname.includes(link.include)
                    ? " text-logo border-logo"
                    : "border-transparent text-nav"
                } `}
                to={link.to}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
