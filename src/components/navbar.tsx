import React, { useState } from 'react'
import Link from 'next/link'

const navbar = () => {

  const [active, setActive] = useState("home");
  
  return (
    <div>
      <header className="bg-white dark:bg-gray-900 text-white shadow-lg hidden md:block">
        <div className="container mx-auto flex items-center h-24">
          <Link 
            href="/" 
            onClick={() => setActive("home")} className={`flex items-center justify-center ${active === "home" ? "active" : ""}`}
          >
            <img className="h-24" src="./images/cpr-santafe-logo.png" alt="" />
          </Link>
          <nav className="contents font-semibold text-base lg:text-lg">
            <ul className="mx-auto flex items-center">
              <li className="p-5 xl:p-8 active">
                <Link href="/" onClick={() => setActive("home")} className={`${active === "home" ? "active" : ""}`}>
                  <span>Home</span>
                </Link>
              </li>
              <li className="p-5 xl:p-8">
                <Link href="/about" onClick={() => setActive("about")} className={`${active === "about" ? "active" : ""}`}>
                  <span>About</span>
                </Link>
              </li>
              <li className="p-5 xl:p-8">
                <Link href="/pricing">
                  <span>pricing</span>
                </Link>
              </li>
              <li className="p-5 xl:p-8">
                <Link href="/store">
                  <span>Store</span>
                </Link>
              </li>
            </ul>
          </nav>
          <Link href="contact">
            <button className="border border-white rounded-full font-bold px-8 py-2" >Contact me</button>
          </Link>
        </div>
      </header>
    </div>
  )
}

navbar.propTypes = {}

export default navbar