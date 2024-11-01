import Apresentation from "@/components/Apresentation";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import FunctionCards from "@/components/FunctionsCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center px-8 text-center">
        <Apresentation />
        <Button href="/servidores" text="Começe a Gerenciar" />
        <FunctionCards />
      </main>
      <Footer />
    </div>
  );
}
