import { NavLink } from "react-router-dom";
import Logo from "../../assets/PGLogo.png";

export default function Header() {
    return (
        <>
            <header className="flex text-neutral-900 text-1xl font-principal font-normal tracking-widest justify-center items-center p-8 md:px-12 lg:p-16 lg:px-20 sm:justify-between sm:font-light sm:text-3xl md:text-4xl lg:text-5xl">
                <div>
                    <img src={Logo} alt="Pedro Guidotte" className="w-3/4 hidden sm:block" />
                </div>
                <nav>
                    <ul className="flex gap-3 sm:gap-6 xl:gap-16 items-center">
                        <li className="hover:font-bold duration-150 sm:-translate-y-7">
                            <NavLink
                                to={'/'}
                                className={({ isActive }) =>
                                    isActive ? 'no-underline' : 'line-through decoration-5 decoration-white'
                                }
                            >
                            <span className="text-blue-700 sm:hidden">&#123;</span>Home
                            </NavLink>
                        </li>
                        <li className="line-through decoration-5 decoration-white hover:font-bold duration-150"><span className="text-yellow-400 sm:hidden">&#40;</span>Projects<span className="text-yellow-400 sm:hidden">&#41;</span></li>
                        <li className="line-through decoration-5 decoration-white hover:font-bold duration-150 sm:translate-y-7">Contact<span className="text-blue-700 sm:hidden">&#125;</span></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}