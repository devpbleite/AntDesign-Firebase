import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import SupplierList from "../components/SupplierList";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Fornecedores</h1>
        <Button type="primary" onClick={() => navigate("/add")}>
          Adicionar Fornecedor
        </Button>
      </div>
      <SupplierList />
    </div>
  );
};

export default Home;
