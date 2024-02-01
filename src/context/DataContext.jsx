// DataContext.js
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState('');

  return (
    <DataContext.Provider value={{ 
      firstName, setFirstName,
      lastName, setLastName,
      dob, setDob,
      email, setEmail,
      countryCode, setCountryCode,
      number, setNumber,
      gender, setGender
    }}>
      {children}
    </DataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
};
