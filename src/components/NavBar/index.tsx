"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="flex h-24 w-full flex-row items-center justify-between border-[0.5px] border-b-slate-200 px-8 py-4 shadow-sm">
        <Link href="/" className="text-3xl font-extrabold">
          e-comm
        </Link>

        <div className="flex flex-row gap-x-2">
          <Input
            className="w-96 rounded-full"
            placeholder="Search for an item"
          />
          <Button size={"icon"} className="w-12 gap-x-2 rounded-full">
            <IconSearch className="transition-transform duration-300 group-hover:scale-[.9] " />
            {/* <span className="text-lg font-light">Search</span> */}
          </Button>
        </div>

        <div className="flex flex-row items-center gap-x-4">
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>

            <div>Docs</div>
            <Separator orientation="vertical" />

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
