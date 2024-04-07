import Image from "next/image"
import React from "react"
import { Separator } from "components/ui/separator"
import profilePic from "../../../profile.png"
import PersonalInfoCard from "../personalInfoCard/PersonalInfoCard"

const ProfileSection = () => {
  const personalInfo = [
    { label: "email", value: "Mohamed.Midany@theaddressholding.com" },
    { label: "Mobile number", value: "+20 102 345 7654" },
    { label: "Employe Code", value: "1123-AD23" },
    { label: "Department", value: "Techonology" },
    { label: "Franchise", value: "Mohamed Reda" },
    { label: "Hiring Date", value: "15 October, 2022" },
    { label: "Company", value: "Estatebook" },
  ]
  return (
    <div className="box-border flex h-full w-[362px] shrink-0 flex-col items-center gap-8 overflow-y-auto rounded-xl bg-white px-6 py-8">
      <div className="flex flex-col items-center gap-3">
        <Image src={profilePic} alt="userImage" width={84} height={84} className="rounded-full" />
        <div className=" flex  flex-col items-center gap-2">
          <p className="text-base font-semibold">Muhammed Abdelhamid Midany</p>
          <div className="w-28 rounded-[6px] border border-[#00BC70] bg-[#00BC7026] py-1 text-center text-xs  font-medium text-[#00BC70]">
            Ux designer
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-around rounded-xl border border-[#E8EBEF]  p-3">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-normal text-[#7F8DA6]">Total Sales</p>
          <p className="text-sm font-semibold">
            480,000,000 <span className="text-xs font-normal">EGP</span>
          </p>
        </div>
        <Separator orientation="vertical" className="h-6 bg-black/20 " />
        <div className="flex flex-col gap-2">
          <p className="text-xs font-normal text-[#7F8DA6]">Total Deals</p>
          <p className="text-sm font-semibold">12</p>
        </div>
      </div>
      <div className="w-full space-y-4">
        <p className="text-xs font-medium">Personal Info</p>
        <div className="space-y-[10px]">
          {personalInfo.map(({ label, value }, ndx) => (
            <PersonalInfoCard key={ndx} label={label} value={value} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
