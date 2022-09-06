import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import { AskOne } from '../components/steps/StepOne';

const Step2 = () => <>Step 2</>;
const Step3 = () => <>Step 3</>;
const Result = () => <>Result</>;

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<AskOne />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
