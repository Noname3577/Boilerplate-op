/* eslint-disable react-dom/no-missing-button-type */
/* eslint-disable react-dom/no-unsafe-target-blank */
'use client';

import './Header_op.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

import PopupMenu from '../PopupMenu/PopupMenu';

gsap.registerPlugin(ScrollTrigger);

function Header_top() {
  useEffect(() => {
    gsap.to('.header_master', {
      backgroundColor: '#1f1d3391', // เปลี่ยนสีพื้นหลังเป็นสีฟ้า
      ease: 'power2.Out',
      scrollTrigger: {
        trigger: '.header_master',
        start: 'top top',
        end: '+=5',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="header_master">
      <div className="header_op">
        <div>
          <Link href="/">
            <Image
              src="/logo-pantip.png"
              width={80}
              height={0}
              alt="logo_pantip"
              className="pic_a"
            />
          </Link>
        </div>
        <div className="boxs_a">
          <div className="btn_a pr-3">
            <Link href="/" className="text_c">
              หน้าแรก
            </Link>
          </div>
          <div className="btn_a pr-3">
            <a
              href="https://pantip.com/home/feed"
              target="_blank"
              rel="noopener noreferrer"
              className="text_c"
            >
              My Feed
            </a>
          </div>
          <div className="btn_a pr-3">
            <a
              href="https://pantip.com/home/pick"
              target="_blank"
              rel="noopener noreferrer"
              className="text_c"
            >
              Pantip Pick
            </a>
          </div>
          <div className="btn_a pr-3">
            <a
              href="https://pantip.com/home/hitz"
              target="_blank"
              rel="noopener noreferrer"
              className="text_c"
            >
              Pantip Hitz
            </a>
          </div>
          <div className="btn_a pr-3">
            <a
              href="https://pantip.com/home/communities"
              target="_blank"
              rel="noopener noreferrer"
              className="text_c"
            >
              Explore
            </a>
          </div>
          <div className="btn_a pr-3">
            <a
              href="https://pantip.com/point"
              target="_blank"
              className="text_c"
            >
              แลกพอยต์
            </a>
          </div>
          <div className="btn_a pr-3">
            <a
              href="https://pantip.com/activities"
              target="_blank"
              className="text_c"
            >
              กิจกรรมพันทิป
            </a>
          </div>
        </div>
        <div className="boxs_b">
          <div className="pr-3">
            <a
              href="https://pantip.com/login?redirect=Zm9ydW0vbmV3X3RvcGlj&pos=2"
              target="_blank"
            >
              <button className="button_b">
                <div className="svgIcon">
                  <Image src="/world.png" width={50} height={0} alt="world" />
                </div>
              </button>
            </a>
          </div>
          <div className="popup_tap">
            <PopupMenu />
          </div>
          <div className="">
            <a
              href="https://pantip.com/login?redirect=aHR0cHM6Ly9wYW50aXAuY29tLw=="
              target="_blank"
            >
              <button className="btn-github">
                <span>เข้าสู่ระบบ / สมัครสมาชิก</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_top;
