"use client";

import Link from "next/link";
import { XIcon } from "./Icons/XIcon";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export function MobileMenu({ isOpen, toggleMenu }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center w-full h-full transition-transform transition-opacity duration-300 ease-in-out transform ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-gray-700 focus:outline-none"
      >
        <XIcon className="h-6 w-6" />
      </button>
      <div className="flex flex-col items-center space-y-4">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
          onClick={toggleMenu}
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#pricing"
          onClick={toggleMenu}
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
