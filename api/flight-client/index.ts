// Export all types
export * from "./types";

// Export the main API client
export { FlightAPI, FlightAPIError } from "./client";

// Export the config type
export { type FlightAPIConfig } from "./config";

// Export utility functions
export * from "./utils";

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
} from "./types";
