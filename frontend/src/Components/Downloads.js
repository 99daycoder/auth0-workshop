import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const Downloads = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      
          <h1>This is Downloaded file...</h1>
       
    </div>
  );
};

export default Downloads;