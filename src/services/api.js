let suppliers = JSON.parse(localStorage.getItem("suppliers")) || [
  {
    id: 1,
    name: "Fornecedor A",
    email: "fornecedorA@example.com",
    city: "Cidade A",
  },
  {
    id: 2,
    name: "Fornecedor B",
    email: "fornecedorB@example.com",
    city: "Cidade B",
  },
];

const saveToLocalStorage = (data) => {
  localStorage.setItem("suppliers", JSON.stringify(data));
};

export const getSuppliers = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(suppliers), 500);
  });
};

export const addSupplier = (supplier) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      suppliers = [...suppliers, { id: Date.now(), ...supplier }];
      saveToLocalStorage(suppliers);
      resolve();
    }, 500);
  });
};

export const updateSupplier = (updatedSupplier) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      suppliers = suppliers.map((supplier) =>
        supplier.id === updatedSupplier.id ? updatedSupplier : supplier
      );
      saveToLocalStorage(suppliers);
      resolve();
    }, 500);
  });
};

export const deleteSupplier = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      suppliers = suppliers.filter((supplier) => supplier.id !== id);
      saveToLocalStorage(suppliers);
      resolve();
    }, 500);
  });
};
