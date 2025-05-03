"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getUsingData } from "@/app/data/data";
export default function AfterPartners() {
  const usingData = getUsingData();
  const partners = [
    { name: "Shima", image: "/img/shima.webp" },
    { name: "Animoca", image: "/img/animoca.webp" },
    { name: "Outline", image: "/img/outliner.webp" },
    { name: "Dream", image: "/img/dream.webp" },
  ];
  return (
    <>
      <section className="about-section">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-header">
                <h2 className="section-title">What is Nexchain?</h2>
              </div>
              <p>
                Nexchain introduces the world's first blockchain network based
                on artificial intelligence which changes how decentralized
                system operations function. The ongoing largest presale program
                presents a groundbreaking platform that integrates
                state-of-the-art AI technology with encryption features to
                deliver quick 400,000 TPS processing.
              </p>
              <p>
                Nexchain delivers improved reliability and real-time
                adaptability through its Hybrid Consensus method which links
                Proof-Of-Stake technology to AI-controlled algorithms. The
                flexible yet environmentally friendly system design enables
                effortless communication between various blockchain networks and
                advanced Smart Contracts version 2.0 thus generating boundless
                potential for developers together with investors.
              </p>
              <p>
                The organization consists of expert professionals who blend
                their skills from Blockchain and Artificial Intelligence and
                Cybersecurity fields. The platform constructs an open truthful
                sustainable system which operates based on AI Blockchain:
              </p>
            </div>
            <div className="col-lg-5">
              <ul className="right-about_block">
                <li className="right-about_line">
                  Provides developers and businesses with the tools for
                  innovation and growth.
                </li>
                <li className="right-about_line">
                  Provides developers and businesses with the tools for
                  innovation and growth.
                </li>
                <li className="right-about_line">
                  Provides developers and businesses with the tools for
                  innovation and growth.
                </li>
                <li className="right-about_line">
                  Provides developers and businesses with the tools for
                  innovation and growth.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-section investor-section">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <div className="row align-items-center section-header">
                <div className="col-md-8">
                  <div className="title-wrapper">
                    <h2 className="section-title m-0">
                      Using the AI-powered Blockchain
                    </h2>
                  </div>
                </div>
                <div className="col-md-4">
                  We are opening up new horizons across key industries
                </div>
              </div>

              <div className="using_wrapp">
                {usingData.map((item, index) => (
                  <div className="using_block" key={index}>
                    <div className="using_block-number">// {index + 1}</div>
                    <div className="using_block-icon">
                      <Image
                        alt={item.name}
                        loading="lazy"
                        width="31"
                        height="39"
                        decoding="async"
                        data-nimg="1"
                        src={item.image}
                      />
                    </div>
                    <div className="using_block-text">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-section gray-section backers-section">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center">
                <h2 className="section-title">Backers</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="partners-grid">
                {partners.map((partner, index) => (
                  <div key={index} className="partner-item">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={160}
                      height={60}
                      className="partner-logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
