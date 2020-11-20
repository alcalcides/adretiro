import React, { useState, useEffect } from "react";

import LogoMinified from "./LogoMinified";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarBrand({bgColor}) {
  const [brandWithBackground, setBrandWithBackground] = useState("");

  useEffect(() => {
    if(bgColor === "dark"){
      setBrandWithBackground(" bg-white");
    }
  }, [bgColor]);

  return (
    <Navbar.Brand className={`col-6 col-md-2${brandWithBackground}`} >
      <LogoMinified />
    </Navbar.Brand>
  );
}
