import React from "react"
import { dealsData } from "app/_mocks/dealsData"
import DealCard from "../dealCard/DealCard"
import SectionHeader from "../sectionHeader/SectionHeader"
import SectionWrapper from "../sectionWrapper/SectionWrapper"
import YearQuarterPicker from "../yearQuarterPicker/YearQuarterPicker"

const MyDealsSection = () => {
  const visibleDeals = dealsData.slice(0, 4)

  return (
    <SectionWrapper>
      <div className="flex w-full items-center justify-between">
        <p className="text-sm font-normal">My Deals</p>
        <YearQuarterPicker />
      </div>
      <div className="grid  w-full gap-4 lg:grid-cols-2">
        {visibleDeals.map((data, ndx) => (
          <DealCard key={ndx} {...data} />
        ))}
      </div>

      <button
        onClick={() => console.log("see more")}
        className="self-center pt-4 text-sm font-normal capitalize outline-none"
      >
        See more
      </button>
    </SectionWrapper>
  )
}

export default MyDealsSection
