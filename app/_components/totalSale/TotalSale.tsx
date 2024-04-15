import React from "react"
import CustomizedBarChart from "../customizedBarChart/CustomizedBarChart"
import SectionHeader from "../sectionHeader/SectionHeader"
import SectionWrapper from "../sectionWrapper/SectionWrapper"
import YearQuarterPicker from "../yearQuarterPicker/YearQuarterPicker"

interface StageProps {
  title: string
  subtitle: string
  year?: number
  setYear: React.Dispatch<React.SetStateAction<number | undefined>>
  quarter?: number
  setQuarter: React.Dispatch<React.SetStateAction<number | undefined>>
  data: BarChartItem[]
}
export default function Stage({ title, subtitle, year, setYear, quarter, setQuarter, data }: StageProps) {
  return (
    <SectionWrapper>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        rightContent={<YearQuarterPicker year={year} setYear={setYear} quarter={quarter} setQuarter={setQuarter} />}
      />
      <CustomizedBarChart data={data} />
    </SectionWrapper>
  )
}
