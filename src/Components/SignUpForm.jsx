// SignUpForm.jsx

import React, { useState } from 'react';
import './SignUpForm.css';
import { useAuthFunctions } from './AuthFunctions';
import GoogleButton from 'react-google-button';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase"; // Import auth and googleProvider
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore'; // Import the necessary firestore functions
import { db } from "../config/firebase"; // Import db
import { updateProfile } from "firebase/auth";

const SignUpForm = () => {
  const {
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    username,
    setUsername,
    register,
  } = useAuthFunctions();

  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const checkUserExists = async (email) => {
    const emailQuery = query(collection(db, 'CustomerLogin'), where('email', '==', email));
    const emailDocs = await getDocs(emailQuery);
    return emailDocs.size > 0;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (registerPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const userCredential = await register();

      // Check if userCredential has a user property
      if (userCredential?.user) {
        // Set the displayName using updateProfile
        await updateProfile(userCredential.user, { displayName: username });
      }
  
      // Redirect to the create profile form page after successful signup
      navigate('/create-profile');
    } catch (error) {
      setError(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      // Logic to check if the user already exists
      const userExists = await checkUserExists(auth.currentUser.email);

      if (userExists) {
        navigate('/customer-page');
      } else {
        navigate('/create-profile');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up to E-Waste Monitoring System</h2>
      <form className="signup-form" onSubmit={handleSignUp}>
        {error && <div className="error-message">{error}</div>}
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <h3 classname="signup-h3"> OR </h3>
        <div className="googleButton">
          <GoogleButton
            type='light'
            label='Sign in with Google'
            onClick={signInWithGoogle}
          />
        </div>
      </form>
      <div className="become-delivery-partner">
        <a href="/become_delivery_partner">Become a delivery partner?</a>
      </div>
    </div>
  );
};

export default SignUpForm;
