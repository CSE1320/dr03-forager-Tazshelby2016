import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';
import { TbMushroom } from "react-icons/tb";
import styles from '../styles/NavBar.module.css'; // Import the styles for the NavBar

export default function NavBar({className=""}) {
  const needAddtionalClasses = (className!=="");
  const combinedClasses = className + " " + styles.navbar

  const additionalStyle = (
    <div className={combinedClasses}>
      <Link href="/mushroom" passHref>
        <div className={styles.navItem}>
          <TbMushroom />
        </div>
      </Link>
      <Link href="/dashboard" passHref>
        <div className={styles.navItem}>
          <FaHome />
        </div>
      </Link>
      <Link href="/photosearch" passHref>
        <div className={styles.navItem}>
          <FaSearch />
        </div>
      </Link>
    </div>
  );
  const defaultStyle = (
    <div className={styles.navBar}>
      <Link href="/mushroom" passHref>
        <div className={styles.navItem}>
          <TbMushroom />
        </div>
      </Link>
      <Link href="/dashboard" passHref>
        <div className={styles.navItem}>
          <FaHome />
        </div>
      </Link>
      <Link href="/photosearch" passHref>
        <div className={styles.navItem}>
          <FaSearch />
        </div>
      </Link>
    </div>
  );

  return needAddtionalClasses? additionalStyle: defaultStyle;
}
