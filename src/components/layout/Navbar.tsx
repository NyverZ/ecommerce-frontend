"use client";

import { cn } from "@/lib/utils";
import {
  LogInIcon,
  MenuIcon,
  Search,
  ShoppingCart,
  UserRoundPlus,
} from "lucide-react";
import Link from "next/link";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Button } from "../ui/button";
import { FormEvent, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import { CommandInput, CommandDialog } from "../ui/command";

const NavigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/",
  },
  {
    label: "Orders",
    href: "/",
  },
  {
    label: "Admin",
    href: "/",
  },
];

const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="lg:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="px-4 grid grid-cols-1 gap-6">
          {NavigationItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}

          <Link href="/login">Sign In</Link>
          <Link href="/register">Sign Up</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

type SearcCommentDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SearcCommentDialog = ({
  onOpenChange,
  open,
}: SearcCommentDialogProps) => {
  const handleSeachSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <form onSubmit={handleSeachSubmit}>
        <CommandInput placeholder="Search products..." />
      </form>
    </CommandDialog>
  );
};

export const Navbar = () => {
  const [searchCommandDialogIsOpen, setSearchCommadDialogIsOpen] =
    useState(false);
  return (
    <nav
      className={cn(
        "bg-background/50 backdrop-blur-md ",
        " w-full border-b h-16 py-2 px-8",
        "sticky top-0 z-50",
        "flex items-center justify-between"
      )}
    >
      {/* left side */}
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <ShoppingCart className="text-primary" />
            <h1 className="text-xl font-bold">VerzShop</h1>
          </Link>
        </div>
        <div className=" font-medium gap-4 text-sm hidden lg:flex">
          {NavigationItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <InputGroup className="w-80 hidden lg:flex">
          <InputGroupAddon>
            <Search className="text-primary" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search product ..." />
        </InputGroup>

        <Button
          onClick={() => setSearchCommadDialogIsOpen(true)}
          size="icon"
          variant="ghost"
          className="lg:hidden"
        >
          <Search />
        </Button>

        <Button size="icon-sm" variant="ghost">
          <ShoppingCart />
        </Button>

        <NavigationSheet />

        <div className="items-center gap-2 justify-between hidden lg:flex">
          <Link href="/login">
            <Button variant="ghost">
              <LogInIcon />
              Sign In
            </Button>
          </Link>
          <Link href="/register">
            <Button>
              <UserRoundPlus />
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
      <SearcCommentDialog
        open={searchCommandDialogIsOpen}
        onOpenChange={setSearchCommadDialogIsOpen}
      />
    </nav>
  );
};
