import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-black text-white h-12 flex items-center justify-center px-4">
      <div className="hidden md:block">
      Complimentary U.S. No-Rush Shipping on orders of $95 or more.
        <b className="text-bold underline px-2 hover:cursor-pointer">
          Sign Up Now
        </b>
      </div>
      <div className="block md:hidden text-sm text-center">
      No-Rush Shipping on orders of $95 or more
        <b className="underline hover:cursor-pointer">Sign Up Now</b>
      </div>
    </div>
  );
};

export default Header;
