import { Outlet } from "react-router-dom";
import Navbar from "../component/NavBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
