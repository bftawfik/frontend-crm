import React, { FC } from "react"
import { Trending } from "../svgs"

interface TotalActivitiesCardProps {
  title: string
  amount: string
  percentage: string
  upFrom: string
  icon: FC<SvgProps>
}
const TotalActivitiesCard = ({ title, amount, percentage, upFrom, icon }: TotalActivitiesCardProps) => {
  const VIcon = icon
  return (
    <div className="flex h-[161px] w-full flex-col justify-between rounded-xl bg-white px-6 pb-4 pt-6">
      <div className="flex justify-between ps-4">
        <div className="flex flex-col gap-2 ">
          <p className=" text-sm capitalize text-[#B5B5C3]">{title}</p>
          <p className="text-xl font-bold">{amount}</p>
        </div>
        <div className=" rounded-xl bg-[#E5E5E5]/30 p-4">
          <VIcon />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Trending />
        <p className="capitalize text-[#606060]">
          <span className="text-[#00B69B]"> {percentage}% </span>
          Up From {upFrom}
        </p>
      </div>
    </div>
  )
}

export default TotalActivitiesCard
