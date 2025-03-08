import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';
import { TbMushroom } from "react-icons/tb";
import ClickableDiv from "./ClickableDiv"
import styles from '../styles/NavBar.module.css'; // Import the styles for the NavBar

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <ClickableDiv href="/mushroom" passesHref={true} classNames={styles.navItem}>
        <TbMushroom/>
      </ClickableDiv>
      <ClickableDiv href="/dashboard" passesHref={true} classNames={styles.navItem}>
        <FaHome/>
      </ClickableDiv>
      <ClickableDiv href="/photosearch" passesHref={true} classNames={styles.navItem}>
        <FaSearch/>
      </ClickableDiv>
    </div>
  );
}
