import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <header className="flex flex-col items-center py-8 bg-base-100">
      <img
        src={logo}
        alt="Dragon News Logo"
        className="w-64 md:w-80"
      />

      <p className="text-gray-500 mt-3 text-center">
        Journalism Without Fear or Favour
      </p>
      <p className="font-semibold text-accent py-2">
        {format(new Date(), "EEEE , MMMM MM , yyyy")}
      </p>
    </header>
  );
};

export default Header;