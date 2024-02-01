import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Heading from './components/Heading';
import AddressInfo from './pages/AddressInfo';
import PersonalInfo from './pages/PersonalInfo';
import BillingInfo from './pages/BillingInfo';
import DataInfo from './pages/DataInfo';
import { DataProvider } from './context/DataContext';
import { AddressProvider } from "@/context/AddressContext";
import { BillingProvider } from "@/context/BillingContext";

function App() {
	return (
		<DataProvider>
			<AddressProvider>
				<BillingProvider>
					<div className='flex flex-col items-center pt-8'>
						<BrowserRouter>
							<Heading text='Form Validator' className='text-5xl mb-8' />
							<Routes>
								<Route path='/' element={<PersonalInfo />} />
								<Route path='/address' element={<AddressInfo />} />
								<Route path='/billing' element={<BillingInfo />} />
								<Route path='/data' element={<DataInfo />} />
							</Routes>
						</BrowserRouter>
					</div>
				</BillingProvider>
			</AddressProvider>
		</DataProvider>
	);
}

export default App;
