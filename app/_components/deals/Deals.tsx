"use client"
import React from "react"
import { salesData } from "app/_mocks/chartsData"
import BarChartWith2Lines from "../barChartWith2Lines/BarChartWith2Lines"
import ChartItemsListing from "../chartItemsListing/ChartItemsListing"
import CircleProgressChart from "../circleProgressChart/CircleProgressChart"
import MyDealsSection from "../myDealsSection/MyDealsSection"
import SectionHeader from "../sectionHeader/SectionHeader"
import SectionWrapper from "../sectionWrapper/SectionWrapper"
import DiscountIcon from "../svgs/DiscountIcon"
import YearQuarterPicker from "../yearQuarterPicker/YearQuarterPicker"

const circleChartData = [
  { name: "Contract", value: 12, color: "#9FB5C1" },
  { name: "Reservation", value: 5, color: "#D2DCE0" },
  { name: "EOI", value: 8, color: "#E6EEF1" },
]
const totalDeals = circleChartData.reduce((total, item) => total + item.value, 0)

const Deals = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionWrapper>
        <SectionHeader title="total sales" subtitle="200.000.000 EGP" rightContent={<YearQuarterPicker />} />
        <BarChartWith2Lines data={salesData} />
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          title="total sales"
          subtitle="789,598,000 EGP"
          icon={<DiscountIcon className="h-6 w-6" />}
          rating={{
            value: 2.75,
            total: 5,
          }}
        />
        <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row">
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
      <MyDealsSection />
    </div>
  )
}

export default Deals
