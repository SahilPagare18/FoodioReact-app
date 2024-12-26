import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages.jsx/Home";
import Success from "./pages.jsx/Success";
import Error from "./pages.jsx/Error";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<ProtectedRoute element={<Success/>}/>} />
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
