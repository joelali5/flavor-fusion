import SearchBar from "../components/SearchBar";

function Header() {
  return (
    <div className="col-start-2 flex justify-between items-center px-2 gap-5">
      <SearchBar />
      <div className="flex gap-4 items-center">
        <img
          src="joel.JPG"
          alt="Profile pic"
          className="w-[40px] h-[40px] rounded-full object-center"
        />
        <p className="hidden md:block text-md font-kanit text-black tracking-wider">
          Joel Aliyu
        </p>
      </div>
    </div>
  );
}

export default Header;
