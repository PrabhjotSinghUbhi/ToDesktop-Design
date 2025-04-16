import React from "react";

function NavBar() {
  return (
    <header>
      <nav className="top-0 right-0 left-0 relative flex justify-between items-center bg-white shadow-md p-2 font-semibold text-lg">
        <a
          href="#"
          id="brand-icon"
          className="flex items-center ml-2.5 cursor-pointer"
        >
          <img src="assets/todesktop-logo.bn2Qe8sb.png" alt="icon" />
          <span className="ml-2">ToDesktop</span>
        </a>

        <div className="hidden lg:flex gap-10 text-gray-800">
          <a href="#" className="hover:text-blue-800">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-800">
            Docs
          </a>
          <a href="#" className="hover:text-blue-800">
            ChangeLog
          </a>
          <a href="#" className="hover:text-blue-800">
            Blogs
          </a>
          <a href="#" className="hover:text-blue-800">
            Login
          </a>
        </div>

        {/* <!-- third container the Hamburger menu --> */}
        <div className="sm:hidden flex flex-col items-center mr-2.5 p-3 text-3xl cursor-pointer">
          <button className="cursor-pointer">&#9776;</button>
        </div>

        {/* <!-- Electron Developers --> */}
        <a href="#" className="hidden md:flex mr-2.5">
          <button className="flex items-center gap-2 shadow p-2 border border-gray-400 rounded-[8px] cursor-pointer">
            <img
              src="assets/electron-icon.E8mrXtZM.svg"
              className=""
              alt="electron icon"
            />
            <span>Electron Developers</span>
            {/* <!-- icon --> */}
            <span className="text-3xl">&rarr;</span>
          </button>
        </a>

        {/* <!-- Mobile menu using Alpine JS framework --> */}
        <nav
          x-show="open "
          className="z-20 fixed inset-0 bg-white"
          aria-label="Mobile menu"
        >
          <div
            className=" top-0 right-0 left-0 relative flex justify-between items-center bg-white shadow-md p-2
            font-semibold text-lg"
          >
            <a
              href="#"
              id="brand-icon"
              className="flex items-center ml-2.5 cursor-pointer"
            >
              <img src="assets/todesktop-logo.bn2Qe8sb.png" alt="icon" />
              <span className="ml-2">ToDesktop</span>
            </a>

            {/* <!-- third container the Hamburger menu --> */}
            <div className="sm:hidden flex flex-col items-center mr-2.5 p-3 text-4xl cursor-pointer">
              <button className="cursor-pointer">
                {/* <!-- &#9776; --> */}
                &times;
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-2.5 ml-5 font-medium">
            <a
              href=""
              className="inline hover:bg-amber-100 p-2 rounded-[8px] w-4/5 font-bold"
            >
              Pricing
            </a>
            <a
              href=""
              className="hover:bg-amber-100 p-2 rounded-[8px] w-4/5 font-bold"
            >
              Docs
            </a>
            <a
              href=""
              className="hover:bg-amber-100 p-2 rounded-[8px] w-4/5 font-bold"
            >
              Changelog
            </a>
            <a
              href=""
              className="hover:bg-amber-100 p-2 rounded-[8px] w-4/5 font-bold"
            >
              Blog
            </a>
            <a
              href=""
              className="hover:bg-amber-100 p-2 rounded-[8px] w-4/5 font-bold"
            >
              Login
            </a>

            <hr className="mx-auto w-9/10 text-slate-400" />

            <a
              href="#"
              className="flex hover:bg-gray-400 mt-8 mr-2.5 rounded-[8px] w-4/5"
            >
              <button className="flex items-center p-2 border-gray-400 rounded-[8px] cursor-pointer">
                <img
                  src="assets/electron-icon.E8mrXtZM.svg"
                  className="mr-2"
                  alt="electron icon"
                />
                <span>Electron Developers</span>
              </button>
            </a>
          </div>
        </nav>
      </nav>
    </header>
  );
}

export default NavBar;
