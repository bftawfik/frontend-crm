import React from "react"
import ChartItemsListing from "../chartItemsListing/ChartItemsListing"
import CircleProgressChart from "../circleProgressChart/CircleProgressChart"
import SectionWrapper from "../sectionWrapper/SectionWrapper"
import SimpleSectionHeader from "../simpleSectionHeader/SimpleSectionHeader"

interface StageProps {
  title: string
  totalDeals: number
  data: ChartItem[]
}
export default function Stage({ title, totalDeals, data }: StageProps) {
  return (
    <SectionWrapper>
      <SimpleSectionHeader title={title} />
      <div className="flex w-full flex-col items-center justify-between gap-4 xl:flex-row xl:gap-10">
        <ChartItemsListing chartData={data} />
        <CircleProgressChart
          data={data}
          label={
            <div className="flex flex-col items-center justify-center gap-1 ">
              <p className="text-left text-sm text-[#b5b5c3]">Total Deals</p>
              <span className="text-left text-lg font-bold text-black">{totalDeals}</span>
            </div>
          }
        />
      </div>
    </SectionWrapper>
  )
}
