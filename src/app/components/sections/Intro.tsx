"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Intro() {
  return (
    <section className="intro-section">
      <div className="container-lg">
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
              <Link href="#presale" className="btn_primary">
                Join Presale
              </Link>
              <Link href="#presale" className="btn_primary light">
                Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
