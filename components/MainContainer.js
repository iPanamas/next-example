import Head from "next/head";
import A from "./A";
import styles from "../styles/navbar.module.scss";
const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"next.js" + keywords}></meta>
        <title>next.js</title>
      </Head>
      <div className={styles.navbar}>
        <A href="/" text="Main" />
        <A href="/users" text="Users" />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
