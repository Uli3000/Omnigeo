"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname: string = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string): boolean => {
    if (path === "/" && pathname === "/") return true;
    if (path === "/study/europe" && pathname.startsWith("/study/")) return true;
    if (path === "/quiz/europe" && pathname.startsWith("/quiz/")) return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/study/europe', label: t('nav.study') },
    { href: '/quiz/europe', label: t('nav.quiz') },
    { href: '/history', label: t('nav.history') },
  ] as const;

  return (
    <header className="relative w-full bg-linear-to-r from-[#0F172A] to-[#1E293B] border-b border-white/10 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),0_4px_6px_-2px_rgba(0,0,0,0.2)]">
      <div className="flex items-center px-8 py-5">
        
        <div className="font-bold text-white text-xl tracking-wide">
          OmniGeo
        </div>
        <div className="ml-auto flex items-center gap-2">
          {(['es', 'en'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                language === lang
                  ? 'text-white bg-white/10'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
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