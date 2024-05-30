import React, { createContext, useState, useEffect, useMemo } from "react";
import {
  getSuppliers,
  addSupplier,
  updateSupplier,
  deleteSupplier,
} from "../services/api";

export const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSuppliers = async () => {
    setLoading(true);
    const response = await getSuppliers();
    setSuppliers(response);
    setLoading(false);
  };

  const addNewSupplier = async (supplier) => {
    await addSupplier(supplier);
    fetchSuppliers();
  };

  const updateExistingSupplier = async (supplier) => {
    await updateSupplier(supplier);
    fetchSuppliers();
  };

  const deleteExistingSupplier = async (id) => {
    await deleteSupplier(id);
    fetchSuppliers();
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const value = useMemo(
    () => ({
      suppliers,
      loading,
      addNewSupplier,
      updateExistingSupplier,
      deleteExistingSupplier,
    }),
    [suppliers, loading]
  );

  return (
    <SupplierContext.Provider value={value}>
      {children}
    </SupplierContext.Provider>
  );
};
