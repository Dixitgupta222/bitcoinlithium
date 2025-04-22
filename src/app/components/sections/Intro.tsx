"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Intro() {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <div className="intro-presale_live">
              <div className="live-wrapp">
                <Image
                  alt="Presale is Live"
                  loading="lazy"
                  width="20"
                  height="27"
                  decoding="async"
                  data-nimg="1"
                  src="/img/live.svg"
                />
                <p>Presale is Live</p>
              </div>
            </div>
            <h1 className="intro-title">Nexchain AI Blockchain</h1>
            <p className="intro-description">
              The world's first AI-powered blockchain, bringing together
              advanced technology and the decentralization security.
            </p>
            <div className="intro-actions">
              <Link href="#presale" className="btn-presale">
                Join the Nexchain presale before the next round begins!
              </Link>
            </div>
            <div className="intro-stats mt-5">
              <div className="row g-4">
                <div className="col-6 col-md-4">
                  <div className="stat-item">
                    <div className="stat-value">Round 11</div>
                    <div className="stat-label">NEX - 0$</div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="stat-item">
                    <div className="stat-value">USD Raised</div>
                    <div className="stat-label">00.00 USD/ 50000 USD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
