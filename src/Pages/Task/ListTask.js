import React, { useEffect, useState } from "react";

const ListTask = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    // Retrieve the data from local storage
    const savedData = JSON.parse(localStorage.getItem("formData"));

    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      {formData.length > 0 ? (
        <table className="border-collapse border border-green-800 m-4">
          <thead>
            <tr>
              <th className="border border-green-800 p-2">Title</th>
              <th className="border border-green-800 p-2">Description</th>
              <th className="border border-green-800 p-2">Date</th>
              <th className="border border-green-800 p-2">Priority</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td className="border border-green-800 p-2">{data.title}</td>
                <td className="border border-green-800 p-2">{data.description}</td>
                <td className="border border-green-800 p-2">{data.date}</td>
                <td className="border border-green-800 p-2">{data.selected}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No form data found in local storage.</p>
      )}
    </div>
  );
};

export default ListTask;
