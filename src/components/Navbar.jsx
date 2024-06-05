import line from "../assets/icons/line.svg";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between h-24 py-4 px-24 relative">
      <div className="flex items-center gap-2">
        <div className="flex items-center ">
          <div className="w-6 h-6 bg-babyblue rounded-full "></div>
          <div className="w-6 h-6 bg-lightgrenate/80 rounded-full -ml-2"></div>
        </div>
        <h1 className="text-xl font-bold">Hubmarket</h1>
      </div>
      <img src={line} alt="" className="w-full h-8 absolute -bottom-2 left-0" />
    </nav>
  );
};

export default Navbar;
