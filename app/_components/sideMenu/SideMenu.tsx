"use client"
import clsx from "clsx"
import React, { useState } from "react"
import { MenuIcon, XIcon } from "../svgs"

const SideMenu = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="absolute mx-2 my-5 inline-flex items-center text-gray-500 hover:bg-gray-100 focus:outline-none lg:hidden"
      >
        <MenuIcon />
      </button>
      <aside
        className={clsx(
          "fixed left-0 top-0 z-40 h-full w-[265px] -translate-x-full rounded-lg bg-white p-6 transition-transform lg:relative lg:translate-x-0",
          { "translate-x-0": open },
          {
            "-translate-x-full": !open,
          }
        )}
      >
        <button className={clsx("absolute end-1 top-1 lg:hidden")} onClick={handleOpen}>
          <XIcon className="h-6 w-6" />
        </button>
        {/* menu content */}
        <div></div>
      </aside>
    </>
  )
}

export default SideMenu
