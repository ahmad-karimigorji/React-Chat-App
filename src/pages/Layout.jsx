import { Outlet } from "react-router-dom";
import Navbar from "../component/NavBar";

const Layout = () => {
  return (
    <div className="h-screen overflow-y-auto flex flex-col">
      <Navbar />
      <section className="flex-auto max-w-3xl mx-auto w-full bg-base-100">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
