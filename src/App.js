
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUser] = useState('');
  useEffect(() =>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [users]);


  const handleAddUser = (event) =>{
    event.preventDefault();
  }

  return (
    <div className="App">

    <form onSubmit={handleAddUser}>
      <input type="text" name='name' />
      <br />
      <input type="email" name='email' />
      <br />
      <input type="submit" value='Submit' />
    </form>

      <h2>Users: {users.length}</h2>
      <div>
        {
          users.map(user => <p key={user.id}>{user.name} {user.email}</p>)
        }
      </div>
    </div>
  );
}

export default App;
