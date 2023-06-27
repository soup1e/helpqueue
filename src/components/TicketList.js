import React from "react";

function TicketList({ setShowTicketList, tickets }) {
  const newTicketForm = () => {
    setShowTicketList(false);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center m-4 gap-5">
        <h1 className="block text-sm font-medium text-gray-900">TicketList</h1>

        {tickets.map((ticket) => (
          <li
            className="max-w-md space-y-1 text-gray-500 list-none list-inside"
            key={ticket.text}
          >
            {ticket.text}
          </li>
        ))}

        <button
          className="text-white bg-blue-400 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={newTicketForm}
        >
          New Ticket Button
        </button>
      </div>
    </React.Fragment>
  );
}

export default TicketList;
