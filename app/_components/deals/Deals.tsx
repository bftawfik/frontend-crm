"use client"
import React, { useState } from "react"
import { salesData } from "app/_mocks/chartsData"
import { dealsData } from "app/_mocks/dealsData"
import ChartItemsListing from "../chartItemsListing/ChartItemsListing"
import CircleProgressChart from "../circleProgressChart/CircleProgressChart"
import CustomizedBarChart from "../customizedBarChart/CustomizedBarChart"
import MyDealsSection from "../myDealsSection/MyDealsSection"
import SectionHeader from "../sectionHeader/SectionHeader"
import SectionWrapper from "../sectionWrapper/SectionWrapper"
import YearQuarterPicker from "../yearQuarterPicker/YearQuarterPicker"

const circleChartData = [
  { name: "Contract", value: 12, color: "#9FB5C1" },
  { name: "Reservation", value: 5, color: "#D2DCE0" },
  { name: "EOI", value: 8, color: "#E6EEF1" },
]
const totalDeals = circleChartData.reduce((total, item) => total + item.value, 0)

const Deals = () => {
  const [selectedYear, setSelectedYear] = useState<number | undefined>(2024)
  const [selectedQuarter, setSelectedQuarter] = useState<number>(0)
  const [salesSelectedYear, setSalesSelectedYear] = useState<number | undefined>(undefined)
  const [salesSelectedQuarter, setSalesSelectedQuarter] = useState<number>(0)
  return (
    <div className="flex flex-col gap-4">
      <SectionWrapper>
        <SectionHeader
          title="total sales"
          subtitle="200.000.000 EGP"
          subtitleClassName="text-lg font-bold"
          rightContent={
            <YearQuarterPicker
              year={salesSelectedYear}
              setYear={setSalesSelectedYear}
              quarter={salesSelectedQuarter}
              setQuarter={setSalesSelectedQuarter}
            />
          }
        />
        <CustomizedBarChart data={salesData} />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader title="Stage" titleClassName="text-sm text-black" />
        <div className="flex w-full flex-col items-center justify-between gap-4 xl:gap-10 xl:flex-row">
          <ChartItemsListing chartData={circleChartData} />
          <CircleProgressChart
            data={circleChartData}
            label={
              <div className="flex flex-col items-center justify-center gap-1 ">
                <p className="text-left text-sm text-[#b5b5c3]">Total Deals</p>
                <span className="text-left text-lg font-bold text-black">{totalDeals}</span>
              </div>
            }
          />
        </div>
      </SectionWrapper>
      <MyDealsSection
        title="MyDeals"
        dealsData={dealsData}
        year={selectedYear}
        setYear={setSelectedYear}
        quarter={selectedQuarter}
        setQuarter={setSelectedQuarter}
      />
    </div>
  )
}

export default Deals
