const Header = () => {
    return (
      <header className="bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-400">
              Geo<span className="text-white">News</span>
            </a>
          </div>
  
          {/* Right: Nav Links + Profile */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-300 hover:text-blue-400 font-medium">Home</a>
              <a href="/news" className="text-gray-300 hover:text-blue-400 font-medium">News</a>
              <a href="/about" className="text-gray-300 hover:text-blue-400 font-medium">About</a>
            </nav>
  
            {/* Profile Picture */}
            <div className="w-10 h-10">
              <img
                src="https://i.pravatar.cc/300"
                alt="Profile"
                className="w-full h-full object-cover rounded-full border border-gray-700 shadow-sm"
              />
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  