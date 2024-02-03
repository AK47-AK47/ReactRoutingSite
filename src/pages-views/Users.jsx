import { useLoaderData } from 'react-router-dom';

export default function Users() {
  const users = useLoaderData();

  return (
    <>
      <p>This is Users page</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
