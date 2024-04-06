export const geoFeatures = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Andhra Pradesh",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [80.058, 13.592],
            [80.33, 13.585],
            [80.33, 13.327],
            [80.058, 13.327],
            [80.058, 13.592],
          ],
        ],
      },
      id: "AP",
    },
    {
      type: "Feature",
      properties: {
        name: "Maharashtra",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [73.050, 20.42],
            [73.50, 20.42],
            [73.50, 19.70],
            [73.050, 19.70],
            [73.050, 20.42],
          ],
        ],
      },
      id: "MH",
    },
    {
      type: "Feature",
      properties: {
        name: "Karnataka",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [74.18, 16.76],
            [76.20, 16.76],
            [76.20, 14.80],
            [74.18, 14.80],
            [74.18, 16.76],
          ],
        ],
      },
      id: "KA",
    },
    {
      type: "Feature",
      properties: {
        name: "Tamil Nadu",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.837, 13.083],
            [78.656, 13.083],
            [78.656, 11.600],
            [77.837, 11.600],
            [77.837, 13.083],
          ],
        ],
      },
      id: "TN",
    },
    {
      type: "Feature",
      properties: {
        name: "Rajasthan",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [69.30, 29.95],
            [77.84, 29.95],
            [77.84, 23.63],
            [69.30, 23.63],
            [69.30, 29.95],
          ],
        ],
      },
      id: "RJ",
    },
    // Add more features for other states
  ],
};
