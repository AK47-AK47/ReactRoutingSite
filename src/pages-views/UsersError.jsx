import { useRouteError } from 'react-router-dom';

export default function UsersError() {
  let error = useRouteError();

  return (
    <>
      <p>{error.name}</p>
      <p>{error.message}</p>
      <p>{error.stack}</p>
    </>
  );
}
