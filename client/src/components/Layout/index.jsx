import React from "react";

import Footer from "./Footer";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

function Layout({ children, bgColor }) {
  return (
    <div className={`${bgColor} font-libre font-medium`}>
      <NavDesktop />
      <main className="px-4 md:px-24">{children}</main>
      <NavMobile />
    </div>
  );
}

export default Layout;
