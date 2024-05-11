import { GrNotification } from "react-icons/gr";
import Myself_Image from "../assets/images/me.jpg";
const Header = () => {
  return (
    <div className="bg-blue-950 py-3 flex justify-between items-center px-56">
      <ul className="text-cyan-50 flex gap-10 text-xs">
        <li>
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="">Master Price</a>
        </li>
        <li>
          <a href="">Custom Price</a>
        </li>
        <li>
          <a href="">Calender</a>
        </li>
        <li>
          <a href="">Report</a>
        </li>
      </ul>
      <div className="text-gray-300 flex items-center gap-2">
        <GrNotification className="text-sm" />
        <img className="w-6 h-6 rounded-full" src={Myself_Image} alt="" />
      </div>
    </div>
  );
};

export default Header;
