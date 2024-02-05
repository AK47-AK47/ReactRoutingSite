export async function loadUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //error checking
  if (!response.ok) {
    throw { name: 'Response Error', message: 'Users not found' };
  }
  const users = await response.json();
  return users;
}

export async function loadUser({ params }) {
  const url = `https://jsonplaceholder.typicode.com/usersZZ/${params.id}`; //fake URL error
  //will trigger the render of the page/view of errorElement:<UserError>
  //as setted up on Router see App.jsx

  const response = await fetch(url);
  //error checking
  if (!response.ok) {
    throw new Error('User not found');
  }
  const user = await response.json();
  return user;
}
