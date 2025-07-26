export interface FlightAPIConfig {
  baseUrl: string;
  apiKey: string;
  timeout?: number;
}

export const DEFAULT_CONFIG: FlightAPIConfig = {
  baseUrl: "https://sky-scrapper.p.rapidapi.com",
  apiKey: "300a6282e3msh26159f3298ad310p16b0bfjsn2f04e757b119",
  timeout: 30000,
};
