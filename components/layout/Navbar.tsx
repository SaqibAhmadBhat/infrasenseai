"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navGroups = [
  {
    label: "Platform",
    items: [
      { name: "Solution",         href: "/solution",         desc: "How the workflow changes" },
      { name: "Road Intelligence", href: "/road-intelligence", desc: "The intelligence interface" },
      { name: "Technology",       href: "/technology",        desc: "How the system works" },
    ],
  },
  {
    label: "Impact",
    items: [
      { name: "Climate Impact",   href: "/climate-impact",   desc: "Why earlier intelligence matters" },
      { name: "Research",         href: "/research",          desc: "The technical depth" },
      { name: "Innovation",       href: "/innovation",        desc: "What is being explored" },
    ],
  },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 backdrop-blur-xl bg-background/80 py-0"
          : "py-2"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group mr-10 shrink-0">
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Teal glyph */}
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
              <rect width="32" height="32" rx="6" fill="rgba(20,184,166,0.12)" />
              <path d="M8 22 L16 10 L24 22" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M11 18 L21 18" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>
          <span className="font-semibold text-[15px] tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
            InfraSense<span className="text-accent">.</span>AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1">
          {navGroups.map((group) =>
            group.href ? (
              <Link
                key={group.label}
                href={group.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-150",
                  pathname === group.href
                    ? "text-accent bg-accent/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                {group.label}
              </Link>
            ) : (
              <div key={group.label} className="relative">
                <button
                  className={cn(
                    "flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-150",
                    group.items?.some(i => pathname === i.href)
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  )}
                  onMouseEnter={() => setOpenDropdown(group.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}
                >
                  {group.label}
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", openDropdown === group.label ? "rotate-180" : "")} />
                </button>

                {/* Dropdown */}
                {openDropdown === group.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-52 bg-background-2 border border-border rounded-xl shadow-2xl shadow-black/50 py-1.5 overflow-hidden"
                    onMouseEnter={() => setOpenDropdown(group.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {group.items?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 transition-colors duration-100 group",
                          pathname === item.href
                            ? "bg-accent/10"
                            : "hover:bg-muted/60"
                        )}
                      >
                        <div className={cn("text-sm font-medium mb-0.5 transition-colors", pathname === item.href ? "text-accent" : "text-foreground group-hover:text-accent")}>
                          {item.name}
                        </div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          {/* Prototype badge */}
          <div className="telemetry-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            PROTOTYPE
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors duration-200 shadow-sm"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-auto p-2 text-foreground rounded-lg hover:bg-muted/60 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navGroups.map((group) =>
              group.href ? (
                <Link
                  key={group.label}
                  href={group.href}
                  className="px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-muted/60 transition-colors"
                >
                  {group.label}
                </Link>
              ) : (
                <div key={group.label}>
                  <div className="px-4 pt-3 pb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {group.label}
                  </div>
                  {group.items?.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/60 transition-colors ml-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-border-bright" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )
            )}
            <div className="border-t border-border mt-3 pt-3">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 bg-accent text-accent-foreground rounded-lg text-sm font-semibold"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
