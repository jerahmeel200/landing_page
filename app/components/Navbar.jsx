"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { useState, useEffect } from "react";

const links = [
  { name: "Contact us", href: "/" },
  { name: "About us", href: "/Men" },
  { name: "Terms of service", href: "/Women" },
];

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    // Disable scrolling when isShow is true
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // Cleanup function to re-enable scrolling on component unmount
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isShow]);

  const hamburgerMenuHandler = (e) => {
    setIsShow(!isShow);
  };

  return (
    <header className="border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl pt-5 pb-5">
        <Link href="/">
          <img src="/shopzone.png" alt="" />
          {/* <h1 className="text-2xl md:text-4xl font-bold font-logo">SHOPZONE</h1> */}
        </Link>

        <ul
          className={`lg:flex md:hidden md:items-center gap-5 lg:gap-9 -z-[-1] md:z-auto md:static absolute w-screen left-0 md:w-auto py-3 md:py-0 pl-7 md:pl-0 top-[-400px] ${
            isShow ? "top-[62px] -z-50 bg-white" : ""
          } transition-all ease-in duration-500`}
        >
          {links.map((item, index) => (
            <li className="my-6 md:my-0" key={index}>
              <a
                href="/"
                className="text-base    text-purple-600 hover:text-cyan-500 transition-all ease-in-out duration-300 font-bold"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Show Menu icon only on medium or smaller screens */}
        <div onClick={hamburgerMenuHandler} className="lg:hidden">
          {!isShow ? (
            <Menu size={30} />
          ) : (
            <span className="border-2 rounded font-bold  border-black p-1 cursor-pointer">
              X
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
