"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./cart-context";
import { CartDrawer } from "./cart-drawer";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList } from
"@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger } from
"@/components/ui/popover";import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";

const links = [
{ label: "Collections", href: "/products" },
{ label: "New Arrivals", href: "/#collections" },
{ label: "About", href: "/#ugc" },
{ label: "Our Story", href: "/#social-proof" }];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { count, open, setOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (/*#__PURE__*/
    _jsxs(_Fragment, { children: [/*#__PURE__*/
      _jsx("header", {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[rgba(250,247,244,0.92)] backdrop-blur-[20px] saturate-150 border-b border-black/[0.06]",
        style: { padding: scrolled ? "10px clamp(20px,4vw,60px)" : "18px clamp(20px,4vw,60px)" }, children: /*#__PURE__*/

        _jsxs("div", { className: "flex items-center justify-between gap-4", children: [/*#__PURE__*/


          _jsx(NavigationMenu, { className: "max-md:hidden", children: /*#__PURE__*/
            _jsx(NavigationMenuList, { className: "gap-1", children:
              links.slice(0, 2).map((link) => /*#__PURE__*/
              _jsx(NavigationMenuItem, { children: /*#__PURE__*/
                _jsx(NavigationMenuLink, {
                  active: pathname === link.href,
                  className: "flex-row items-center gap-2 py-1.5 text-[11px] tracking-[0.22em] uppercase font-medium text-oria-text",
                  href: link.href, children:

                  link.label }
                ) }, link.label
              )
              ) }
            ) }
          ), /*#__PURE__*/


          _jsxs(Popover, { children: [/*#__PURE__*/
            _jsx(PopoverTrigger, { asChild: true, children: /*#__PURE__*/
              _jsx(Button, { className: "group size-8 md:hidden", size: "icon", variant: "ghost", children: /*#__PURE__*/
                _jsxs("svg", { className: "pointer-events-none", fill: "none", height: 16, stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", width: 16, children: [/*#__PURE__*/
                  _jsx("path", { className: "-translate-y-1.75 origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315", d: "M4 12L20 12" }), /*#__PURE__*/
                  _jsx("path", { className: "origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45", d: "M4 12H20" }), /*#__PURE__*/
                  _jsx("path", { className: "origin-center translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135", d: "M4 12H20" })] }
                ) }
              ) }
            ), /*#__PURE__*/
            _jsx(PopoverContent, { align: "start", className: "w-48 p-2 md:hidden", children: /*#__PURE__*/
              _jsx(NavigationMenu, { className: "max-w-none *:w-full", children: /*#__PURE__*/
                _jsx(NavigationMenuList, { className: "flex-col items-start gap-0", children:
                  links.map((link) => /*#__PURE__*/
                  _jsx(NavigationMenuItem, { className: "w-full", children: /*#__PURE__*/
                    _jsx(NavigationMenuLink, {
                      active: pathname === link.href,
                      className: "py-2 text-[11px] tracking-[0.22em] uppercase font-medium text-oria-text",
                      href: link.href, children:

                      link.label }
                    ) }, link.label
                  )
                  ) }
                ) }
              ) }
            )] }
          ), /*#__PURE__*/


          _jsxs(Link, {
            href: "/",
            className: "absolute left-1/2 -translate-x-1/2 text-center font-serif text-[22px] tracking-[0.22em] font-medium text-oria-text", children: [
            "MAISON ORIA", /*#__PURE__*/

            _jsx("small", { className: "block text-[9px] tracking-[0.5em] uppercase mt-0.5 font-sans text-oria-muted", children: "Est. 2019 \xB7 Paris" }

            )] }
          ), /*#__PURE__*/


          _jsxs("div", { className: "flex items-center gap-4 ml-auto", children: [/*#__PURE__*/
            _jsx(NavigationMenu, { className: "max-md:hidden", children: /*#__PURE__*/
              _jsx(NavigationMenuList, { className: "gap-1", children:
                links.slice(2).map((link) => /*#__PURE__*/
                _jsx(NavigationMenuItem, { children: /*#__PURE__*/
                  _jsx(NavigationMenuLink, {
                    active: pathname === link.href,
                    className: "flex-row items-center py-1.5 text-[11px] tracking-[0.22em] uppercase font-medium text-oria-text",
                    href: link.href, children:

                    link.label }
                  ) }, link.label
                )
                ) }
              ) }
            ), /*#__PURE__*/


            _jsx("button", {
              className: "w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors",
              "aria-label": "Search", children: /*#__PURE__*/

              _jsxs("svg", { viewBox: "0 0 24 24", className: "w-4.25 h-4.25", fill: "none", stroke: "currentColor", strokeWidth: "1.4", children: [/*#__PURE__*/
                _jsx("circle", { cx: "11", cy: "11", r: "7" }), /*#__PURE__*/_jsx("path", { d: "m20 20-3.5-3.5" })] }
              ) }
            ), /*#__PURE__*/


            _jsxs("button", {
              className: "w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors relative",
              "aria-label": "Cart",
              onClick: () => setOpen(true), children: [/*#__PURE__*/

              _jsxs("svg", { viewBox: "0 0 24 24", className: "w-4.25 h-4.25", fill: "none", stroke: "currentColor", strokeWidth: "1.4", children: [/*#__PURE__*/
                _jsx("path", { d: "M6 7h12l-1.2 12.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 7Z" }), /*#__PURE__*/
                _jsx("path", { d: "M9 7V5a3 3 0 0 1 6 0v2" })] }
              ),
              count > 0 && /*#__PURE__*/
              _jsx("span", { className: "absolute top-0.5 right-0.5 bg-gold text-oria-text text-[9px] font-semibold min-w-3.75 h-3.75 rounded-full flex items-center justify-center px-1", children:
                count }
              )] }

            )] }
          )] }
        ) }
      ), /*#__PURE__*/

      _jsx(CartDrawer, { open: open, onClose: () => setOpen(false) })] }
    ));

}