"use client";

import { Book, Video, FileText, LinkIcon } from "lucide-react";
import Card from "./Card";
import Button from "./Button";
import Image from "next/image";

const resources = [
  {
    icon: Book,
    title: "Cybersecurity Handbook",
    description: "A comprehensive guide to protecting yourself online.",
    link: "#",
    image: "/cybersecurity-handbook.jpg",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Learn about cybersecurity through our video series.",
    link: "#",
    image: "/video-tutorials.jpg",
  },
  {
    icon: FileText,
    title: "Latest Threat Reports",
    description: "Stay informed about the latest cybersecurity threats.",
    link: "#",
    image: "/threat-reports.jpg",
  },
  {
    icon: LinkIcon,
    title: "Useful Links",
    description: "Curated list of cybersecurity resources and tools.",
    link: "#",
    image: "/useful-links.jpg",
  },
];

export default function ResourceCenter() {
  const handleResourceClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section id="resources" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Resource Center
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => handleResourceClick(resource.link)}
            >
              <div className="relative h-40 mb-4 rounded-t-lg overflow-hidden">
                <Image
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <resource.icon className="h-16 w-16 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-300 mb-4">{resource.description}</p>
              <Button
                variant="outline"
                fullWidth
                onClick={() => handleResourceClick(resource.link)}
              >
                Access Resource
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
