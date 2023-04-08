import React from 'react'

interface MobileMenuProps {
  visible: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null
  }
  const titles = ["Home", "Series", "Films", "New & Popular", "My List", "Browse by Language"];
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        {titles.map((title) => {
          return (
            <div className="px-3 text-center text-white hover:underline">
              {title}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MobileMenu;
