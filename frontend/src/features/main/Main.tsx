import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../auth/selectors';

function Main(): React.JSX.Element {
  const user = useSelector(selectUser);

  if (user) {
    return (
      <div className="flex flex-col mt-12 items-center">
        <h1>Hello, {user?.login}</h1>
        <div>
          <img
            className="w-80 h-80"
            src="https://freesvg.org/img/UN-CONSTRUCTION.png"
            alt="img"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-12 items-center">
      <h1>Hello, my Friend!</h1>
      <div>
        <img
          className="w-80 h-80"
          src="https://freesvg.org/img/UN-CONSTRUCTION.png"
          alt="img"
        />
      </div>
    </div>
  );
}

export default Main;
