import React, { useState } from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewTicketForm({ setShowTicketList, addTicket }) {
  const [ticketDescription, setTicketDescription] = useState("");
  const [ticketLocation, setTicketLocation] = useState("");
  const [ticketNames, setTicketNames] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();

    if (!ticketDescription || !ticketLocation || !ticketNames) {
      setShowTicketList(true);
      return;
    }
    const newTicket = {
      id: v4(),
      names: ticketNames,
      location: ticketLocation,
      text: ticketDescription,
    };

    addTicket(newTicket);

    setShowTicketList(true);
  };

  return (
    <React.Fragment>
      <div className="flex justify-center h-screen bg-gray-800">
        <form className="p-4 w-1/4" onSubmit={formSubmit}>
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
              name="ticketNames"
              value={ticketNames}
              onChange={(event) => setTicketNames(event.target.value)}
              placeholder="Name..."
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
              name="ticketLocation"
              value={ticketLocation}
              onChange={(event) => setTicketLocation(event.target.value)}
              placeholder="Location..."
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
              name="ticketDescription"
              value={ticketDescription}
              onChange={(event) => setTicketDescription(event.target.value)}
              placeholder="Ticket..."
            />
          </div>
          <div className="flex justify-center">
            <button
              className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  setShowTicketList: PropTypes.func.isRequired,
  addTicket: PropTypes.func.isRequired,
};

export default NewTicketForm;
