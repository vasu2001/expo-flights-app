export const searchAirportsResponseSample = {
  status: true,
  timestamp: 1691008938320,
  data: [
    {
      presentation: {
        title: "New York",
        suggestionTitle: "New York (Any)",
        subtitle: "United States",
      },
      navigation: {
        entityId: "27537542",
        entityType: "CITY",
        localizedName: "New York",
        relevantFlightParams: {
          skyId: "NYCA",
          entityId: "27537542",
          flightPlaceType: "CITY",
          localizedName: "New York",
        },
        relevantHotelParams: {
          entityId: "27537542",
          entityType: "CITY",
          localizedName: "New York",
        },
      },
    },
    {
      presentation: {
        title: "New York Newark",
        suggestionTitle: "New York Newark (EWR)",
        subtitle: "United States",
      },
      navigation: {
        entityId: "95565059",
        entityType: "AIRPORT",
        localizedName: "New York Newark",
        relevantFlightParams: {
          skyId: "EWR",
          entityId: "95565059",
          flightPlaceType: "AIRPORT",
          localizedName: "New York Newark",
        },
        relevantHotelParams: {
          entityId: "27537542",
          entityType: "CITY",
          localizedName: "New York",
        },
      },
    },
    {
      presentation: {
        title: "New York John F. Kennedy",
        suggestionTitle: "New York John F. Kennedy (JFK)",
        subtitle: "United States",
      },
      navigation: {
        entityId: "95565058",
        entityType: "AIRPORT",
        localizedName: "New York John F. Kennedy",
        relevantFlightParams: {
          skyId: "JFK",
          entityId: "95565058",
          flightPlaceType: "AIRPORT",
          localizedName: "New York John F. Kennedy",
        },
        relevantHotelParams: {
          entityId: "27537542",
          entityType: "CITY",
          localizedName: "New York",
        },
      },
    },
    {
      presentation: {
        title: "New York LaGuardia",
        suggestionTitle: "New York LaGuardia (LGA)",
        subtitle: "United States",
      },
      navigation: {
        entityId: "95565057",
        entityType: "AIRPORT",
        localizedName: "New York LaGuardia",
        relevantFlightParams: {
          skyId: "LGA",
          entityId: "95565057",
          flightPlaceType: "AIRPORT",
          localizedName: "New York LaGuardia",
        },
        relevantHotelParams: {
          entityId: "27537542",
          entityType: "CITY",
          localizedName: "New York",
        },
      },
    },
    {
      presentation: {
        title: "Stewart International",
        suggestionTitle: "Stewart International (SWF)",
        subtitle: "United States",
      },
      navigation: {
        entityId: "95566280",
        entityType: "AIRPORT",
        localizedName: "Stewart International",
        relevantFlightParams: {
          skyId: "SWF",
          entityId: "95566280",
          flightPlaceType: "AIRPORT",
          localizedName: "Stewart International",
        },
        relevantHotelParams: {
          entityId: "27537542",
          entityType: "CITY",
          localizedName: "New York",
        },
      },
    },
  ],
};

export const nearbyAirportsResponseSample = {
  status: true,
  timestamp: 1691008887676,
  data: {
    current: {
      presentation: {
        title: "Mumbai",
        suggestionTitle: "Mumbai (BOM)",
        subtitle: "India",
      },
      navigation: {
        entityId: "95673320",
        entityType: "AIRPORT",
        localizedName: "Mumbai",
        relevantFlightParams: {
          skyId: "BOM",
          entityId: "95673320",
          flightPlaceType: "AIRPORT",
          localizedName: "Mumbai",
        },
        relevantHotelParams: {
          entityId: "27539520",
          entityType: "CITY",
          localizedName: "Mumbai",
        },
      },
    },
    nearby: [
      {
        presentation: {
          title: "Stewart International",
          suggestionTitle: "Stewart International (SWF)",
          subtitle: "United States",
        },
        navigation: {
          entityId: "95566280",
          entityType: "AIRPORT",
          localizedName: "Stewart International",
          relevantFlightParams: {
            skyId: "SWF",
            entityId: "95566280",
            flightPlaceType: "AIRPORT",
            localizedName: "Stewart International",
          },
          relevantHotelParams: {
            entityId: "27537542",
            entityType: "CITY",
            localizedName: "New York",
          },
        },
      },
    ],
    recent: [],
  },
};
