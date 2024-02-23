"use client"; 

import {useRef} from "react";
import Link from "@/components/ui/link";

export default function Nav () {

  const ulRef = useRef<HTMLUListElement>(null)

  function toggleMenuMobile(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    ulRef.current?.classList.toggle('active');
  }


  return (
      <nav>
      <Link href="/" className="logo"/>
      <a href="#" onClick={toggleMenuMobile} className="menu-mobile"></a>

      <ul ref={ulRef}>
        <li onClick={toggleMenuMobile} className="close-menu-mobile">x</li>
        <li>
          <Link href="/#services">Services</Link>
        </li>
        <li>
          <Link href="/#portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/#blog">Blog</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
      </nav>
  )
}
