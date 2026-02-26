"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useMenu } from "@/hooks/useMenu"



const Menu = () => {
  const container = useRef();
  const { toggle, isMenuOpen } = useMenu();

  return (
    <div ref={container}>
        <div>
            <div>
                <Link href={"/"}>SSH</Link>
            </div>
            <div>Menu</div>
        </div>
    </div>
  )
}

export default Menu