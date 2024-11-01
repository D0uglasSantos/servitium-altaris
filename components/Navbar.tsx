"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../app/assets/images/logo-150x90.svg";

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Obtém o caminho atual

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Servidores", path: "/servidores" },
    { name: "Escala", path: "/escala" },
  ];

  return (
    <nav className="flex items-center justify-between p-6 bg-[#2e261e] text-white shadow-md">
      <div className="flex items-center space-x-4">
        <Image src={logo} alt="Servitium Altaris" width={120} height={72} />
      </div>
      <ul className="flex space-x-8 text-lg font-medium">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className={`${
                pathname === item.path
                  ? "text-bege border-b-2 border-bege "
                  : "text-white"
              } hover:text-gold-500 transition duration-200 ease-in-out`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
