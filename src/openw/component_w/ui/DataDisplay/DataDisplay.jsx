import './DataDisplay.css';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// @ts-ignore
function DataDisplay({ data }) {
  const defaultImageUrl = '/Realtime/r13.png';

  return (
    <div className="grid">
      {data.map((/** @type {{ id: React.Key | null | undefined; url: string | undefined; imgSrc: any; icon: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; text: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; username: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; datetime: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; setComment: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }} */ item) => (
        <div key={item.id} className="card">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 10,
              }}
            >
              <div className="card_a">
                <div className="imageWrapper">
                  <Image
                    src={item.imgSrc || defaultImageUrl} // Replace with the actual image path
                    alt="Post"
                    width={65}
                    height={65}
                    className="image"
                    style={{
                      background: 'contain',
                    }}
                  />
                </div>
                <div className="content">
                  <div className="header">
                    <span className="emoji">{item.icon}</span>
                    <span className="title">{item.text}</span>
                  </div>
                  <div className="footer">
                    <div>
                      <span className="author">{item.username}</span>
                      <span className="date">{item.datetime}</span>
                    </div>
                    <div className="icons_b">
                      <span className="icon_b">
                        💬
                        {item.setComment}
                      </span>
                      <span className="icon_b">👍 1</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default DataDisplay;
