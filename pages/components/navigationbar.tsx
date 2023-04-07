import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/router'


export default function NavigationBar() {
  const [nav, setNav] = useState("nav-links");
  const [fade, setFade] = useState("");
  const [line, setLine] = useState("line");

  const router = useRouter();

  const toggle = () => {
    if (nav === "nav-links") {
      setNav("nav-links open");
      setLine("line open");
      document.body.style.overflowY = "hidden";
      setFade("fade");
    } else {
      setLine("line");
      setFade("");
      setNav("nav-links")
      document.body.style.overflow = "auto";
    }
  }

  const hideMenu = () => {
    setNav("nav-links");
    document.body.style.overflowY = "hidden";
  }

  return (
    <nav>
      <Link href="/" onClick={hideMenu}>
        <Image style={{maxWidth: "140px",maxHeight: "140px"}} src={require("../../assets/logo_cube.png")} alt="navigation-bar-logo"></Image>
      </Link>

      <div
        className="hamburger"
        onClick={toggle}>
        <div className={line}></div>
        <div className={line}></div>
        <div className={line}></div>
      </div>
      <div className={nav}>
        <ul>
          <li className={fade}>
            <Link href="/" onClick={toggle}>Home</Link>
          </li>
          <li className={fade}>
            <Link href="/Blog" onClick={toggle}>Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

