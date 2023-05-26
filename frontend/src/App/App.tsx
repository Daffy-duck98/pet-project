import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../Components/layout/Layout';
import Main from '../features/main/Main';
import SignUp from '../features/auth/SignUp';
import SignIn from '../features/auth/SignIn';
import { useAppDispatch } from '../store/store';
import { selectAuthChecked } from '../features/auth/selectors';
import { getUser } from '../features/auth/authSlice';

function App(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const authChecked = useSelector(selectAuthChecked);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (!authChecked) {
    return (
      <div>
        <span>Loading ...</span>
      </div>
    );
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
