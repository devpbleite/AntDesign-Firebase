import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SupplierProvider } from "./context/SupplierContext";
import Home from "./pages/Home";
import AddSupplier from "./pages/AddSupplier";
import EditSupplier from "./pages/EditSupplier";
import SupplierDetails from "./components/SupplierDetails";
import "antd/dist/reset.css";
import "./index.css";

const App = () => {
  return (
    <Router>
      <SupplierProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddSupplier />} />
          <Route path="/edit/:id" element={<EditSupplier />} />
          <Route path="/details/:id" element={<SupplierDetails />} />
        </Routes>
      </SupplierProvider>
    </Router>
  );
};

export default App;
