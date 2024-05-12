import { useEffect, useState } from "react";
import Data from "../../data/LHR_CDG_ADT1_TYPE_1.txt";
const SearchContainer = () => {
  const [flights, setFlights] = useState("");
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(Data)
        .then((res) => {
          console.log(res);
          return res.text();
        })
        .then((data) => {
          const jsonData = JSON.parse(data);
          console.log(jsonData);
          setFlights(jsonData);
        });
    };
    fetchData();
  }, []);

  //   console.log(flights.flightOffer.map((offer) => offer.itineraries));
  const handleSearch = async () => {
    setShowData(!showData);
  };
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
        <button
          className="border border-blue-900 px-5 py-2 bg-blue-900 rounded-s rounded-e text-xs font-medium text-gray-200 cursor-pointer"
          onClick={handleSearch}
        >
          SEARCH
        </button>
      </div>
      <div className="px-56">
        <hr className="border-b  border-b-blue-400" />
      </div>
      {showData && (
        <div className="px-56">
          <p className="font-semibold mt--1 mb-5">Data parsed successfully</p>
          <table className="table-auto w-full font-light text-sm">
            <thead className="font-light text-xs text-gray-600">
              <tr className="border bg-gray-200 text-center tracking-wider">
                <th className="font-semibold p-3">
                  <p className="">FLIGHT</p>
                </th>
                <th className="font-semibold">
                  <p>AIRCRAFT</p>
                </th>
                <th className="font-semibold">
                  <p>CLASS</p>
                </th>
                <th className="font-semibold">
                  <p>FARE</p>
                </th>
                <th className="font-semibold">
                  <p>ROUTE</p>
                </th>
                <th className="font-semibold">
                  <p>DEPARTURE</p>
                </th>
                <th className="font-semibold">
                  <p>ARRIVAL</p>
                </th>
                <th></th>
                <th className="font-semibold">
                  <p>DURATION</p>
                </th>
                <th className="font-semibold">PRICE</th>
              </tr>
            </thead>

            <tbody className="text-xs text-gray-600 tracking-wider">
              {flights.flightOffer.map((flight) => (
                <>
                  <tr className="even:bg-gray-300 odd:bg-gray-100 text-xs tracking-wide border-b border-red-400 relative">
                    <td className="pl-6 border-b mt-1 border-red-200 absolute w-full">
                      {flight.itineraries[0].segments.map((fligt) => (
                        <>
                          <p>
                            <span>{fligt.aircraft}</span>
                            <span>{fligt.carrierCode}</span>
                          </p>
                        </>
                      ))}
                    </td>
                    <td className="text-center">
                      {flight.itineraries[0].segments.map((aircraft) => (
                        <>
                          <p>
                            <span>{aircraft.flightNumber}</span>
                          </p>
                        </>
                      ))}
                    </td>
                    <td className="px-2">
                      {flight.class.map((cls) => (
                        <>
                          <p>
                            <span>{cls[0]}</span> <br />
                            <span>{cls[1]}</span>
                          </p>
                        </>
                      ))}
                    </td>
                    <td>
                      {flight.fareBasis.map((basis) => (
                        <>
                          <p key={basis.id}>
                            <span>{basis[0]}</span> <br />
                            <span>{basis[1]}</span>
                          </p>
                        </>
                      ))}
                    </td>
                    <td>
                      {flight.itineraries[0].segments.map((route) => (
                        <>
                          <p key={route.id}>
                            <span>{route.departure.iataCode}</span>
                            <span>-</span>
                            <span>{route.arrival.iataCode}</span>
                          </p>
                        </>
                      ))}
                    </td>
                    <td>
                      {flight.itineraries[0].segments.map((route) => (
                        <>
                          <p key={route.id}>
                            <span>{route.departure.at}</span>
                          </p>
                        </>
                      ))}
                    </td>
                    <td>
                      {flight.itineraries[0].segments.map((route) => (
                        <>
                          <p key={route.id}>
                            <span>{route.arrival.at}</span>
                          </p>
                        </>
                      ))}
                    </td>
                    <td>
                      <p>----</p>
                    </td>
                    <td className="text-center">
                      <p>{flight.itineraries[0].duration}</p>
                    </td>
                    <td className="flex flex-col items-center justify-center">
                      <p>{flight.price}</p>
                      <button className="bg-blue-950 text-sm text-gray-200 px-4 py-1 rounded-sm cursor-pointer z-10">
                        SELECT
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default SearchContainer;
