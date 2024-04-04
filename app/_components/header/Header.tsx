import Image from "next/image"
import React from "react"
import profilePic from "../../../userImage.png"
import Alert from "../svgs/Alert"
import NotificationDot from "../svgs/NotificationDot"

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-lg bg-white px-9 py-[15px] sm:px-8">
      <p className="text-base">Profile</p>
      <div className="flex items-center gap-2 md:gap-6">
        <div className="relative rounded-lg bg-[#F5F8FACC] p-2">
          <Alert />
          <NotificationDot className="absolute end-2 top-2" />
        </div>
        <div className="h-6 w-[1px] bg-black/20"></div>
        <div className="flex gap-2">
          <div className="flex flex-col">
            <p className=" text-xs font-medium text-[#A1A5B7]">Hello</p>
            <p className=" text-xs font-medium ">Maidany</p>
          </div>
          <Image width={32} height={32} alt="maidany" className="h-8 w-8 rounded-lg" src={profilePic} />
        </div>
      </div>
    </div>
  )
}

export default Header
