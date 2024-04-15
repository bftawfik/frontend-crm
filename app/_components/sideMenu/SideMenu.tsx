"use client"
import clsx from "clsx"
import React, { useState } from "react"
import { title } from "process"
import { sideMenuData } from "app/_mocks/sideMenuData"
import SideMenuSection from "../sideMenuSection/SideMenuSection"
import { Logo, MenuIcon, XIcon } from "../svgs"

const SideMenu = () => {
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string>("Dashboard")

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
          "fixed left-0 top-0 z-40 h-full w-[265px] -translate-x-full rounded-xl bg-white px-4 py-[22px] transition-transform lg:relative lg:translate-x-0",
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
        <div>
          <Logo className="mx-3 mb-8" />
          <SideMenuSection
            sectionList={sideMenuData.section1}
            activeItem={activeItem}
            handleActive={(title) => setActiveItem(title)}
          />
          <SideMenuSection
            sectionList={sideMenuData.section2}
            activeItem={activeItem}
            sectionTitle="Setting"
            handleActive={(title) => setActiveItem(title)}
          />
        </div>
      </aside>
    </>
  )
}

export default SideMenu
