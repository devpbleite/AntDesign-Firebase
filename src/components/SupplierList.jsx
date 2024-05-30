import React, { useContext } from "react";
import { Table, Button, Space, Modal } from "antd";
import { SupplierContext } from "../context/SupplierContext";
import { useNavigate } from "react-router-dom";

const SupplierList = () => {
  const { suppliers, deleteExistingSupplier, loading } =
    useContext(SupplierContext);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Modal.confirm({
      title: "Confirmação",
      content: "Tem certeza de que deseja excluir este fornecedor?",
      onOk: () => deleteExistingSupplier(id),
    });
  };

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Cidade",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Ações",
      key: "action",
      width: "20%",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => navigate(`/edit/${record.id}`)}>
            Editar
          </Button>
          <Button type="primary" danger onClick={() => handleDelete(record.id)}>
            Excluir
          </Button>
          <Button
            type="primary"
            onClick={() => navigate(`/details/${record.id}`)}
          >
            Detalhes
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Table
        dataSource={suppliers}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default SupplierList;
