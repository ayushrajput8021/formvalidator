import Heading from '@/components/Heading';
import InputCombo from '@/components/InputCombo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAddress } from '@/context/AddressContext';
import {z} from "zod";
import {useEffect, useState} from "react";
import {useData} from "@/context/DataContext.jsx";

const AddressInfoSchema = z.object({
	houseNumber: z.string().trim().toLowerCase().min(1),
	streetName: z.string().trim().toLowerCase(),
	fullAddress: z.string().trim().toLowerCase(),
	city:z.string().trim().toLowerCase(),
	region:z.string().trim().toLowerCase().optional(),
	postalCode: z.string().trim().toLowerCase().length(6),
	country:z.string().trim().toLowerCase().min(1)
});
function AddressInfo() {
	const navigate = useNavigate();
	const [isFormValid,setIsFormValid]=useState(false);
	const {
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
	} = useAddress();

	useEffect(() => {
		// Check if all fields are valid
		const {success}= AddressInfoSchema.safeParse({houseNumber,streetName,fullAddress,city,region,postalCode,country});
		// const result= AddressInfoSchema.safeParse({houseNumber,streetName,fullAddress,city,region,postalCode,country});
		// console.log(result)

		setIsFormValid(success);
	}, [houseNumber,streetName,fullAddress,city,region,postalCode,country]);
	function handleNextPage() {
		navigate('/billing');
	}
	function handlePreviousPage() {
		navigate('/');
	}
	return (
		<div>
			<Heading text='Address Info' className='mb-5 text-lg' />
			<div className='flex '>
				<InputCombo
					label='House Number'
					type='text'
					id='houseNumber'
					placeholder='House Number'
					className='w-1/2 pr-2'
					value={houseNumber}
					HandleInput={setHouseNumber}
				/>
				<InputCombo
					label='Street Name'
					type='text'
					id='streetName'
					placeholder='Street Name'
					value={streetName}
					HandleInput={setStreetName}
				/>
			</div>

			<InputCombo
				label='Full Address'
				type='text'
				id='address'
				placeholder='Full Address'
				value={fullAddress}
				HandleInput={setFullAddress}
			/>
			<div className='flex'>
				<InputCombo
					label='City'
					type='text'
					id='city'
					placeholder='City'
					className='w-1/2 pr-2'
					value={city}
					HandleInput={setCity}
				/>
				<InputCombo
					label='Region'
					type='text'
					id='region'
					placeholder='Region'
					className='w-1/2'
					value={region}
					HandleInput={setRegion}
				/>
			</div>
			<div className='flex justify-between mb-6'>
				<InputCombo
					label='Postal Code'
					type='text'
					id='postal'
					placeholder='Postal Code'
					className='w-1/2 pr-2'
					value={postalCode}
					HandleInput={setPostalCode}
				/>
				<InputCombo
					label='Country'
					type='text'
					id='country'
					placeholder='Country'
					className='w-1/2'
					value={country}
					HandleInput={setCountry}
				/>
			</div>

			<div className='flex justify-center'>
				<Button onClick={() => handlePreviousPage()} className={'mr-5'}>
					Previous Page
				</Button>
				<Button disabled={!isFormValid} onClick={() => handleNextPage()}>Next Page</Button>
			{/*	*/}
			</div>
		</div>
	);
}

export default AddressInfo;
