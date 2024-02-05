export async function loadUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //error checking
  if (!response.ok) {
    throw { name: 'Response Error', message: 'Users not found' }; //thow custom error object
  }
  const users = await response.json();
  return users;
}

export async function loadUser({ params }) {

  /** this fake url type error on url will cause a throw new Error()
   *  and in turn will cause the render of (or will be catched by) errorElement:<ErrorLayout> on root path
   */
  const url = `https://jsonplaceholder.typicode.com/usersZZ/${params.id}`; //fake URL error

  const response = await fetch(url);
  //error checking
  if (!response.ok) {
    throw new Error('User not found'); //throw Error class object
  }
  const user = await response.json();
  return user;
}
