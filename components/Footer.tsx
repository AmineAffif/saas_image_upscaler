import Link from "next/link";
import React from "react";
import { MountainIcon } from "./Icons/MountainIcon";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 text-gray-400">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-16 lg:px-12 max-md:flex-col">
        <div className="flex items-center max-md:my-5">
          <Link href="#" className="flex items-center" prefetch={false}>
            <MountainIcon className="h-6 w-6 text-white" />
            <span className="ml-2 text-white">Scaly</span>
          </Link>
        </div>
        <div className="text-sm max-md:my-5">
          <nav className="flex flex-wrap justify-center gap-6 md:justify-start">
            <Link
              href="#"
              className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Tarifs
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4 max-md:my-5">
          <Link
            href="#"
            className="text-gray-400 hover:text-white"
            prefetch={false}
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white"
            prefetch={false}
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white"
            prefetch={false}
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center px-4 pt-16 sm:px-6 lg:px-8 w-full">
        <div className="text-sm">&copy; 2024 Scaly. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
