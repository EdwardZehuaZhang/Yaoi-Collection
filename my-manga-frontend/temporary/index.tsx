import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";
import React from "react";

// Navigation items data
const navItems = [
  { label: "Tags", href: "#" },
  { label: "Artists", href: "#" },
  { label: "Characters", href: "#" },
  { label: "Groups", href: "#" },
];

export default function Frame() {
  return (
    <header className="flex w-full items-center justify-between">
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-[22px] h-[26px]" alt="Logo" src="" />
        </div>

        {/* Navigation Links */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-[27px]">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="text-contentreversed font-medium text-[13.5px] tracking-[-0.05px] leading-[20px] hover:text-buttontetriary-reversedhover transition-colors">
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-3">
        {/* Search Bar */}
        <div className="relative">
          <Input
            className="w-[188px] h-[40px] pl-4 pr-10 py-[10px] rounded-full border border-buttontetriary-reversednormal bg-transparent text-contentreversed placeholder:text-contentreversed"
            placeholder="Search"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[17px] h-[17px] text-contentreversed" />
        </div>

        {/* Login Button */}
        <Button className="bg-buttonsecondarynormal hover:bg-buttonsecondaryhover text-contentprimary font-medium text-[13.7px] rounded-full px-[17px] py-[10px]">
          Login
        </Button>
      </div>
    </header>
  );
}