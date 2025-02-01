"use client";

import { useState } from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import Card from "./Card";

const monthlyData = [
  { name: "Jan", total: 167 },
  { name: "Feb", total: 190 },
  { name: "Mar", total: 210 },
  { name: "Apr", total: 252 },
  { name: "May", total: 265 },
  { name: "Jun", total: 280 },
];

const yearlyData = [
  { year: 2018, total: 2400 },
  { year: 2019, total: 2800 },
  { year: 2020, total: 3200 },
  { year: 2021, total: 3600 },
  { year: 2022, total: 4000 },
];

const crimeTypeData = [
  { name: "Phishing", value: 35 },
  { name: "Identity Theft", value: 25 },
  { name: "Ransomware", value: 20 },
  { name: "Data Breach", value: 15 },
  { name: "Other", value: 5 },
];

export default function Statistics() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = ["Monthly", "Yearly", "Crime Types"];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Cybercrime Statistics
        </h2>
        <div className="flex justify-center mb-8">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`px-4 py-2 mx-2 rounded-full ${
                activeIndex === index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <Card className="bg-gray-800 p-6">
          {activeIndex === 0 && (
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={monthlyData}>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Bar dataKey="total" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          )}
          {activeIndex === 1 && (
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={yearlyData}>
                <XAxis dataKey="year" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
          {activeIndex === 2 && (
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={crimeTypeData} layout="vertical">
                <XAxis type="number" stroke="#fff" />
                <YAxis dataKey="name" type="category" stroke="#fff" />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </Card>
      </div>
    </section>
  );
}
