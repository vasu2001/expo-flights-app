import {
  FlightAPI,
  FlightAPIError,
  type FlightAPIConfig,
  type SearchFlightsRequest,
  type NearbyAirportsRequest,
  type SearchAirportsRequest,
  formatDateForAPI,
  validateFlightSearch,
  FlightAPI as FlightAPIClass,
} from "./index";

// Example configuration
const config: FlightAPIConfig = {
  baseUrl: "https://skyscanner-api.p.rapidapi.com",
  apiKey: "YOUR_RAPIDAPI_KEY_HERE", // Replace with your actual API key
  timeout: 30000, // 30 seconds
};

// Initialize the API client
const flightAPI = new FlightAPI(config);

// Example 1: Get nearby airports
async function getNearbyAirportsExample() {
  try {
    const params: NearbyAirportsRequest = {
      lat: 40.7128, // New York latitude
      lng: -74.006, // New York longitude
    };

    console.log("Searching for nearby airports...");
    const response = await flightAPI.getNearbyAirports(params);

    console.log("Current location:", response.data.current.presentation.title);
    console.log("Nearby airports:", response.data.nearby.length);
    console.log("Recent searches:", response.data.recent.length);

    return response;
  } catch (error) {
    if (error instanceof FlightAPIError) {
      console.error("API Error:", error.message, "Status:", error.status);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}

// Example 2: Search for airports
async function searchAirportsExample() {
  try {
    const params: SearchAirportsRequest = {
      query: "New York",
    };

    console.log("Searching for airports...");
    const response = await flightAPI.searchAirports(params);

    console.log("Found airports:", response.data.length);
    response.data.forEach((airport, index) => {
      console.log(
        `${index + 1}. ${airport.presentation.title} (${airport.skyId})`
      );
    });

    return response;
  } catch (error) {
    if (error instanceof FlightAPIError) {
      console.error("API Error:", error.message, "Status:", error.status);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}

// Example 3: Search for flights
async function searchFlightsExample() {
  try {
    const params: SearchFlightsRequest = {
      originSkyId: "LOND", // London
      destinationSkyId: "NYCA", // New York
      originEntityId: "27537542",
      destinationEntityId: "27537542",
      date: formatDateForAPI(new Date("2024-03-15")),
      returnDate: formatDateForAPI(new Date("2024-03-22")),
      adults: 1,
      cabinClass: "economy",
      currency: "USD",
    };

    console.log("Searching for flights...");
    const response = await flightAPI.searchFlights(params);

    console.log("Total results:", response.data.context.totalResults);
    console.log("Found itineraries:", response.data.itineraries.length);

    // Display first few results
    response.data.itineraries.slice(0, 3).forEach((itinerary, index) => {
      console.log(`\nFlight ${index + 1}:`);
      console.log(`Price: ${itinerary.price.formatted}`);
      console.log(`Duration: ${itinerary.legs[0].durationInMinutes} minutes`);
      console.log(`Stops: ${itinerary.legs[0].stopCount}`);
      console.log(`Airline: ${itinerary.legs[0].carriers.marketing[0]?.name}`);
    });

    return response;
  } catch (error) {
    if (error instanceof FlightAPIError) {
      console.error("API Error:", error.message, "Status:", error.status);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}

// Example 4: Using utility functions
function utilityFunctionsExample() {
  // Date formatting
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedDate = formatDateForAPI(tomorrow);
  console.log("Formatted date for API:", formattedDate);

  // Duration formatting
  const duration = 495; // minutes
  const formattedDuration = FlightAPIClass.itineraryToFlightResult({
    id: "test",
    price: { raw: 100, formatted: "$100" },
    legs: [
      {
        id: "test-leg",
        origin: {
          id: "LHR",
          name: "London Heathrow",
          displayCode: "LHR",
          city: "London",
          isHighlighted: false,
        },
        destination: {
          id: "JFK",
          name: "New York JFK",
          displayCode: "JFK",
          city: "New York",
          isHighlighted: false,
        },
        durationInMinutes: duration,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2024-03-15T10:00:00",
        arrival: "2024-03-15T18:15:00",
        timeDeltaInDays: 0,
        carriers: { marketing: [], operationType: "fully_operated" },
        segments: [],
      },
    ],
    isSelfTransfer: false,
    isProtectedSelfTransfer: false,
    farePolicy: {
      isChangeAllowed: false,
      isPartiallyChangeable: false,
      isCancellationAllowed: false,
      isPartiallyRefundable: false,
    },
    tags: [],
    isMashUp: false,
    hasFlexibleOptions: false,
    score: 0.9,
  });

  console.log("Formatted duration:", formattedDuration.duration, "minutes");
}

// Example 5: Complete workflow
async function completeWorkflowExample() {
  try {
    // Step 1: Search for origin airport
    const originSearch = await flightAPI.searchAirports({ query: "London" });
    const originAirport = originSearch.data[0];

    // Step 2: Search for destination airport
    const destSearch = await flightAPI.searchAirports({ query: "New York" });
    const destAirport = destSearch.data[0];

    // Step 3: Search for flights
    const flightSearch: SearchFlightsRequest = {
      originSkyId: originAirport.skyId,
      destinationSkyId: destAirport.skyId,
      originEntityId: originAirport.entityId,
      destinationEntityId: destAirport.entityId,
      date: formatDateForAPI(new Date("2024-03-15")),
      adults: 1,
      cabinClass: "economy",
      currency: "USD",
    };

    const flights = await flightAPI.searchFlights(flightSearch);

    console.log("Complete workflow completed successfully!");
    console.log(
      `Found ${flights.data.itineraries.length} flights from ${originAirport.presentation.title} to ${destAirport.presentation.title}`
    );

    return flights;
  } catch (error) {
    console.error("Workflow failed:", error);
    throw error;
  }
}

// Example 6: Error handling patterns
async function errorHandlingExample() {
  try {
    // This will likely fail due to invalid parameters
    await flightAPI.searchFlights({
      originSkyId: "INVALID",
      destinationSkyId: "INVALID",
      originEntityId: "INVALID",
      destinationEntityId: "INVALID",
      date: "invalid-date",
    });
  } catch (error) {
    if (error instanceof FlightAPIError) {
      console.log("Handled API error:", error.message);
      console.log("Error status:", error.status);
      console.log("Error response:", error.response);
    } else {
      console.log("Handled unexpected error:", error);
    }
  }
}

// Export examples for use in other files
export {
  getNearbyAirportsExample,
  searchAirportsExample,
  searchFlightsExample,
  utilityFunctionsExample,
  completeWorkflowExample,
  errorHandlingExample,
};

// Example usage in a React component or other context:
/*
import { FlightAPI, FlightAPIError } from './api/flight-client';

const MyComponent = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchFlights = async (searchParams) => {
    setLoading(true);
    setError(null);
    
    try {
      const api = new FlightAPI({
        baseUrl: 'https://skyscanner-api.p.rapidapi.com',
        apiKey: process.env.RAPIDAPI_KEY,
      });
      
      const response = await api.searchFlights(searchParams);
      setFlights(response.data.itineraries);
    } catch (error) {
      if (error instanceof FlightAPIError) {
        setError(`API Error: ${error.message}`);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Searching for flights...</p>}
      {error && <p>Error: {error}</p>}
      {flights.map(flight => (
        <div key={flight.id}>
          <p>Price: {flight.price.formatted}</p>
          <p>Duration: {flight.legs[0].durationInMinutes} minutes</p>
        </div>
      ))}
    </div>
  );
};
*/
