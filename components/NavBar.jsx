import Tesla from "../public/assets/logo.svg"
import Image from 'next/image'
import { navLinks } from "./constant"

const NavBar = () => {
  return (
    <div className="flex justify-between py-2 px-4">
      <div>
        <Image src={Tesla}  />
      </div>
      <div className="flex justify-evenly">
{navLinks.map((nav)=>{
    return <div key={nav.id}>
{nav.title}
    </div>
})}
      </div>
      <div className="flex">
        <h1>Shop</h1>
        <h1>Account</h1>
        <h1>Menu</h1>
      </div>
    </div>
  )
}

export default NavBar
