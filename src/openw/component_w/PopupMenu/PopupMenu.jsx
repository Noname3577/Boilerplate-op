import { useState } from "react";
import styles from "./PopupMenu.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PopupMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
      >
        <button className={styles.menuButton} onClick={toggleMenu}>
          <Image src="/do/do5.png" width={30} height={0} alt="logo_pantip" />
        </button>
      </motion.div>

      <div className={`${styles.popupMenu} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          ×
        </button>
        <ul>
          <li>
            <Link href="/">หน้าแรก</Link>
          </li>
          <li>
            <a
              href="https://pantip.com/home/feed"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Feed
            </a>
          </li>
          <li>
            <a
              href="https://pantip.com/home/pick"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pantip Pick
            </a>
          </li>
          <li>
            <a
              href="https://pantip.com/home/hitz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pantip Hitz
            </a>
          </li>
          <li>
            <a
              href="https://pantip.com/home/communities"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore
            </a>
          </li>
          <li>
            <a href="https://pantip.com/point" target="_blank">
              แลกพอยต์
            </a>
          </li>
          <li>
            <a href="https://pantip.com/activities" target="_blank">
              กิจกรรมพันทิป
            </a>
          </li>
          <hr />
          <li className={styles.li_a}>© 2024 Internet Marketing co., ltd</li>
        </ul>
      </div>
    </div>
  );
}
