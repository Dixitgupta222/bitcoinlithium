"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getToken, getTeam, getFaq } from "@/app/data/data";
import TokenBlock from "../TokenomicsBlock";

export default function Token() {
  return (
    <>
      <section className="token-section gray-section">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center">
                <h2 className="section-title">Tokenomics </h2>
                <p>
                  A balanced tokenomics - sustainable growth, rewards, and
                  ecosystem development
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="tokenomics_wrapp">
                <div className="left_column">
                  {getToken().left.map((item, i) => (
                    <TokenBlock
                      key={i}
                      transform={Math.floor(Math.random() * (5 - -5 + 1)) + -5}
                      perc={parseInt(item.perc)}
                      title={item.name}
                      number={item.number}
                    />
                  ))}
                </div>
                <div className="tokenomics_img">
                  <img src="/img/nex-coin.webp" alt="Nexcoin" />
                </div>
                <div className="right_column">
                  {getToken().right.map((item, i) => (
                    <TokenBlock
                      key={i}
                      transform={Math.floor(Math.random() * (5 - -5 + 1)) + -5}
                      perc={parseInt(item.perc)}
                      title={item.name}
                      number={item.number}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center">
                <h2 className="section-title">Leadership Team</h2>
                <p>The people who build the future of the AI Blockchain</p>
              </div>
            </div>
            <div className="col-12">
              <div className="teamComponent">
                {getTeam().map((team, i) => (
                  <div className="team_block" key={i}>
                    <div className="team_block-wrapp">
                      <div className="team_block-text">
                        <p className="team_name">{team.name}</p>
                        <p className="team_position">{team.position}</p>
                      </div>
                      {team.twitter && (
                        <div className="team_block-soc">
                          <a
                            target="_blank"
                            className="nex-link undefined "
                            href={team.twitter}
                          >
                            <img
                              alt="X"
                              loading="lazy"
                              width="16"
                              height="16"
                              decoding="async"
                              data-nimg="1"
                              src="/img/x.svg"
                            />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center">
                <h2 className="section-title">FAQ</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="accordion" id="accordionExample">
                {getFaq().map((faq, i) => (
                  <div className="accordion-item" key={i}>
                    <h2 className="accordion-header" id={"faq" + i}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#collapse" + i}
                        aria-expanded="true"
                        aria-controls={"collapse" + i}
                      >
                        {faq.title}
                      </button>
                    </h2>
                    <div
                      id={"collapse" + i}
                      className={`accordion-collapse collapse`}
                      aria-labelledby={"faq" + i}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">{faq.description}</div>
                    </div>
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
