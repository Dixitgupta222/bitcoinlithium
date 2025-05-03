"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getUtility } from "@/app/data/data";
export default function Utility() {
  return (
    <>
      <section className="utility-section">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center">
                <h2 className="section-title">NEX Coin Utility</h2>
                <p>
                  More than just a digital asset — A single tool for payments,
                  management, profitability, and AI services
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="utility_wrapp">
                {getUtility().map((item, i) => 
                  <div className="utility_block">
                    <div className="utility_block-icon">
                      <Image
                        src={item.image}
                        alt={item.image}
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="utility_block-text">
                      <h3>{item.name}</h3>
                      <p>
                      {item.description}
                      </p>
                    </div>
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
