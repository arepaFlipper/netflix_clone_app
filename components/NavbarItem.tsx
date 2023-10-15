import React from 'react';

interface NavbarItemProps {
  label: string;
}


const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div key={label} className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  )
}

export default NavbarItem
