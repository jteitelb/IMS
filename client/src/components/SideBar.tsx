import { BiSolidDashboard, BiCartAdd } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";

import classNames from "classnames";

import { NavLink, useLocation } from "react-router-dom";

const DASHBOARD_LINK = [
  {
    label: "Overview",
    path: "/dashboard",
    icon: <BiSolidDashboard fontSize={24} className="text-slate-200" />,
  },
  {
    label: "Products",
    path: "/dashboard/products",
    icon: <BiCartAdd fontSize={24} className="text-slate-200" />,
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
    icon: <AiFillSetting fontSize={24} className="text-slate-200" />,
  },
];

const linkClasses =
  "flex gap-4 items-center text-base px-3 py-2 hover:bg-slate-700 active:bg-slate-600 rounded-sm";

const SideBar = () => {
  return (
    <aside className="flex flex-col w-1/5 p-4 text-white bg-slate-900 lg:w-64">
      <div className="flex gap-2 px-1 py-3">
        <span className="hidden text-lg font-semibold text-neutral-200 lg:block">
          IMS
        </span>
        {/* <img src="/assets/green-wealth-logo.png" alt="Logo" /> */}
      </div>
      <sup className="px-1 text-xs text-neutral-200">Admin</sup>

      <div className="flex flex-1 py-8 flex-col gap-0.5">
        {DASHBOARD_LINK.map((item, id) => (
          <SideBarLink key={id} item={item} />
        ))}
      </div>
      <div className="py-4 border-t border-neutral-600">
        <NavLink
          to="/logout"
          className={classNames("text-red-500", linkClasses)}
        >
          <span>
            <MdLogout fontSize={24} />
          </span>
          <span className="hidden text-xs md:block">Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default SideBar;

const SideBarLink = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <NavLink
      to={item.path}
      className={classNames(
        pathname === item.path ? "bg-slate-700" : "",
        linkClasses,
        "mb-2"
      )}
    >
      <span>{item.icon}</span>
      <span className="hidden text-xs md:block">{item.label}</span>
    </NavLink>
  );
};
