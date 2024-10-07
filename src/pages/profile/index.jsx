import axios from "axios";
import Footer from "../footer";
import Navbar from "../homepage/navbar";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState();
  const token = localStorage.getItem("token");
  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:1234/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      
      setProfile(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-start justify-center gap-12 px-24 py-14 ">
          <div className="w-1/4 shadow-xl h-[358px] flex flex-col items-center justify-center  gap-4 rounded-md">
            <img
              src={profile?.image}
              alt="user"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="text-xl font-bold">{profile?.username}</div>
            <div className="text-sm text-slate-500">{profile?.email}</div>
          </div>
          <div className="w-3/4 p-8 gap-4 h-[358px] flex flex-col rounded-md shadow-xl">
            <div className="flex items-center justify-between">
              <div className="text-xl text-slate-500 font-bold px-2">
                Contacts
              </div>
              <div className="text-lg">Icon pen</div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-slate-400 font-bold flex flex-col p-2">
                Email Address :
                <input
                  type="email"
                  className=" border-b border-slate-800 text-md text-black font-medium p-2 outline-none"
                />
              </div>
              <div className="text-slate-400 font-bold flex flex-col p-2">
                Number Phone :
                <input
                  type="number"
                  className=" border-b border-slate-800 text-md text-black font-medium p-2 outline-none"
                />
              </div>
              <div className="py-10 text-slate-400 font-bold flex flex-col p-2">
                Delivery Address :
                <input
                  type="text"
                  className=" border-b border-slate-800 text-md text-black font-medium p-2 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
