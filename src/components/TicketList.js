import React from "react";
import PropTypes from "prop-types";

function TicketList({ setShowTicketList, tickets, handleDelete, handleEdit }) {
  const newTicketForm = () => {
    setShowTicketList(false);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col h-screen bg-gray-800">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs bg-gray-800 text-gray-100">
            <tr>
              <th className="px-6 py-3">NAMES</th>
              <th className="px-6 py-3">TEXT</th>
              <th className="px-6 py-3">LOCATION</th>
            </tr>
          </thead>
          {tickets.map((ticket) => (
            <tr className="bg-gray-700 hover:bg-gray-600" key={ticket.id}>
              <th className="px-6 py-4 font-medium whitespace-nowrap">
                {ticket.names}
              </th>
              <th className="px-6 py-4 font-medium">{ticket.text}</th>
              <th className="px-6 py-4 font-medium">{ticket.location}</th>
              <th className="px-1 py-1 font-medium">
                <button
                  onClick={() => handleEdit(ticket.id)}
                  className="text-blue-500 text-sm"
                >
                  Edit
                </button>
              </th>
              <th className="px-1 py-1 font-medium">
                <button
                  onClick={() => handleDelete(ticket.id)}
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </table>

        <div className="flex justify-center mt-4">
          <button
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            onClick={newTicketForm}
          >
            New Ticket Button
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

TicketList.propTypes = {
  setShowTicketList: PropTypes.func.isRequired,
  tickets: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default TicketList;
