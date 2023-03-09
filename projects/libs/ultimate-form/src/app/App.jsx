import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Header from '../components/header/Header';
import { StepFirst } from '../components/steps/StepFirst';
import { StepSecond } from '../components/steps/StepSecond';
import { StepThird } from '../components/steps/StepThird';
import { Result } from '../components/steps/Result';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/first" element={<StepFirst />} />
          <Route path="/*" element={<Navigate to="/first" replace />} />
          <Route path="/second" element={<StepSecond />} />
          <Route path="/third" element={<StepThird />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
