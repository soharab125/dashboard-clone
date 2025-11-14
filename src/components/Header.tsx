import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black bg-opacity-50">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-2xl font-bold text-red-600">
          DASHBOARD
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            TV Shows
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            Movies
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            New & Popular
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            My List
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        {/* Placeholder for search and profile icons */}
      </div>
    </header>
  );
};

export default Header;
