"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import React from "react";

const Navbar = () => {
  const path = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
  ];
  const icons = [
    { href: "/https://www.github.com/Arifbasha559/", label: <AiOutlineGithub className="text-2xl" /> },
    { href: "https://www.linkedin.com/in/arifbasha559/", label: <AiOutlineLinkedin className="text-2xl" /> },
    { href: "/https://www.x.com/arifbasha559/", label: <RiTwitterXLine  className="text-2xl" /> },
  ];

  return (
    <div className="sticky top-0 right-0 w-1/7">
      <nav className="flex flex-col bg-[#141313] text-white  h-screen  justify-between p-10">
        <h2 className="text-3xl w-fit">ARIF BASHA</h2>
        <ul className="flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <li key={href} className="relative w-fit">
              <Link
                href={href}
                className={`${
                  path === href ? "active" : ""
                }  text-lg  nav-link pr-2`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-4 mt-20">
          {icons.map(({ href, label }) => (
            <li key={href} className="relative w-fit">
              <Link
                href={href}
                className={`rounded-full p-2 bg-white hover:bg-gradient-to-r  from-[#FFb147] via-[#FF6c83] to-[#B86ADF] flex text-black hover:text-white transition-all duration-300`}
              >
                {label}
              </Link>
            </li>
          ))}
        <div className="t text-gray-400 mt-5">
          © {new Date().getFullYear()} Arif Basha. <br /> All rights reserved.
        </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
