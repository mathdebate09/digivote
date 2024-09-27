import React from "react";

import Footer from "./Footer";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

function Layout({ children }) {
  return (
    <div>
      <NavMobile />
      <NavDesktop />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
