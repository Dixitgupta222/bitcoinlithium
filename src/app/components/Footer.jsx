'use client';

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="mb-3">Nexchain</h5>
            <p className="text-muted small">
              The world's first AI-powered blockchain, bringing together advanced technology and decentralization security.
            </p>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/about" className="text-muted text-decoration-none">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/developer" className="text-muted text-decoration-none">
                  Developer Hub
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-muted text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/privacy" className="text-muted text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/terms" className="text-muted text-decoration-none">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Stay Connected</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-muted">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center text-muted small">
          © {new Date().getFullYear()} Nexchain. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
