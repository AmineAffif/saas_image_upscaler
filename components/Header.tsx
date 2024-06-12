"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "./Icons/MenuIcon";
import { MobileMenu } from "./MobileMenu";
import { XIcon } from "./Icons/XIcon";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-4 md:px-20 lg:px-28 h-14 flex items-center justify-between absolute top-0 left-0 w-full">
      <Link className="flex items-center justify-center" href="#">
        <Image src="/logo-scaly-min.jpg" alt="Before" width={35} height={35} />
        <span className="ml-2 text-black">Scaly</span>
        <span className="sr-only">Scaly</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6 items-center">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#feature"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#pricing"
        >
          Tarifs
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md border main-color-border main-color-border-hover bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:main-color-text focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-border"
          href="#"
        >
          Connexion
        </Link>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md main-color px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors main-color-hover focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-bg"
          href="#"
        >
          Inscription
        </Link>
      </nav>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
}
