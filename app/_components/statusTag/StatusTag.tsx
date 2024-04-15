import React from "react"
interface StatusTagProps {
  label: string
}
const StatusTag = ({ label }: StatusTagProps) => {
  return (
    <div className="w-28 rounded-[6px] border border-[#00BC70] bg-[#00BC7026] py-1 text-center text-xs  font-medium text-[#00BC70]">
      {label}
    </div>
  )
}

export default StatusTag
