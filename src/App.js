// App.js
/*
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuthFunctions } from './Components/AuthFunctions';
import Header from './Components/HomePage/Header';
import HeaderAfterLogin from './Components/CustomerPage/HeaderAfterLogin';
import Introduction from './Components/HomePage/Introduction';
import Services from './Components/HomePage/Services';
import Portfolio from './Components/HomePage/Plans';
import AboutMe from './Components/HomePage/AboutMe';
import LoginComponent from './Components/LoginComponent';
import LoginHeader from './Components/LoginHeader';
import SignUpForm from './Components/SignUpForm';
import './App.css';
import CreateProfileForm from './Components/CreateProfileForm';
import backgroundImage from './wastepic.png';
import LoginImage from './LoginBackground.jpeg';
import CreateProfileImage from './CreateProfileBackground.jpg';
import DeliveryImage from './deliverybackgrd.jpeg';
import DeliveryPartnerForm from './Components/DeliveryPartnerForm';
import WorkerApp from './Components/WorkerPage/WorkerApp';
import CustomerApp from './Components/CustomerPage/CustomerApp';
import EwasteCelebration from './confetti';
import AdminApp from "./Components/AdminPage/AdminApp";

function App() {
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
}

export default App;
*/

import React from 'react';
import './App.css';
//import MapComponent from './Components/WorkerPage/MapComponent';
//import DashboardComponent from './Components/WorkerPage/WorkerDashboard';
//import SidebarForDeliveryPartner from './Components/WorkerPage/SidebarForDeliveryPartner';
//import SidebarForCustomer from './Components/CustomerPage/SidebarForCustomer';
//import MapContainer from './Components/WorkerPage/MapContainer';
//import SignUpForm from './Components/SignUpForm';
//import DashboardComponent from './Components/WorkerPage/WorkerDashboard';
//import CurrentTaskComponent from './Components/WorkerPage/WorkerCurrentTasks';
//import AssignedJobsComponent from './Components/WorkerPage/WorkerAssignedJobs';
//import SupportComponent from './Components/WorkerPage/WorkerSupport';
//import NewlyAssignedTasks from './Components/WorkerPage/NewlyAssignedTasks';
//import TaskManager from './Components/AdminPage/TaskManager';
//import CustomerPage from './Components/CustomerPage/CustomerPage';
//import Header from './Components/WorkerPage/WorkerHeader';
import MainRouter from './Components/MainRouter';

function App() {
  return (
    
    <div>
      <MainRouter />
    </div>
  );
}
export default App;
