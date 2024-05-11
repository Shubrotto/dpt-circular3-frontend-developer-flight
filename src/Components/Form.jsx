const Form = () => {
  return (
    <div className="px-56">
      <hr className="border-b  border-b-blue-300" />
      <form className="py-3 flex gap-2">
        <input
          type="text"
          placeholder="LHR"
          className="border border-gray-400 w-28 px-2 py-1 text-sm font-semibold hover:bg-sky-200 outline-none"
        />
        <input
          type="text"
          placeholder="CDG"
          className="border border-gray-400 w-28 px-2 py-1 text-sm font-semibold hover:bg-sky-200 outline-none"
        />
        <input
          type="date"
          name=""
          id=""
          className="border border-gray-400 w-32 px-2 py-1 text-sm font-semibold hover:bg-sky-200 outline-none"
        />
        <select
          name=""
          id=""
          className="border border-gray-400 w-22 px-2 py-1 text-sm hover:bg-sky-200 font-semibold text-gray-600"
        >
          <option value="day">Day -</option>
          <option value="day">Night -</option>
        </select>
        <select
          name=""
          id=""
          className="border border-gray-400 w-22 px-2 py-1 text-sm hover:bg-sky-200 font-semibold text-gray-600"
        >
          <option value="day">Day +</option>
          <option value="day">Night +</option>
        </select>
        <select
          name=""
          id=""
          className="border border-gray-400 w-36 px-2 py-1 text-sm hover:bg-sky-200 outline-none  font-semibold text-gray-600"
        >
          <option value="day">Any Time</option>
          <option value="day">Night</option>
          <option value="day">Day</option>
        </select>
        <button className="font-bold mx-0 text-xl">+</button>
        <select
          name=""
          id=""
          className="border border-gray-400 w-28 px-2 py-1 text-sm font-semibold hover:bg-sky-200 outline-none"
        >
          <option value="day">ADT</option>
          <option value="day">Child</option>
        </select>
        <select
          name=""
          id=""
          className="border border-gray-400 w-20 px-2 py-1 text-sm font-semibold hover:bg-sky-200 outline-none"
        >
          <option value="day">1</option>
          <option value="day">2</option>
          <option value="day">2</option>
          <option value="day">4</option>
        </select>
        <button className="font-bold mx-0 text-xl">+</button>
      </form>
      <hr className="border-b  border-b-blue-300" />
    </div>
  );
};

export default Form;
