import * as React from "react"
import { cn } from "@/lib/utils"

export interface NavigationMenuProps extends React.HTMLAttributes<HTMLElement> {}
export interface NavigationMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {}
export interface NavigationMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
export interface NavigationMenuListProps extends React.HTMLAttributes<HTMLUListElement> {}

const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenuProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn("relative", className)}
      {...props}
    />
  )
)
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuList = React.forwardRef<HTMLUListElement, NavigationMenuListProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        "flex flex-1 list-none items-center justify-center space-x-1",
        className
      )}
      {...props}
    />
  )
)
NavigationMenuList.displayName = "NavigationMenuList"

const NavigationMenuItem = React.forwardRef<HTMLLIElement, NavigationMenuItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("relative", className)} {...props} />
  )
)
NavigationMenuItem.displayName = "NavigationMenuItem"

const NavigationMenuLink = React.forwardRef<HTMLAnchorElement, NavigationMenuLinkProps>(
  ({ className, style, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "block no-underline outline-none transition-colors",
        className
      )}
      style={{
        color: 'inherit',
        ...style
      }}
      {...props}
    />
  )
)
NavigationMenuLink.displayName = "NavigationMenuLink"

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} 