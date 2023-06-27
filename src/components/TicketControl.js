import React, { useState } from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";

function TicketControl() {
  const [showTicketList, setShowTicketList] = useState(false);

  const [tickets, setTickets] = useState([
    { text: "Need Help Learning!" },
    { text: "Pc is Broke!" },
    { text: "Pc is very Broke!" },
  ]);

  const addTicket = (newTicket) => {
    setTickets([...tickets, newTicket]);
  };

  return (
    <React.Fragment>
      {showTicketList ? (
        <TicketList setShowTicketList={setShowTicketList} tickets={tickets} />
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
