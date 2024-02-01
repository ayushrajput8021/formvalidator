// DataContext.js
import { createContext, useContext, useState } from 'react';

const BillingContext = createContext();


export const BillingProvider = ({ children }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');


    return (
        <BillingContext.Provider value={{
            cardNumber, setCardNumber,
            cvv, setCvv,
            expiryDate, setExpiryDate,
            nameOnCard, setNameOnCard
        }}>
            {children}
        </BillingContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBilling = () => {
    const context = useContext(BillingContext);

    if (!context) {
        throw new Error('useBilling must be used within a Billing Provider');
    }

    return context;
};
