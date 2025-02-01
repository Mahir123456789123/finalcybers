"use client";
import React, { useState } from "react";

// Suspicious keywords and patterns
const suspiciousPatterns = [
  /free/i,
  /discount/i,
  /offer/i,
  /click.*here/i,
  /bit\.ly|goo\.gl/i,
  /prize/i,
  /win/i,
  /money/i,
  /claim/i,
];

// Function to check if a URL is suspicious
const isSuspiciousURL = (url: string) => {
  return suspiciousPatterns.some((pattern) => pattern.test(url));
};

// Simulated API call for URL verification (mock)
const mockCheckURL = async (url: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isSuspicious = isSuspiciousURL(url);
      resolve(isSuspicious ? "Suspicious" : "Safe");
    }, 1000);
  });
};

const SuspiciousURLChecker = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckURL = async () => {
    if (!url.trim()) {
      setResult("Please enter a URL.");
      return;
    }

    setLoading(true);
    const checkResult = await mockCheckURL(url);
    setResult(
      checkResult === "Suspicious"
        ? "⚠ This URL is suspicious!"
        : "✅ This URL seems safe."
    );
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Check Suspicious URL</h2>
      <input
        className="urltext"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        style={{
          padding: "10px",
          margin: "10px 0",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          color: "black", // Set text color to black
        }}
      />
      <br />
      <button
        onClick={handleCheckURL}
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
        disabled={loading}
      >
        {loading ? "Checking..." : "Check URL"}
      </button>
      <div
        style={{
          marginTop: "20px",
          fontSize: "16px",
          color: result.includes("⚠") ? "red" : "green",
        }}
      >
        {result}
      </div>
    </div>
  );
};

export default SuspiciousURLChecker;
