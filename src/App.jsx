import LandingPage from './Components/LandingPage'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import LoginSignUp from './Components/LoginSignUp';
import { AnimatePresence } from 'framer-motion'




const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/LoginSignUp' && <NavigationBar />}
      <AnimatePresence>
      <Routes>
        <Route path="/TinDog" element={<LandingPage />} />
        <Route path="/LoginSignUp" element={<LoginSignUp />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;