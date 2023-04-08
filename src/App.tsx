import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Students from './sudents';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* <router-view> */}
      <Route path="/" element={<Home />} >
        <Route path="classes" element={<>ddd</>}></Route>
        <Route path="students" element={<Students />}></Route>
        <Route path="groups" element={<div>热榜</div>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
