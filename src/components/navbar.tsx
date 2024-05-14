import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 right-0 text-white p-4 py-7 z-50 w-full md:w-auto">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link className="mx-2" href="/">Home</Link>
                    <Link className="mx-2" href="/about">About</Link>
                    <Link className="mx-2" href="/projects">Projects</Link>
                    <Link className="mx-2" href="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
