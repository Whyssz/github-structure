import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Step1 = () => <>Step 1</>;
const Step2 = () => <>Step 2</>;
const Step3 = () => <>Step 3</>;
const Result = () => <>Result</>;

const Header = () => <h1>Ultimate React From</h1>;

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
