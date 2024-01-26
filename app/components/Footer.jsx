import Link from "next/link";
import React from "react";

function Footer() {
  const links = [
    { name: "Contact us", href: "/" },
    { name: "About us", href: "/Men" },
    { name: "Terms of service", href: "/Women" },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-3 sm:py-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col sm:flex-row justify-center">
        {links.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`border-b sm:border-r sm:border-b-0 border-gray-400 sm:pr-4 sm:pl-4 mb-2 sm:mb-0 font-bold text-gray-500 ${
              index === links.length - 1 ? "sm:border-none" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Footer;
