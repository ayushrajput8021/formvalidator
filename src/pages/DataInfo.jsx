import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import {useBilling} from "@/context/BillingContext.jsx";
import {useData} from "@/context/DataContext.jsx";
import {useAddress} from "@/context/AddressContext.jsx";

function DataInfo() {
    const personalContext = useData()
    const {firstName, lastName, dob, email, countryCode, number, gender} = personalContext;
    const billingContext = useBilling();
    const {cardNumber, cvv, nameOnCard, expiryDate} = billingContext;
    const addressContext = useAddress();
    const {houseNumber, streetName, fullAddress, city, region, postalCode, country} = addressContext;
    let newDob =String(dob);
    newDob = newDob.split('00',1)
    let newExpiryDate = String(expiryDate)
    newExpiryDate =  newExpiryDate.split('00',1)
    return (<div className='w-full justify-around flex'>
            <div className='mr-10'>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Personal Details</h4>
                <Table className='mb-6'>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Item</TableHead>
                            <TableHead>Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className='font-semibold'>First Name</TableCell>
                            <TableCell>{firstName?firstName:'NA'}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-semibold'>Last Name</TableCell>
                            <TableCell>{lastName?lastName:'NA'}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-semibold'>Date of Birth</TableCell>
                            <TableCell>{newDob?newDob:'NA'}</TableCell>
                        </TableRow>
                        <TableRow><TableCell className='font-semibold'>Email</TableCell>
                            <TableCell>{email?email:'NA'}</TableCell></TableRow>
                        <TableRow><TableCell className='font-semibold'>Country Code</TableCell>
                            <TableCell>{countryCode?countryCode:'NA'}</TableCell></TableRow>
                        <TableRow><TableCell className='font-semibold'>Number</TableCell>
                            <TableCell>{number?number:'NA'}</TableCell></TableRow>
                        <TableRow><TableCell className='font-semibold'>Gender</TableCell>
                            <TableCell>{gender?number:'NA'}</TableCell></TableRow>

                    </TableBody>
                </Table>
            </div>
            <div className='mr-10'>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Address Details</h4>
                <Table className='mb-6'>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Item</TableHead>
                            <TableHead>Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                            <TableRow>
                                <TableCell className='font-semibold'>House Number</TableCell>
                                <TableCell>{houseNumber?houseNumber:'NA'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='font-semibold'>Street Name</TableCell>
                                <TableCell>{streetName?streetName:'NA'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='font-semibold'>Full Address</TableCell>
                                <TableCell>{fullAddress?fullAddress:'NA'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='font-semibold'>City</TableCell>
                                <TableCell>{city?city:'NA'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='font-semibold'>Region</TableCell>
                                <TableCell>{region?region:'NA'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='font-semibold'>Postal Code</TableCell>
                                <TableCell>{postalCode?postalCode:'NA'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='font-semibold'>Country</TableCell>
                                <TableCell>{country?country:'NA'}</TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Billing Details</h4>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Item</TableHead>
                            <TableHead>Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className='font-semibold'>Card Number</TableCell>
                            <TableCell>{cardNumber?cardNumber:'NA'}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-semibold'>CVV</TableCell>
                            <TableCell>{cvv?cvv:'NA'}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-semibold'>Expiry Date</TableCell>
                            <TableCell>{newExpiryDate?newExpiryDate:'NA'}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='font-semibold'>Name on card</TableCell>
                            <TableCell>{nameOnCard?nameOnCard:'NA'}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

        </div>);
}

export default DataInfo;
