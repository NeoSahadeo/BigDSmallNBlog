"use client"

import Link from "next/link"
import { ThemeToggler } from "./theme-toggler"
import { Button } from "./ui/button"
import DnaLogo from "./dna-logo"

export default function Header() {
  return (
    <header className="flex p-5 gap-5 items-center justify-between">
      <Link href="/">
        <DnaLogo />
      </Link>

      <ThemeToggler />
    </header>
  )
}
