"use client";

import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import Card from "./Card";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
  { name: "New Delhi", coordinates: [77.209, 28.6139] },
  { name: "Mumbai", coordinates: [72.8777, 19.076] },
  { name: "Bangalore", coordinates: [77.5946, 12.9716] },
  { name: "Chennai", coordinates: [80.2707, 13.0827] },
  { name: "Kolkata", coordinates: [88.3639, 22.5726] },
];

export default function ThreatMap() {
  const [threatLevel, setThreatLevel] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Simulate real-time threat level updates
    const interval = setInterval(() => {
      const newThreatLevel = markers.reduce((acc, marker) => {
        acc[marker.name] = Math.floor(Math.random() * 100);
        return acc;
      }, {} as { [key: string]: number });
      setThreatLevel(newThreatLevel);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Real-time Threat Map
        </h2>
        <Card className="bg-gray-800 p-6">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 350 }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#2C3E50"
                    stroke="#EAEAEC"
                    strokeWidth={0.5}
                  />
                ))
              }
            </Geographies>

            {markers.map(({ name, coordinates }) => (
              <Marker key={name} coordinates={coordinates as [number, number]}>
                <circle
                  r={8}
                  fill={`rgb(255, ${255 - (threatLevel[name] || 0) * 2.55}, 0)`}
                />
                <text
                  textAnchor="middle"
                  y={-15}
                  style={{
                    fontFamily: "system-ui",
                    fill: "#FFFFFF",
                    fontSize: "8px",
                  }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </Card>
      </div>
    </section>
  );
}
