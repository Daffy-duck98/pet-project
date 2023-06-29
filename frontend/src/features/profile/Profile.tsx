import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../auth/selectors';

function Profile(): React.JSX.Element {
  const user = useSelector(selectUser);

  return (
    <div className="flex flex-col mt-12 items-center">
      <h1>Hello, {user?.login}</h1>
      <div className="mt-8">
        <img
          className="w-96 h-80"
          src="https://freesvg.org/img/underconstructionsign.png"
          alt="img"
        />
      </div>
    </div>
  );
}

export default Profile;
