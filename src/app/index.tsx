import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../components/Home';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
