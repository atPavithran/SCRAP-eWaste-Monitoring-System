import React, { useState } from 'react';
import './LoginComponent.css';
import { useAuthFunctions } from './AuthFunctions';
import GoogleButton from 'react-google-button';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../config/firebase"; // Import db from config/firebase
import { collection, getDocs, query, where } from 'firebase/firestore'; // Import Firestore functions
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginComponent = () => {
  const {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    login,
  } = useAuthFunctions();

  const navigate = useNavigate(); // Initialize navigate
  const [error, setError] = useState(null);
  const checkUserExists = async (email) => {
    const emailQuery = query(collection(db, 'CustomerLogin'), where('email', '==', email));
    const emailDocs = await getDocs(emailQuery);
    return emailDocs.size > 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Check the selected user type
    const userType = e.target.userType.value;
  
    // Get the email entered for login
    const userEmail = loginEmail;
  
    // Check if the selected user type is valid and the email is not empty
    if (userType && userEmail) {
      try {
        let collectionName = ''; // Initialize collection name variable
  
        // Map user types to Firestore collection names
        switch (userType) {
          case 'customer':
            collectionName = 'CustomerLogin';
            break;
          case 'deliveryPartner':
            collectionName = 'DeliveryPartnerLogin';
            break;
          case 'admin':
            collectionName = 'AdminLogin';
            break;
          default:
            console.error('Invalid user type');
            return;
        }
  
        // Get the collection reference based on the user type
        const collectionRef = collection(db, collectionName);
  
        // Query the Firestore collection to check if the user exists
        const querySnapshot = await getDocs(collectionRef);
  
        // Check if the user with the entered email exists in the collection
        const userExists = querySnapshot.docs.some(doc => doc.data().email === userEmail);
  
        // If user exists, proceed with login, else show alert
        if (userExists) {
          console.log("Login successful!");
          await login(); // Invoke the login function
          
          // Redirect based on user type
          switch (userType) {
            case 'customer':
              navigate('/customer-page');
              break;
            case 'Delivery Partner':
              navigate('/workerapp');
              break;
            case 'admin':
              navigate('/admin-page');
              break;
            default:
              break;
          }
          
        } else {
          alert("Invalid account details. Please try again.");
          // Handle invalid account details (e.g., show error message)
        }
      } catch (error) {
        console.error("Error checking user type:", error);
        // Handle error (e.g., show error message)
      }
    } else {
      console.error("User type or email is empty.");
      // Handle empty user type or email (e.g., show error message)
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
    <div className="login-container">
      <h2>Login to E-Waste Monitoring System</h2>
      <form className="login-form" onSubmit={handleLogin}>
        {error && <div className="error-message">{error}</div>}
        <input
          type="text"
          name="Email"
          placeholder="Email"
          required
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <select name="userType" required>
          <option value="" defaultValue>
            Select User Type
          </option>
          <option value="customer">Customer</option>
          <option value="deliveryPartner">Delivery Partner</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
        <h3 className='login-h3'> OR </h3>
        <div className="googleButton">
          <GoogleButton
            type='light'
            label='Continue with Google'
            onClick={signInWithGoogle} // Changed to signInWithGoogle directly
          />
        </div>
      </form>

    </div>
  );
};

export default LoginComponent;
  