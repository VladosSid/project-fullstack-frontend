import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";


const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;