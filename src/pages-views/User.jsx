import { useLoaderData } from 'react-router-dom';

export default function User() {
  const user = useLoaderData();

  return (
    <>
      <p>User details</p>
      {/* <p>we will see how to get those details data...</p> */}
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Address:</p>
      <p style={{ 'white-space': 'pre' }}>&#9; Street: {user.address.street}</p>
      <p style={{ 'white-space': 'pre' }}>&#9; Suite: {user.address.suite}</p>
      <p style={{ 'white-space': 'pre' }}>&#9; City: {user.address.city}</p>
      <p style={{ 'white-space': 'pre' }}>&#9; Zipcode: {user.zipcode}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </>
  );
}