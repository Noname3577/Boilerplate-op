'use client';

import './bd_c.css';

import { motion } from 'framer-motion';
import React from 'react';

import Realtime from '../../data/Realtime';

function Bd_c() {
  const defaultImageUrl = '/Realtime/r13.png';
  return (
    <div>
      <div className="realtime_a_two_a">
        <div className="header_realtime">
          <h1>Pantip Hitz</h1>
          <span>กระทู้ฮิตติดเทรนด์ทุก 10 นาที</span>
        </div>
        <div className="cut_a">
          {Realtime.map((content, index) => (
            <div key={index}>
              <div>
                <div className="boxs_ab">
                  <div>
                    <div
                      className="img_a"
                      style={{
                        backgroundImage: `url(${
                          content.imgSrc || defaultImageUrl
                        })`,
                      }}
                    >
                    </div>
                  </div>
                  <div className="link_b">
                    <div className="text_body_c">
                      <div>
                        <a
                          href={content.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="span_a">{content.text}</span>
                        </a>
                      </div>

                      <span className="span_b">
                        {' '}
                        😎 ชื่อ :
                        {content.username}
                      </span>
                      <span className="span_b">
                        {' '}
                        ⌚ เวลา :
                        {content.datetime}
                      </span>
                      <span className="span_b">
                        {' '}
                        🗨️ คาวมคิดเห็น :
                        {content.setComment}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 16 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 10,
                    }}
                  >
                    <div className="icon_op">{content.icon}</div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bd_c;
