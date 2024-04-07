import React from "react"

interface PersonalInfoCardProps {
  label: string
  value: string
}
const PersonalInfoCard = ({ label, value }: PersonalInfoCardProps) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl  border border-[#E8EBEF] bg-[#F5F8FA] px-4  py-3 text-xs font-normal">
      <p className="text-[#A7B2BE]">{label}</p>
      <p>{value}</p>
    </div>
  )
}

export default PersonalInfoCard
