import React from 'react';
import { ChefHat, ShoppingCart, Moon } from 'lucide-react';

const Header = () => {
  return (
    <div>
      <div className="box w-full h-[80px] bg-black text-white flex justify-between flex-row align-center">

        <ChefHat className="ml-35 align-center mt-4" size={40} color="#ffcb3d" />
        <h1 className="font-bold text-4xl text-white pt-4 pr-100">
          Campus Bites
        </h1>

        <div className="icons flex items-center justify-end gap-10 pr-40 text-white text-lg">

          <h2 className="relative inline-block cursor-pointer hover:text-yellow-500
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-[2px] after:w-0 after:bg-white
            after:transition-all after:duration-500
            hover:after:w-full">
            Home
          </h2>

          <h2 className="relative inline-block cursor-pointer hover:text-yellow-500
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-[2px] after:w-0 after:bg-white
            after:transition-all after:duration-500
            hover:after:w-full">
            Menu
          </h2>

          <h2 className="relative inline-block cursor-pointer hover:text-yellow-500
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-[2px] after:w-0 after:bg-white
            after:transition-all after:duration-500
            hover:after:w-full">
            Specials
          </h2>

          <h2 className="relative inline-block cursor-pointer hover:text-yellow-500
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-[2px] after:w-0 after:bg-white
            after:transition-all after:duration-500
            hover:after:w-full">
            About
          </h2>

          <h2 className="relative inline-block cursor-pointer hover:text-yellow-500
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-[2px] after:w-0 after:bg-white
            after:transition-all after:duration-500
            hover:after:w-full">
            Contact
          </h2>

          <ShoppingCart className="relative inline-block cursor-pointer" size={20} color="#ffffff" />

          <Moon className="relative inline-block cursor-pointer " size={20} color="#ffffff" />

        </div>
      </div>
    </div>
  );
};

export default Header;