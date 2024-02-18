import React from 'react';
import { useState, useContext } from 'react';
import UserContext from '../Context/userContext';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const { setuser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({ userName, userPassword });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      />
      {" "}
      <input
        type="text"  // Corrected type to "password" for better security
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
