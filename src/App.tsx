import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Button from './components/UI/Button/Button';
import Layout from './components/UI/Layout/Layout';
import './app.module.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="garage"
            element={
              <Button onClick={() => console.log(1)} textContent="Garage" />
            }
          />
          <Route
            path="winners"
            element={
              <Button onClick={() => console.log(2)} textContent="Winners" />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
