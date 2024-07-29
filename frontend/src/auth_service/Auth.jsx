import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Auth() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className='Auth'>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name}</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Auth;
