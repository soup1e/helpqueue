import React, { useState } from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";
import { v4 } from "uuid";
import TicketDetail from "./TicketDetail";

function TicketControl() {
  const [showTicketList, setShowTicketList] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const [tickets, setTickets] = useState([
    {
      id: v4(),
      names: "Sam",
      text: "Learning 2 much!",
      location: "cello-1",
    },
  ]);

  const addTicket = (newTicket) => {
    setTickets([...tickets, newTicket]);
  };

  const handleDelete = (ticketID) => {
    const updatedList = tickets.filter((ticket) => ticket.id !== ticketID);
    setTickets(updatedList);
  };

  const handleEdit = (ticketID) => {
    const ticket = tickets.find((ticket) => ticket.id === ticketID);
    setSelectedTicket(ticket);
    setShowTicketList(false);
  };

  const updateTicket = (updatedTicket) => {
    const updatedList = tickets.map((ticket) =>
      ticket.id === updatedTicket.id ? updatedTicket : ticket
    );
    setTickets(updatedList);
  };

  return (
    <React.Fragment>
      {showTicketList ? (
        <TicketList
          setShowTicketList={setShowTicketList}
          tickets={tickets}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : selectedTicket ? (
        <TicketDetail
          ticket={selectedTicket}
          updateTicket={updateTicket}
          setShowTicketList={setShowTicketList}
        />
      ) : (
        <NewTicketForm
          setShowTicketList={setShowTicketList}
          addTicket={addTicket}
        />
      )}
    </React.Fragment>
  );
}

export default TicketControl;
