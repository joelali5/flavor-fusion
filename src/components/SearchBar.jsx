function SearchBar() {
  return (
    <form className="w-[170px] sm:w-[250px]">
      <input
        className="w-full px-4 py-1 border-[1px] border-grey focus:border-1 focus:border-grey focus:outline-0 rounded-xl"
        type="text"
        placeholder="Search recipes by name..."
      />
    </form>
  );
}

export default SearchBar;
