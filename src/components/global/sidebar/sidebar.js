"use client";

import Link from "next/link";
import { invoke } from "@tauri-apps/api/core"

let navLinks = [
  { title: "Home", path: "/" },
  { title: "Categories", path: "/categories" },
  { title: "Transactions", path: "/transactions" },
]

const printFromRust = () => {
  invoke("greet").then((response) => {
    console.log(response)
  })
}

const Sidebar = () => {
  return (
    <div className="bg-blue-500">
      <nav>
        <ul className="flex flex-col h-screen gap-6">
          {navLinks.map((link, index) => (
            <li
              className="text-lg"
              key={index}
              onClick={() => printFromRust()}
            >
              <Link href={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
