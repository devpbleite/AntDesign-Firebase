import React from "react";
import { Form, Input, Button } from "antd";

const SupplierForm = ({ initialValues, onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit(values);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg m-auto">
      <Form
        form={form}
        initialValues={initialValues}
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          label="Nome"
          name="name"
          rules={[
            {
              required: true,
              message: "Por favor, insira o nome do fornecedor",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor, insira o email do fornecedor",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Cidade"
          name="city"
          rules={[
            {
              required: true,
              message: "Por favor, insira a cidade do fornecedor",
            },
          ]}
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
  );
};

export default SupplierForm;
