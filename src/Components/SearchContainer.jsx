const SearchContainer = () => {
  return (
    <>
      <div className="px-56 my-3 font-bold text-sm flex justify-between items-center">
        <div className="flex items-center">
          <input className="mr-2" type="checkbox" name="" id="" />
          <span>Extra Options</span>
        </div>
        <form className="flex items-center gap-2">
          <p>Environment</p>
          <input
            type="radio"
            name="environment"
            id="dummy"
            value="dummy"
            className="bg-blue-600"
          />
          <label htmlFor="dummy">Dummy</label>
          <input type="radio" name="environment" id="pdt" value="pdt" />
          <label htmlFor="pdt">PDT</label>
        </form>
        <button className="border border-blue-900 px-5 py-2 bg-blue-900 rounded-s rounded-e text-xs font-medium text-gray-200">
          SEARCH
        </button>
      </div>
    </>
  );
};

export default SearchContainer;
