1.1 Get Near By Airports
This endpoint makes it possible to obtain all nearby airports according to the latitude and longitude provided. Path api/v1/flights/getNearByAirports

Required Parameters lat :- Latitude of the place of search lng :- Longitude of the place of search

Response { "status": true, "timestamp": 1692098479952, "data": { "current": { "skyId": "BOM", "entityId": "95673320", "presentation": { "title": "Mumbai", "suggestionTitle": "Mumbai (BOM)", "subtitle": "India" }, "navigation": { "entityId": "95673320", "entityType": "AIRPORT", "localizedName": "Mumbai", "relevantFlightParams": { "skyId": "BOM", "entityId": "95673320", "flightPlaceType": "AIRPORT", "localizedName": "Mumbai" }, "relevantHotelParams": { "entityId": "27539520", "entityType": "CITY", "localizedName": "Mumbai" } } }, "nearby": [], "recent": [] } }


1.2 Search Airports
By using this endpoint, all nearby airports can be obtained based on the provided city, address, place name, state, etc. Path api/v1/flights/searchAirport

Required Parameters query :- Object containing parameters to automatically search for flights.

Response { "status": true, "timestamp": 1692098786310, "data": [ { "skyId": "NYCA", "entityId": "27537542", "presentation": { "title": "New York", "suggestionTitle": "New York (Any)", "subtitle": "United States" }, "navigation": { "entityId": "27537542", "entityType": "CITY", "localizedName": "New York", "relevantFlightParams": { "skyId": "NYCA", "entityId": "27537542", "flightPlaceType": "CITY", "localizedName": "New York" }, "relevantHotelParams": { "entityId": "27537542", "entityType": "CITY", "localizedName": "New York" } } }, { "skyId": "EWR", "entityId": "95565059", "presentation": { "title": "New York Newark", "suggestionTitle": "New York Newark (EWR)", "subtitle": "United States" }, "navigation": { "entityId": "95565059", "entityType": "AIRPORT", "localizedName": "New York Newark", "relevantFlightParams": { "skyId": "EWR", "entityId": "95565059", "flightPlaceType": "AIRPORT", "localizedName": "New York Newark" }, "relevantHotelParams": { "entityId": "27537542", "entityType": "CITY", "localizedName": "New York" } } }, { "skyId": "JFK", "entityId": "95565058", "presentation": { "title": "New York John F. Kennedy", "suggestionTitle": "New York John F. Kennedy (JFK)", "subtitle": "United States" }, "navigation": { "entityId": "95565058", "entityType": "AIRPORT", "localizedName": "New York John F. Kennedy", "relevantFlightParams": { "skyId": "JFK", "entityId": "95565058", "flightPlaceType": "AIRPORT", "localizedName": "New York John F. Kennedy" }, "relevantHotelParams": { "entityId": "27537542", "entityType": "CITY", "localizedName": "New York" } } }, { "skyId": "LGA", "entityId": "95565057", "presentation": { "title": "New York LaGuardia", "suggestionTitle": "New York LaGuardia (LGA)", "subtitle": "United States" }, "navigation": { "entityId": "95565057", "entityType": "AIRPORT", "localizedName": "New York LaGuardia", "relevantFlightParams": { "skyId": "LGA", "entityId": "95565057", "flightPlaceType": "AIRPORT", "localizedName": "New York LaGuardia" }, "relevantHotelParams": { "entityId": "27537542", "entityType": "CITY", "localizedName": "New York" } } }, { "skyId": "SWF", "entityId": "95566280", "presentation": { "title": "Stewart International", "suggestionTitle": "Stewart International (SWF)", "subtitle": "United States" }, "navigation": { "entityId": "95566280", "entityType": "AIRPORT", "localizedName": "Stewart International", "relevantFlightParams": { "skyId": "SWF", "entityId": "95566280", "flightPlaceType": "AIRPORT", "localizedName": "Stewart International" }, "relevantHotelParams": { "entityId": "27537542", "entityType": "CITY", "localizedName": "New York" } } } ] }

1.3 Search flights
This endpoint makes it possible to search flights. Path api/v1/flights/searchFlights

Required Parameters originSkyId :- The SkyId for the origin airport. To retrieve SkyId, please use api/v1/flights/searchAirport or api/v1/flights/getNearByAirports and search for SkyId parameter. destinationSkyId :- The SkyId for the destination airport. To retrieve SkyId, please use api/v1/flights/searchAirport or api/v1/flights/getNearByAirports and search for SkyId parameter. originEntityId :- The entityId for the origin airport. To retrieve entityId, please use api/v1/flights/searchAirport or api/v1/flights/getNearByAirports and search for entityId parameter. destinationEntityId :- The entityId for the destination airport. To retrieve entityId, please use api/v1/flights/searchAirport or api/v1/flights/getNearByAirports and search for entityId parameter. date :- The travel date should be in the format of YYYY-MM-DD

Optional Parameters returnDate :- adults :- cabinClass :- sortBy :- childrens :- infants :- currency :- market :- countryCode :-

Response {
  "status": true,
  "timestamp": 1691008981566,
  "sessionId": "25cee707-a873-4d0a-aeb2-4128a7ca0258",
  "data": {
    "context": {
      "status": "incomplete",
      "totalResults": 10
    },
    "itineraries": [
      {
        "id": "13542-2402201235--30598-0-12712-2402201550|12712-2402221810--30598-0-13542-2402230600",
        "price": {
          "raw": 419.18,
          "formatted": "$420"
        },
        "legs": [
          {
            "id": "13542-2402201235--30598-0-12712-2402201550",
            "origin": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 495,
            "stopCount": 0,
            "isSmallestStops": false,
            "departure": "2024-02-20T12:35:00",
            "arrival": "2024-02-20T15:50:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -30598,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I%29.png",
                  "name": "Norse Atlantic Airways (UK)"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13542-12712-2402201235-2402201550--30598",
                "origin": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T12:35:00",
                "arrival": "2024-02-20T15:50:00",
                "durationInMinutes": 495,
                "flightNumber": "701",
                "marketingCarrier": {
                  "id": -30598,
                  "name": "Norse Atlantic Airways (UK)",
                  "alternateId": "I)",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -30598,
                  "name": "Norse Atlantic Airways (UK)",
                  "alternateId": "I)",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402221810--30598-0-13542-2402230600",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 410,
            "stopCount": 0,
            "isSmallestStops": false,
            "departure": "2024-02-22T18:10:00",
            "arrival": "2024-02-23T06:00:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -30598,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I%29.png",
                  "name": "Norse Atlantic Airways (UK)"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-13542-2402221810-2402230600--30598",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "departure": "2024-02-22T18:10:00",
                "arrival": "2024-02-23T06:00:00",
                "durationInMinutes": 410,
                "flightNumber": "702",
                "marketingCarrier": {
                  "id": -30598,
                  "name": "Norse Atlantic Airways (UK)",
                  "alternateId": "I)",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -30598,
                  "name": "Norse Atlantic Airways (UK)",
                  "alternateId": "I)",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "eco": {
          "ecoContenderDelta": 13.232994
        },
        "tags": [
          "cheapest",
          "shortest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.998502
      },
      {
        "id": "13554-2402200750--32753-1-12712-2402201355|12712-2402222110--32753-1-13554-2402231130",
        "price": {
          "raw": 527.97,
          "formatted": "$528"
        },
        "legs": [
          {
            "id": "13554-2402200750--32753-1-12712-2402201355",
            "origin": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 665,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T07:50:00",
            "arrival": "2024-02-20T13:55:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13554-11154-2402200750-2402200910--32753",
                "origin": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T07:50:00",
                "arrival": "2024-02-20T09:10:00",
                "durationInMinutes": 80,
                "flightNumber": "151",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201110-2402201355--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T11:10:00",
                "arrival": "2024-02-20T13:55:00",
                "durationInMinutes": 465,
                "flightNumber": "105",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402222110--32753-1-13554-2402231130",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 560,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T21:10:00",
            "arrival": "2024-02-23T11:30:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402222110-2402230850--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T21:10:00",
                "arrival": "2024-02-23T08:50:00",
                "durationInMinutes": 400,
                "flightNumber": "106",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13554-2402231010-2402231130--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "departure": "2024-02-23T10:10:00",
                "arrival": "2024-02-23T11:30:00",
                "durationInMinutes": 80,
                "flightNumber": "158",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "second_cheapest",
          "second_shortest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.58567
      },
      {
        "id": "13554-2402200750--32753-1-12712-2402201355|12712-2402221700--32753-1-13554-2402230805",
        "price": {
          "raw": 527.97,
          "formatted": "$528"
        },
        "legs": [
          {
            "id": "13554-2402200750--32753-1-12712-2402201355",
            "origin": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 665,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T07:50:00",
            "arrival": "2024-02-20T13:55:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13554-11154-2402200750-2402200910--32753",
                "origin": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T07:50:00",
                "arrival": "2024-02-20T09:10:00",
                "durationInMinutes": 80,
                "flightNumber": "151",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201110-2402201355--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T11:10:00",
                "arrival": "2024-02-20T13:55:00",
                "durationInMinutes": 465,
                "flightNumber": "105",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402221700--32753-1-13554-2402230805",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 605,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T17:00:00",
            "arrival": "2024-02-23T08:05:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402221700-2402230425--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T17:00:00",
                "arrival": "2024-02-23T04:25:00",
                "durationInMinutes": 385,
                "flightNumber": "104",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13554-2402230640-2402230805--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "departure": "2024-02-23T06:40:00",
                "arrival": "2024-02-23T08:05:00",
                "durationInMinutes": 85,
                "flightNumber": "152",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "second_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.564918
      },
      {
        "id": "13542-2402201300--32753-1-12712-2402201940|12712-2402221700--32753-1-13542-2402230755",
        "price": {
          "raw": 529.03,
          "formatted": "$530"
        },
        "legs": [
          {
            "id": "13542-2402201300--32753-1-12712-2402201940",
            "origin": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 700,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T13:00:00",
            "arrival": "2024-02-20T19:40:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13542-11154-2402201300-2402201425--32753",
                "origin": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T13:00:00",
                "arrival": "2024-02-20T14:25:00",
                "durationInMinutes": 85,
                "flightNumber": "237",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201640-2402201940--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T16:40:00",
                "arrival": "2024-02-20T19:40:00",
                "durationInMinutes": 480,
                "flightNumber": "107",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402221700--32753-1-13542-2402230755",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 595,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T17:00:00",
            "arrival": "2024-02-23T07:55:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402221700-2402230425--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T17:00:00",
                "arrival": "2024-02-23T04:25:00",
                "durationInMinutes": 385,
                "flightNumber": "104",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13542-2402230630-2402230755--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "departure": "2024-02-23T06:30:00",
                "arrival": "2024-02-23T07:55:00",
                "durationInMinutes": 85,
                "flightNumber": "230",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "third_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.552902
      },
      {
        "id": "13554-2402201215--32753-1-12712-2402201940|12712-2402222110--32753-1-13554-2402231130",
        "price": {
          "raw": 527.97,
          "formatted": "$528"
        },
        "legs": [
          {
            "id": "13554-2402201215--32753-1-12712-2402201940",
            "origin": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 745,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T12:15:00",
            "arrival": "2024-02-20T19:40:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13554-11154-2402201215-2402201335--32753",
                "origin": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T12:15:00",
                "arrival": "2024-02-20T13:35:00",
                "durationInMinutes": 80,
                "flightNumber": "159",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201640-2402201940--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T16:40:00",
                "arrival": "2024-02-20T19:40:00",
                "durationInMinutes": 480,
                "flightNumber": "107",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402222110--32753-1-13554-2402231130",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 560,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T21:10:00",
            "arrival": "2024-02-23T11:30:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402222110-2402230850--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T21:10:00",
                "arrival": "2024-02-23T08:50:00",
                "durationInMinutes": 400,
                "flightNumber": "106",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13554-2402231010-2402231130--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "departure": "2024-02-23T10:10:00",
                "arrival": "2024-02-23T11:30:00",
                "durationInMinutes": 80,
                "flightNumber": "158",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "second_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.549767
      },
      {
        "id": "13542-2402201300--32753-1-12712-2402201940|12712-2402222110--32753-1-13542-2402231220",
        "price": {
          "raw": 529.03,
          "formatted": "$530"
        },
        "legs": [
          {
            "id": "13542-2402201300--32753-1-12712-2402201940",
            "origin": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 700,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T13:00:00",
            "arrival": "2024-02-20T19:40:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13542-11154-2402201300-2402201425--32753",
                "origin": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T13:00:00",
                "arrival": "2024-02-20T14:25:00",
                "durationInMinutes": 85,
                "flightNumber": "237",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201640-2402201940--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T16:40:00",
                "arrival": "2024-02-20T19:40:00",
                "durationInMinutes": 480,
                "flightNumber": "107",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402222110--32753-1-13542-2402231220",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 610,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T21:10:00",
            "arrival": "2024-02-23T12:20:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402222110-2402230850--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T21:10:00",
                "arrival": "2024-02-23T08:50:00",
                "durationInMinutes": 400,
                "flightNumber": "106",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13542-2402231055-2402231220--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "departure": "2024-02-23T10:55:00",
                "arrival": "2024-02-23T12:20:00",
                "durationInMinutes": 85,
                "flightNumber": "236",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "third_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.546571
      },
      {
        "id": "13554-2402201215--32753-1-12712-2402201940|12712-2402221700--32753-1-13554-2402230805",
        "price": {
          "raw": 527.97,
          "formatted": "$528"
        },
        "legs": [
          {
            "id": "13554-2402201215--32753-1-12712-2402201940",
            "origin": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 745,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T12:15:00",
            "arrival": "2024-02-20T19:40:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13554-11154-2402201215-2402201335--32753",
                "origin": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T12:15:00",
                "arrival": "2024-02-20T13:35:00",
                "durationInMinutes": 80,
                "flightNumber": "159",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201640-2402201940--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T16:40:00",
                "arrival": "2024-02-20T19:40:00",
                "durationInMinutes": 480,
                "flightNumber": "107",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402221700--32753-1-13554-2402230805",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 605,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T17:00:00",
            "arrival": "2024-02-23T08:05:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402221700-2402230425--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T17:00:00",
                "arrival": "2024-02-23T04:25:00",
                "durationInMinutes": 385,
                "flightNumber": "104",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13554-2402230640-2402230805--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "departure": "2024-02-23T06:40:00",
                "arrival": "2024-02-23T08:05:00",
                "durationInMinutes": 85,
                "flightNumber": "152",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "second_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.531441
      },
      {
        "id": "13554-2402200950--32753-1-11442-2402201605|11442-2402221735--32753-1-13554-2402230805",
        "price": {
          "raw": 578.71,
          "formatted": "$579"
        },
        "legs": [
          {
            "id": "13554-2402200950--32753-1-11442-2402201605",
            "origin": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "EWR",
              "name": "New York Newark",
              "displayCode": "EWR",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 675,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T09:50:00",
            "arrival": "2024-02-20T16:05:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13554-11154-2402200950-2402201115--32753",
                "origin": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T09:50:00",
                "arrival": "2024-02-20T11:15:00",
                "durationInMinutes": 85,
                "flightNumber": "155",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-11442-2402201305-2402201605--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "EWR",
                  "displayCode": "EWR",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York Newark",
                  "type": "Airport"
                },
                "departure": "2024-02-20T13:05:00",
                "arrival": "2024-02-20T16:05:00",
                "durationInMinutes": 480,
                "flightNumber": "101",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "11442-2402221735--32753-1-13554-2402230805",
            "origin": {
              "id": "EWR",
              "name": "New York Newark",
              "displayCode": "EWR",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LHR",
              "name": "London Heathrow",
              "displayCode": "LHR",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 570,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T17:35:00",
            "arrival": "2024-02-23T08:05:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "11442-11154-2402221735-2402230510--32753",
                "origin": {
                  "flightPlaceId": "EWR",
                  "displayCode": "EWR",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York Newark",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T17:35:00",
                "arrival": "2024-02-23T05:10:00",
                "durationInMinutes": 395,
                "flightNumber": "100",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13554-2402230640-2402230805--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LHR",
                  "displayCode": "LHR",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Heathrow",
                  "type": "Airport"
                },
                "departure": "2024-02-23T06:40:00",
                "arrival": "2024-02-23T08:05:00",
                "durationInMinutes": 85,
                "flightNumber": "152",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "third_shortest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.525736
      },
      {
        "id": "13542-2402201105--32753-1-12712-2402201940|12712-2402221700--32753-1-13542-2402230755",
        "price": {
          "raw": 529.03,
          "formatted": "$530"
        },
        "legs": [
          {
            "id": "13542-2402201105--32753-1-12712-2402201940",
            "origin": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 815,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T11:05:00",
            "arrival": "2024-02-20T19:40:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13542-11154-2402201105-2402201230--32753",
                "origin": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T11:05:00",
                "arrival": "2024-02-20T12:30:00",
                "durationInMinutes": 85,
                "flightNumber": "233",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201640-2402201940--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T16:40:00",
                "arrival": "2024-02-20T19:40:00",
                "durationInMinutes": 480,
                "flightNumber": "107",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402221700--32753-1-13542-2402230755",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 595,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T17:00:00",
            "arrival": "2024-02-23T07:55:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402221700-2402230425--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T17:00:00",
                "arrival": "2024-02-23T04:25:00",
                "durationInMinutes": 385,
                "flightNumber": "104",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13542-2402230630-2402230755--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "departure": "2024-02-23T06:30:00",
                "arrival": "2024-02-23T07:55:00",
                "durationInMinutes": 85,
                "flightNumber": "230",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "third_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.507807
      },
      {
        "id": "13542-2402201105--32753-1-12712-2402201940|12712-2402222110--32753-1-13542-2402231220",
        "price": {
          "raw": 529.03,
          "formatted": "$530"
        },
        "legs": [
          {
            "id": "13542-2402201105--32753-1-12712-2402201940",
            "origin": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "destination": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "durationInMinutes": 815,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-20T11:05:00",
            "arrival": "2024-02-20T19:40:00",
            "timeDeltaInDays": 0,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "13542-11154-2402201105-2402201230--32753",
                "origin": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-20T11:05:00",
                "arrival": "2024-02-20T12:30:00",
                "durationInMinutes": 85,
                "flightNumber": "233",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-12712-2402201640-2402201940--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "departure": "2024-02-20T16:40:00",
                "arrival": "2024-02-20T19:40:00",
                "durationInMinutes": 480,
                "flightNumber": "107",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          },
          {
            "id": "12712-2402222110--32753-1-13542-2402231220",
            "origin": {
              "id": "JFK",
              "name": "New York John F. Kennedy",
              "displayCode": "JFK",
              "city": "New York",
              "isHighlighted": false
            },
            "destination": {
              "id": "LGW",
              "name": "London Gatwick",
              "displayCode": "LGW",
              "city": "London",
              "isHighlighted": false
            },
            "durationInMinutes": 610,
            "stopCount": 1,
            "isSmallestStops": false,
            "departure": "2024-02-22T21:10:00",
            "arrival": "2024-02-23T12:20:00",
            "timeDeltaInDays": 1,
            "carriers": {
              "marketing": [
                {
                  "id": -32753,
                  "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
                  "name": "Aer Lingus"
                }
              ],
              "operationType": "fully_operated"
            },
            "segments": [
              {
                "id": "12712-11154-2402222110-2402230850--32753",
                "origin": {
                  "flightPlaceId": "JFK",
                  "displayCode": "JFK",
                  "parent": {
                    "flightPlaceId": "NYCA",
                    "displayCode": "NYC",
                    "name": "New York",
                    "type": "City"
                  },
                  "name": "New York John F. Kennedy",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "departure": "2024-02-22T21:10:00",
                "arrival": "2024-02-23T08:50:00",
                "durationInMinutes": 400,
                "flightNumber": "106",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              },
              {
                "id": "11154-13542-2402231055-2402231220--32753",
                "origin": {
                  "flightPlaceId": "DUB",
                  "displayCode": "DUB",
                  "parent": {
                    "flightPlaceId": "DUBL",
                    "displayCode": "DUB",
                    "name": "Dublin",
                    "type": "City"
                  },
                  "name": "Dublin",
                  "type": "Airport"
                },
                "destination": {
                  "flightPlaceId": "LGW",
                  "displayCode": "LGW",
                  "parent": {
                    "flightPlaceId": "LOND",
                    "displayCode": "LON",
                    "name": "London",
                    "type": "City"
                  },
                  "name": "London Gatwick",
                  "type": "Airport"
                },
                "departure": "2024-02-23T10:55:00",
                "arrival": "2024-02-23T12:20:00",
                "durationInMinutes": 85,
                "flightNumber": "236",
                "marketingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                },
                "operatingCarrier": {
                  "id": -32753,
                  "name": "Aer Lingus",
                  "alternateId": "EI",
                  "allianceId": 0
                }
              }
            ]
          }
        ],
        "isSelfTransfer": false,
        "isProtectedSelfTransfer": false,
        "farePolicy": {
          "isChangeAllowed": false,
          "isPartiallyChangeable": false,
          "isCancellationAllowed": false,
          "isPartiallyRefundable": false
        },
        "tags": [
          "third_cheapest"
        ],
        "isMashUp": false,
        "hasFlexibleOptions": false,
        "score": 0.502462
      }
    ],
    "messages": [],
    "filterStats": {
      "duration": {
        "min": 495,
        "max": 815
      },
      "airports": [
        {
          "city": "New York",
          "airports": [
            {
              "id": "JFK",
              "name": "New York John F. Kennedy"
            },
            {
              "id": "EWR",
              "name": "New York Newark"
            }
          ]
        },
        {
          "city": "London",
          "airports": [
            {
              "id": "LGW",
              "name": "London Gatwick"
            },
            {
              "id": "LHR",
              "name": "London Heathrow"
            }
          ]
        }
      ],
      "carriers": [
        {
          "id": -32753,
          "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/EI.png",
          "name": "Aer Lingus"
        },
        {
          "id": -30598,
          "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/I%29.png",
          "name": "Norse Atlantic Airways (UK)"
        }
      ],
      "stopPrices": {
        "direct": {
          "isPresent": true,
          "formattedPrice": "$420"
        },
        "one": {
          "isPresent": true,
          "formattedPrice": "$528"
        },
        "twoOrMore": {
          "isPresent": false
        }
      }
    }
  }
}