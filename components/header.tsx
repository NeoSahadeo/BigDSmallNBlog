"use client"

import Link from "next/link"
import { ThemeToggler } from "./theme-toggler"
import { Button } from "./ui/button"
import Image from "next/image"
import dnaLogo from "@/public/dna_logo.svg"

export default function Header() {
  return (
    <header className="flex p-5 gap-5 items-center">
      {/* <p>Insert Logo</p> */}
      <Image
        src={dnaLogo}
        // width={300}
        // height={300}
        className="w-16 aspect-square"
        alt="dna-logo"
      />
      <Button variant="link" className="text-lg font-bold ml-auto" asChild>
        <Link href="/">Home</Link>
      </Button>
      <ThemeToggler />
    </header>
  )
}
