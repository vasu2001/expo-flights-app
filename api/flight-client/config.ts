export interface FlightAPIConfig {
  baseUrl: string;
  apiKey: string;
  timeout?: number;
}

export const DEFAULT_CONFIG: FlightAPIConfig = {
  baseUrl: "https://skyscanner-api.p.rapidapi.com",
  apiKey: process.env.RAPIDAPI_KEY || "",
  timeout: 30000,
};
