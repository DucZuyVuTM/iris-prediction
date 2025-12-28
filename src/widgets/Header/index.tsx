import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Web Name */}
          <div
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src="/images/logo.png" width={35} height={35}></img>
            <span className="text-2xl font-bold text-gray-900">MagNews</span>
          </div>          
        </div>
      </div>
    </header>
  );
}

export default Header;
