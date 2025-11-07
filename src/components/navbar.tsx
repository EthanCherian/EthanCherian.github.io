import { useState } from 'react';
import Link from 'next/link';

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <Link href={href}
        className="block px-3 py-2 rounded-xl text-sm font-medium bg-gray-800/90 hover:bg-blue-500 hover:text-white 
            transition-all duration-200 shadow-sm hover:shadow-md">
        {children}
    </Link>
);

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-4 right-4 z-50 border border-blue-500 bg-gray-900/95 rounded-2xl px-4 py-3 shadow-xl text-white">
            {/* Header / Toggle */}
            <div className="flex items-center gap-3">
                <span className="text-sm font-semibold tracking-wide">
                    My Portfolio
                </span>

                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="relative w-9 h-9 flex flex-col justify-center items-center rounded-xl bg-gray-800 hover:bg-gray-700 
                        transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Toggle navigation menu"
                    >

                {/* Hamburger / X icon */}
                <span className={`h-0.5 w-5 bg-white rounded transition-all duration-300 ${open ? 'translate-y-1.5 rotate-45' : '-translate-y-1'}`}/>
                <span className={`h-0.5 w-5 bg-white rounded transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}/>
                <span className={` h-0.5 w-5 bg-white rounded transition-all duration-300 ${open ? '-translate-y-1.5 -rotate-45' : 'translate-y-1'}`}/>
            
                </button>
            </div>

            {/* Collapsible Menu */}
            <div
                className={`mt-3 space-y-2 origin-top right-0 transition-all duration-250 
                    ease-out ${open ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}`}>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;