import React from "react";

function Header() {
  return (
    <React.Fragment>
      <nav className="border-gray-200 bg-gray-700  p-4">
        <span className="justify-center-center text-2xl font-semibold whitespace-nowrap text-white">
          Ticket List
        </span>
      </nav>
    </React.Fragment>
  );
}

export default Header;
