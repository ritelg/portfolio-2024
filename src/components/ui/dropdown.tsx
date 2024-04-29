"use client";

type Props = {
  btn: React.ReactNode,
  children: React.ReactNode
}

export default function Dropdown({ btn, children } : Props) {
  return (
    <div className="dropdown">
      <div className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
        {btn}
      </div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {children}
      </div>
    </div>
  )
}
