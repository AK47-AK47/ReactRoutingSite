export async function loadUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users;
}

export async function loadUser({ params }) {
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  //console.log(url);
  const response = await fetch(url);
  //add error checking
  const user = await response.json();
  return user;
}