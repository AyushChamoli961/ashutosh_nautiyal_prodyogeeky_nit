import React from "react";
import { UserButton } from "@clerk/nextjs";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-white dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center p-6 mx-auto">
          <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
            <a
              href="/"
              className="mx-2 text-gray-800 border-b-2 border-blue-500 dark:text-gray-200 sm:mx-6"
            >
              home
            </a>

            <a
              href="/about"
              className="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6"
            >
              about
            </a>
            <a
              href="/contact"
              className="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6"
            >
              contact
            </a>

            <div className="ml-auto"><UserButton/></div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
