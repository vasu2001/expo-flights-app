// Export all types
export * from "./types";

// Export the main API client
export { FlightAPI, FlightAPIError } from "./client";

// Export the config type
export { type FlightAPIConfig } from "./config";

// Re-export commonly used types for convenience
export type {
  ApiResponse,
  AirportLocation as Location,
  FlightItinerary,
  FlightLeg,
  FlightSegment,
  Carrier,
  Price,
  AirportOption,
  FlightSearchForm,
  FlightResult,
  // Sky Scrapper types
  FlightDetails as SkyScrapperFlight,
  FlightDetailsRequest as SkyScrapperSearchRequest,
  FlightDetailsResponse as SkyScrapperSearchResponse,
} from "./types";
