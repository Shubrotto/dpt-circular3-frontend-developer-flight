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
        <hr className="border-b  border-b-blue-300" />
      </div>
      <div className="px-56">
        {showData && (
          <table className="table-auto border-spacing-4 border-separate border bg-gray-200 text-sm overflow-hidden">
            <thead>
              <tr>
                <th>FLIGHT</th>
                <th>AIRCRAFT</th>
                <th>CLASS</th>
                <th>FARE</th>
                <th>ROUTE</th>
                <th>DEPARTURE</th>
                <th>ARRIVAL</th>
                <th>DURATION</th>
                <th>
                  PRICE <button>SELECT</button>
                </th>
              </tr>
            </thead>

            <tbody>
              {flights.flightOffer.map((flight) => (
                <>
                  <tr>
                    <td>
                      {flight.itineraries[0].segments.map((fligt) => (
                        <>
                          <p>
                            <span>{fligt.aircraft}</span>
                            <span>{fligt.carrierCode}</span>
                          </p>
                        </>
                      ))}
                    </td>
                    <td>
                      {flight.itineraries[0].segments.map((aircraft) => (
                        <>
                          <p>
                            <span>{aircraft.flightNumber}</span>
                          </p>
                        </>
                      ))}
                    </td>
                    <td>
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
                      <p>{flight.itineraries[0].duration}</p>
                    </td>
                    <td className="flex flex-col items-center justify-center">
                      <p>{flight.price}</p>
                      <button className="bg-blue-950 text-sm text-gray-200 px-4 py-1 rounded-sm">
                        SELECT
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default SearchContainer;
