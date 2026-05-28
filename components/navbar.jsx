"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./cart-context";
import { CartDrawer } from "./cart-drawer";
import { WishlistDrawer } from "./wishlist-drawer";
import { useWishlist } from "@/store/wishlist";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const links = [
  { label: "Collections", href: "/products" },
  { label: "New Arrivals", href: "/#collections" },
  { label: "About", href: "/#about" },
  { label: "Our Story", href: "/#our-story" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { count, open, setOpen } = useCart();
  const { items: wishlistItems, setOpen: setWishlistOpen } = useWishlist();
  const wishlistCount = wishlistItems.length;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[rgb(249,248,247)] backdrop-blur-[20px] saturate-150 border-b border-black/[0.06]"
        style={{
          padding: scrolled
            ? "10px clamp(20px,4vw,60px)"
            : "18px clamp(20px,4vw,60px)",
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-1">
              {links.slice(0, 2).map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    active={pathname === link.href}
                    className="flex-row items-center gap-2 py-1.5 text-[11px] tracking-[0.22em] uppercase font-medium text-oria-text"
                    href={link.href}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                size="icon"
                variant="ghost"
              >
                <svg
                  className="pointer-events-none"
                  fill="none"
                  height={16}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width={16}
                >
                  <path
                    className="-translate-y-1.75 origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
                    d="M4 12L20 12"
                  />
                  <path
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    d="M4 12H20"
                  />
                  <path
                    className="origin-center translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
                    d="M4 12H20"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-48 p-2 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0">
                  {links.map((link) => (
                    <NavigationMenuItem key={link.label} className="w-full">
                      <NavigationMenuLink
                        active={pathname === link.href}
                        className="py-2 text-[11px] tracking-[0.22em] uppercase font-medium text-oria-text"
                        href={link.href}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-center font-serif text-[22px] tracking-[0.22em] font-medium text-oria-text"
          >
            MAISON ORIA
            <small className="block text-[9px] tracking-[0.5em] uppercase mt-0.5 font-sans text-oria-muted">
              Est. 2019 · Paris
            </small>
          </Link>

          <div className="flex items-center gap-4 ml-auto">
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-1">
                {links.slice(2).map((link) => (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink
                      active={pathname === link.href}
                      className="flex-row items-center py-1.5 text-[11px] tracking-[0.22em] uppercase font-medium text-oria-text"
                      href={link.href}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <button
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors relative"
              aria-label="Wishlist"
              onClick={() => setWishlistOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4.25 h-4.25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                style={wishlistCount > 0 ? { stroke: "var(--gold)", fill: "var(--gold)" } : undefined}
              >
                <path d="M12 21s-7-4.5-9-9.5C1.5 7 5 4 8 4c2 0 3 1 4 2 1-1 2-2 4-2 3 0 6.5 3 5 7.5-2 5-9 9.5-9 9.5z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-gold text-oria-text text-[9px] font-semibold min-w-3.75 h-3.75 rounded-full flex items-center justify-center px-1">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors relative"
              aria-label="Cart"
              onClick={() => setOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4.25 h-4.25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {count > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-gold text-oria-text text-[9px] font-semibold min-w-3.75 h-3.75 rounded-full flex items-center justify-center px-1">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
      <WishlistDrawer />
    </>
  );
}
