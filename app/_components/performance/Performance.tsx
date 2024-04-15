import React from "react"
import PerformanceMilestoneProgressBar from "../performanceMilestoneProgressBar copy/PerformanceMilestoneProgressBar"
import SectionHeader from "../sectionHeader/SectionHeader"
import SectionWrapper from "../sectionWrapper/SectionWrapper"

const Performance = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionWrapper className="flex w-full flex-col gap-[30px] rounded-xl border-0 bg-white px-8 py-[18px] shadow-main">
        <SectionHeader title="total Performance" subtitle="200.000 EGP" />
        <PerformanceMilestoneProgressBar
          readyToCollect={35000}
          total={200000}
          points={[50000, 50000, 50000]}
          unit="EGP"
        />
      </SectionWrapper>
    </div>
  )
}

export default Performance
