"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getPartnersData } from "@/app/data/data";
export default function Partners() {
  console.log(getPartnersData());
  const [activeButton, setActiveButton] = useState("investor"); // 'investor' or 'developer'

  const partners = [
    { name: "Google Cloud", image: "/img/partners/googlecloud.webp" },
    { name: "OpenAI", image: "/img/partners/openai.webp" },
    { name: "Amazon Web Services", image: "/img/partners/amazon.webp" },
    { name: "Dalle", image: "/img/partners/dalle.webp" },
    { name: "Crypto.com", image: "/img/partners/cryptocom.webp" },
    { name: "CoinMarketCap", image: "/img/partners/CoinMarketCap.svg" },
    { name: "Visa", image: "/img/partners/visa.webp" },
    { name: "Nvidia", image: "/img/partners/nvidia.webp" },
    { name: "1inch", image: "/img/partners/1inch.webp" },
    { name: "Ledger", image: "/img/partners/ledger.webp" },
  ];

  const handleSwitchToggle = (type: "investor" | "developer") => {
    setActiveButton(type);
  };

  return (
    <>
      <section className="partners-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center">
                <h2 className="section-title">Our partners</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
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
      <section className="partners-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-header sec-header">
                <div className="title-wrapper">
                  <p className="section-subtitle">AI powered</p>
                  <h2 className="section-title">
                    Nexchain is the future on blockchains
                  </h2>
                </div>
                <div className="inv-dev-switch_wrapp">
                  <div className="inv-dev-switch_block">
                    <button
                      className={`btn inv-dev-switch_button ${
                        activeButton === "investor" ? "active" : ""
                      }`}
                      onClick={() => handleSwitchToggle("investor")}
                    >
                      For investors
                    </button>
                    <button
                      className={`btn inv-dev-switch_button ${
                        activeButton === "developer" ? "active" : ""
                      }`}
                      onClick={() => handleSwitchToggle("developer")}
                    >
                      For developers
                    </button>
                  </div>
                </div>
              </div>
              <div className="content-wrapper mt-4">
                {activeButton === "investor" ? (
                  <div className="investor-content">
                    Investor content here
                  </div>
                ) : (
                  <div className="developer-content">
                    Developer content here
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
