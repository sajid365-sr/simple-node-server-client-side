
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUser] = useState('');
  useEffect(() =>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, []);


  const handleAddUser = (event) =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = {name,email};
    console.log(user);
    

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(backendUser => {
      // const newUser = [...users, backendUser];
      // console.log(backendUser)
      setUser(backendUser);

    })
    .catch(error => console.error(error))

    event.target.reset();
  }

  // const getUser = (event) =>{
  //   const displayUser = event.target.innerText.split(' ');
  //   const deleteUser = displayUser[displayUser.length - 1];
  //   const target = {deleteUser};

  //   fetch('http://localhost:5000/users',{
  //     method:'DELETE',
  //     headers:{
  //       'content-type':'application/json',
  //     },
  //     body:JSON.stringify(target)
  //   })
  //   .then(res => res.json())
  //   .then(data => setUser(data))
  //   .catch(e => console.error(e))

  // }

  return (
    <div className="App">

    <form onSubmit={handleAddUser}>
      <input type="text" name='name' placeholder='name' />
      <br />
      <input type="email" name='email' placeholder='email' />
      <br />
      <input type="submit" value='Submit' />
    </form>

      <h2>Users: {users.length}</h2>
      <div>
        {
          users.map(singleUser => <p key={singleUser.id}>
            {singleUser.name}  {singleUser.email}
            </p>)
        }
      </div>
    </div>
  );
}

export default App;
