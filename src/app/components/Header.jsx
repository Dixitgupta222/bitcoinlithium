'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image src="/img/logo.svg" alt="Nexchain" width={100} height={45} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="#about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#developer" className="nav-link">
                  Developer Hub
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link href="#presale" className="btn_primary">
            Join Presale
          </Link>
        </div>
      </nav>
    </header>
  )
}
