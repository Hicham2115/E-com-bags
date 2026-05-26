"use client";

import { useRef } from "react";

import { ProductCard } from "@/components/product-card";
import { useReveal } from "@/hooks/use-reveal";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export function Bestsellers({ products }) {
  const carouselRef = useRef(null);
  const { ref, visible } = useReveal();

  let isDown = false,
    startX = 0,
    startScroll = 0;

  function onMouseDown(e) {
    isDown = true;
    startX = e.pageX;
    startScroll = carouselRef.current?.scrollLeft ?? 0;
    if (carouselRef.current) carouselRef.current.style.cursor = "grabbing";
  }
  function onMouseUp() {
    isDown = false;
    if (carouselRef.current) carouselRef.current.style.cursor = "grab";
  }
  function onMouseMove(e) {
    if (!isDown || !carouselRef.current) return;
    e.preventDefault();
    carouselRef.current.scrollLeft = startScroll - (e.pageX - startX);
  }

  function scroll(dir) {
    const c = carouselRef.current;
    if (!c) return;
    const card = c.querySelector("article");
    const w = (card?.offsetWidth ?? 300) + 28;
    c.scrollBy({ left: dir * w, behavior: "smooth" });
  }

  const bestsellerItems = products.slice(0, 6);

  return (/*#__PURE__*/
    _jsx("section", { className: "overflow-hidden py-[clamp(80px,12vw,160px)]", children: /*#__PURE__*/
      _jsxs("div", { className: "max-w-360 mx-auto px-[clamp(20px,4vw,60px)]", children: [/*#__PURE__*/
        _jsxs("div", {
          ref: ref,
          className: `reveal flex justify-between items-end gap-10 mb-16 flex-wrap relative ${visible ? "is-visible" : ""}`, children: [/*#__PURE__*/

          _jsxs("h2", { className: "font-serif text-[clamp(44px,5.5vw,84px)] leading-[0.98]", children: ["Our ", /*#__PURE__*/
            _jsx("em", { className: "italic text-gold-deep", children: "bestsellers" })] }
          ), /*#__PURE__*/
          _jsx("div", { className: "text-[12px] tracking-[0.22em] text-oria-muted uppercase", children: "\u2014 Carried by 12,400 women" }

          ), /*#__PURE__*/


          _jsx("div", { className: "flex gap-2 absolute top-0 right-0", children:
            [-1, 1].map((dir) => /*#__PURE__*/
            _jsx("button", {

              onClick: () => scroll(dir),
              className: "w-13 h-13 rounded-full border border-line flex items-center justify-center transition-all duration-300 hover:bg-oria-text hover:border-oria-text hover:text-ivory",
              "aria-label": dir === -1 ? "Previous" : "Next", children: /*#__PURE__*/

              _jsx("svg", {
                viewBox: "0 0 24 24",
                className: "w-3.5 h-3.5",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5", children: /*#__PURE__*/

                _jsx("path", { d: dir === -1 ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6" }) }
              ) }, dir
            )
            ) }
          )] }
        ), /*#__PURE__*/

        _jsx("div", {
          ref: carouselRef,
          className: `flex gap-7 overflow-x-auto reveal pb-7.5 ${visible ? "is-visible" : ""}`,
          style: {
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            cursor: "grab"
          },
          onMouseDown: onMouseDown,
          onMouseUp: onMouseUp,
          onMouseLeave: onMouseUp,
          onMouseMove: onMouseMove, children:

          bestsellerItems.map((p) => /*#__PURE__*/
          _jsx("div", {

            className: "min-w-50",
            style: {
              scrollSnapAlign: "start",
              flex: "0 0 calc((100% - 56px) / 3)"
            }, children: /*#__PURE__*/

            _jsx(ProductCard, { product: p }) }, p.id
          )
          ) }
        )] }
      ) }
    ));

}