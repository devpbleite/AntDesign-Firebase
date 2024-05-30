import React, { useEffect, useState, useContext } from "react";
import { Form, Input, Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { SupplierContext } from "../context/SupplierContext";

const EditSupplier = () => {
  const { suppliers, updateExistingSupplier } = useContext(SupplierContext);
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState(null);

  useEffect(() => {
    const supplier = suppliers.find((supplier) => supplier.id === id);
    if (supplier) {
      setSupplier(supplier);
      form.setFieldsValue(supplier);
    }
  }, [id, suppliers, form]);

  const onFinish = async (values) => {
    await updateExistingSupplier({ ...values, id });
    navigate("/");
  };

  if (!supplier) return <div>Fornecedor não encontrado</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Editar Fornecedor</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Nome"
            rules={[{ required: true, message: "Nome é obrigatório" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Email é obrigatório" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="city"
            label="Cidade"
            rules={[{ required: true, message: "Cidade é obrigatória" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditSupplier;
