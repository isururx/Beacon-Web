"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Sports", href: "/sports" },
  { name: "Articles", href: "/articles" },
  { name: "History", href: "/history" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="relative border-b border-white/[0.08] bg-[#071A33]/95 text-white backdrop-blur-xl">
        {/* Subtle top glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8 lg:px-12">
          {/* =====================================================
              BRAND
          ===================================================== */}

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group flex flex-col leading-none"
          >
            <span className="text-[13px] font-semibold tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-blue-200 md:text-sm">
              COLOMBO
            </span>

            <span className="mt-1 text-[9px] font-medium tracking-[0.42em] text-blue-300/70 transition-colors duration-300 group-hover:text-blue-300">
              BEACON
            </span>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <div className="hidden h-full items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative flex h-full items-center px-4"
                >
                  <motion.span
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                    className={`
                      relative z-10 text-[12px] font-medium
                      transition-colors duration-300
                      ${
                        isActive
                          ? "text-blue-200"
                          : "text-white/50 hover:text-white"
                      }
                    `}
                  >
                    {item.name}
                  </motion.span>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="
                        absolute
                        bottom-0
                        left-3
                        right-3
                        h-[2px]
                        rounded-full
                        bg-blue-400
                        shadow-[0_0_12px_rgba(96,165,250,0.7)]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            className="
              flex h-9 w-9
              items-center justify-center
              border border-white/10
              bg-white/[0.03]
              text-white/80
              transition
              hover:border-blue-400/30
              hover:bg-blue-400/[0.06]
              md:hidden
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm"
                >
                  ✕
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm"
                >
                  ☰
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ===================================================== */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden border-t border-white/[0.07] md:hidden"
            >
              <div className="mx-auto max-w-7xl px-5 py-4">
                <div className="flex flex-col">
                  {navItems.map((item, index) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <motion.div
                        key={item.href}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.25,
                          delay: index * 0.05,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`
                            group
                            flex items-center justify-between
                            border-b border-white/[0.05]
                            px-1 py-4
                            transition-colors duration-300
                            ${
                              isActive
                                ? "text-blue-200"
                                : "text-white/55 hover:text-white"
                            }
                          `}
                        >
                          <span className="text-sm font-medium">
                            {item.name}
                          </span>

                          <motion.span
                            animate={{
                              x: isActive ? 0 : -4,
                              opacity: isActive ? 1 : 0,
                            }}
                            className="text-blue-300"
                          >
                            →
                          </motion.span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}