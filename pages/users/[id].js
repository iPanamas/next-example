import { useRouter } from "next/router";
import styles from "../../styles/user.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer className={styles.user} keywords={user.name}>
      <h1>User - {user.id}</h1>
      <h2>User name - {user.name}</h2>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
