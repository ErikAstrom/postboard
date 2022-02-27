import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => (
  <div>
    <Header />
    <div className="min-h-[calc(100vh-200px)]  w-full px-[25px]">
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;
