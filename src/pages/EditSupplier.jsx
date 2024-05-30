import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SupplierForm from "../components/SupplierForm";
import { SupplierContext } from "../context/SupplierContext";
import { Button } from "antd";

const EditSupplier = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { suppliers, updateExistingSupplier } = useContext(SupplierContext);

  const supplier = suppliers.find((supplier) => supplier.id === parseInt(id));

  const handleUpdateSupplier = (updatedSupplier) => {
    updateExistingSupplier({ ...updatedSupplier, id: parseInt(id) });
    navigate("/");
  };

  if (!supplier) {
    return (
      <div className="container mx-auto p-4 max-w-4xl">
        Fornecedor não encontrado
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Editar Fornecedor</h1>
        <Button type="default" onClick={() => navigate(`/details/${id}`)}>
          Ver Detalhes
        </Button>
      </div>
      <SupplierForm initialValues={supplier} onSubmit={handleUpdateSupplier} />
    </div>
  );
};

export default EditSupplier;
