import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import sidelinks from "@/app/imports/sidebar";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <div className="flex items-center justify-between shadow-sm  p-4">
        <h2>Logo</h2>
        <p className="text-sm font-semibold">Bob Maxuel</p>
        <span>
          <IoMdArrowDropleft className="text-2xl" />
        </span>
      </div>
      <div>
        <ul className="w-3/5 mx-auto flex flex-col mt-10">
          {sidelinks.map((link) => (
            <li key={link.name} className="py-4">
              <Link href={link.href} className="flex gap-4 items-center">
                <span className="text-2xl">{link.icon}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
