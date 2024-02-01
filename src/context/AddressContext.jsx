import {createContext, useContext, useState} from "react";

const AddressContext = createContext();

export const AddressProvider = ({children}) => {
    const [houseNumber, setHouseNumber] = useState('');
    const [streetName, setStreetName] = useState('');
    const [fullAddress, setFullAddress] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    return (<AddressContext.Provider value={{
            houseNumber,
            setHouseNumber,
            streetName,
            setStreetName,
            fullAddress,
            setFullAddress,
            city,
            setCity,
            region,
            setRegion,
            postalCode,
            setPostalCode,
            country,
            setCountry
        }}>
            {children}
        </AddressContext.Provider>)
}
export const useAddress = () => {
    const context = useContext(AddressContext);

    if (!context) {
        throw new Error('useAddress must be used within a AddressProvider');
    }

    return context;
};