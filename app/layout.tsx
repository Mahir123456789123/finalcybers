import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import Script from "next/script"; // Import next/script for script management

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CyberShield - Protecting India's Digital Frontier",
  description:
    "Report cybercrimes, access resources, and stay informed about online safety.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Chatbase Integration */}
        <Script
          id="chatbase-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="D6L6lpTeTVQGKcg2E3I2w";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
