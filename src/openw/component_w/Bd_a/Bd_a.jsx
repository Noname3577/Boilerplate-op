// @ts-nocheck
/* eslint-disable react-dom/no-missing-button-type */
/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import './bd_a.css';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import Realtime from '../../../openw/data/Realtime';
import Social from '../ui/social/Social';

function Bd_a() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredData = Realtime.filter(item =>
        item.text.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <div className="home_op_a">
      <div className="body_a_b">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 10,
          }}
        >
          <div className="img_a_a">
            <Image src="/Home.png" width={720} height={0} alt="logo_pantip" />
          </div>
        </motion.div>
        <div className="test_stop absolute right-60 top-[43rem] rotate-3 text-7xl">
          <motion.div
            whileHover={{ x: -22, y: 22 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10,
            }}
          >
            🚕
          </motion.div>
        </div>
        <div className="test_stop absolute left-60 top-[43rem] -rotate-3 text-8xl">
          <motion.div
            whileHover={{ scale: 1.5 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10,
            }}
          >
            📒
          </motion.div>
        </div>
        <div className="test_stop absolute right-20 top-[43rem] -rotate-3 text-4xl">
          <motion.div
            whileHover={{ scale: 1.5 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10,
            }}
          >
            💻
          </motion.div>
        </div>
        <div className="test_stop absolute left-20 top-[43rem] -rotate-3 text-5xl">
          <motion.div
            whileHover={{ rotate: 30 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10,
            }}
          >
            👟
          </motion.div>
        </div>
        <div className="test_stop absolute left-[38rem] top-[37rem] -rotate-3 text-7xl">
          <motion.div
            whileHover={{ scale: 1.5 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10,
            }}
          >
            😁
          </motion.div>
        </div>
        <div className="test_stop absolute left-[41rem] top-[17rem] rotate-12 text-7xl">
          <motion.div
            whileHover={{ scale: 1.5 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10,
            }}
          >
            😯
          </motion.div>
        </div>
        <div className="test_stop absolute left-[40rem] top-[65rem] rotate-12 text-7xl">
          <motion.div
            whileHover={{ x: 22 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10,
            }}
          >
            🤔
          </motion.div>

        </div>
        <div className="test_stop absolute left-[40rem] top-[100rem] rotate-3 text-7xl">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 10,
            }}
          >
            🤯
          </motion.div>

        </div>
        <div className="boxs_d">
          <a
            href="https://pantip.com/communities/forum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button type1">
              <span className="btn-txt">เลือกห้อง</span>
            </button>
          </a>
          <a
            href="https://pantip.com/tag/%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B4%E0%B8%9B"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button type1 button_a ">
              <span className="btn-txt">Highlight</span>
            </button>
          </a>
          <div>
            <div className="group">
              <div className="search-icon">
                <Image
                  src="/search.png"
                  width={150}
                  height={150}
                  alt="logo_pantip"
                />
              </div>
              <input
                id="query"
                className="input"
                type="search"
                placeholder="Search..."
                name="searchbar"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="popup_a">
              {filteredResults.length > 0 && (
                <ul>
                  {filteredResults.map(item => (
                    <li key={item.id}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{item.icon}</span>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="announce_a">
          <div className="announce_text_header">
            <span>Announce</span>
          </div>
          <div className="announce_text_body">
            <a
              href="https://www.youtube.com/watch?v=JzbFOZOoQ1E&list=PLQx8BhbFtXTFbGWM0OuS2vo-jPBaiggjO&index=2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text_new">New</span>
              <span className="text_next">
                🎧 Pantip Daily Podcast 🎧 3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่
                29 สิงหาคม 📊
              </span>
            </a>
          </div>
          <hr />
          <div className="announce_text_body">
            <a
              href="https://pantip.com/topic/42843148"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text_highlight">Highlight</span>
              <span className="text_next">
                ชวนร่วมกิจกรรม บันทึกทริปกับ “TripNote (Beta Version)” 📱🧳✈️
              </span>
            </a>
          </div>
          <hr />
          <div className="announce_text_body">
            <a
              href="https://pantip.com/topic/41930072"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text_highlight">Highlight</span>
              <span className="text_next">
                พันทิปนานุกรม … ชวนมาดู Cover Design วันสำคัญ บนเว็บไซต์ Pantip
              </span>
            </a>
          </div>
        </div>
        <div>
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Bd_a;
