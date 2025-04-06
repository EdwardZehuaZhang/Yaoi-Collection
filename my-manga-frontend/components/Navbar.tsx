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

export default function Navbar() {
  return (
    <header className="flex w-full items-center justify-between p-4 bg-background-dark-green font-figtree">
      <div className="w-full max-w-[1208px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="w-[47.45px] h-[54.81px]"
              alt="Collection Logo"
              src="/logo.svg"
            />
          </div>

          {/* Navigation Links */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-[27px]">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink 
                    className="!text-button-tetriary-reversed-normal font-medium text-body-300 tracking-[-0.056px] leading-[20px] hover:!text-button-tetriary-reversed-hover transition-colors p-0"
                    href={item.href}
                  >
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
              className="w-[188px] h-[40px] pl-4 pr-10 py-[10px] rounded-full border border-button-tetriary-reversed-normal bg-transparent !text-content-reversed placeholder:text-content-alpha-60 text-body-300 focus:outline-none focus:ring-0 focus:border-button-tetriary-reversed-normal focus:caret-content-reversed"
              placeholder="Search"
              style={{ color: 'white' }}
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[17px] h-[17px] text-content-reversed" />
          </div>

          {/* Login Button */}
          <Button className="bg-button-secondary-normal hover:bg-button-secondary-hover text-content-primary font-medium text-body-300 rounded-full px-[17px] py-[10px] transition-colors">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
} 