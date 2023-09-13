import { BsTelephone } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="flex h-16 border-2 border-b-green-500 justify-between items-center pl-24">
      <div className="text-3xl">
          <span className="p-2 font-light header-font"> ebonyi </span>
          <span className="p-2 font-bold"> e-Mart </span>
      </div>
      <div className="px-10">
          <div className="flex text-lg items-center justify-center">
              <BsTelephone />
              (+234)90401874321
          </div>
      </div>
    </div>
  )
}
