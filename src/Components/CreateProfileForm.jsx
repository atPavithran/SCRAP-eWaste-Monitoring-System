import React, { useState, useEffect } from 'react';
import './CreateProfileForm.css';
import { useAuthFunctions } from './AuthFunctions';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from "../config/firebase";

const CreateProfileForm = () => {
  const {
    user,
    username, // Getting username directly from useAuthFunctions hook
  } = useAuthFunctions();

  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  useEffect(() => {
    // Set initial values for companyName, address, etc. if available
    if (user) {
      // No need to set username again, as it's already obtained from useAuthFunctions
    }
  }, [user]);

  // Rest of the component remains unchanged...


  const citiesByState = {
    'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Kakinada'],
    'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro'],
    'Assam': ['Guwahati', 'Dibrugarh', 'Jorhat', 'Silchar', 'Tezpur', 'Nagaon'],
    'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Purnia'],
    'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Rajnandgaon', 'Raigarh'],
    'Goa': ['Panaji', 'Margao', 'Vasco da Gama', 'Ponda', 'Mapusa'],
    'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar'],
    'Haryana': ['Faridabad', 'Gurgaon', 'Panipat', 'Ambala', 'Karnal', 'Hisar'],
    'Himachal Pradesh': ['Shimla', 'Mandi', 'Dharamshala', 'Solan', 'Kullu', 'Chamba'],
    'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh'],
    'Karnataka': ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga'],
    'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad'],
    'Madhya Pradesh': ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur'],
    'Manipur': ['Imphal', 'Thoubal', 'Churachandpur', 'Bishnupur', 'Senapati'],
    'Meghalaya': ['Shillong', 'Tura', 'Nongpoh', 'Jowai', 'Baghmara'],
    'Mizoram': ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Serchhip'],
    'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha'],
    'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri'],
    'Punjab': ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda'],
    'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner'],
    'Sikkim': ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan', 'Singtam'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli'],
    'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Ramagundam', 'Khammam'],
    'Tripura': ['Agartala', 'Dharmanagar', 'Kailasahar', 'Udaipur', 'Belonia'],
    'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut', 'Allahabad'],
    'Uttarakhand': ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Kashipur', 'Rudrapur'],
    'West Bengal': ['Kolkata', 'Asansol', 'Siliguri', 'Durgapur', 'Bardhaman', 'Malda']
    // You can add more states and cities as needed
  };
  

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDocRef = doc(db, 'CustomerLogin', user.uid);
      await updateDoc(userDocRef, {
        companyName,
        address,
        city: selectedCity,
        state: selectedState,
        phone: phoneNumber,
      });
      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile: ", error.message);
    }
  };

  return (
    <div className="create-profile-container">
      <h2>Create Your Profile</h2>
      <form className="create-profile-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          disabled
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={user?.email || ""}
          disabled
        />

        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="state">State:</label>
        <select id="state" value={selectedState} onChange={handleStateChange}>
          <option value="">Select State</option>
          {Object.keys(citiesByState).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <label htmlFor="city">City:</label>
        <select
          id="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
        >
          <option value="">Select City</option>
          {citiesByState[selectedState]?.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default CreateProfileForm;
