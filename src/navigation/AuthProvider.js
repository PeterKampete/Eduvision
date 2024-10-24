import React, {createContext, useState} from 'react';
import {ToastAndroid} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const showToastWithGravityAndOffset = message => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
          } catch (error) {
            console.log(error);
          }
        },
        register: async (email, password) => {
          try {
          } catch (e) {
            showToastWithGravityAndOffset(e.message);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            showToastWithGravityAndOffset(e.message);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
