import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Header = () => <h2>Hello</h2>;
const Step1 = () => <>Step start</>;
const Step2 = () => <>Step 2</>;
const Step3 = () => <>Step 3</>;
const Step4 = () => <>Step 4</>;

function App() {
	return (
		<Router>
			<Header/>
			<Routes>
				<Route exact path="/" element={<Step1/>}/>
				<Route exact path="/two" element={<Step2/>}/>
				<Route exact path="/tree" element={<Step3/>}/>
				<Route exact path="/four" element={<Step4/>}/>
			</Routes>
		</Router>
	);
}

export default App;
