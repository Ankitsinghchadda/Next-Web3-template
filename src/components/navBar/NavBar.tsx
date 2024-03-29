"use client";
import React, { useEffect, useState } from "react";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ConnectButton from "../ConnectButton";
import { Button } from "@/components/ui/button"
// import {PackageIcon, ChevronRightIcon, HamburgerMenu} from "../icons"
import { Rocket, AlignJustify } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <div className="border-b border-gray-200 md:px-5 pr-2 flex items-center gap-5 justify-between">
          <div className="flex h-16 items-center cursor-pointer text-2xl font-bold">
            {/* TODO : Mobile nav */}
            <Link className="flex items-center" href="/">
              {" "}
              <Rocket />
              <span className="max-md:text-xl">NFTLauncpad</span>
            </Link>
          </div>
          <div className="font-semibold">
            <ul className="cursor-pointer md:flex md:gap-2 hidden">
              <li className="mr-5">
                <Link href="/">Home </Link>
              </li>
              <li className="mr-5">
                <Link href="/lanchpad">Launchpad</Link>
              </li>
              <li className="mr-5">
                <Link href="/generateNFT">Generate NFT</Link>
              </li>
            </ul>
          </div>
            <div>
          <ConnectButton className="hidden md:flex"/>
            </div>
            <div className="flex md:hidden">
        <Button size="icon" variant="outline">
          <AlignJustify className="" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
