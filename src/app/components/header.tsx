import React from "react";
import { IoNotifications } from "react-icons/io5";

const Header = () => {
  return (
    <nav>
      <div className="flex items-center justify-end shadow-sm p-4">
        <IoNotifications className="text-2xl" />
      </div>
    </nav>
  );
};

export default Header;
