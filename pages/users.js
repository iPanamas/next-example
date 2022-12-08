import Link from "next/link";
import MainContainer from "../components/MainContainer";
const Users = ({ users }) => {
  return (
    <MainContainer keywords={"users page"}>
      <h1>Users</h1>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/users/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
