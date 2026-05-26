import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Collections } from "@/components/home/collections";
import { Bestsellers } from "@/components/home/bestsellers";
import { BrandStory } from "@/components/home/brand-story";
import { SocialProof } from "@/components/home/social-proof";
import { UGCGrid } from "@/components/home/ugc-grid";
import { PromoSection } from "@/components/home/promo-section";
import { getProducts } from "@/lib/shopify";import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";

export default async function HomePage() {
  const products = await getProducts();

  return (/*#__PURE__*/
    _jsxs(_Fragment, { children: [/*#__PURE__*/
      _jsx(Navbar, {}), /*#__PURE__*/
      _jsxs("main", { children: [/*#__PURE__*/
        _jsx(Hero, {}), /*#__PURE__*/
        _jsxs("section", { id: "collections", children: [/*#__PURE__*/
          _jsx(Collections, {}), /*#__PURE__*/
          _jsx(Bestsellers, { products: products.slice(0, 6) })] }
        ), /*#__PURE__*/
        _jsx(Marquee, {}), /*#__PURE__*/
        _jsx(BrandStory, {}), /*#__PURE__*/
        _jsx("div", {
          style: {
            height: "1px",
            background:
            "linear-gradient(90deg, transparent, var(--gold), transparent)",
            margin: "0 clamp(20px,4vw,60px)"
          } }
        ), /*#__PURE__*/
        _jsx("section", { id: "social-proof", children: /*#__PURE__*/
          _jsx(SocialProof, {}) }
        ), /*#__PURE__*/
        _jsx("section", { id: "ugc", children: /*#__PURE__*/
          _jsx(UGCGrid, {}) }
        ), /*#__PURE__*/
        _jsx(PromoSection, {})] }
      ), /*#__PURE__*/
      _jsx(Footer, {})] }
    ));

}