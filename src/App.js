import React from 'react';
import { Route, Routes } from 'react-router-dom';

import RootLayout from './components/Layouts/RootLayout/RootLayout';
import AuthRoute from './auth/AuthRoute';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <RootLayout>

      <Routes>
        <Route path='/' element={<AuthRoute element={<Home /> } /> } />
        <Route path='/accounts/emailsignup' element={<AuthRoute element={<SignUp />}/> }/>
        <Route path='/accounts/login' element={<AuthRoute element={<SignIn />}/>}/>

        <Route path='/:username' element={<AuthRoute element={ <Profile /> }/> } />
        <Route path='/explore/' element={<div>test3</div>} />
        <Route path='/' element/>
      </Routes>

    </RootLayout>
  );

}
export default App;
