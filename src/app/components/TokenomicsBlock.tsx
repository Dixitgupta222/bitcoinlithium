"use client";

import React from "react";

interface TokenBlockProps {
  perc: number;
  title: string;
  number: string;
  transform: number;
}

export default function TokenBlock({ perc, title, number, transform }: TokenBlockProps) {
  return (
    <>
      <div className="tokenomics_block" style={{ transform: `rotate(${transform}deg)` }}>
        <div className="tokenomics_perc">{perc && perc+'%'}</div>
        <div className="tokenomics_title">{title}</div>
        <div className="tokenomics_number">{number}</div>
      </div>
    </>
  );
}
