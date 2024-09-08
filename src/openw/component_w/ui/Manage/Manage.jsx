/* eslint-disable react-dom/no-missing-button-type */
/* eslint-disable react-dom/no-unsafe-target-blank */
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import Populartags from '../../../data/Populartags';
import styles from './styles.module.css';

export default function Manage() {
  const [activeTab, setActiveTab] = useState(4);

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className={styles.content}>
            {Populartags.map((content, index) => (
              <div key={index} className={styles.slide}>
                <Link href={content.url}>
                  <p className={styles.content_text}>{content.text}</p>
                </Link>
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <div className={styles.content}>
            <div>
              <a target="_blank" href="https://pantip.com/club/67">
                <p className={styles.content_text}>AF 12</p>
              </a>
              <a target="_blank" href="https://pantip.com/club/66">
                <p className={styles.content_text}>AF Fan Club</p>
              </a>
              <a target="_blank" href="https://pantip.com/club/65">
                <p className={styles.content_text}>BTS & ARMY in Pantip</p>
              </a>
              <a target="_blank" href="https://pantip.com/club/64">
                <p className={styles.content_text}>FASHIONISTA CLUB</p>
              </a>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={styles.content}>
            <div>
              <a target="_blank" href="https://www.bloggang.com/">
                <Image
                  src="/ad/ad1.png"
                  width={200}
                  height={500}
                  alt="Picture of the author"
                />
              </a>
              <a target="_blank" href="https://www.pantown.com/">
                <Image
                  src="/ad/ad2.png"
                  width={200}
                  height={500}
                  alt="Picture of the author"
                />
              </a>
              <a target="_blank" href="https://www.pantipmarket.com/">
                <Image
                  src="/ad/ad3.png"
                  width={200}
                  height={500}
                  alt="Picture of the author"
                />
              </a>
              <a target="_blank" href="https://maggang.com/">
                <Image
                  src="/ad/ad4.png"
                  width={200}
                  height={500}
                  alt="Picture of the author"
                />
              </a>
              <a
                className={styles.content_link}
                target="_blank"
                href="https://pantip.com/advertising"
              >
                ติดต่อลงโฆษณา
              </a>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={styles.content}>
            <div>
              <h1 className="pb-5 text-lg font-bold">ดาวน์โหลดได้แล้ววันนี้</h1>
            </div>
            <div>
              <a
                target="_blank"
                href="https://apps.apple.com/th/app/pantip/id1223282907?l=th"
              >
                <Image
                  src="/do/do2.png"
                  width={200}
                  height={500}
                  alt="Picture of the author"
                />
              </a>
              <div className="mb-5"></div>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.pantip.android.Pantip.com&hl=en"
              >
                <Image
                  src="/do/do3.png"
                  width={200}
                  height={500}
                  alt="Picture of the author"
                />
              </a>
              <div className="mb-5"></div>
              <a
                target="_blank"
                href="https://appgallery.huawei.com/#/app/C101253565?accessId=f0b11d177c0a4f6db9872383b7694576"
              >
                <Image
                  src="/do/do4.png"
                  width={200}
                  height={500}
                  alt="Picture of the author"
                />
              </a>
            </div>
          </div>
        );
      default:
        return <div className={styles.content}>แท็กฮิต Content</div>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabButtons}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 10,
          }}
        >
          <button
            className={`${styles.tabButton} ${
              activeTab === 1 ? styles.active : ''
            }`}
            onClick={() => setActiveTab(1)}
          >
            แท็กฮิต
          </button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 10,
          }}
        >
          <button
            className={`${styles.tabButton} ${
              activeTab === 2 ? styles.active : ''
            }`}
            onClick={() => setActiveTab(2)}
          >
            คลับ
          </button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 10,
          }}
        >
          <button
            className={`${styles.tabButton} ${
              activeTab === 3 ? styles.active : ''
            }`}
            onClick={() => setActiveTab(3)}
          >
            เว็บในเครือ
          </button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 10,
          }}
        >
          <button
            className={`${styles.tabButton} ${
              activeTab === 4 ? styles.active : ''
            }`}
            onClick={() => setActiveTab(4)}
          >
            ดาวน์โหลด
          </button>
        </motion.div>
      </div>
      <div className={styles.contentArea}>{renderContent()}</div>
    </div>
  );
}
