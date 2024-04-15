"use client"
import React, { useState } from "react"
import { salesData } from "app/_mocks/chartsData"
import { dealsData } from "app/_mocks/dealsData"
import MyDealsSection from "../myDealsSection/MyDealsSection"
import Stage from "../stage/Stage"
import TotalSale from "../totalSale/TotalSale"

const circleChartData: ChartItem[] = [
  { name: "Contract", value: 12, color: "#9FB5C1" },
  { name: "Reservation", value: 5, color: "#D2DCE0" },
  { name: "EOI", value: 8, color: "#E6EEF1" },
]
const totalDeals = circleChartData.reduce((total, item) => total + item.value, 0)

const Deals = () => {
  const [selectedYear, setSelectedYear] = useState<number | undefined>(2024)
  const [selectedQuarter, setSelectedQuarter] = useState<number | undefined>(0)
  const [salesSelectedYear, setSalesSelectedYear] = useState<number | undefined>(2024)
  const [salesSelectedQuarter, setSalesSelectedQuarter] = useState<number | undefined>()
  return (
    <div className="flex flex-col gap-4">
      <TotalSale
        title="total sales"
        subtitle="200.000.000 EGP"
        year={salesSelectedYear}
        setYear={setSalesSelectedYear}
        quarter={salesSelectedQuarter}
        setQuarter={setSalesSelectedQuarter}
        data={salesData}
      />
      <Stage title="Stage" totalDeals={totalDeals} data={circleChartData} />
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
