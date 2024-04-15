import React from "react"
import DealCard from "../dealCard/DealCard"
import SectionWrapper from "../sectionWrapper/SectionWrapper"
import YearQuarterPicker from "../yearQuarterPicker/YearQuarterPicker"

export interface DealItem {
  name: string
  transactionDate: string
  status: string
  amount: number
  quarter: number
  year: number
}
interface MyDealsSectionProps {
  title: string
  dealsData: DealItem[]
  year?: number
  quarter?: number
  setYear: React.Dispatch<React.SetStateAction<number | undefined>>
  setQuarter: React.Dispatch<React.SetStateAction<number | undefined>>
}
const MyDealsSection = ({ title, dealsData, year, setYear, quarter, setQuarter }: MyDealsSectionProps) => {
  const activeYearDeals = dealsData.filter((item) => item.year === year)
  const first4Deals = activeYearDeals.slice(0, 4)
  const visibleDeals = quarter === 0 ? first4Deals : activeYearDeals.filter((item) => item.quarter === quarter)

  return (
    <SectionWrapper>
      <div className="flex w-full items-center justify-between">
        <p className="text-sm font-normal">{title}</p>
        <YearQuarterPicker year={year} quarter={quarter} setYear={setYear} setQuarter={setQuarter} />
      </div>
      {visibleDeals.length ? (
        <div className="grid  w-full gap-4 lg:grid-cols-2">
          {visibleDeals.map((data, ndx) => (
            <DealCard key={ndx} {...data} />
          ))}
        </div>
      ) : (
        "No deals to view in this period"
      )}

      {activeYearDeals.length > 4 ? (
        <button
          onClick={() => console.log("see more")}
          className="self-center pt-4 text-sm font-normal capitalize outline-none"
        >
          See more
        </button>
      ) : null}
    </SectionWrapper>
  )
}

export default MyDealsSection
