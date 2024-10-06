import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="sticky top-0">
        <div className="flex items-center justify-between h-32 text-lg z-[99] sticky">
          <div className="flex-[3] flex items-center justify-center">
            <div className="mr-2 cursor-pointer">
              <img src="/assets/img/coffee-logo.png" alt />
            </div>
            <Link to="/" className="text-lg font-bold select-none">
              Coffee DS
            </Link>
          </div>
          <div
            className="flex-[6] flex items-stretch justify-center list-none m-5
          cursor-pointer text-base font-bold text-slate-500 gap-6"
          >
            <li className="hover:text-amber-800">Home</li>
            <li className="hover:text-amber-800">Product</li>
            <li className="hover:text-amber-800">Your Chart</li>
            <li className="hover:text-amber-800">History</li>
          </div>
          <div className="flex-[3] flex items-center justify-evenly">
            <div className="text-base font-semibold cursor-pointer">
              <Link to="/login">Login</Link>
            </div>
            <div
              className="flex items-center justify-center text-base font-semibold
            cursor-pointer bg-yellow-500 rounded-lg w-[30%] p-[3%]"
            >
              <Link to="/register">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
