import React, { useContext } from "react";
import SupplierForm from "../components/SupplierForm";
import { SupplierContext } from "../context/SupplierContext";
import { useNavigate } from "react-router-dom";

const AddSupplier = () => {
  const { addNewSupplier } = useContext(SupplierContext);
  const navigate = useNavigate();

  const handleAddSupplier = (supplier) => {
    addNewSupplier(supplier);
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Cadastrar Fornecedor</h1>
      <SupplierForm onSubmit={handleAddSupplier} />
    </div>
  );
};

export default AddSupplier;
