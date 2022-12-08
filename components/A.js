import Link from "next/link";
import styles from "../styles/A.module.css";
const A = ({ text, href }) => {
  return (
    <Link className={styles.link} href={href}>
      {text}
    </Link>
  );
};

export default A;
