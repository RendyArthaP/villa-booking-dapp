import React from "react";
import { SiHomebridge } from "react-icons/si";
import WalletButton from "../WalletButton";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center m-auto'>
      <SiHomebridge size={40} color='#10B981' />
      <WalletButton />
    </div>
  );
};

export default Navbar;
