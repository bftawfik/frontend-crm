"use client"
import React from "react"
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

interface YearQuarterPickerProps {
  year?: number
  quarter?: number
  setYear: React.Dispatch<React.SetStateAction<number | undefined>>
  setQuarter: React.Dispatch<React.SetStateAction<number | undefined>>
}
const YearQuarterPicker = ({ year, quarter, setYear, setQuarter }: YearQuarterPickerProps) => {
  return (
    <div className="relative flex min-w-[164px] items-center  justify-stretch rounded-md border border-[#eff2f5] p-1">
      <DropdownList
        list={years}
        title="Years"
        selectedValue={year}
        onSelect={setYear}
        className="flex  shrink-0 items-center gap-1 rounded-md bg-[#F5F8FA] py-2 pl-4 pr-3  text-sm font-medium text-[#5e6278] focus-within:outline-none"
      />
      <DropdownList
        list={quarters}
        title="Quarters"
        selectedValue={quarter || 0}
        onSelect={setQuarter}
        className="box-border flex shrink-0 items-center gap-1 rounded-md px-4 py-2  text-sm font-medium text-[#5e6278] focus-within:outline-none"
        enabled={!!year}
      />
    </div>
  )
}

export default YearQuarterPicker
