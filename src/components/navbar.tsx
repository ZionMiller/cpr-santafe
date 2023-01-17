import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const navbar = () => {
  return (
    <div>
<header className="bg-lime-700 text-white shadow-lg hidden md:block">
  <div className="container mx-auto flex items-center h-24">
    <Link href="/" className="flex items-center justify-center">
      <img className="h-16" src="./images/cpr-santafe-logo.png" alt="" />
    </Link>
    <nav className="contents font-semibold text-base lg:text-lg">
      <ul className="mx-auto flex items-center">
        <li className="p-5 xl:p-8 active">
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li className="p-5 xl:p-8">
          <Link href="/about">
            <span>About</span>
          </Link>
        </li>
        <li className="p-5 xl:p-8">
          <Link href="/calendar">
            <span>Calendar</span>
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