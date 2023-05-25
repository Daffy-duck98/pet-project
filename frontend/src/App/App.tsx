import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Components/layout/Layout';
import Main from '../features/main/Main';
import SignUp from '../features/auth/SignUp';
import SignIn from '../features/auth/SignIn';

function App(): React.JSX.Element {
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
