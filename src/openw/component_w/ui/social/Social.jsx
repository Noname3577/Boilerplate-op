/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react-dom/no-unsafe-target-blank */
import './social.css';

import React from 'react';

function Social() {
  return (
    <div>
      <ul className="example-2">
        <li className="icon-content">
          <a
            href="https://www.facebook.com/pantipdotcom/"
            aria-label="Facebook"
            data-social="Facebook"
            target="_blank"
          >
            <div className="filled"></div>
            <svg
              height="1792"
              viewBox="0 0 1792 1792"
              width="1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-188v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-532q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z"
              />
            </svg>
          </a>
          <div className="tooltip">Facebook</div>
        </li>
        <li className="icon-content">
          <a
            href="https://x.com/Pantip1996"
            aria-label="Twitter"
            data-social="Twitter"
            target="_blank"
          >
            <div className="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
              />
            </svg>
          </a>
          <div className="tooltip">Twitter</div>
        </li>
        <li className="icon-content">
          <a
            href="https://www.youtube.com/@pantipchannel"
            aria-label="Youtube"
            data-social="Youtube"
            target="_blank"
          >
            <div className="filled"></div>
            <svg
              height="1792"
              viewBox="0 0 1792 1792"
              width="1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M1280 896q0-37-30-54l-512-320q-31-20-65-2-33 18-33 56v640q0 38 33 56 16 8 31 8 20 0 34-10l512-320q30-17 30-54zm512 0q0 96-1 150t-8.5 136.5-22.5 147.5q-16 73-69 123t-124 58q-222 25-671 25t-671-25q-71-8-124.5-58t-69.5-123q-14-65-21.5-147.5t-8.5-136.5-1-150 1-150 8.5-136.5 22.5-147.5q16-73 69-123t124-58q222-25 671-25t671 25q71 8 124.5 58t69.5 123q14 65 21.5 147.5t8.5 136.5 1 150z"
              />
            </svg>
          </a>
          <div className="tooltip">Youtube</div>
        </li>
        <li className="icon-content">
          <a
            href="https://www.instagram.com/pantipdotcom/"
            aria-label="Instagram"
            data-social="Instagram"
            target="_blank"
          >
            <div className="filled"></div>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <div className="tooltip">Instagram</div>
        </li>
        <li className="icon-content">
          <a
            href="https://www.tiktok.com/@pantip1996"
            aria-label="Tiktok"
            data-social="Tiktok"
            target="_blank"
          >
            <div className="filled"></div>
            <svg
              data-name="Layer 1"
              id="Layer_1"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path
                fill="currentColor"
                d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM385.62,232.382c-27.184,0-53.634-8.822-74-23.75l-.162,101.5a92.457,92.457,0,1,1-80.178-91.721v49.845a43.657,43.657,0,1,0,31.288,41.876V109.333h51.275a71.773,71.773,0,0,0,71.774,71.773Z"
              />
            </svg>
          </a>
          <div className="tooltip">Tiktok</div>
        </li>
      </ul>
    </div>
  );
}

export default Social;
