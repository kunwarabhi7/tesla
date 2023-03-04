import Tesla from "../public/assets/logo.svg"
import Image from 'next/image'
import { navLinks } from "./constant"

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 ">
      <div>
        <Image src={Tesla} className='object-contain w-28' />
      </div>
      <div className="hidden md:flex gap-x-6 justify-evenly">
{navLinks.map((nav)=>{
    return <div key={nav.id}>
      <h1 className="hover:bg-gray-300 rounded-md py-[6px] px-2 font-medium cursor-pointer">

{nav.title}
      </h1>
    </div>
})}
      </div>
      <div className="flex gap-x-4">
        <h1 className="hover:bg-gray-300 rounded-md py-[6px] px-2 font-medium cursor-pointer">Shop</h1>
        <h1 className="hover:bg-gray-300 rounded-md py-[6px] px-2 font-medium cursor-pointer">Account</h1>
        <h1 className="hover:bg-gray-300 rounded-md py-[6px] px-2 font-medium cursor-pointer">Menu</h1>
      </div>
    </div>
  )
}

export default NavBar
