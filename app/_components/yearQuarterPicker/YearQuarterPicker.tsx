"use client"
import React, { useState } from "react"
import { DropdownList } from "../dropdownList/DropdownList"

const years = [
  { id: 2020, title: "2020" },
  { id: 2021, title: "2021" },
  { id: 2022, title: "2022" },
  { id: 2023, title: "2023" },
  { id: 2024, title: "2024" },
]

const quarters = [
  { id: 0, title: "All" },
  { id: 1, title: "Q1" },
  { id: 2, title: "Q2" },
  { id: 3, title: "Q3" },
  { id: 4, title: "Q4" },
]

const YearQuarterPicker = () => {
  const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined)
  const [selectedQuarter, setSelectedQuarter] = useState<number | undefined>(undefined)

  return (
    <div className="relative flex rounded-md border border-[#eff2f5] p-1">
      <DropdownList
        list={years}
        title="Years"
        selectedValue={selectedYear}
        onSelect={setSelectedYear}
        className="flex gap-1 rounded-md bg-[#F5F8FA] p-2 text-sm font-medium text-[#5e6278] focus-within:outline-none"
      />
      <DropdownList
        list={quarters}
        title="Quarters"
        selectedValue={selectedQuarter}
        onSelect={setSelectedQuarter}
        className="flex gap-1 rounded-md px-4 py-2 text-sm font-medium text-[#5e6278] focus-within:outline-none"
        enabled={!!selectedYear}
      />
    </div>
  )
}

export default YearQuarterPicker
