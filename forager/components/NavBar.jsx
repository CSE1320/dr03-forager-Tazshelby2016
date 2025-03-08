import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';
import { TbMushroom } from "react-icons/tb";
import ClickableDiv from "./ClickableDiv"
import styles from '../styles/NavBar.module.css'; // Import the styles for the NavBar

export default function NavBar() {
  return (
    <menu className={styles.navbar}>
      <ClickableDiv href="/mushroom" innerClassName={styles.navItem}>
        <TbMushroom/>
      </ClickableDiv>
      <ClickableDiv href="/dashboard" innerClassName={styles.navItem}>
        <FaHome/>
      </ClickableDiv>
      <ClickableDiv href="/photosearch" innerClassName={styles.navItem}>
        <FaSearch/>
      </ClickableDiv>
    </menu>
  );
}
