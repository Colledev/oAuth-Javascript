import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Login from './components/Login';

const App = () => {
  return (
    <RecoilRoot> 
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;
