import React, { useContext } from "react";
import { Descriptions } from "antd";
import { useParams } from "react-router-dom";
import { SupplierContext } from "../context/SupplierContext";

const SupplierDetails = () => {
  const { id } = useParams();
  const { suppliers } = useContext(SupplierContext);
  const supplier = suppliers.find((supplier) => supplier.id === parseInt(id));

  if (!supplier) {
    return (
      <div className="container mx-auto p-4">Fornecedor não encontrado</div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Detalhes do Fornecedor</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Descriptions bordered>
          <Descriptions.Item label="Nome" span={3}>
            {supplier.name}
          </Descriptions.Item>
          <Descriptions.Item label="Email" span={3}>
            {supplier.email}
          </Descriptions.Item>
          <Descriptions.Item label="Cidade" span={3}>
            {supplier.city}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default SupplierDetails;
