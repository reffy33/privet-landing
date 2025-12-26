import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function BaseLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="container flex flex-col gap-25 py-5 sm:py-10 md:py-15 lg:py-20 xl:py-25 flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
