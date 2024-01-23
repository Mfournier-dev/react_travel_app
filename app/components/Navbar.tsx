"use client"
import { useState } from "react";
import { NAV_LINKS } from "../constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className={`hidden h-full gap-12 lg:flex ${toggle ? "flex" : "hidden"}`}>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition.all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden ">
        <Button
          type="button"
          title="Login"
          icon="./user.svg"
          variant="btn_dark_green"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setToggle((prev) => !prev)}
      />

      <div
        className={`${toggle ? 'flex' : 'hidden'} p-4 bg-slate-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none lg:hidden flex flex-col justify-end items-center flex-1">
          {NAV_LINKS.map((nav, index) => (
            <li
              key={nav.key}
              className={`regular-14 text-gray-50 flexCenter cursor-pointer pb-1.5 transition.all hover:font-bold  ${index === NAV_LINKS.length - 1 ? 'mb-0' : 'mb-4'} text-black`}
            >
              <a href={nav.href} onClick={() => setToggle(false)}>
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
