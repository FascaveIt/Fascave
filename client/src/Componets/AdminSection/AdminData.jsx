import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import db from "../../../config/Config";
import "./Admin.css";

const AdminData = () => {
  const [data, setData] = useState([]); // Stores all fetched contacts
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactsCollection = collection(db, "Contacts");
        const snapshot = await getDocs(contactsCollection);
        const contactList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(contactList); // Store the entire contact list
        console.log("Contacts fetched successfully:", contactList);
      } catch (err) {
        setError("Failed to fetch data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const docRef = doc(db, "Contacts", id); // Get reference to the document
      await deleteDoc(docRef); // Delete document from Firestore
      setData((prevData) => prevData.filter((item) => item.id !== id)); // Update UI
      console.log(`Document with ID ${id} deleted successfully.`);
    } catch (err) {
      console.error("Error deleting document:", err.message);
      setError("Failed to delete contact: " + err.message);
    }
  };

  if (loading) {
    return <div className="admin-loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="mt-[20vh] flex justify-center admin-error">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="Admin">
      <h1 className="admin-title">Admin Data</h1>
      {data.length > 0 ? (
        <div className="admin-data-list">
          {data.map((item) => (
            <div className="admin-card" key={item.id}>
              <p>
                <strong>First Name:</strong> {item.FirstName}
              </p>
              <p>
                <strong>Last Name:</strong> {item.LastName}
              </p>
              <p>
                <strong>Email:</strong> {item.Email}
              </p>
              <p>
                <strong>Phone Number:</strong> {item.PhoneNumber}
              </p>
              <p>
                <strong>Query:</strong> {item.Query}
              </p>
              <button
                className="delete-button"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="admin-no-data">No data available</div>
      )}
    </div>
  );
};

export default AdminData;
