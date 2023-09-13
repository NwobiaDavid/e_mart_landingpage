import { BsTelephone } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="flex h-16 border-2 border-b-green-500 justify-between items-center md:pl-24">
      <div className=" md:text-3xl px-2 text-xl">
          <span className="md:p-2 font-light header-font"> ebonyi</span>
          <span className="md:p-2 font-bold">e-Mart </span>
      </div>
      <div className="md:px-10 px-1">
          <div className="flex text-sm md:text-lg items-center justify-center">
              <BsTelephone />
              (+234)90401874321
          </div>
      </div>
    </div>
  )
}
