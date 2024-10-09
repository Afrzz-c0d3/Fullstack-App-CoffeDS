/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [profile, setProfile] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getProfile(token);
    } else {
      setLoading(false);
    }
  }, []);

  const getProfile = async (token) => {
    try {
      const response = await axios.get("http://localhost:1234/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response?.data?.data);
      setIsLogin(true);
    } catch (error) {
      console.error("Error fetching profile", error);
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        setIsLogin(false);
        setProfile(null);
        Swal.fire({
          title: "Session Expired",
          text: "Your session has expired. Please login again.",
          icon: "warning",
          confirmButtonText: "OK",
        }).then(() => {
          window.location.href = "/login";
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        setIsLogin(false);
        setProfile(null);
        Swal.fire(
          "Logged Out!",
          "You have successfully logged out.",
          "success"
        ).then(() => {
          window.location.href = "/";
        });
      }
    });
  };

  const toggleActive = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setSearchQuery(""); // Reset search query when activated
    }
  };

  return (
    <div className="sticky z-[999] backdrop-blur-sm bg-opacity-80 bg-slate-100 border-b-2 border-slate-300 shadow-lg top-0">
      <div className="flex items-center justify-between h-28 text-lg z-[999]">
        <div className="relative flex-[2] flex items-center justify-center">
          <div className="mr-2 cursor-pointer">
            <img src="/assets/img/coffee-logo.png" alt="Coffee DS Logo" />
          </div>
          <Link to="/" className="text-lg font-bold select-none">
            Coffee DS
          </Link>
        </div>
        <div className="relative flex-[6] flex items-stretch justify-center list-none m-5 cursor-pointer text-base font-bold text-slate-500 gap-8">
          <Link to="/" className="hover:text-amber-800">
            Home
          </Link>
          <Link to="/products" className="hover:text-amber-800">Products</Link>
          <li className="hover:text-amber-800">Your Chart</li>
          <li className="hover:text-amber-800">History</li>
        </div>
        {isLogin ? (
          <div className="flex items-center justify-end flex-1 px-16">
            {location.pathname === "/profile" || location.pathname === "/products" && (
              <div className="relative flex items-center">
                <div className="cursor-pointer" onClick={toggleActive}>
                  <FontAwesomeIcon icon={faSearch} size="lg mr-4" />
                </div>
                {/* Container untuk input pencarian */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden mr-4 ${
                    isActive ? "w-64 opacity-100" : "w-0 opacity-0"
                  }`}
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search here..."
                    className="border-2 rounded-full bg-slate-100 py-2 px-4  text-md outline-none"
                  />
                </div>
                <div className="mr-4 cursor-pointer">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </div>
              </div>
            )}
            <div
              onClick={() => setShow(!show)}
              className="relative rounded-full h-14 w-14 flex items-center justify-center cursor-pointer text-center mx-4"
            >
              {profile && (
                <img
                  src={profile.image || "/assets/img/profile2.png"}
                  alt="Profile"
                  className="rounded-full object-cover h-full w-full"
                />
              )}
              <div
                className={`absolute flex flex-col p-4 shadow-lg bg-slate-100 gap-4 rounded-b-xl right-0 top-14 transition-all duration-300 ease-in-out ${
                  show
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="text-sm font-semibold">
                  <Link to="/profile">Profile</Link>
                </div>
                <div className="border-b border-slate-300"></div>
                <div
                  onClick={handleLogout}
                  className="text-sm font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-[3] flex items-center justify-evenly">
            <div className="text-base font-semibold cursor-pointer">
              <Link to="/login">Login</Link>
            </div>
            <div className="flex items-center justify-center text-base font-semibold cursor-pointer bg-yellow-500 rounded-lg w-[30%] p-[3%]">
              <Link to="/register">Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
