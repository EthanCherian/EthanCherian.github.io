import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 py-7 z-50 w-full md:w-auto border-4 border-gray-700 bg-black-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link className="mx-2 px-3 py-2 rounded-md text-sm font-medium bg-gray-700 hover:bg-gray-600 transition-colors" href="/">
                        Home</Link>
                    <Link className="mx-2 px-3 py-2 rounded-md text-sm font-medium bg-gray-700 hover:bg-gray-600 transition-colors" href="/experience">
                        Experience</Link>
                    <Link className="mx-2 px-3 py-2 rounded-md text-sm font-medium bg-gray-700 hover:bg-gray-600 transition-colors" href="/projects">
                        Projects</Link>
                    <Link className="mx-2 px-3 py-2 rounded-md text-sm font-medium bg-gray-700 hover:bg-gray-600 transition-colors" href="/contact">
                        Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
