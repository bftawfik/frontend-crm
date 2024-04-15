import React from "react"
import CustomizedBarChart from "../customizedBarChart/CustomizedBarChart"
import SectionWrapper from "../sectionWrapper/SectionWrapper"
import SimpleSectionHeader from "../simpleSectionHeader/simpleSectionHeader"
import YearQuarterPicker from "../yearQuarterPicker/YearQuarterPicker"

interface TotalSaleProps {
  title: string
  subtitle: string
  year?: number
  setYear: React.Dispatch<React.SetStateAction<number | undefined>>
  quarter?: number
  setQuarter: React.Dispatch<React.SetStateAction<number | undefined>>
  data: BarChartItem[]
}
export default function TotalSale({ title, subtitle, year, setYear, quarter, setQuarter, data }: TotalSaleProps) {
  return (
    <SectionWrapper>
      <SimpleSectionHeader
        title={title}
        subtitle={subtitle}
        rightContent={<YearQuarterPicker year={year} setYear={setYear} quarter={quarter} setQuarter={setQuarter} />}
      />
      <CustomizedBarChart data={data} />
    </SectionWrapper>
  )
}
