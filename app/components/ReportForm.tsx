"use client";

import { useState } from "react";
import Button from "./Button";
import Card from "./Card";

export default function ReportForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    crimeType: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
  };

  return (
    <section id="report" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Report a Cybercrime
        </h2>
        <Card className="max-w-2xl mx-auto bg-gray-700">
          {isSubmitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Thank you for your report!
              </h3>
              <p className="text-gray-300 mb-4">
                We have received your information and will investigate promptly.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Submit Another Report
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="crimeType"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Type of Cybercrime
                </label>
                <select
                  id="crimeType"
                  name="crimeType"
                  value={formData.crimeType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select crime type</option>
                  <option value="phishing">Phishing</option>
                  <option value="identity_theft">Identity Theft</option>
                  <option value="hacking">Hacking</option>
                  <option value="online_fraud">Online Fraud</option>
                  <option value="cyberbullying">Cyberbullying</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Please describe the incident in detail"
                  required
                ></textarea>
              </div>
              <Button type="submit" variant="primary" fullWidth>
                Submit Report
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
