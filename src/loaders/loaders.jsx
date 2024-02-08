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
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  const response = await fetch(url);
  //error checking
  if (!response.ok) {
    throw new Error('User not found'); //throw Error class object
  }
  const user = await response.json();
  return user;
}

export async function submitNewUser(user) {
  let sendingData = {
    id: 9999,
    name: user.name,
    username: user.username,
    email: user.email,
    address: {
      street: user.street,
      suite: user.streetnumber,
      city: user.city,
      zipcode: user.zipcode,
    },
    phone: user.phone,
    website: user.website,
  };

  let response = await fetch(
    'https://jsonplaceholder.typicode.com/users/',//fake URL error
    {
      method: 'POST',
      body: JSON.stringify(sendingData),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }
  );
  
  if (!response.ok) {
    throw new Error('Sorry something went wrong');
  }
  let data = await response.json();
  console.log('data', data);
  return data;
}
