import React, { useEffect, useState } from "react";
import { Descriptions, Spin } from "antd";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const SupplierDetails = () => {
  const { id } = useParams();
  const [supplier, setSupplier] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSupplier = async () => {
      setLoading(true);
      const supplierDoc = doc(db, "suppliers", id);
      const supplierSnapshot = await getDoc(supplierDoc);
      if (supplierSnapshot.exists()) {
        setSupplier({ id: supplierSnapshot.id, ...supplierSnapshot.data() });
      } else {
        setSupplier(null);
      }
      setLoading(false);
    };

    fetchSupplier();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

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
