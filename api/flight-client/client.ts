import { DEFAULT_CONFIG, FlightAPIConfig } from "./config";
import {
  flightDetailsResponseSample,
  nearbyAirportsResponseSample,
  searchAirportsResponseSample,
  searchFlightsResponseSample,
} from "./sample-response";
import {
  NearbyAirportsRequest,
  NearbyAirportsResponse,
  SearchAirportsRequest,
  SearchAirportsResponse,
  SearchFlightsRequest,
  SearchFlightsResponse,
  FlightDetailsRequest,
  FlightDetailsResponse,
} from "./types";

export class FlightAPIError extends Error {
  constructor(message: string, public status?: number, public response?: any) {
    super(message);
    this.name = "FlightAPIError";
  }
}

export class FlightAPI {
  private config: FlightAPIConfig;
  private defaultTimeout = 30000; // 30 seconds

  constructor(config = DEFAULT_CONFIG) {
    this.config = {
      ...config,
      timeout: config.timeout || this.defaultTimeout,
    };
  }

  private async makeRequest<T>(
    endpoint: string,
    params: Record<string, any> = {}
  ): Promise<T> {
    const url = new URL(`${this.config.baseUrl}${endpoint}`);

    // Add query parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, value.toString());
      }
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

    try {
      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": this.config.apiKey,
          "X-RapidAPI-Host": "skyscanner-api.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new FlightAPIError(
          `HTTP ${response.status}: ${response.statusText}`,
          response.status
        );
      }

      const data = await response.json();

      // Check if the API returned an error response
      if (!data.status) {
        throw new FlightAPIError(
          "API returned an error response",
          response.status,
          data
        );
      }

      return data as T;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof FlightAPIError) {
        throw error;
      }

      if (error instanceof Error) {
        if (error.name === "AbortError") {
          throw new FlightAPIError("Request timeout", 408);
        }
        throw new FlightAPIError(`Network error: ${error.message}`);
      }

      throw new FlightAPIError("Unknown error occurred");
    }
  }

  /**
   * Get nearby airports based on latitude and longitude
   * @param params - Latitude and longitude coordinates
   * @returns Promise with nearby airports data
   */
  async getNearbyAirports(
    params: NearbyAirportsRequest
  ): Promise<NearbyAirportsResponse> {
    return nearbyAirportsResponseSample;
    return this.makeRequest<NearbyAirportsResponse>(
      "/api/v1/flights/getNearByAirports",
      params
    );
  }

  /**
   * Search for airports based on a query string
   * @param params - Search query
   * @returns Promise with airport search results
   */
  async searchAirports(
    params: SearchAirportsRequest
  ): Promise<SearchAirportsResponse> {
    return searchAirportsResponseSample;
    return this.makeRequest<SearchAirportsResponse>(
      "/api/v1/flights/searchAirport",
      params
    );
  }

  /**
   * Search for flights based on origin, destination, and date
   * @param params - Flight search parameters
   * @returns Promise with flight search results
   */
  async searchFlights(
    params: SearchFlightsRequest
  ): Promise<SearchFlightsResponse> {
    return searchFlightsResponseSample;
    return this.makeRequest<SearchFlightsResponse>(
      "/api/v1/flights/searchFlights",
      params
    );
  }

  /**
   * Search for flights using the Sky Scrapper API
   * @param params - Flight search parameters for Sky Scrapper
   * @returns Promise with flight search results from Sky Scrapper
   */
  async getFlightDetails(
    params: FlightDetailsRequest
  ): Promise<FlightDetailsResponse> {
    return flightDetailsResponseSample;
    return this.makeRequest<FlightDetailsResponse>(
      "/api/v1/flights/getFlightDetails",
      params
    );
  }
}
