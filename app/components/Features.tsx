"use client";

import { Shield, FileText, Phone, Users, Lock, Zap } from "lucide-react";
import Card from "./Card";
import Image from "next/image";
import InteractiveGrid from "./animata/bento-grid/interactive-grid";


const features = [
  {
    icon: Shield,
    title: "Secure Reporting",
    description:
      "Report cybercrimes securely and anonymously through our encrypted platform.",
      image:"./Assets/shield-plus"
  },
  {
    icon: FileText,
    title: "Resource Center",
    description:
      "Access a wealth of information on cybersecurity best practices and current threats.",
    image: "/resource-center.jpg",
  },
  {
    icon: Phone,
    title: "24/7 Helpline",
    description:
      "Get immediate assistance from our team of cybersecurity experts any time, day or night.",
    image: "/helpline.jpg",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Connect with others who have experienced cybercrime and share your story.",
     image: "/community-support.jpg",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description:
      "Learn about the latest data protection measures and how to safeguard your personal information.",
    image: "/data-protection.jpg",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description:
      "Our team of experts is ready to respond quickly to emerging cyber threats and incidents.",
    image: "/rapid-response.jpg",
  },
];

export default function Features() {
  return (
    <InteractiveGrid>
    <section id="features" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-700 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-40 mb-4 rounded-t-lg overflow-hidden">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <feature.icon className="h-16 w-16 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </InteractiveGrid>
  );
}
