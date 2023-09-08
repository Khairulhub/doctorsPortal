import React, { useState } from "react";
import ListTask from "./ListTask";

const CreatedTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState("");

  const dataSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      date,
      selected
    };

   console.log(data);

   // Retrieve existing data from local storage if any
   let existingData = JSON.parse(localStorage.getItem('formData')) || [];

     // Ensure that existingData is an array
  if (!Array.isArray(existingData)) {
    existingData = [];
  }
    
   // Append the new data to the existing data
   existingData.push(data);
   
   // Store the updated data back in local storage
   localStorage.setItem('formData', JSON.stringify(existingData));

    // Reset form fields
    setTitle("");
    setDescription("");
    setDate("");
    setSelected("");


    alert('Data successfully saved to local storage.');

    // get item from local storage
    const savedData = localStorage.getItem("formData");
    console.log(savedData);
  };

  return (
    <div className="flex justify-center content-center items-center h-full w-full my-10">
      <div className="mx-auto">
      <form onSubmit={dataSubmit}  className="mx-auto  ">
       
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Priority</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary mt-5">Submit</button>
      </form>






      <div>
        <ListTask ></ListTask>
      </div>
      </div>
    </div>



    
  );
};

export default CreatedTask;
