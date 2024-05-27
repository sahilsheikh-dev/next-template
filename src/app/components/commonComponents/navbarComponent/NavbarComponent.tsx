"use client";

import * as React from "react";
import "./navbarComponent.css";
import { ThemeSwitcher } from "@/app/components/themeSwitcherComponent/ThemeSwitcher";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/react";

export interface IAppProps {}

export default function NavbarComponent(props: IAppProps) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
    setPageName(currentUrl.substring(currentUrl.lastIndexOf("/") + 1));
    console.log(pageName);
  }, []);

  return (
    <>
      <div style={{ display: "flex" }} className="navbar-section">
        <h1 style={{ padding: "10px" }}>Navbar</h1>
        <Link style={{ margin: "10px" }} href="/" className="text-light">
          Homepage
        </Link>
        <Link
          style={{ margin: "10px" }}
          href="/pages/about"
          className="text-light"
        >
          About Us
        </Link>
        <ThemeSwitcher />
      </div>
    </>
  );
}
