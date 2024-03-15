import { MdOutlineHome } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";

function SideBar() {
  return (
    <div className="col-start-1 col-end-2 sm:col-start-1 sm:col-end-3 row-start-1 row-end-3 flex flex-col gap-10 py-5 ml-5 sm:ml-10 text-black">
      <p className="text-lg sm:text-xl font-bold font-rubik">
        <span>Flavor</span>
      </p>
      <div className="flex flex-col gap-5">
        <h4 className="text-grey text-xs sm:text-sm font-kanit uppercase hidden sm:block">
          Discover
        </h4>
        <div className="flex gap-3 items-center">
          <MdOutlineHome />
          <p className="hidden sm:block">Home</p>
        </div>
        <div className="flex gap-3 items-center">
          <IoSearch />
          <p className="hidden sm:block">Browse</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-3 items-center">
            <span>
              <FaHeart />
            </span>
            <span className="hidden sm:block">For you</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="text-grey text-xs sm:text-sm font-kanit uppercase hidden sm:block">
          Library
        </h4>
        <div className="flex gap-3 items-center">
          <GiChefToque />
          <p className="hidden sm:block">Chefs</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaStar />
          <p className="hidden sm:block">Favorites</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-3 items-center">
            <span>
              <FaBowlFood />
            </span>
            <span className="hidden sm:block">Recipes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
