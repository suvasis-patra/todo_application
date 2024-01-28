import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function HomeLayout() {
  return (
    <section className="h-screen">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default HomeLayout;
