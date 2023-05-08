import React from "react";
import { useLocation } from "react-router";

function Footer() {
  let location = useLocation().pathname;
  return (
    <footer className="Footer">
      {location === "/sign-up" ? (
        ""
      ) : location === "/sign-in" ? (
        ""
      ) : (
        <p className="Footer__copyright">
          &#169; V_E_K 2023. All rights reserved.
        </p>
      )}
    </footer>
  );
}

export default Footer;
