const AllButton = () => {
  return (
    <div className="px-56 flex items-center justify-center my-5">
      <button className="border border-blue-900 px-4 rounded-l-sm font-bold text-sm">
        Round Trip
      </button>
      <button className="border border-blue-900 px-4 bg-blue-800 text-gray-200 font-bold text-sm">
        One Way
      </button>
      <button className="border border-blue-900 px-4 rounded-r-sm font-bold text-sm">
        Multi city
      </button>
    </div>
  );
};

export default AllButton;
