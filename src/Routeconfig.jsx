// RouteConfig.js
import React from 'react';
import HeaderAfterLogin from './Components/CustomerPage/HeaderAfterLogin';
import Introduction from './Components/HomePage/Introduction';
import Services from './Components/HomePage/Services';
import Portfolio from './Components/HomePage/Plans';
import AboutMe from './Components/HomePage/AboutMe';
import LoginComponent from './Components/LoginComponent';
import LoginHeader from './Components/LoginHeader';
import SignUpForm from './Components/SignUpForm';
import CreateProfileForm from './Components/CreateProfileForm';
import CustomerPage from './Components/CustomerPage/CustomerPage';

const fullScreenImageStyle = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
};

const routeConfig = [
  {
    path: '/',
    element: (
      <div className='cont' style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Include your component logic here */}
        <HeaderAfterLogin user={user} logout={logout} />
        <Introduction />
        <Services />
        <Portfolio />
        <AboutMe />
      </div>
    ),
  },
  {
    path: '/login',
    element: (
      <div style={{ ...fullScreenImageStyle, backgroundImage: `url(${LoginImage})` }}>
        {/* Include your component logic here */}
        <LoginHeader />
        <LoginComponent />
      </div>
    ),
  },
  {
    path: '/signup',
    element: (
      <div style={{ ...fullScreenImageStyle, backgroundImage: `url(${LoginImage})` }}>
        {/* Include your component logic here */}
        <LoginHeader />
        <SignUpForm />
      </div>
    ),
  },
  {
    path: '/create-profile',
    element: (
      <div style={{ ...fullScreenImageStyle, backgroundImage: `url(${CreateProfileImage})` }}>
        {/* Include your component logic here */}
        <CreateProfileForm />
      </div>
    ),
  },
  {
    path: '/customer-page',
    element: <CustomerPage />,
  },
  // ... (other routes)
];

export default routeConfig;
