import { DatePickerDemo } from '@/components/Date';
import Heading from '@/components/Heading';
import InputCombo from '@/components/InputCombo';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useData } from '@/context/DataContext';
import {useEffect, useState} from "react";
import {z} from 'zod';

const PersonalInfoSchema = z.object({
	firstName: z.string().trim(),
	lastName: z.string().trim().toLowerCase(),
	dob: z.date(),
	email: z.string().trim().toLowerCase().email().min(5),
	countryCode: z.string().trim().toLowerCase().min(1),
	number: z.string().length(10).trim(),
	gender: z.string().trim().toLowerCase().min(3),
});
function PersonalInfo() {
	const navigate = useNavigate();
	const [isFormValid,setIsFormValid]=useState(false);
	const {
		firstName,
		setFirstName,
		lastName,
		setLastName,
		dob,
		setDob,
		email,
		setEmail,
		countryCode,
		setCountryCode,
		number,
		setNumber,
		gender,
		setGender,
	} = useData();

	useEffect(() => {
		// Check if all fields are valid
		const {success}= PersonalInfoSchema.safeParse({firstName,lastName,dob,email,countryCode,number,gender});
		setIsFormValid(success);
	}, [firstName, lastName, dob, email, countryCode, number, gender]);
	function handleNextPage() {
		navigate('/address');
	}
	return (
		<div className='flex flex-col justify-start w-96 flex-wrap'>
			<Heading text='Personal Info' className='mb-5 text-lg' />
			<div className='flex mb-2 w-full'>
				<InputCombo
					label='First Name'
					type='text'
					id='firstName'
					placeholder='First Name'
					className={'w-1/2'}
					value={firstName}
					HandleInput={setFirstName}
				/>
				<InputCombo
					label='Last Name'
					type='text'
					id='lastName'
					placeholder='Last Name'
					className={'w-1/2 ml-2'}
					value={lastName}
					HandleInput={setLastName}
				/>
			</div>
			<div className='flex justify-between items-baseline w-full'>
				<div className='flex flex-col w-1/2'>
					<Label>Date of Birth</Label>
					<DatePickerDemo
						className='w-full'
						value={dob}
						handleInput={setDob}
					/>
				</div>
				<InputCombo
					label='Email'
					type='email'
					id='email'
					placeholder='Email'
					className={'w-1/2 ml-2'}
					value={email}
					HandleInput={setEmail}
				/>
			</div>

			<div className='flex justify-between items-baseline w-full'>
				<InputCombo
					label='Country Code'
					type='text'
					id='countryCode'
					placeholder='Country Code'
					className={'w-1/2'}
					value={countryCode}
					HandleInput={setCountryCode}
				/>
				<InputCombo
					label='Number'
					type='text'
					id='number'
					placeholder='Number'
					className={'w-1/2 ml-2'}
					value={number}
					HandleInput={setNumber}
				/>
			</div>
			<RadioGroup onValueChange={setGender} defaultValue={gender}>
				<Label>Gender</Label>
				<div className='flex mb-6'>
					<div className='flex items-center mr-6'>
						<RadioGroupItem
							value='male'
							id='option-male'
							className={'mr-2'}
						/>
						<Label htmlFor='option-male'>Male</Label>
					</div>
					<div className='flex items-center mr-6'>
						<RadioGroupItem
							value='female'
							id='option-female'
							className={'mr-2'}
						/>
						<Label htmlFor='option-female'>Female</Label>
					</div>
					<div className='flex items-center mr-6'>
						<RadioGroupItem
							value='other'
							id='option-other'
							className={'mr-2'}
						/>
						<Label htmlFor='option-other'>Other</Label>
					</div>
				</div>
			</RadioGroup>

			<Button disabled={!isFormValid}  onClick={() => handleNextPage()}>Next Page</Button>
		{/*	*/}
		</div>
	);
}

export default PersonalInfo;
