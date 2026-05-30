import { navItems, profile } from "../data/portfolio";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/88 backdrop-blur-xl transition-colors">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a href="#top" className="text-[1.38rem] font-semibold tracking-tight text-slate-950 sm:text-2xl">
          {profile.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block" />
      </nav>
    </header>
  );
}
