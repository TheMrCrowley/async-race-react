import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import CarLine from './components/UI/CarLine/CarLine';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="garage"
            element={<CarLine data={{ name: 'BMW', color: 'teal' }} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
