import React from 'react';
import UserContext from '../Context/userContext';
import { useContext } from 'react';

export default function Profile() {
  const { user } = useContext(UserContext);
if (!user){
    return <div>Please login</div>;
}
else{
    return <div>welcome {user.userName}</div>;
}
}