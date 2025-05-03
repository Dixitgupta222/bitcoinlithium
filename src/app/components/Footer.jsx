'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="footer-logo">
              <Image src="/img/footer-logo.svg" width={100} height={50} />
            </div>
            <p className="text-muted small">
            Nexchain is an L1 blockchain protocol that leverages artificial intelligence (AI) to optimize scalability, security, and interoperability.
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
            <div className="d-flex gap-3 social-links">
              <a href="#" className="text-muted text-decoration-none">
              <BsTwitterX />
              </a>
              <a href="#" className="text-muted text-decoration-none">
              <BsLinkedin />
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
