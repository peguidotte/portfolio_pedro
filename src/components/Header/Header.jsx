import { NavLink } from "react-router-dom";
import Logo from "../../assets/PGLogo.png";

export default function Header(){
    return(
        <>
            <header className="flex justify-between items-center p-12 px-20 text-neutral-900 text-5xl font-principal font-light tracking-widest">
                <div>
                    <img src={Logo} alt="Pedro Guidotte" className="w-3/4"/>
                </div>
                <nav>
                    <ul className="flex gap-16 items-center">
                        <li className="line-through decoration-3 decoration-white"><NavLink to={'/'}>Home</NavLink></li>
                        <li className="line-through decoration-3 decoration-white">Projects</li>
                        <li className="line-through decoration-3 decoration-white">Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}