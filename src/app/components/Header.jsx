'use client';

import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            Nexchain
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/developer" className="nav-link">
                  Developer Hub
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <button className="btn btn-primary">
              Presale is Live
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
