"use client";

import { Popover as PopoverPrimitive } from "radix-ui";


import { cn } from "@/lib/utils";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

function Popover({
  ...props
}) {
  return /*#__PURE__*/_jsx(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}

function PopoverTrigger({
  ...props
}) {
  return /*#__PURE__*/_jsx(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  showArrow = false,
  ...props


}) {
  return (/*#__PURE__*/
    _jsx(PopoverPrimitive.Portal, { children: /*#__PURE__*/
      _jsxs(PopoverPrimitive.Content, {
        align: align,
        className: cn(
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in",
          className
        ),
        "data-slot": "popover-content",
        sideOffset: sideOffset, ...
        props, children: [

        props.children,
        showArrow && /*#__PURE__*/
        _jsx(PopoverPrimitive.Arrow, { className: "-my-px fill-popover drop-shadow-[0_1px_0_var(--border)]" })] }

      ) }
    ));

}

function PopoverAnchor({
  ...props
}) {
  return /*#__PURE__*/_jsx(PopoverPrimitive.Anchor, { "data-slot": "popover-anchor", ...props });
}

export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };