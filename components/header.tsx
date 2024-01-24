"use client"

import Link from "next/link"
import { ThemeToggler } from "./theme-toggler"
import { Button } from "./ui/button"

export default function Header() {
  return (
    <header className="flex p-5 gap-5 items-center">
      <p>Insert Logo</p>
      <Button variant="link" className="text-lg font-bold ml-auto" asChild>
        <Link href="/">Home</Link>
      </Button>
      <ThemeToggler />
    </header>
  )
}
