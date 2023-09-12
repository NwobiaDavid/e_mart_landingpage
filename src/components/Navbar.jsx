
export default function Navbar() {
  return (
    <div className="flex h-20 bg-green-300 items-center justify-around">
      <div className="text-4xl">
          <span className="p-2 "> ebonyi </span>
          <span className="p-2 font-bold"> e-Mart </span>
      </div>
      <div className="flex items-center  justify-center ">
        <form action="#" className="relative" method="post">
            <input className="outline-none w-[25rem] rounded-full px-3 py-2" type="text" />
            <button className="z-10 right-0 px-2 rounded-r-full text-xl duration-200 w-[7rem] h-full bg-green-600 text-white hover:bg-green-800 absolute" type="submit">Act Now</button>
        </form>
      </div>
    </div>
  )
}
