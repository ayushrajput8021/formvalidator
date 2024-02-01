import Heading from '@/components/Heading';
import InputCombo from '@/components/InputCombo';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {useNavigate} from 'react-router-dom';
import {DatePickerDemo} from '@/components/Date';
import {useBilling} from "@/context/BillingContext.jsx";
import {z} from "zod";
import {useEffect, useState, useRef} from "react";

const BillingInfoSchema = z.object({
    cardNumber: z.string().trim().toLowerCase().length(16),
    cvv: z.string().trim().toLowerCase().length(3),
    expiryDate: z.date(),
    nameOnCard: z.string().trim().toLowerCase()
});

function BillingInfo() {
    const navigate = useNavigate();
    const [isFormValid, setIsFormValid] = useState(false);
    const [card1, setCard1] = useState('');
    const [card2, setCard2] = useState('');
    const [card3, setCard3] = useState('');
    const [card4, setCard4] = useState('');

    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);

    const {
        cardNumber, setCardNumber, cvv, setCvv, expiryDate, setExpiryDate, nameOnCard, setNameOnCard
    } = useBilling();

    useEffect(() => {
        card1Ref?.current?.focus();
        if (card1.length===4) {
            card2Ref?.current?.focus();
        }
        if (card2.length===4) {
            card3Ref?.current?.focus();
        }
        if (card3.length===4) {
            card4Ref?.current?.focus();
        }
        if(card4.length===4 ){
            setCardNumber(card1+card2+card3+card4);
        }
    }, [cardNumber, card1,card2,card3,card4]);

    useEffect(() => {
        const {success} = BillingInfoSchema.safeParse({
            cardNumber, cvv, expiryDate, nameOnCard
        });
        setIsFormValid(success);
    }, [cvv,nameOnCard,expiryDate]);
    function handleNextPage() {
        navigate('/data');
    }

    function handlePreviousPage() {
        navigate('/address');
    }

    return (<div>
        <Heading text='Billing Info' className='mb-5 text-lg'/>
        <div className=''>
            <Label>Card Number</Label>
            <div className='flex '>
                <InputCombo refer={card1Ref} type='text' id='cardNumber1' inputClassName='w-28 mr-2' value={card1}
                            HandleInput={setCard1} className='text-center'/>
                <InputCombo refer={card2Ref} type='text' id='cardNumber2' inputClassName='w-28 mr-2' value={card2}
                            HandleInput={setCard2}/>
                <InputCombo refer={card3Ref} type='text' id='cardNumber3' inputClassName='w-28 mr-2' value={card3}
                            HandleInput={setCard3}/>
                <InputCombo refer={card4Ref} type='text' id='cardNumber3' inputClassName='w-28 ' value={card4}
                            HandleInput={setCard4}/>
            </div>
        </div>
        <div className='flex justify-between'>
            <div className='w-76 pr-2 '>
                <InputCombo  label='CVV' type='text' id='cvv' placeholder='CVV' value={cvv}
                            HandleInput={setCvv}/>
            </div>
            <div className='flex flex-col w-76 mt-1.5'>
                <Label className='leading-'>Expiry Date</Label>
                <DatePickerDemo className='pb-0' value={expiryDate}
                                handleInput={setExpiryDate}/>
            </div>
        </div>

        <InputCombo
            label='Name on Card'
            type='text'
            id='cardName'
            placeholder='Name on Card'
            className='w-full'
            value={nameOnCard}
            HandleInput={setNameOnCard}
        />

        <div className='flex justify-center'>
            <Button onClick={() => handlePreviousPage()} className={'mr-5'}>
                Previous Page
            </Button>
            <Button disabled={!isFormValid} onClick={() => handleNextPage()}>Next Page</Button>
        {/*    */}
        </div>
    </div>);
}

export default BillingInfo;
