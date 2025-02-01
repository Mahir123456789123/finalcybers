// "use client";

// import { useState } from "react";

// const OSM_TILE_URL = "https://www.openstreetmap.org/export/embed.html";

// export default function ThreatMap() {
//   const [latitude, setLatitude] = useState("19.076"); // Mumbai, India
//   const [longitude, setLongitude] = useState("72.8777");
//   const [zoom, setZoom] = useState(10); // Default zoom level

//   // Function to generate OSM embed URL with centered marker
//   const getMapUrl = () => {
//     return `${OSM_TILE_URL}?bbox=${parseFloat(longitude) - 0.1},${
//       parseFloat(latitude) - 0.1
//     },${parseFloat(longitude) + 0.1},${parseFloat(latitude) + 0.1}&layer=mapnik&marker=${latitude},${longitude}`;
//   };

//   return (
//     <section className="py-20 bg-gray-900 text-white text-center">
//       <h2 className="text-4xl font-bold mb-6">Real-time Threat Map (OSM)</h2>

//       {/* Input Fields for Latitude & Longitude */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Latitude"
//           value={latitude}
//           onChange={(e) => setLatitude(e.target.value)}
//           className="px-4 py-2 mx-2 border border-gray-400 rounded text-black"
//         />
//         <input
//           type="text"
//           placeholder="Longitude"
//           value={longitude}
//           onChange={(e) => setLongitude(e.target.value)}
//           className="px-4 py-2 mx-2 border border-gray-400 rounded text-black"
//         />
//         <button
//           className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ml-2"
//           onClick={() => setZoom(zoom + 1)}
//         >
//           Zoom In
//         </button>
//       </div>

//       {/* OpenStreetMap Embed */}
//       <div className="flex justify-center">
//         <iframe
//           key={latitude + longitude} // Forces re-render when location updates
//           src={getMapUrl()}
//           width="800"
//           height="500"
//           className="border-2 border-gray-400 rounded shadow-lg"
//         ></iframe>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";

const OSM_TILE_URL = "https://www.openstreetmap.org/export/embed.html";

// List of locations for threat levels
const markers = [
  { name: "New Delhi", coordinates: [28.6139, 77.209] },
  { name: "Mumbai", coordinates: [19.076, 72.8777] },
  { name: "Bangalore", coordinates: [12.9716, 77.5946] },
  { name: "Chennai", coordinates: [13.0827, 80.2707] },
  { name: "Kolkata", coordinates: [22.5726, 88.3639] },
];

export default function ThreatMap() {
  const [latitude, setLatitude] = useState("19.076"); // Default: Mumbai, India
  const [longitude, setLongitude] = useState("72.8777");
  const [zoom, setZoom] = useState(10);
  const [threatLevel, setThreatLevel] = useState<{ [key: string]: number }>({});

  // Simulate real-time threat level updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newThreatLevel = markers.reduce((acc, marker) => {
        acc[marker.name] = Math.floor(Math.random() * 100);
        return acc;
      }, {} as { [key: string]: number });
      setThreatLevel(newThreatLevel);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Function to generate OSM embed URL with centered marker
  const getMapUrl = () => {
    return `${OSM_TILE_URL}?bbox=${parseFloat(longitude) - 0.1},${
      parseFloat(latitude) - 0.1
    },${parseFloat(longitude) + 0.1},${
      parseFloat(latitude) + 0.1
    }&layer=mapnik&marker=${latitude},${longitude}`;
  };

  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Real-time Threat Map (OSM)</h2>

      {/* Input Fields for Latitude & Longitude */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="px-4 py-2 mx-2 border border-gray-400 rounded text-black"
        />
        <input
          type="text"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="px-4 py-2 mx-2 border border-gray-400 rounded text-black"
        />
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ml-2"
          onClick={() => setZoom(zoom + 1)}
        >
          Zoom In
        </button>
      </div>

      {/* OpenStreetMap Embed */}
      <div className="flex justify-center">
        <iframe
          key={latitude + longitude} // Forces re-render when location updates
          src={getMapUrl()}
          width="800"
          height="500"
          className="border-2 border-gray-400 rounded shadow-lg"
        ></iframe>
      </div>

      {/* Threat Levels */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">City Threat Levels</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
          {markers.map(({ name }) => (
            <div
              key={name}
              className="p-4 rounded-lg text-white"
              style={{
                backgroundColor: `rgb(255, ${
                  255 - (threatLevel[name] || 0) * 2.55
                }, 0)`,
              }}
            >
              <p className="text-lg font-bold">{name}</p>
              <p>Threat Level: {threatLevel[name] || 0}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
