// MainRouter.js
import React from "react";
import { Router,Routes, Route } from "react-router-dom";
import { useAuthFunctions } from './AuthFunctions';
import Header from './HomePage/Header';
import HeaderAfterLogin from './CustomerPage/HeaderAfterLogin';
import Introduction from './HomePage/Introduction';
import Services from './HomePage/Services';
import Portfolio from './HomePage/Plans';
import AboutMe from './HomePage/AboutMe';
import LoginComponent from './LoginComponent';
import LoginHeader from './LoginHeader';
import SignUpForm from './SignUpForm';
import '../App.css';
import CreateProfileForm from './CreateProfileForm';
import DeliveryPartnerForm from './DeliveryPartnerForm';
import WorkerApp from './WorkerPage/WorkerApp';
import CustomerApp from './CustomerPage/CustomerApp';
import EwasteCelebration from '../confetti';
import AdminApp from "./AdminPage/AdminApp";
import backgroundImage from '../wastepic.png';
import LoginImage from '../LoginBackground.jpeg';
import CreateProfileImage from '../CreateProfileBackground.jpg';
import DeliveryImage from '../deliverybackgrd.jpeg';

const MainRouter = () => {
  const { user, logout } = useAuthFunctions();

  const fullScreenImageStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
  };

  return (
    <Router>
    <Routes>
      <Route
        path="/"
        element={
          <div className='cont' style={{ backgroundImage: `url(${backgroundImage})` }}>
            {user ? (
              <HeaderAfterLogin user={user} logout={logout} />
            ) : (
              <Header />
            )}
            <Introduction />
            <Services />
            <Portfolio />
            <AboutMe />
            <EwasteCelebration />
          </div>
        }
      />
      <Route
        path="/login"
        element={
          <div style={{ ...fullScreenImageStyle, backgroundImage: `url(${LoginImage})` }}>
            <LoginHeader />
            <LoginComponent />
          </div>
        }
      />
      <Route
        path="/signup"
        element={
          <div style={{ ...fullScreenImageStyle, backgroundImage: `url(${LoginImage})` }}>
            <LoginHeader />
            <SignUpForm />
          </div>
        }
      />
      <Route
        path="/create-profile"
        element={
          <div style={{ ...fullScreenImageStyle, backgroundImage: `url(${CreateProfileImage})` }}>
            <CreateProfileForm />
          </div>
        }
      />
      <Route
        path="/customer-page/*"
        element={
          <div>
            <CustomerApp />
          </div>
        }
      />
      <Route
        path="/become_delivery_partner"
        element={
          <div style={{ backgroundImage: `url(${DeliveryImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <DeliveryPartnerForm />
          </div>
        }
      />
      <Route
        path="/workerapp"
        element={
          <div>
            <WorkerApp />
          </div>
        }    
      />
      <Route
        path="/admin-page/*"
        element={
          <div>
            <AdminApp />
          </div>
        }
      />
    </Routes>
    </Router>
  );
};

export default MainRouter;
