import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../auth/selectors';

function Profile(): React.JSX.Element {
  const user = useSelector(selectUser);
  return (
    <div className="flex justify-center mt-8">
      <div>Hello, {user?.login}</div>
    </div>
  );
}

export default Profile;
