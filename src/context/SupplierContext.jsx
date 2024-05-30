import React, { createContext, useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

export const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSuppliers = async () => {
    setLoading(true);
    const suppliersCollection = collection(db, "suppliers");
    const suppliersQuery = query(suppliersCollection, orderBy("createdAt"));
    const supplierSnapshot = await getDocs(suppliersQuery);
    const supplierList = supplierSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setSuppliers(supplierList);
    setLoading(false);
  };

  const addNewSupplier = async (supplier) => {
    await addDoc(collection(db, "suppliers"), {
      ...supplier,
      createdAt: serverTimestamp(),
    });
    fetchSuppliers();
  };

  const updateExistingSupplier = async (supplier) => {
    const supplierDoc = doc(db, "suppliers", supplier.id);
    await updateDoc(supplierDoc, supplier);
    fetchSuppliers();
  };

  const deleteExistingSupplier = async (id) => {
    const supplierDoc = doc(db, "suppliers", id);
    await deleteDoc(supplierDoc);
    fetchSuppliers();
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  return (
    <SupplierContext.Provider
      value={{
        suppliers,
        loading,
        addNewSupplier,
        updateExistingSupplier,
        deleteExistingSupplier,
      }}
    >
      {children}
    </SupplierContext.Provider>
  );
};
