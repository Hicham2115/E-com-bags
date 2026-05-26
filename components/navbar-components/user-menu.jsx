import {
  BoltIcon,
  BookOpenIcon,
  Layers2Icon,
  LogOutIcon,
  PinIcon,
  UserPenIcon } from
"lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage } from
"@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger } from
"@/components/ui/dropdown-menu";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export default function UserMenu() {
  return (/*#__PURE__*/
    _jsxs(DropdownMenu, { children: [/*#__PURE__*/
      _jsx(DropdownMenuTrigger, { render: /*#__PURE__*/_jsx(Button, { className: "h-auto p-0 hover:bg-transparent", variant: "ghost" }), children: /*#__PURE__*/_jsxs(Avatar, { children: [/*#__PURE__*/
          _jsx(AvatarImage, { alt: "Profile image", src: "/origin/avatar.jpg" }), /*#__PURE__*/
          _jsx(AvatarFallback, { children: "KK" })] }
        ) }), /*#__PURE__*/
      _jsxs(DropdownMenuContent, { align: "end", className: "max-w-64", children: [/*#__PURE__*/
        _jsxs(DropdownMenuLabel, { className: "flex min-w-0 flex-col", children: [/*#__PURE__*/
          _jsx("span", { className: "truncate font-medium text-foreground text-sm", children: "Keith Kennedy" }

          ), /*#__PURE__*/
          _jsx("span", { className: "truncate font-normal text-muted-foreground text-xs", children: "k.kennedy@coss.com" }

          )] }
        ), /*#__PURE__*/
        _jsx(DropdownMenuSeparator, {}), /*#__PURE__*/
        _jsxs(DropdownMenuGroup, { children: [/*#__PURE__*/
          _jsxs(DropdownMenuItem, { children: [/*#__PURE__*/
            _jsx(BoltIcon, { "aria-hidden": "true", className: "opacity-60", size: 16 }), /*#__PURE__*/
            _jsx("span", { children: "Option 1" })] }
          ), /*#__PURE__*/
          _jsxs(DropdownMenuItem, { children: [/*#__PURE__*/
            _jsx(Layers2Icon, { "aria-hidden": "true", className: "opacity-60", size: 16 }), /*#__PURE__*/
            _jsx("span", { children: "Option 2" })] }
          ), /*#__PURE__*/
          _jsxs(DropdownMenuItem, { children: [/*#__PURE__*/
            _jsx(BookOpenIcon, { "aria-hidden": "true", className: "opacity-60", size: 16 }), /*#__PURE__*/
            _jsx("span", { children: "Option 3" })] }
          )] }
        ), /*#__PURE__*/
        _jsx(DropdownMenuSeparator, {}), /*#__PURE__*/
        _jsxs(DropdownMenuGroup, { children: [/*#__PURE__*/
          _jsxs(DropdownMenuItem, { children: [/*#__PURE__*/
            _jsx(PinIcon, { "aria-hidden": "true", className: "opacity-60", size: 16 }), /*#__PURE__*/
            _jsx("span", { children: "Option 4" })] }
          ), /*#__PURE__*/
          _jsxs(DropdownMenuItem, { children: [/*#__PURE__*/
            _jsx(UserPenIcon, { "aria-hidden": "true", className: "opacity-60", size: 16 }), /*#__PURE__*/
            _jsx("span", { children: "Option 5" })] }
          )] }
        ), /*#__PURE__*/
        _jsx(DropdownMenuSeparator, {}), /*#__PURE__*/
        _jsxs(DropdownMenuItem, { children: [/*#__PURE__*/
          _jsx(LogOutIcon, { "aria-hidden": "true", className: "opacity-60", size: 16 }), /*#__PURE__*/
          _jsx("span", { children: "Logout" })] }
        )] }
      )] }
    ));

}