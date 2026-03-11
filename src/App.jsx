import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Inspiration from './pages/Inspiration';
import Store from './pages/Store';
import PriceList from './pages/PriceList';
import MadeToMeasureShirt from './pages/MadeToMeasureShirt';
import MadeToMeasureTrouser from './pages/MadeToMeasureTrouser';
import MadeToMeasureSuit from './pages/MadeToMeasureSuit';
import MadeToMeasureJacket from './pages/MadeToMeasureJacket';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/store" element={<Store />} />
        <Route path="/price-list" element={<PriceList />} />
        <Route path="/made-to-measure/shirt" element={<MadeToMeasureShirt />} />
        <Route path="/made-to-measure/trouser" element={<MadeToMeasureTrouser />} />
        <Route path="/made-to-measure/suit" element={<MadeToMeasureSuit />} />
        <Route path="/made-to-measure/jacket" element={<MadeToMeasureJacket />} />
      </Routes>
    </Router>
  );
}

export default App;
