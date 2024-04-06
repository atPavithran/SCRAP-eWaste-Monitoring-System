import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { auth, db } from "../config/firebase";

export const useAuthFunctions = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        setUsername(currentUser.displayName);
        const userData = {
          email: currentUser.email,
          username: currentUser.displayName,
          address: null,
          city: null,
          state: null,
          phone: null,
          Track: {
            2024: {
              January: null,
              February: null,
              March: null,
              April: null,
              May: null,
              June: null,
              July: null,
              August: null,
              September: null,
              October: null,
              November: null,
              December: null,
            },
          },
          companyName: null,
        };

        const userDocRef = doc(db, 'CustomerLogin', currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          await setDoc(userDocRef, userData);
        }
      }
    });

    return unsubscribe;
  }, []);

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      const userData = {
        email: userCredential.user.email,
        username,
        address: null,
        city: null,
        state: null,
        phone: null,
        Track: {
          2024: {
            January: null,
            February: null,
            March: null,
            April: null,
            May: null,
            June: null,
            July: null,
            August: null,
            September: null,
            October: null,
            November: null,
            December: null,
          },
        },
        companyName: null,
      };

      const userDocRef = doc(db, 'CustomerLogin', userCredential.user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        throw new Error("User already exists. Please login to continue.");
      } else {
        await setDoc(userDocRef, userData);
        console.log("User registered successfully!");
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        throw new Error("User already exists. Please login to continue.");
      }

      console.error(error.message);
      throw error;
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("User logged in successfully!");
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  const signInWithGoogle = async (username) => {
    try {
      const authInstance = getAuth();
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(authInstance, provider);
      const user = result.user;

      const userData = {
        email: user.email,
        username: username,
        address: null,
        city: null,
        state: null,
        phone: null,
        Track: {
          2024: {
            January: null,
            February: null,
            March: null,
            April: null,
            May: null,
            June: null,
            July: null,
            August: null,
            September: null,
            October: null,
            November: null,
            December: null,
          },
        },
        companyName: null,
      };
      const userDocRef = doc(db, 'CustomerLogin', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        await setDoc(userDocRef, userData);
      }

      return user;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  return {
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    username,
    setUsername,
    user,
    register,
    login,
    logout,
    signInWithGoogle,
  };
};
