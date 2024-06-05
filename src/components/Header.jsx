import arrow from "../assets/icons/arrowdown.svg";
import facebook from "../assets/icons/facebook.svg";
import insta from "../assets/icons/insta.svg";
import twitter from "../assets/icons/twitter.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full h-14 border-b px-24">
      <div className="flex items-center gap-4 w-2/4">
        <div className="flex items-center gap-1 cursor-pointer group">
          <p className="text-sm font-thin group-hover:text-orangeisthenewblack">
            Free Return Policy
          </p>
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 -rotate-90"
          >
            <path
              d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
              fill="#0F0F0F"
              className=" group-hover:fill-orangeisthenewblack"
            />
          </svg>
        </div>
        <p className="text-sm font-thin">Summer Discount - Up to 50% Off</p>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-10 border-r border-l px-8">
          <div className="flex items-center gap-3 cursor-pointer">
            <p className="text-sm font-thin">Help Center</p>
            <div className="flex items-center gap-1">
              <span className="w-[3px] h-[3px] bg-gray-700 rounded-full"></span>
              <span className="w-[3px] h-[3px] bg-gray-700 rounded-full"></span>
              <span className="w-[3px] h-[3px] bg-gray-700 rounded-full"></span>
            </div>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <p className="text-sm font-thin">English/USD</p>
            <img src={arrow} alt="" className="w-4 h-4" />
          </div>
          <p className="text-sm font-thin">Find Store</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={facebook} alt="" className="w-4 h-4" />
          <img src={twitter} alt="" className="w-4 h-4" />
          <img src={insta} alt="" className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
