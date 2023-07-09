import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <>
      <div className="w-[1024px] mx-auto my-20">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
