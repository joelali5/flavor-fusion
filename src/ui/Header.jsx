import SearchBar from "../components/SearchBar";

function Header() {
  return (
    <div className="col-start-2 flex justify-between items-center px-4">
      <SearchBar />
      <div className="">
        <img
          src="joel.JPG"
          alt="Profile pic"
          className="w-[40px] h-[40px] rounded-full object-center"
        />
      </div>
    </div>
  );
}

export default Header;
