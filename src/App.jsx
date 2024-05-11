import "./App.css";
import AllButton from "./Components/AllButton";
import Header from "./Layout/Header";

function App() {
  return (
    <div>
      <Header />
      <h1 className="px-56 font-extrabold text-2xl font-ubuntu">
        Master Price
      </h1>
      <hr className="border-b  border-b-gray-200" />
      <AllButton />
    </div>
  );
}

export default App;
