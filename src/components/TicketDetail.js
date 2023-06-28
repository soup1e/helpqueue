import React, { useState } from "react";
import PropTypes from "prop-types";

function TicketDetail({ ticket, updateTicket, setShowTicketList }) {
  const [editedTicket, setEditedTicket] = useState(ticket);

  const handleInputChange = (e) => {
    setEditedTicket({
      ...editedTicket,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    updateTicket(editedTicket);
    setShowTicketList(true);
  };

  return (
    <React.Fragment>
      <div className="flex justify-center h-screen bg-gray-800">
        <form onSubmit={handleSave} className="p-4 w-1/4">
          <div className="mb-4 m-2">
            <label
              className="block mb-2 text-sm font-medium text-white"
              htmlFor="names"
            >
              Names
            </label>
            <input
              className="block w-full p-3 border rounded-lg sm:text-md bg-gray-300 border-gray-600 placeholder-gray-400 text-black"
              type="text"
              name="names"
              value={editedTicket.names}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 m-2">
            <label
              className="block mb-2 text-sm font-medium text-white"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="block w-full p-3 border rounded-lg sm:text-md bg-gray-300 border-gray-600 placeholder-gray-400 text-black"
              type="text"
              name="location"
              value={editedTicket.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 m-2">
            <label
              className="block mb-2 text-sm font-medium text-white"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="block w-full p-3 border rounded-lg sm:text-md bg-gray-300 border-gray-600 placeholder-gray-400 text-black"
              type="text"
              name="text"
              value={editedTicket.text}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object.isRequired,
  updateTicket: PropTypes.func.isRequired,
  setShowTicketList: PropTypes.func.isRequired,
};

export default TicketDetail;
