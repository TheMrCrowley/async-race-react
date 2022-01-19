import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import MyButton from './components/UI/Button/MyButton';
import Garage from './components/UI/Garage/Garage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="garage" element={<Garage />} />
          <Route
            path="winners"
            element={<MyButton onClick={() => console.log(1)}>Hello</MyButton>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
