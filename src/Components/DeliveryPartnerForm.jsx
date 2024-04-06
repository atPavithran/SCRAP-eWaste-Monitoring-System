
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { v4 as uuidv4 } from 'uuid';

const DeliveryPartnerForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredState1, setPreferredState1] = useState('');
  const [preferredState2, setPreferredState2] = useState('');
  const [optionalState1, setOptionalState1] = useState('');
  const [optionalState2, setOptionalState2] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const generateUserId = () => {
    return uuidv4();
  };

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

  const handlePreferredStatesChange = (e) => {
    setPreferredState1(e.target.value);
  };

  const handleOptionalStatesChange = (e) => {
    setOptionalState1(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = generateUserId();
      const userDocRef = doc(db, 'DeliveryPartnerLogin', userId);
      await setDoc(userDocRef, {
        companyName,
        address,
        city: selectedCity,
        state: selectedState,
        phone: phoneNumber,
        preferredState1,
        preferredState2,
        optionalState1: optionalState1 || null,
        optionalState2: optionalState2 || null,
        email,
      });

      console.log('Profile updated successfully!');

      navigate('/workerapp');
    } catch (error) {
      console.error('Error updating profile: ', error.message);
    }
  };

  return (
    <div className="create-profile-container">
      <h2>Be Proud to be a Partner</h2>
      <form className="create-profile-form" onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input 
            type="text" 
            id="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span>*</span>
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>*</span>
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span>*</span>
        </label>

        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span>*</span>
        </label>

        <label htmlFor="companyName">
          Company Name:
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <span>*</span>
        </label>

        <label htmlFor="address">
          Address:
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <span>*</span>
        </label>

        <label htmlFor="state">
          State:
          <select id="state" value={selectedState} onChange={handleStateChange} required>
            <option value="">Select State</option>
            {Object.keys(citiesByState).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <span>*</span>
        </label>

        <label htmlFor="city">
          City:
          <select
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState}
            required
          >
            <option value="">Select City</option>
            {citiesByState[selectedState]?.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <span>*</span>
        </label>

        <label htmlFor="phoneNumber">
          Phone Number:
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <span>*</span>
        </label>

        <label htmlFor="preferredState1">
          Preferred State 1:
          <select
            id="preferredState1"
            value={preferredState1}
            onChange={handlePreferredStatesChange}
            required
          >
            <option value="">Select Preferred State 1</option>
            {Object.keys(citiesByState).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <span>*</span>
        </label>

        <label htmlFor="preferredState2">
          Preferred State 2:
          <select
            id="preferredState2"
            value={preferredState2}
            onChange={(e) => setPreferredState2(e.target.value)}
          >
            <option value="">Select Preferred State 2</option>
            {Object.keys(citiesByState).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <span>*</span>
        </label>

        <label htmlFor="optionalState1">
          Optional State 1:
          <select
            id="optionalState1"
            value={optionalState1}
            onChange={handleOptionalStatesChange}
          >
            <option value="">Select Optional State 1</option>
            {Object.keys(citiesByState).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="optionalState2">
          Optional State 2:
          <select
            id="optionalState2"
            value={optionalState2}
            onChange={(e) => setOptionalState2(e.target.value)}
          >
            <option value="">Select Optional State 2</option>
            {Object.keys(citiesByState).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default DeliveryPartnerForm;
