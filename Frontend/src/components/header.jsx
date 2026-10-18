import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ShoppingCart, Moon } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const navClass = `relative inline-block cursor-pointer hover:text-yellow-500
  after:content-[''] after:absolute after:left-0 after:bottom-0
  after:h-[2px] after:w-0 after:bg-white
  after:transition-all after:duration-500
  hover:after:w-full`;

const Header = () => {
  const isAdminLoggedIn = Boolean(localStorage.getItem('adminToken'));

  return (
    <div>
      <div className="box w-full h-[80px] bg-[#1A1A19] text-white flex justify-between flex-row align-center">

        <ChefHat className="ml-50 align-center mt-4" size={40} color="#ffcb3d" />
        <h1 className="font-bold text-4xl text-white pt-4 pr-100">
          Campus Bites
        </h1>

        <div className="icons flex items-center justify-end gap-10 pr-40 text-white text-lg">

          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={navClass}>
              {link.label}
            </a>
          ))}

          {/* Admin link: shows "Admin" for visitors, "Dashboard" when logged in */}
          <Link
            to={isAdminLoggedIn ? '/admin' : '/admin/login'}
            className={`${navClass} text-[#ffcb3d]`}
          >
            {isAdminLoggedIn ? 'Dashboard' : 'Admin'}
          </Link>

          <ShoppingCart className="relative inline-block cursor-pointer" size={20} color="#ffffff" />

          <Moon className="relative inline-block cursor-pointer" size={20} color="#ffffff" />

        </div>
      </div>
    </div>
  );
};

export default Header;