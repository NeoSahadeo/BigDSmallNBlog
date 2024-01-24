"use client"
import Link from "next/link"
import { Github, Instagram } from "lucide-react"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

const socialsToDisplay = [
  {
    person: "Damian",
    socials: [
      {
        name: "Github",
        url: "https://github.com/ST10019838",
        icon: <Github strokeWidth={2} size={24} />,
      },
    ],
  },
  {
    person: "Neo",
    socials: [
      {
        name: "Github",
        url: "https://github.com/neosahadeo",
        icon: <Github strokeWidth={2} size={24} />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/neosahadeo/",
        icon: <Instagram strokeWidth={2} size={24} />,
      },
    ],
  },
]

export default function Footer() {
  return (
    <footer className={`border-t-2 p-5 flex flex-row gap-5 justify-between`}>
      <div className="flex items-center gap-5">
        {socialsToDisplay.map((item) => (
          <>
            <div
              key={item.person}
              className="flex items-center justify-center gap-5"
            >
              <span className="text-lg">{`${item.person}:`}</span>

              <div className="flex items-center">
                {item.socials.map((social) => (
                  <Button
                    variant="ghost"
                    key={social.name + social.url}
                    className="p-3"
                    asChild
                  >
                    <Link href={social.url}>{social.icon}</Link>
                  </Button>
                ))}
              </div>
            </div>
            <Separator orientation="vertical" className="h-7" />
          </>
        ))}
      </div>
      <div className="font-bold flex items-center">
        To C or not to C, that is the question!
      </div>
    </footer>
  )
}
