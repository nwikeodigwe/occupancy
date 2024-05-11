import { MdOutlineDashboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdSensors } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineReport } from "react-icons/md";
import { IoHelpOutline } from "react-icons/io5";

const sidelinks = [
  {
    icon: <MdOutlineDashboard />,
    name: "Dashboard",
    href: "/#",
  },
  {
    icon: <TbBrandGoogleAnalytics />,
    name: "Analytics",
    href: "/#",
  },
  {
    icon: <MdSensors />,
    name: "Sensors",
    href: "/#",
  },
  {
    icon: <BsBuildings />,
    name: "Facilities",
    href: "/#",
  },
  {
    icon: <MdOutlineReport />,
    name: "Report",
    href: "/#",
  },
  {
    icon: <IoHelpOutline />,
    name: "Help",
    href: "/#",
  },
];

export default sidelinks;
