import { useEffect } from "react";
import Navbar from "../components/hilda/Navbar";
import HeroSection from "../components/hilda/HeroSection";
import AddContactModal from "../components/AddContactModal";

export default function MiguelPage() {
  useEffect(() => {
    document.title = "Miguel Hernandez";
  }, []);

  return (
    <div className="overflow-x-hidden">
      <AddContactModal
        contact={{
          name: "Miguel Hernandez",
          phone: "+57 313 8488257",
        }}
        storageKey="hasSeenContactModal_Miguel"
      />
      <Navbar />
      <div className="bg-white">
        <div className="bg-gradient-to-br from-[#9b6cf8] to-[#b89dfa] rounded-b-[80px] md:rounded-b-[6%]">
          <HeroSection />
        </div>
      </div>
    </div>
  );
}
