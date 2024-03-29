import SearchBar from "../SearchBar";

function Header() {
  return (
    <div className="col-start-2 col-end-4 row-start-1 row-end-2 flex justify-center items-center">
      <div className="flex justify-between items-center gap-5 w-11/12">
        <SearchBar />
        <div className="flex gap-2 items-center">
          <img
            src="joel.JPG"
            alt="Profile pic"
            className="w-[30px] h-[30px] rounded-full object-center"
          />
          <p className="hidden md:block text-sm font-kanit text-black tracking-wider">
            Joel Aliyu
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
