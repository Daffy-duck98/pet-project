import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectUser } from '../../features/auth/selectors';
import { useAppDispatch } from '../../store/store';
import { logout } from '../../features/auth/authSlice';

function Header(): React.JSX.Element {
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(
    async (event: React.MouseEvent) => {
      event.preventDefault();

      const dispatchResult = await dispatch(logout());
      if (logout.fulfilled.match(dispatchResult)) {
        navigate('/');
      }
    },
    [dispatch, navigate]
  );
  if (!user) {
    return (
      <nav className=" flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
        <h3 className="font-bold">ToDo List</h3>
        <span>
          <Link to="/" className="mr-3">
            Home
          </Link>
          <Link to="/sign-up" className="mr-3">
            SignUp
          </Link>
          <Link to="/sign-in">SignIn</Link>
        </span>
      </nav>
    );
  }
  return (
    <nav className=" flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">ToDo List</h3>
      <span>
        <Link to="/" className="mr-3">
          Home
        </Link>
        <Link to="/profile" className="mr-3">
          Profile
        </Link>
        <button type="button" onClick={handleLogout}>
          LogOut
        </button>
      </span>
    </nav>
  );
}

export default Header;
