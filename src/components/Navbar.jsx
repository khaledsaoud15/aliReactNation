import line from "../assets/icons/line.svg";
import scope from "../assets/icons/search.svg";
import cart from "../assets/icons/cart.svg";
import heart from "../assets/icons/heart.svg";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col h-auto py-4 px-24 relative ">
      <div className="w-full flexbox justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center ">
            <div className="w-6 h-6 bg-babyblue rounded-full "></div>
            <div className="w-6 h-6 bg-lightgrenate/80 rounded-full -ml-2"></div>
          </div>
          <h1 className="text-xl font-bold">Hubmarket</h1>
        </div>
        <div className="flexbox justify-between h-14 rounded-full px-4 w-2/4 py-1 bg-slate-50">
          <input
            type="text"
            className="w-3/4 h-full bg-transparent outline-none px-4"
          />
          <img src={scope} alt="" className="w-4 h-4 object-cover" />
        </div>
        <div className="flexbox w-auto gap-6">
          <div className="flexbox gap-3">
            <div className="imgDiv">
              <img src={cart} alt="" className="w-5 h-5" />
            </div>
            <div className="flex flex-col ">
              <span className="text-gray-500 text-sm">Total</span>
              <h1 className="font-thin">$0.00</h1>
            </div>
          </div>
          <div className="imgDiv">
            <img src={heart} alt="" className="w-5 h-5" />
          </div>
          <div className="imgDiv">
            <img src={scope} alt="" className="w-5 h-5" />
          </div>
          <h1 className="font-semibold cursor-pointer">My Account</h1>
        </div>
      </div>
      <img src={line} alt="" className="w-full h-8 absolute bottom-10 left-0" />
      <div className="mt-10">
        <div className="flexbox justify-between">
          <div className="flexbox gap-10">
            <div className="flexbox gap-2">
              <h1 className="headers">All categories</h1>
              <img src={cart} alt="" className="w-4 h-4 object-cover" />
            </div>
            <div className="flexbox gap-2">
              <h1 className="headers">Clothing</h1>
              <span className="bg-green-100  px-3 text-fluo text-xs py-1 rounded-full font-bold">
                New
              </span>
            </div>
            <h1 className="headers">Tshirt</h1>
            <h1 className="headers">Accessories</h1>
            <h1 className="headers">Features</h1>
          </div>
          <div className="flexbox gap-10">
            <div className="flexbox gap-2">
              <h1 className="headers">Hot Deals</h1>
              <span className="bg-red-100  px-3 text-palmgrenate text-xs py-1 rounded-full font-bold">
                Sale
              </span>
            </div>
            <h1 className="headers">Best Sellers</h1>
            <h1 className="headers">New Arrivals</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
