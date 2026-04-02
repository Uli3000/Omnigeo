"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname: string = usePathname();

  const isActive = (path: string): boolean => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/study/europe", label: "Estudio" },
    { href: "/quiz/europe", label: "Quiz" },
    { href: "/history", label: "Historial" },
  ] as const;

  return (
    <header className="relative w-full bg-linear-to-r from-[#0F172A] to-[#1E293B] border-b border-white/10">
      <div className="flex items-center px-8 py-5">
        
        <div className="font-bold text-white text-xl tracking-wide">
          OmniGeo
        </div>

        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-10 text-sm font-medium">
            {navItems.map(({ href, label }) => (
              <li key={href} className="relative">
                <Link 
                  href={href} 
                  className={`${isActive(href) ? "text-blue-500" : "text-slate-400 hover:text-white"} transition`}
                >
                  {label}
                </Link>
                {isActive(href) && (
                  <span className="absolute left-0 -bottom-2 h-0.5 w-full bg-blue-500 rounded-full"></span>
                )}
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}