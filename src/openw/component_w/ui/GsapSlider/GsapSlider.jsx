/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
'use client';
import './GsapSlider.css';
import '../../../Save/Media.css';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

import slideContent from '../../../data/slideContent';

export default function GsapSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    // @ts-ignore
    const slides = slider.children;

    gsap.to(slides, {
      yPercent: -100 * (slides.length - 1),
      ease: 'none',
      duration: 100, // ระยะเวลาการเลื่อนทั้งหมด
      repeat: -1, // loop ไม่สิ้นสุด
    });
  }, []);

  return (
    <div className="sliderContainer">
      <div ref={sliderRef} className="slider">
        {slideContent.map((content, index) => (
          <div key={index} className="slide">
            <a href={content.url} target="_blank" rel="noopener noreferrer">
              <img src={content.imgSrc} alt={`Slide ${index + 1}`} />
              <p>{content.text}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
