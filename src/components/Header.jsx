import { NavLink } from "react-router-dom";
import Logo from "/public/assets/PGLogo.png";

export default function Header() {
  return (
    <>
      <header className="flex text-neutral-900 text-1xl font-principal font-normal tracking-widest justify-center items-center p-8 md:px-12 lg:p-16 lg:px-20 sm:justify-between sm:font-light sm:text-3xl md:text-4xl lg:text-5xl">
        <div>
          <img
            src={Logo}
            alt="Pedro Guidotte"
            className="w-3/4 hidden sm:block"
          />
        </div>
        <nav>
          <ul className="flex gap-3 sm:gap-6 xl:gap-16 items-center">
            <li className="hover:font-bold hover:bg-gradient-to-r hover:from-orange-400 hover:via-red-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent duration-1000 sm:-translate-y-7">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "no-underline opacity-100 font-bold"
                    : "opacity-70 sm:line-through sm:decoration-5 sm:decoration-white sm:opacity-100"
                }
              >
                <span className="text-blue-700 sm:hidden">&#123;</span>Home
              </NavLink>
            </li>

            <li
              className="
                        hover:font-bold hover:bg-gradient-to-r hover:from-orange-400 hover:via-red-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent 
                        duration-1000"
            >
              <NavLink
                to={"/projects"}
                className={({ isActive }) =>
                  isActive
                    ? "no-underline opacity-100 font-bold"
                    : "opacity-70 sm:line-through sm:decoration-5 sm:decoration-white sm:opacity-100"
                }
              >
                <span className="text-yellow-400 sm:hidden">&#40;</span>Projects
                <span className="text-yellow-400 sm:hidden">&#41;</span>
              </NavLink>
            </li>

            <li
              className="
                        hover:font-bold hover:bg-gradient-to-r hover:from-orange-400 hover:via-red-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent 
                        duration-1000 sm:translate-y-7"
            >
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "no-underline opacity-100 font-bold"
                    : "opacity-70 sm:line-through sm:decoration-5 sm:decoration-white sm:opacity-100"
                }
              >
                Contact<span className="text-blue-700 sm:hidden">&#125;</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
