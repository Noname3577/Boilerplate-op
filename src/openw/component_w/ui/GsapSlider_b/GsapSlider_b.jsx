/* eslint-disable react/no-array-index-key */
'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

import Realtime from '../../../data/Realtime';
import styles from './GsapSlider_b.module.css';

export default function GsapSlider_b() {
  const sliderRef = useRef(null);
  const defaultImageUrl = '/Realtime/r13.png';

  useEffect(() => {
    const slider = sliderRef.current;
    // @ts-ignore
    const slides = slider.children;

    gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: 'none',
      duration: 400, // ระยะเวลาการเลื่อนทั้งหมด
      repeat: -1, // loop ไม่สิ้นสุด
    });
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div ref={sliderRef} className={styles.slider}>
        {Realtime.map((content, index) => (
          <div key={index} className={styles.slide}>
            <div>
              <div
                className={styles.img_a}
                style={{
                  backgroundImage: `url(${content.imgSrc || defaultImageUrl})`,
                }}
              >
              </div>
            </div>
            <div>
              <a href={content.url} target="_blank" rel="noopener noreferrer">
                <div className={styles.text_tx}>
                  <span>
                    {content.icon}
                    {'       '}
                  </span>
                  {content.text}
                </div>
              </a>
              <div className={styles.information}>
                <div className={styles.text_tx_b}>
                  😎 ชื่อ :
                  {content.username}
                </div>
                <div className={styles.text_tx_b}>
                  ⌚ เวลา :
                  {content.datetime}
                </div>
                <div className={styles.text_tx_b}>
                  🗨️ คาวมคิดเห็น :
                  {' '}
                  {content.setComment}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
