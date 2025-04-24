'use client';

import React from 'react';
import Image from 'next/image';

export default function Partners() {
  const partners = [
    { name: 'Shima Capital', image: '/img/partners/googlecloud.webp' },
    { name: 'Animoca Brands', image: '/img/partners/animoca.svg' },
    { name: 'Outlier Ventures', image: '/img/partners/outlier.svg' },
    { name: 'Dream Ventures', image: '/img/partners/dream.svg' }
  ];

  return (
    <section className="partners-section">
      <div className="container">
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
  );
} 