import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Statistics from "./components/Statistics"
import ReportForm from "./components/ReportForm"
import ResourceCenter from "./components/ResourceCenter"
import CyberAwarenessQuiz from "./components/CyberAwarenessQuiz"
import ThreatMap from "./components/ThreatMap"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <Header />
      <main className="pt-16">
        {" "}
        {/* Add padding-top to account for sticky header */}
        <Hero />
        <Features />
        <Statistics />
        <ReportForm />
        <ResourceCenter />
        <CyberAwarenessQuiz />
        <ThreatMap />
      </main>
      <Footer />
    </div>
  )
}

