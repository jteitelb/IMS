import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <SideBar />
      <div className="w-screen h-screen p-6 bg-slate-300">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
