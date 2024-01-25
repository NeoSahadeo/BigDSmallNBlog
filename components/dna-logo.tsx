import Image from "next/image"
import dnaLogo from "@/public/dna_logo.svg"

export default function DnaLogo() {
  return (
    <Image
      src={dnaLogo}
      // width={300}
      // height={300}
      className="w-16 aspect-square"
      alt="dna-logo"
    />
  )
}
