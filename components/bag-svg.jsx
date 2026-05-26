import { colorMap } from "@/lib/products";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export function BagSVG({ color, alt = false, className }) {
  const id = `g_${color}${alt ? "_alt" : ""}`;
  const [light, dark] = colorMap[color] ?? colorMap.camel;

  if (alt) {
    return (/*#__PURE__*/
      _jsx("div", {
        className: `absolute inset-0 flex items-center justify-center ${className ?? ""}`,
        style: { background: `linear-gradient(200deg, ${dark}22, ${light}22)` }, children: /*#__PURE__*/

        _jsxs("svg", {
          viewBox: "0 0 400 500",
          preserveAspectRatio: "xMidYMid meet",
          className: "w-[60%] h-auto",
          style: { filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.15))", transform: "rotate(6deg)" }, children: [/*#__PURE__*/

          _jsx("defs", { children: /*#__PURE__*/
            _jsxs("linearGradient", { id: id, x1: "0", y1: "0", x2: "1", y2: "1", children: [/*#__PURE__*/
              _jsx("stop", { offset: "0%", stopColor: dark }), /*#__PURE__*/
              _jsx("stop", { offset: "100%", stopColor: light })] }
            ) }
          ), /*#__PURE__*/
          _jsx("path", { d: "M80 200 Q80 145 135 145 L265 145 Q320 145 320 200 L320 410 Q320 445 285 445 L115 445 Q80 445 80 410 Z", fill: `url(#${id})` }), /*#__PURE__*/
          _jsx("path", { d: "M150 145 Q150 75 200 75 Q250 75 250 145", stroke: light, strokeWidth: "9", fill: "none", strokeLinecap: "round" }), /*#__PURE__*/
          _jsx("rect", { x: "183", y: "195", width: "34", height: "14", rx: "2", fill: "#E8D5B0", opacity: "0.7" })] }
        ) }
      ));

  }

  return (/*#__PURE__*/
    _jsx("div", {
      className: `absolute inset-0 flex items-center justify-center ${className ?? ""}`,
      style: { background: `linear-gradient(160deg, ${light}22, ${dark}33)` }, children: /*#__PURE__*/

      _jsxs("svg", {
        viewBox: "0 0 400 500",
        preserveAspectRatio: "xMidYMid meet",
        className: "w-[60%] h-auto",
        style: { filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.15))" }, children: [/*#__PURE__*/

        _jsx("defs", { children: /*#__PURE__*/
          _jsxs("linearGradient", { id: id, x1: "0", y1: "0", x2: "1", y2: "1", children: [/*#__PURE__*/
            _jsx("stop", { offset: "0%", stopColor: light }), /*#__PURE__*/
            _jsx("stop", { offset: "100%", stopColor: dark })] }
          ) }
        ), /*#__PURE__*/
        _jsx("path", { d: "M80 200 Q80 145 135 145 L265 145 Q320 145 320 200 L320 410 Q320 445 285 445 L115 445 Q80 445 80 410 Z", fill: `url(#${id})` }), /*#__PURE__*/
        _jsx("path", { d: "M150 145 Q150 75 200 75 Q250 75 250 145", stroke: dark, strokeWidth: "9", fill: "none", strokeLinecap: "round" }), /*#__PURE__*/
        _jsx("rect", { x: "183", y: "195", width: "34", height: "14", rx: "2", fill: "#E8D5B0", opacity: "0.85" }), /*#__PURE__*/
        _jsx("line", { x1: "80", y1: "280", x2: "320", y2: "280", stroke: dark, strokeOpacity: "0.25", strokeWidth: "1" })] }
      ) }
    ));

}