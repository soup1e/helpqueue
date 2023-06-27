import React, { useState } from "react";

function NewTicketForm({ setShowTicketList, addTicket }) {
  const [ticketText, setTicketText] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();

    const newTicket = { text: ticketText };

    addTicket(newTicket);

    setShowTicketList(true);
  };

  return (
    <React.Fragment>
      <form
        className="flex flex-col items-center justify-center m-4 gap-5"
        onSubmit={formSubmit}
      >
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor="ticket"
        >
          Enter New Ticket
        </label>
        <input
          className="block w-auto p-2 pt-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          type="text"
          name="ticket"
          value={ticketText}
          onChange={(event) => setTicketText(event.target.value)}
          placeholder="ticket..."
        />
        <button
          className="text-white bg-blue-400 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}

export default NewTicketForm;
