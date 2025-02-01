"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleEmergencyClick = () => {
    alert("Emergency hotline: 112");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 shadow-lg z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">
              CyberShield
            </span>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#report">Report</NavLink>
            <NavLink href="#resources">Resources</NavLink>
            <NavLink href="#quiz">Quiz</NavLink>
          </div>
          <div className="hidden md:block">
            <Button onClick={handleEmergencyClick}>Emergency Hotline</Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <NavLink href="/" mobile>
              Home
            </NavLink>
            <NavLink href="#features" mobile>
              Features
            </NavLink>
            <NavLink href="#report" mobile>
              Report
            </NavLink>
            <NavLink href="#resources" mobile>
              Resources
            </NavLink>
            <NavLink href="#quiz" mobile>
              Quiz
            </NavLink>
            <div className="mt-4">
              <Button onClick={handleEmergencyClick} fullWidth>
                Emergency Hotline
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
  mobile = false,
}: {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}) {
  const baseClasses =
    "text-gray-300 hover:text-white transition-colors duration-300";
  const mobileClasses = "block py-2";
  const classes = mobile ? `${baseClasses} ${mobileClasses}` : baseClasses;

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
